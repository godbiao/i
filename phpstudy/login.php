<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>登录用户</title>
</head>

<body align="center">
    <form action="login.php" method="post">
        <input type="text" name="name"><br>
        <input type="password" name="password"><br>
        <input type="submit" name="sub" value="添加用户">

    </form>
    <?php
session_start();    
if(!$_POST['sub']){
         die();
    }
    
$con = new mysqli("localhost", "root", "root", "user");
/* check connection */
if ($con->connect_errno) {
    printf("Connect failed: %s\n", $con->connect_error);
    exit();
}else{
   // echo "<br>----------<br>数据库连接成功";
}

$name = $_POST['name'];
$password = md5($_POST['password']);
    
//$sql = "INSERT INTO admin_user (name,password) VALUES ('$name','$password')";
$sql2 = "SELECT * from admin_user where name = '$name'";
$result = mysqli_query($con,$sql2);
$row = mysqli_fetch_array($result,MYSQLI_BOTH);
    
if ($row['password']==$password) {
    print_r($row);
    echo "<br>----------<br>登陆成功!";
    $_SESSION['login']=1;
    
}else{
    //$con->query($sql);
    echo "<br>----------<br>登陆失败";
}    
    
/* close connection */
$con->close();
?>
</body>

</html>
