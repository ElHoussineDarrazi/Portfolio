tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#6366f1',
                secondary: '#8b5cf6',
                dark: '#0f172a',
            },
            fontFamily: {
                inter: ['Inter', 'system-ui', 'sans-serif'],
            },
        }
    }
};

const translations = {
    fr: {
        "nav.extensions": "Extensions",
        "nav.about": "À propos",
        "nav.contact": "Contact",
        "hero.title": "Des extensions qui améliorent votre productivité",
        "hero.subtitle": "Découvrez mes outils développeur et extensions pour VS Code, navigateurs et plus. Des utilitaires puissants conçus avec soin pour améliorer votre productivité quotidienne.",
        "hero.btn.extensions": "Voir les extensions",
        "hero.btn.contact": "Me contacter",
        "stats.count": "Extensions publiées",
        "stats.users": "Utilisateurs actifs",
        "stats.rating": "Note moyenne",
        "stats.free": "Gratuites",
        "extensions.title": "Mes Extensions",
        "extensions.subtitle": "Chaque extension est développée avec attention au détail, performance et respect de la vie privée.",
        "about.title": "À propos",
        "about.p1": "Passionné par le développement et l'expérience utilisateur, je crée des outils développeurs, extensions IDE et utilitaires de productivité.",
        "about.p2": "Chaque outil est construit avec la même philosophie : simplicité, performance, respect de la vie privée et absence de publicité.",
        "about.p3": "Tous mes projets sont 100% gratuits et open source. Créés pour les développeurs, par un développeur.",
        "contact.title": "Une idée ? Un problème ?",
        "contact.subtitle": "N'hésitez pas à me contacter pour toute suggestion, demande de fonctionnalité ou signalement de bug.",
        "contact.email": "Envoyer un mail",
         "footer.subtitle": "Des extensions pour une productivité meilleure.",
         "footer.copyright": "© 2026 El Houssine DARRAZI. Tous droits réservés.",
         "site.title": "Mes Extensions",
        "tag.popular": "Populaire",
        "tag.new": "Nouveau",
        "tag.top": "Top",
        "ext1.title": "Privacy Guard",
        "ext1.desc": "Protégez votre vie privée en bloquant les traceurs, publicités et fingerprinting pendant votre navigation.",
        "ext2.title": "Tab Manager Pro",
        "ext2.desc": "Organisez des centaines d'onglets automatiquement, retrouvez-les en 1 clic et économisez de la mémoire.",
        "ext3.title": "Dark Mode Everywhere",
        "ext3.desc": "Activez le mode sombre sur absolument tous les sites web, avec personnalisation des couleurs.",
        "ext4.title": "Media Downloader",
        "ext4.desc": "Téléchargez vidéos, musiques et images depuis n'importe quel site en un seul clic.",
        "ext5.title": "Shortcuts Master",
        "ext5.desc": "Créez vos propres raccourcis clavier personnalisés pour n'importe quelle action sur le navigateur.",
        "ext6.title": "Web Notes",
        "ext6.desc": "Prenez des notes directement sur les pages web, synchronisées sur tous vos appareils.",
         "ext.sql.desc": "Organisez et gérez facilement vos bases de données SQL directement dans Visual Studio Code. Interface intuitive, gestion de connexions, requêtes et visualisation de données.",
         "ext.remoteops.desc": "Connectez-vous facilement à vos serveurs distants en SSH directement depuis Visual Studio Code. Gestion des profils de connexion, raccourcis rapides et connexion en un clic.",
     },
    en: {
        "nav.extensions": "Extensions",
        "nav.about": "About",
        "nav.contact": "Contact",
        "hero.title": "Extensions that improve your productivity",
        "hero.subtitle": "Discover my developer tools and extensions for VS Code, browsers and more. Powerful utilities carefully designed to improve your daily productivity.",
        "hero.btn.extensions": "View extensions",
        "hero.btn.contact": "Contact me",
        "stats.count": "Published extensions",
        "stats.users": "Active users",
        "stats.rating": "Average rating",
        "stats.free": "Free",
        "extensions.title": "My Extensions",
        "extensions.subtitle": "Each extension is developed with attention to detail, performance and privacy respect.",
        "about.title": "About",
        "about.p1": "Passionate about development and user experience, I create developer tools, IDE extensions and productivity utilities.",
        "about.p2": "Every tool is built with the same philosophy: simplicity, performance, privacy respect and ad-free.",
        "about.p3": "All my projects are 100% free and open source. Built for developers, by a developer.",
        "contact.title": "Got an idea? Found an issue?",
        "contact.subtitle": "Feel free to contact me for any suggestion, feature request or bug report.",
        "contact.email": "Send email",
         "footer.subtitle": "Extensions for a better productivity.",
         "footer.copyright": "© 2026 El Houssine DARRAZI. All rights reserved.",
         "site.title": "My Extensions",
        "tag.popular": "Popular",
        "tag.new": "New",
        "tag.top": "Top",
        "ext1.title": "Privacy Guard",
        "ext1.desc": "Protect your privacy by blocking trackers, ads and fingerprinting while browsing.",
        "ext2.title": "Tab Manager Pro",
        "ext2.desc": "Automatically organize hundreds of tabs, find them in 1 click and save memory.",
        "ext3.title": "Dark Mode Everywhere",
        "ext3.desc": "Enable dark mode on absolutely all websites, with custom colors.",
        "ext4.title": "Media Downloader",
        "ext4.desc": "Download videos, music and images from any website in one click.",
        "ext5.title": "Shortcuts Master",
        "ext5.desc": "Create your own custom keyboard shortcuts for any browser action.",
        "ext6.title": "Web Notes",
        "ext6.desc": "Take notes directly on web pages, synchronized across all your devices.",
         "ext.sql.desc": "Easily organize and manage your SQL databases directly in Visual Studio Code. Intuitive interface, connection management, queries and data visualization.",
         "ext.remoteops.desc": "Easily connect to your remote servers via SSH directly from Visual Studio Code. Connection profiles management, quick shortcuts and one-click connection."
     }
};

