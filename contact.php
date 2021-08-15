<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="styles/style.css" />
    <link rel="stylesheet" href="styles/contact.css" />
    <script
      src="https://kit.fontawesome.com/dc7bf59d0f.js"
      crossorigin="anonymous"
    ></script>

    <title>Jelle Vermulen</title>
  </head>
  <body>
    <?php include('header.php'); ?>

    <div class="contact-form">
      <h2 class="contact">CONTACT US</h2>
      <h3>Contact today to find out more about what i can do for you and for personalised prints.</h3>
      <form action="mail.php" method="POST">
        <input
          name="name"
          type="text"
          class="feedback-input"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          class="feedback-input"
          placeholder="Email"
        />
        <textarea
          name="message"
          type="text"
          class="feedback-input"
          placeholder="Comment"
        ></textarea>
        <input type="submit" value="SUBMIT" name="submit"/>
      </form>
    </div>
    <?php include('footer.php'); ?>
    <script src="scripts/script.js"></script>
  </body>
</html>
