<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>UUID生成</title>
    <style>
        body {
            background-color: #000;
            text-align: center;
            color: #fff;
        }
        
        .guid {
            margin: 250px auto;
            font-family: monospace;
            font-size: 30px;
            color: aqua;
        }

    </style>
</head>

<body>
    <div id="guid" class="guid">
        <?php
include_once('guid.php');
echo create_guid()."<br>";
?>
    </div>
</body>

</html>
