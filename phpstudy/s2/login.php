<?php
session_start();
//连接数据库
$con=new mysqli("localhost","root","root","login");
/* check connection */
if ($con->connect_errno) {
    printf("Connect failed: %s\n", $con->connect_error);
    exit();
}

$username = $_POST['username'];
$password =md5($_POST['password']); 

//查询
//$sql = "select * from login where user = '$username' and password = '$password'";
$sql = "select  password  from login where user = '$username' ";
$result = $con->query($sql);
$row = $result->fetch_array(MYSQLI_BOTH);
if($row[password]==$password){
    $_SESSION['login'] = $username;
    echo "登陆成功";
}else{
    echo "登录失败";
}
$con->close();
?>
    <!DOCTYPE html>
    <html lang="cn">

    <head>
        <meta charset="UTF-8">
        <title>登录</title>
    </head>

    <body>
        <form action="login.php" method="post">
            请输入信息登录
            <br> 账号：
            <input type="text" name="username">
            <br> 密码：
            <input type="password" name="password">
            <input type="submit" name="sub" value="登录">
        </form>
    </body>

    </html>