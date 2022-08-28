<?php
    define("TITLE", "::Sign UP")


    
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

    <section class="signup__section">
        <h2>Create Account</h2>
        <div class="input__field">
            <form action="signup.php" name="login__form" id="signup__form" method="POST">
                <div>
                    <input type="text" name="first__name" id="" required>
                    <label for="first__name">Enter your first name</label>
                </div>
                <div>
                    <input type="text" name="last__name" id="" required>
                    <label for="last__name">Enter your last name</label>
                </div>
                <div>
                    <input type="email" name="email" id="" required>
                    <label for="email">Enter your email <address></address></label>
                </div>
                <div>
                    <input type="tel" name="phone__number" id="" maxlength="11" minlength="11"required>
                    <label for="phone__number">Phone Number</label>
                </div>
                <div>
                    <input type="password" name="password" id="" minlength= "8" required>
                    <label for="password">Enter Password</label>
                </div>
                <div>
                    <input type="password" name="confirm__password" id="" minlength= "8" required>
                    <label for="confirm__password">Re-Enter Password</label>
                </div>

                <button class="btn btn-create" name="signup__submit">Create Account</button>
                <h5>Already a user? <a href="./login.php">Login</a></h5>
            
            </form>
        </div>
        
    </section>

    <?php

        //get data from form
        $firstname = $_POST['first__name'];
        $lastname = $_POST['last__name'];
        $phonenumber = $_POST['phone__number'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $signup = $_POST['signup__submit'];



        echo $firstname." ".$lastname
    
    ?>
    
</body>
</html>