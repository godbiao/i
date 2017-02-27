<?php
 
//连接数据库
$con=new mysqli("localhost","root","root","login");
/* check connection */
if ($con->connect_errno) {
    printf("Connect failed: %s\n", $con->connect_error);
    exit();
}

//增加用户
$password=md5("admin");
#$sql = "insert into login (user,password) values('admin','$password')";
//删除用户
#$sql = "delete from login where id = 2";
//修改用户
#$sql = "update login set user = 'godbiao' where id = 3";
//查询用户
$sql = "select * from login where id =1";
$result = $con->query($sql);
/* numeric array */
$row = $result->fetch_array(MYSQLI_BOTH);
//print_r($row);
 echo $row['password'];
/**
if ($con->query($sql) == TRUE) {
echo "成功";
} else {
echo "失败" ;
}
**/


$con->close();
?>