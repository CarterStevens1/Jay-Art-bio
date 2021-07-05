<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles/style.css" />
    <link rel="stylesheet" href="styles/contact.css" media="all"/>
    <script
      src="https://kit.fontawesome.com/dc7bf59d0f.js"
      crossorigin="anonymous"
    ></script>

    <title>Jelle Vermulen</title>
  </head>
  <body>
    <?php include('header.php'); ?>

    <form action="mail.php" method="POST">
<p>Name</p> <input type="text" name="name">
<p>Email</p> <input type="text" name="email">
<p>Message</p><textarea name="message" rows="6" cols="25"></textarea><br />
<input type="submit" value="Send"><input type="reset" value="Clear">
</form>

  </body>