// script.js

// Language switcher functionality
const translations = {
    de: {
        // Navigation
        'nav-about': 'Über mich',
        'nav-gallery': 'Galerie',
        'nav-prices': 'Preise',
        'nav-testimonials': 'Stimmen',
        'nav-contact': 'Kontakt',
        
        // Hero section
        'hero-title': 'Klavierunterricht und Musiktheorie in Kissing',
        'hero-quote': '„Die Musik ist die Sprache der Seele." – Khalil Gibran',
        
        // About section
        'about-title': 'Über mich',
        'about-text-1': 'Meine musikalische Begabung habe ich väterlicherseits geerbt. Bereits im Kindergarten wich ich während der Musikstunden nicht vom Klavier und war regelrecht erstarrt beim Klang der Musik. Die Erzieher empfahlen meinen Eltern eindringlich, mich in eine Musikschule zu schicken – und so geschah es auch. Mein musikalischer Werdegang begann an der Musikschule in Minsk, wo ich – nicht ohne Widerstand – Klavierunterricht erhielt.',
        'about-text-2': 'Mit besonderem Stolz blicke ich auf meine Studienzeit am Staatlichen Musikgymnasium-Kolleg der Belarussischen Staatlichen Musikakademie zurück. Dort studierte ich im Fachbereich „Musiktheorie".',
        'about-text-3': 'Die folgenden fünf Jahre verbrachte ich an der Belarussischen Staatlichen Musikakademie, wo ich das Studium der Fachrichtung „Kunstwissenschaft (Musikwissenschaft)" absolvierte. Während dieser Zeit nahm ich regelmäßig an Wettbewerben für wissenschaftliche Arbeiten von Hochschulstudenten in Belarus teil. Einige meiner Projekte wurden dabei mit Preisen ausgezeichnet.',
        'about-text-4': 'Um mein Fachwissen zu vertiefen, habe ich mich zum Magisterstudium an der Weißrussischen Staatlichen Musikakademie entschlossen. Dieses habe ich im Jahr 2013 mit der Note 1,7 (entspricht dem Studium auf Masterebene) erfolgreich abgeschlossen.',
        'about-text-5': 'Nach meiner Ankunft in Deutschland entwickelte sich bei mir ein großes Interesse an Kirchenmusik. Daraufhin entschied ich mich, den C-Kurs für Kirchenmusiker im Bereich Chorleitung und Orgelspiel in Augsburg zu absolvieren. Diese Erfahrung sehe ich als eine wertvolle Bereicherung, da sie mir neue Seiten meines Berufs eröffnet hat.',
        'about-text-6': 'Die Hauptaufgabe meiner Lehrtätigkeit ist es, bei meinen Schülern die Liebe zur Musik und den Spaß am Lernen zu fördern. Im Mittelpunkt steht dabei, die Motivation zum Üben aufrechtzuerhalten, durch Erfolge zu steigern und gemeinsam neue musikalische Werke zu entdecken. Dabei gestalte ich den Unterricht ganz individuell, denn mein Ziel ist immer dasselbe: Musik als eine universelle Sprache zu verstehen, kreative Visionen zu entwickeln, Freude beim Üben und Vorspielen zu erleben und sich selbst – auch auf körperlicher Ebene – besser kennenzulernen.',
        'about-text-7': 'Besonders freue ich mich darüber, dass die Kinder und Erwachsene beim Klavierspielen große Freude haben. Sie sind mit Begeisterung dabei, entdecken die Welt der Töne und entwickeln eine natürliche Liebe zum Instrument. Es ist schön zu sehen, wie sie mit Neugier und Spaß ihre Fähigkeiten erweitern und immer wieder neue musikalische Wege erkunden.',
        
        // Gallery section
        'gallery-title': 'Galerie',
        'gallery-qualifications': 'Meine Qualifikationen',
        'gallery-qualifications-desc': 'Mein Abschlusszertifikat des C-Kurses für Kirchenmusiker im Bereich Chorleitung und Orgelspiel in Augsburg',
        'gallery-church-music': 'Leistung',
        'gallery-church-music-desc': 'Meine Leidenschaft für Kirchenmusik und Orgelspiel',
        'gallery-organ-playing': 'Orgelspiel',
        'gallery-organ-playing-desc': 'Ein Beispiel meines Orgelspiels',
        'gallery-teaching': 'Unterricht mit Schülern',
        'gallery-teaching-desc': 'Zusammen mit meinen Schülern nach dem Konzert',
        'gallery-student-1': 'Schüler Vorspiel',
        'gallery-student-1-desc': 'Ein Schüler zeigt sein Können am Klavier',
        'gallery-student-2': 'Schüler Vorspiel',
        'gallery-student-2-desc': 'Weiterer Schüler beim Vorspielen',
        
        // Prices section
        'prices-title': 'Preise',
        'prices-individual': 'Einzelstunden',
        'prices-packages': 'Pakete',
        'prices-theory': 'Theoriestunde',
        'prices-30min': '30 Min – 25 €',
        'prices-45min': '45 Min – 35 €',
        'prices-60min': '60 Min – 45 €',
        'prices-theory-45min': 'Theoriestunde (45 Min) – 45 €',
        'prices-package-4x45': '4×45 Min – 135 €',
        'prices-package-5x45': '5×45 Min – 165 €',
        'prices-package-4x30': '4×30 Min – 95 €',
        'prices-home-visit': 'Hausbesuch ab 45 Minuten möglich, Anfahrt bis 30 €/Monat',
        
        // Testimonials section
        'testimonials-title': 'Was meine Schüler sagen',
        'testimonial-1': '„Der Unterricht bei Frau Erhard ist sehr einfühlsam und motivierend. Meine Tochter freut sich jede Woche auf die Klavierstunde!"',
        'testimonial-1-author': '– Martina K., Mutter einer Schülerin',
        'testimonial-2': '„Dank des Unterrichts bei Nadja habe ich nicht nur Klavierspielen gelernt, sondern auch die Musiktheorie endlich verstanden."',
        'testimonial-2-author': '– Leon H., erwachsener Schüler',
        'testimonial-3': '„Eine wunderbare Lehrerin, die mit Herz und Kompetenz unterrichtet. Sehr zu empfehlen!"',
        'testimonial-3-author': '– Julia M.',
        
        // Contact section
        'contact-title': 'Kontakt',
        'contact-phone': 'Telefon:',
        'contact-email': 'E-Mail:',
        'contact-address': 'Adresse:',
        'contact-write-me': 'Schreiben Sie an mich',
        'contact-name': 'Ihr Name',
        'contact-message': 'Nachricht',
        'contact-send': 'Absenden',
        'contact-location': 'Standort',
        
        // Footer
        'footer-copyright': '© 2025 Nadja Erhard. Alle Rechte vorbehalten.',
        'floating-button': 'Schreib mir',
        'name': 'Nadja Erhard'
    },
    ru: {
        // Navigation
        'nav-about': 'О себе',
        'nav-gallery': 'Галерея',
        'nav-prices': 'Цены',
        'nav-testimonials': 'Отзывы',
        'nav-contact': 'Контакты',
        
        // Hero section
        'hero-title': 'Уроки фортепиано и музыкальной теории в Киссинге',
        'hero-quote': '„Музыка - это язык души." – Халиль Джибран',
        
        // About section
        'about-title': 'О себе',
        'about-text-1': 'Мой музыкальный талант я унаследовала от отца. Уже в детском саду я не отходила от пианино во время музыкальных занятий и буквально замирала при звуках музыки. Воспитатели настоятельно рекомендовали моим родителям отдать меня в музыкальную школу – так и произошло. Мой музыкальный путь начался в музыкальной школе в Минске, где я – не без сопротивления – получала уроки игры на фортепиано.',
        'about-text-2': 'С особой гордостью я вспоминаю время учебы в Государственном музыкальном гимназии-колледже Белорусской государственной академии музыки. Там я изучала специальность „Музыковедение".',
        'about-text-3': 'Следующие пять лет я провела в Белорусской государственной академии музыки, где окончила обучение по специальности „Искусствоведение (музыковедение)". В этот период я регулярно участвовала в конкурсах научных работ студентов вузов Беларуси. Некоторые из моих проектов были отмечены премиями.',
        'about-text-4': 'Для углубления профессиональных знаний я решила поступить в магистратуру Белорусской государственной академии музыки. Я успешно завершила обучение в 2013 году с оценкой 1,7 (соответствует обучению на уровне магистра).',
        'about-text-5': 'После приезда в Германию у меня развился большой интерес к церковной музыке. В связи с этим я решила пройти C-курс для церковных музыкантов в области хорового дирижирования и игры на органе в Аугсбурге. Этот опыт я рассматриваю как ценное обогащение, поскольку он открыл мне новые стороны моей профессии.',
        'about-text-6': 'Главная задача моей преподавательской деятельности – привить ученикам любовь к музыке и радость от обучения. В центре внимания стоит поддержание мотивации к занятиям, повышение её через успехи и совместное открытие новых музыкальных произведений. При этом я строю уроки очень индивидуально, ведь моя цель всегда одна и та же: понимать музыку как универсальный язык, развивать творческое видение, испытывать радость при занятиях и выступлениях и лучше познавать себя – также на физическом уровне.',
        'about-text-7': 'Особенно радует меня то, что дети и взрослые получают большое удовольствие от игры на фортепиано. Они с энтузиазмом погружаются в мир звуков и развивают естественную любовь к инструменту. Приятно видеть, как они с любопытством и радостью расширяют свои способности и постоянно исследуют новые музыкальные пути.',
        
        // Gallery section
        'gallery-title': 'Галерея',
        'gallery-qualifications': 'Мои квалификации',
        'gallery-qualifications-desc': 'Мой диплом об окончании C-курса для церковных музыкантов в области хорового дирижирования и игры на органе в Аугсбурге',
        'gallery-church-music': 'Исполнительство',
        'gallery-church-music-desc': 'Моя любовь к церковной музыке и игре на органе',
        'gallery-organ-playing': 'Игра на органе',
        'gallery-organ-playing-desc': 'Пример моей игры на органе',
        'gallery-teaching': 'Занятия с учениками',
        'gallery-teaching-desc': 'Вместе с моими учениками после концерта',
        'gallery-student-1': 'Выступление ученицы',
        'gallery-student-1-desc': 'Ученица демонстрирует свои навыки игры на фортепиано',
        'gallery-student-2': 'Выступление ученицы',
        'gallery-student-2-desc': 'Еще одна ученица во время выступления',
        
        // Prices section
        'prices-title': 'Цены',
        'prices-individual': 'Индивидуальные уроки',
        'prices-packages': 'Пакеты',
        'prices-theory': 'Теория музыки',
        'prices-30min': '30 мин – 25 €',
        'prices-45min': '45 мин – 35 €',
        'prices-60min': '60 мин – 45 €',
        'prices-theory-45min': 'Теория музыки (45 мин) – 45 €',
        'prices-package-4x45': '4×45 мин – 135 €',
        'prices-package-5x45': '5×45 мин – 165 €',
        'prices-package-4x30': '4×30 мин – 95 €',
        'prices-home-visit': 'Выезд на дом возможен от 45 мин, проезд до 30 €/месяц',
        
        // Testimonials section
        'testimonials-title': 'Что говорят мои ученики',
        'testimonial-1': '„Уроки у госпожи Эрхард очень чуткие и мотивирующие. Моя дочь с нетерпением ждет урок фортепиано каждую неделю!"',
        'testimonial-1-author': '– Мартина К., мама ученицы',
        'testimonial-2': '„Благодаря урокам у Нади я не только научился играть на фортепиано, но и наконец понял музыкальную теорию."',
        'testimonial-2-author': '– Леон Х., взрослый ученик',
        'testimonial-3': '„Замечательная учительница, которая преподает с сердцем и компетентностью. Очень рекомендую!"',
        'testimonial-3-author': '– Юлия М.',
        
        // Contact section
        'contact-title': 'Контакты',
        'contact-phone': 'Телефон:',
        'contact-email': 'E-Mail:',
        'contact-address': 'Адрес:',
        'contact-write-me': 'Напишите мне',
        'contact-name': 'Ваше имя',
        'contact-message': 'Сообщение',
        'contact-send': 'Отправить',
        'contact-location': 'Местоположение',
        
        // Footer
        'footer-copyright': '© 2025 Надежда Эрхард. Все права защищены.',
        'floating-button': 'Напиши мне',
        'name': 'Надежда Эрхард'
    }
};

