<?php
session_start();
if($_SESSION['login']==1){
    echo "已经登录";
   session_destroy();
   // header("location:login.php"); 
}
?>
