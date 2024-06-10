<?php
$lang = $_SESSION['lang'];
$content = [
    'fr' => [
        'title' => 'Mon Portfolio',
        'welcome' => 'Bienvenue sur mon portfolio'
    ],
    'en' => [
        'title' => 'My Portfolio',
        'welcome' => 'Welcome to my portfolio'
    ],
    'ar' => [
        'title' => 'محفظتي',
        'welcome' => 'مرحبًا بكم في محفظتي'
    ]
];
?>

<h1><?php echo $content[$lang]['title']; ?></h1>
<p><?php echo $content[$lang]['welcome']; ?></p>
