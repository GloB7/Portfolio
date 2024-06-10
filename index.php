<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Multilingue</title>
    <style>
        .lang-buttons {
            position: fixed;
            top: 10px;
            right: 10px;
        }
    </style>
</head>
<body>
    <div class="lang-buttons">
        <form method="post" action="">
            <button name="lang" value="fr">🇫🇷</button>
            <button name="lang" value="en">🇬🇧</button>
            <button name="lang" value="ar">🇸🇦</button>
        </form>
    </div>
    <div class="content">
        <?php 
          include("content.php"); 
        ?>
    </div>
</body>
</html>
