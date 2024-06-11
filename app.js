// Function to load the language file
async function loadLanguage(lang) {
    const response = await fetch(`languages/${lang}.json`);
    return response.json();
}

// Function to set the language
async function setLanguage(lang) {
    const translations = await loadLanguage(lang);
    document.documentElement.lang = lang;
    document.title = translations.title;
    document.getElementById('title').textContent = translations.title;
    document.getElementById('welcome').textContent = translations.welcome;
    document.getElementById('about').textContent = translations.about;
    document.getElementById('contact').textContent = translations.contact;

    // Save language preference
    localStorage.setItem('lang', lang);

    // Adjust text direction for RTL languages
    document.body.style.direction = (lang === 'ar') ? 'rtl' : 'ltr';
}

// Function to initialize the language
function initializeLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get('lang') ||
               localStorage.getItem('lang') ||
               'fr'; // Set French as the default language

    const supportedLangs = ['fr', 'ar', 'en'];
    if (!supportedLangs.includes(lang)) {
        lang = 'fr'; // Default to French if the language is not supported
    }
    setLanguage(lang);
}

// Initialize the language on page load
window.addEventListener('load', initializeLanguage);
