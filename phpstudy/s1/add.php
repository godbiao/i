<?php 
$a = $_POST['a'];
$b = $_POST['b'];
if($a&&$b){
    echo $a+$b;
}else{
    echo '未输入';
}
    
?>