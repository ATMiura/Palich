let gulp = require('gulp');
let gulpLoadPlugins = require('gulp-load-plugins');
let yargs = require('yargs');
let path = require('path');
let webpackConfig = require('./webpack.config');

let emittyPug;
let errorHandler;

let argv = yargs.default({
	cache: true,
	debug: true,
	minify: false,
	minifyHtml: null,
	minifyCss: null,
	minifyJs: null,
	minifySvg: null,
	notify: true,
	open: true,
	port: 3000,
	throwErrors: false,
}).argv;

argv.minify = !!argv.minify;
argv.minifyHtml = argv.minifyHtml !== null ? !!argv.minifyHtml : argv.minify;
argv.minifyCss = argv.minifyCss !== null ? !!argv.minifyCss : argv.minify;
argv.minifyJs = argv.minifyJs !== null ? !!argv.minifyJs : argv.minify;
argv.minifySvg = argv.minifySvg !== null ? !!argv.minifySvg : argv.minify;

if (argv.minifyJs) {
	webpackConfig.mode = 'production';
} else {
	webpackConfig.mode = webpackConfig.mode || 'development';
}

let $ = gulpLoadPlugins({
	overridePattern: false,
	pattern: [
		'autoprefixer',
		'browser-sync',
		'cssnano',
		'emitty',
		'postcss-reporter',
		'postcss-scss',
		'uglifyjs-webpack-plugin',
		'vinyl-buffer',
		'webpack',
		'webpack-stream',
	],
	scope: [
		'dependencies',
		'devDependencies',
		'optionalDependencies',
		'peerDependencies',
	],
});

if (argv.throwErrors) {
	errorHandler = false;
} else if (argv.notify) {
	errorHandler = $.notify.onError('<%= error.message %>');
} else {
	errorHandler = null;
}

function svgoConfig(minify = argv.minifySvg) {
	return (file) => {
		let filename = path.basename(file.relative, path.extname(file.relative));

		return {
			js2svg: {
				pretty: !minify,
				indent: '\t',
			},
			plugins: [
				{
					cleanupIDs: {
						minify: true,
						prefix: `${filename}-`,
					},
				},
				{
					removeTitle: true,
				},
				{
					removeViewBox: false,
				},
				{
					sortAttrs: true,
				},
			],
		};
	};
}

gulp.task('copy', () => {
	return gulp.src([
		'src/resources/**/*.*',
		'src/resources/**/.*',
		'!src/resources/**/.keep',
	], {
		base: 'src/resources',
		dot: true,
	})
		.pipe($.if(argv.cache, $.newer('build')))
		.pipe($.if(argv.debug, $.debug()))
		.pipe(gulp.dest('build'));
});

gulp.task('images', () => {
	return gulp.src('src/images/**/*.*')
		.pipe($.if(argv.cache, $.newer('build/images')))
		.pipe($.if(argv.debug, $.debug()))
		.pipe(gulp.dest('build/images'));
});

gulp.task('sprites:svg', () => {
	return gulp.src('src/svg/*.svg')
		.pipe($.plumber({
			errorHandler,
		}))
		.pipe($.if(argv.debug, $.debug()))
		.pipe($.svgmin(svgoConfig()))
		.pipe($.svgstore())
		.pipe($.if(!argv.minifySvg, $.replace(/^\t+$/gm, '')))
		.pipe($.if(!argv.minifySvg, $.replace(/\n{2,}/g, '\n')))
		.pipe($.if(!argv.minifySvg, $.replace('?><!', '?>\n<!')))
		.pipe($.if(!argv.minifySvg, $.replace('><svg', '>\n<svg')))
		.pipe($.if(!argv.minifySvg, $.replace('><defs', '>\n\t<defs')))
		.pipe($.if(!argv.minifySvg, $.replace('><symbol', '>\n<symbol')))
		.pipe($.if(!argv.minifySvg, $.replace('></svg', '>\n</svg')))
		.pipe($.rename('sprites.svg'))
		.pipe(gulp.dest('build/images'));
});

