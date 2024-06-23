function translatePage(language) {
    // Sélection des éléments à traduire
    const elementsToTranslate = document.querySelectorAll('[data-translate-key]');

    // Définition des traductions par langue
    const translations = {
        en: {
            portfolio_title: "Portfolio",
            projects: "Projects",
            info: "Information",
            cv: "Resume",
            name: "Gloire",
            description: "As a specialist in semantic web, my expertise lies in enhancing web data and content to simplify understanding and promote interoperability between machines and users...",
            phone: "Phone",
            language: "Language"
            // Ajoutez d'autres clés de traduction au besoin
        },
        fr: {
            portfolio_title: "Portfolio",
            projects: "Projets",
            info: "Informations",
            cv: "CV",
            name: "Gloire",
            description: "En qualité de spécialiste de la sémantique web, mon domaine d'expertise se concentre sur l'amélioration des données et du contenu web afin de simplifier la compréhension et de favoriser l'interopérabilité entre les machines et les utilisateurs...",
            phone: "Téléphone",
            language: "Langue"
            // Ajoutez d'autres clés de traduction au besoin
        },
        ar: {
            portfolio_title: "Portfolio",
            projects: "المشاريع",
            info: "معلومات",
            cv: "سيرة ذاتية",
            name: "Gloire",
            description: "بصفتي متخصصًا في الويب الدلالي، تكمن خبرتي في تعزيز بيانات الويب والمحتوى لتبسيط الفهم وتعزيز التوافق بين الآلات والمستخدمين...",
            phone: "هاتف",
            language: "لغة"
            // Ajoutez d'autres clés de traduction au besoin
        }
    };

    // Vérifie si la langue demandée est prise en charge
    if (!(language in translations)) {
        console.error(`Langue non supportée: ${language}`);
        return;
    }

    // Met à jour le texte des éléments traduisibles
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        } else {
            console.warn(`Traduction non trouvée pour la clé: ${key}`);
        }
    });

    // Met à jour la langue des boutons de langue
    const languageButtons = document.querySelectorAll('.language-buttons a');
    languageButtons.forEach(button => {
        button.textContent = translations[language].language;
    });
}


function openPdf(pdfUrl) {
    // Exemple de fonction pour ouvrir un PDF dans une nouvelle fenêtre
    window.open(pdfUrl, '_blank');
}
