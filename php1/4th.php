
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="4th.php" method="post">
        <h1>Form</h1>
        <label for="name">NAME</label>
        <input type="text" name="name" placeholder="e.g HASEEB"/><br><hr>
        <label for="pass">PASSWORD</label>
        <input type="password" name="pass"  placeholder="***"/><br><hr>
        <input type="submit" name="submit" value="submit"><br><hr>
    </form>

</body>
</html>
<?php
if(isset($_POST["submit"])){
$user=$_POST["name"];
$pass=$_POST["pass"];
if(empty($user && $pass))
{
    echo "Enter user name plz !!! ";

}
else
{
    echo $user;
    echo $pass;
}
}
?>