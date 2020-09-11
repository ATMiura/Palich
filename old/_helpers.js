$(document).on('change input', '.js-numberOnly', function(){
    if (this.value.match(/[^0-9\s]/g)) {
        this.value = this.value.replace(/[^0-9\s]/g, '')
    }

    return false;
});