let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update page title
    document.title = lang === 'fr' ? 'Mes Extensions | Portfolio' : 'My Extensions | Portfolio';

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('text-primary');
        btn.classList.add('text-gray-500');
    });
    document.getElementById(`lang-${lang}`).classList.remove('text-gray-500');
    document.getElementById(`lang-${lang}`).classList.add('text-primary');
}

// Fetch VS Code Marketplace statistics
async function loadExtensionStats() {
    const EXTENSIONS = [
        { id: "ElHoussineDARRAZI.sqldatabaseorganizer", prefix: "ext" },
        { id: "ElHoussineDARRAZI.remoteops", prefix: "remoteops" }
    ];

    for (const ext of EXTENSIONS) {
        try {
            const response = await fetch('https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json;api-version=7.1-preview.1',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    filters: [{
                        criteria: [
                            { filterType: 7, value: ext.id }
                        ]
                    }],
                    flags: 0x192
                })
            });

            const result = await response.json();
            const extension = result.results[0].extensions[0];
            
            const stats = {};
            extension.statistics.forEach(stat => {
                stats[stat.statisticName] = stat.value;
            });

            displayExtensionStats(stats, extension, ext.prefix);

        } catch (error) {
            console.error(`Failed to load stats for ${ext.id}:`, error);
        }
    }
}

function displayExtensionStats(stats, extension, prefix) {
    const uniqueInstalls = Math.round(stats.install || 0);
    const rating = (stats.averagerating || 0).toFixed(1);
    const version = extension?.versions?.[0]?.version || '1.0.0';
    
    const installsEl = document.getElementById(`${prefix}-installs`);
    const ratingEl = document.getElementById(`${prefix}-rating`);
    const versionEl = document.getElementById(`${prefix}-version`);
    
    if (installsEl) installsEl.textContent = uniqueInstalls.toLocaleString();
    if (ratingEl) ratingEl.textContent = rating;
    if (versionEl) versionEl.textContent = `v${version}`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lang-fr').addEventListener('click', () => switchLanguage('fr'));
    document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));

    // Apply current language on page load
    switchLanguage(currentLang);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Load real stats from VS Code Marketplace
    loadExtensionStats();
});
