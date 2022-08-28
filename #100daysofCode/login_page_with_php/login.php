<?php
    define("TITLE", "::Login")

    $email = $_POST['email'];
    $password = $_POST['password'];
    $login = $_POST['login__submit'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo TITLE ?></title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <section class="login__section">
        <br>
        <h2>Create Account</h2>
        <br>
        <div class="input__field" >
            <form action="#" name="login__form" id="login__form" method="POST">
                <div>
                    <input type="email" name="email" id="" required>
                    <label for="email">Enter your email <address></address></label>
                </div>
                <div>
                    <input type="password" name="password" id="" minlength= "8" required>
                    <label for="password">Enter Password</label>
                </div>

                <button class="btn btn-create" name='login__submit'>Create Account</button>
                <h5>New user? <a href="./signup.php">Sign UP</a></h5>\

                <br>
            
            </form>
        </div>
        
    </section>
    
</body>
</html>