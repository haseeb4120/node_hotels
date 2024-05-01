<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="5th.php" method="post">
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
function un()
{
    $users=$_POST["name"];
    $users=trim($users);
    $users=strip_tags($users);
    $users=filter_input(INPUT_POST,"$users",FILTER_SANITIZE_STRING);
    echo $users;
}
if(isset($_POST["submit"]))
{
    $user=$_POST["name"];
    $pass=$_POST["pass"];
    if(empty($user && $pass))
    {
        echo "Enter user name and Password";
    }
    else
    {
        $pass=filter_input(INPUT_POST,"pass",FILTER_SANITIZE_NUMBER_INT);
        $user=un();
        $pass=filter_input(INPUT_POST,"pass",FILTER_VALIDATE_INT);
        echo $pass;
    }

}
?>