gulp.task('pug', () => {
	if (!emittyPug) {
		emittyPug = $.emitty.setup('src/templates/', 'pug', {
			makeVinylFile: true,
		});
	}

	if (!argv.cache) {
		return gulp.src('src/templates/*.pug')
			.pipe($.plumber({
				errorHandler,
			}))
			.pipe($.if(argv.debug, $.debug()))
			.pipe($.pug({
				pretty: argv.minifyHtml ? false : '\t',
			}))
			.pipe(gulp.dest('build'));
	}

	return new Promise((resolve, reject) => {
		emittyPug.scan(global.emittyPugChangedFile).then(() => {
			gulp.src('src/templates/*.pug')
				.pipe($.plumber({
					errorHandler,
				}))
				.pipe(emittyPug.filter(global.emittyPugChangedFile))
				.pipe($.if(argv.debug, $.debug()))
				.pipe($.pug({
					pretty: argv.minifyHtml ? false : '\t',
				}))
				.pipe(gulp.dest('build'))
				.on('end', resolve)
				.on('error', reject);
		});
	});
});

gulp.task('sass', () => {
	return gulp.src([
		'src/sass/*.sass',
		'!src/sass/_*.sass',
	])
		.pipe($.plumber({
			errorHandler,
		}))
		.pipe($.if(argv.debug, $.debug()))
		.pipe($.sourcemaps.init())
		.pipe($.sass().on('error', $.sass.logError))
		.pipe($.postcss([
			argv.minifyCss ?
				$.cssnano({
					autoprefixer: {
						add: true,
						browsers: ['> 0%'],
					},
					calc: true,
					discardComments: {
						removeAll: true,
					},
					zindex: false,
				})
				:
				$.autoprefixer({
					add: true,
					browsers: ['> 0%'],
				}),
		]))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('build/css'));
});

gulp.task('grid', () => {
	return gulp.src([
		'src/grid/*.scss',
		'!src/grid/_*.scss',
	])
		.pipe($.plumber({
			errorHandler,
		}))
		.pipe($.if(argv.debug, $.debug()))
		.pipe($.sourcemaps.init())
		.pipe($.sass().on('error', $.sass.logError))
		.pipe($.postcss([
			argv.minifyCss ?
				$.cssnano({
					autoprefixer: {
						add: true,
						browsers: ['> 0%'],
					},
					calc: true,
					discardComments: {
						removeAll: true,
					},
					zindex: false,
				})
				:
				$.autoprefixer({
					add: true,
					browsers: ['> 0%'],
				}),
		]))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('build/css'));
});

gulp.task('js', () => {
	return gulp.src(webpackConfig.entry)
		.pipe($.plumber({
			errorHandler,
		}))
		.pipe($.webpackStream(webpackConfig))
		.pipe(gulp.dest(webpackConfig.output.path));
});

gulp.task('watch', () => {
	gulp.watch([
		'src/resources/**/*.*',
		'src/resources/**/.*',
	], gulp.series('copy'));

	gulp.watch('src/images/**/*.*', gulp.series('images'));

	gulp.watch('src/svg/*.svg', gulp.series('sprites:svg'));

	gulp.watch('src/templates/**/*.pug', gulp.series('pug'));

	//gulp.watch([
	//	'src/templates/**/*.pug',
	//], {
	//	delay: 0,
	//}, gulp.series('pug'))
	//	.on('all', (event, file) => {
	//		if (event === 'unlink') {
	//			global.emittyPugChangedFile = undefined;
	//		} else {
	//			global.emittyPugChangedFile = file;
	//		}
	//	});

	gulp.watch('src/sass/**/*.s{a,c}ss', gulp.series('sass'));

	gulp.watch('src/grid/**/*.s{a,c}ss', gulp.series('grid'));

	gulp.watch('src/js/**/*.js', gulp.series('js'));
});

gulp.task('serve', () => {
	$.browserSync
		.create()
		.init({
			notify: false,
			open: argv.open,
			port: argv.port,
			files: [
				'./build/**/*',
			],
			server: {
				baseDir: './build'
			},
		});
});

gulp.task('build', gulp.parallel(
	'copy',
	'images',
	'sprites:svg',
	'pug',
	'sass',
	'grid',
	'js'
));

gulp.task('default', gulp.series(
	'build',
	gulp.parallel(
		'watch',
		'serve'
	)
));
