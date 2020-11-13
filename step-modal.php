<?if(! @ include($_SERVER['DOCUMENT_ROOT']."/bitrix/modules/main/include/prolog_before.php"));
$step =  $_POST["step"];
$city =  $_POST["city"];
if($step == 1){ // шаг 1 - выбор города
	echo json_encode(array('status' => 0,'step'=>'Шаг '.$step,'city'=>'Город'.$city));
} else if($step == 2){ // шаг 2 - выбор доставки
	echo json_encode(array('status' => 0,'step'=>'Шаг '.$step,'city'=>'Город'.$city));
} else if($step == 3){ // шаг 3 - ввод адреса
	echo json_encode(array('status' => 0,'step'=>'Шаг '.$step,'city'=>'Город'.$city));
}
?>