// Current language (default: German)
let currentLanguage = 'de';

// Function to switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    updateContent();
    updateLanguageSwitcher();
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Function to update all content
function updateContent() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update image alt text and title
    const profileImage = document.querySelector('.profile-pic');
    if (profileImage) {
        profileImage.alt = translations[currentLanguage]['name'];
        profileImage.title = translations[currentLanguage]['name'];
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Function to update language switcher
function updateLanguageSwitcher() {
    const switcher = document.querySelector('.language-switcher');
    if (switcher) {
        const buttons = switcher.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === currentLanguage) {
                btn.classList.add('active');
            }
        });
    }
}

// Initialize language switcher
function initLanguageSwitcher() {
    // Create language switcher
    const navContainer = document.querySelector('.nav-container');
    const languageSwitcher = document.createElement('div');
    languageSwitcher.className = 'language-switcher';
    languageSwitcher.innerHTML = `
        <button data-lang="de" class="lang-btn active">DE</button>
        <button data-lang="ru" class="lang-btn">RU</button>
    `;
    
    // Insert after logo
    const logo = document.querySelector('.logo');
    logo.parentNode.insertBefore(languageSwitcher, logo.nextSibling);
    
    // Add event listeners
    const buttons = languageSwitcher.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && (savedLanguage === 'de' || savedLanguage === 'ru')) {
        switchLanguage(savedLanguage);
    }
}

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');
    
    if (burger && navMenu) {
        burger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on navigation links
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                }
            });
        });
    }
    
    // Initialize language switcher
    initLanguageSwitcher();
    
    // Reveal animation
    const reveals = document.querySelectorAll('.reveal');
    
    function reveal() {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check
});
