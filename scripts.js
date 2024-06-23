function openPdf(pdfUrl) {
    window.open(pdfUrl, '_blank');
}

// Traductions pour différentes langues
const translations = {
    en: {
        portfolio_title: "Gloire_Portfolio",
        projects: "Projects",
        info: "Information",
        cv: "CV",
        name: "Gloire BAYOUNDOULA",
        description: "As a web semantics specialist, my expertise focuses on enhancing web data and content to simplify understanding and promote interoperability between machines and users. I am responsible for structuring data to make it more accessible, understandable, and usable by modern technologies such as search engines, virtual assistants, and intelligent applications. With in-depth knowledge of web semantic standards and technologies like RDF, OWL, and JSON-LD, my goal is to design enhanced user experiences and develop more efficient IT solutions.",
        phone: "Phone: +33"
    },
    fr: {
        portfolio_title: "Gloire_Portfolio",
        projects: "Projets",
        info: "Informations",
        cv: "CV",
        name: "Gloire BAYOUNDOULA",
        description: "En qualité de spécialiste de la sémantique web, mon domaine d'expertise se concentre sur l'amélioration des données et du contenu web afin de simplifier la compréhension et de favoriser l'interopérabilité entre les machines et les utilisateurs. Je suis responsable de la structuration des données afin de les rendre plus accessibles, compréhensibles et utilisables par les technologies modernes telles que les moteurs de recherche, les assistants virtuels et les applications intelligentes. Grâce à ma connaissance approfondie des normes et des technologies du web sémantique comme RDF, OWL et JSON-LD, mon objectif est de concevoir des expériences utilisateur améliorées et de développer des solutions informatiques plus performantes.",
        phone: "Téléphone: +33"
    },
    ar: {
        portfolio_title: "جلوار_بورتفوليو",
        projects: "المشاريع",
        info: "معلومات",
        cv: "السيرة الذاتية",
        name: "جلوري بايونديولا",
        description: "كمتخصص في دلالات الويب، يركز مجالي على تحسين البيانات والمحتوى على الويب لتبسيط الفهم وتعزيز التوافق بين الآلات والمستخدمين. أنا مسؤول عن هيكلة البيانات لجعلها أكثر وصولاً وفهمًا واستخدامًا من قبل التقنيات الحديثة مثل محركات البحث والمساعدين الافتراضيين والتطبيقات الذكية. بفضل معرفتي العميقة بمعايير وتقنيات دلالات الويب مثل RDF و OWL و JSON-LD، هدفي هو تصميم تجارب مستخدم محسنة وتطوير حلول تكنولوجيا المعلومات الأكثر كفاءة.",
        phone: "الهاتف: +33"
    }
};

// Fonction pour traduire la page en une langue spécifiée
function translatePage(lang) {
    // Récupérer tous les éléments avec l'attribut data-translate-key
    let elements = document.querySelectorAll('[data-translate-key]');

    // Parcourir tous les éléments et traduire leur texte
    elements.forEach(element => {
        let key = element.getAttribute('data-translate-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Mettre à jour la langue des sous-titres de la vidéo
    changeVideoLanguage(lang);
}

function changeVideoLanguage(lang) {
    // Mettre à jour l'URL de la vidéo avec la langue des sous-titres
    const videoSrc = `https://www.youtube.com/embed/orgu-5b-LdQ?si=qyN0nO05_VjM4BkL&cc_lang_pref=${lang}&cc_load_policy=1`;
    document.getElementById('youtube-video').src = videoSrc;
}

// Variable pour stocker l'instance du lecteur YouTube
let player;

// Fonction appelée lorsque l'API YouTube est prête
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Fonction appelée lorsque le lecteur est prêt
function onPlayerReady(event) {
    // Ne rien faire ici, nous allons mettre à jour la langue des sous-titres manuellement
}
