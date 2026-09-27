(function () {
  "use strict";

  const french = {
    "Home": "Accueil",
    "About & Contact": "À propos & Contact",
    "Resume": "CV",
    "Projects": "Projets",
    "All Rights Reserved": "Tous droits réservés",
    "Cloud & DevOps Engineering Student": "Étudiante ingénieure en Cloud & DevOps",
    "About Me": "À propos",
    "About me": "À propos de moi",
    "Cloud infrastructure, automated delivery, reliable operations.": "Infrastructures cloud, livraison automatisée, opérations fiables.",
    "Final-year Cloud Computing engineering student with hands-on experience across OpenStack, Azure, Kubernetes and CI/CD.": "Étudiante ingénieure en dernière année en Cloud Computing, avec une expérience pratique sur OpenStack, Azure, Kubernetes et CI/CD.",
    "Education": "Formation",
    "Experience": "Expérience",
    "Cloud Computing Engineering · 2027": "Cycle d’ingénieur en Cloud Computing · 2027",
    "Cloud, DevOps and software engineering internships": "Stages en Cloud, DevOps et génie logiciel",
    "Core strengths": "Points forts",
    "Cloud platform engineering": "Ingénierie des plateformes cloud",
    "Automation · Reliability · Scalability": "Automatisation · Fiabilité · Scalabilité",
    "View Projects": "Voir les projets",
    "View CV": "Voir le CV",
    "Open full CV": "Ouvrir le CV complet",
    "Download CV": "Télécharger le CV",
    "Contact": "Contact",
    "Looking for a final-year internship.": "À la recherche d’un stage de fin d’études.",
    "Cloud, DevOps or Platform Engineering.": "Cloud, DevOps ou Platform Engineering.",
    "Cloud platforms, delivery automation and selected software products built across internships and engineering projects.": "Plateformes cloud, automatisation des déploiements et solutions logicielles réalisées lors de stages et de projets d’ingénierie.",
    "All": "Tous",
    "Development": "Développement",
    "Latest Projects": "Projets récents",
    "All projects": "Tous les projets",
    "Loading project...": "Chargement du projet...",
    "Location": "Localisation",
    "Tunisia": "Tunisie",
    "Let us connect": "Échangeons",
    "For Cloud, DevOps or Platform Engineering opportunities, contact me by email or through LinkedIn.": "Pour toute opportunité en Cloud, DevOps ou Platform Engineering, contactez-moi par e-mail ou sur LinkedIn.",
    "Email Me": "M’écrire",
    "Open English CV": "Ouvrir le CV anglais",
    "Download English CV": "Télécharger le CV anglais",
    "Open French CV": "Ouvrir le CV français",
    "Download French CV": "Télécharger le CV français",
    "Profile highlights": "Points clés du profil",
    "Contact links": "Liens de contact",
    "Filter projects": "Filtrer les projets",
    "Back to top": "Retour en haut"
  };

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  let currentLanguage = localStorage.getItem("ranym-language") === "fr" ? "fr" : "en";

  function translateTextNodes() {
    if (!document.body) return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest("script, style, noscript, template, .language-switcher")) {
          return NodeFilter.FILTER_REJECT;
        }
        return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      if (!originalText.has(node)) originalText.set(node, node.textContent);
      const source = originalText.get(node);
      const key = source.trim();
      const value = currentLanguage === "fr" && french[key] ? french[key] : key;
      node.textContent = source.replace(key, value);
    });
  }

  function translateAttributes() {
    document.querySelectorAll("[aria-label]").forEach(element => {
      if (element.closest(".language-switcher")) return;
      if (!originalAttributes.has(element)) originalAttributes.set(element, {});
      const originals = originalAttributes.get(element);
      if (!Object.prototype.hasOwnProperty.call(originals, "aria-label")) {
        originals["aria-label"] = element.getAttribute("aria-label");
      }
      const source = originals["aria-label"];
      element.setAttribute("aria-label", currentLanguage === "fr" && french[source] ? french[source] : source);
    });
  }

  function syncLanguageControls() {
    document.querySelectorAll("[data-language]").forEach(button => {
      const isActive = button.dataset.language === currentLanguage;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function applyLanguage(announce) {
    document.documentElement.lang = currentLanguage;
    translateTextNodes();
    translateAttributes();
    syncLanguageControls();
    if (announce) {
      document.dispatchEvent(new CustomEvent("ranym:languagechange", { detail: { language: currentLanguage } }));
    }
  }

  function setLanguage(language, persist) {
    currentLanguage = language === "fr" ? "fr" : "en";
    if (persist) localStorage.setItem("ranym-language", currentLanguage);
    applyLanguage(true);
  }

  function createLanguageSwitcher() {
    const placeholder = document.querySelector(".header-logo-placeholder");
    const header = document.querySelector("#header .container-fluid");
    if ((!placeholder && !header) || document.querySelector("#header .language-switcher")) return;

    const switcher = document.createElement("div");
    switcher.className = "language-switcher";
    switcher.setAttribute("role", "group");
    switcher.setAttribute("aria-label", "Language");
    switcher.innerHTML = '<button type="button" data-language="en" aria-label="English">EN</button><button type="button" data-language="fr" aria-label="Français">FR</button>';
    if (placeholder) {
      placeholder.replaceWith(switcher);
    } else {
      header.prepend(switcher);
    }
    switcher.querySelectorAll("[data-language]").forEach(button => {
      button.addEventListener("click", () => setLanguage(button.dataset.language, true));
    });
  }

  window.RANYM_I18N = {
    get lang() {
      return currentLanguage;
    },
    translate(key) {
      return currentLanguage === "fr" && french[key] ? french[key] : key;
    },
    setLanguage
  };

  document.addEventListener("DOMContentLoaded", () => {
    createLanguageSwitcher();
    applyLanguage(false);
  });
})();
