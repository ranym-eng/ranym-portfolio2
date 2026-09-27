(function () {
  "use strict";

  const talentBase = "assets/img/projects/captures portfolio talenthub/assets/";
  const fypBase = "assets/img/projects/captures portfolio fyp/";

  const projects = [
    {
      slug: "talenthub",
      title: "TalentHub",
      category: "cloud",
      categoryLabel: "Cloud & DevOps",
      context: "FelCloud internship",
      period: "Jul - Sep 2026",
      short: "A production platform deployed across three FelCloud VMs with automated delivery, observability and tested recovery.",
      overview: "TalentHub is an IEEE project management platform deployed on FelCloud across separate bastion, application and PostgreSQL virtual machines. The production architecture runs ten containerized services behind a private network and Caddy load balancing.",
      role: "I owned the Cloud and DevOps workstream within a three-person team, from infrastructure automation to deployment, monitoring and recovery.",
      images: [
        "assets/img/projects/talenthub-architecture.png",
        talentBase + "talenthub-01-product home app.png",
        talentBase + "product workoflow.png",
        talentBase + "CI.png",
        talentBase + "CD.png",
        talentBase + "talenthub-05-monitoring.png",
        talentBase + "talenthub-06-backup-recovery.png"
      ],
      imageLabels: ["Production architecture and DevOps workflow", "Product home", "Project workflow", "Continuous integration", "Continuous deployment", "Prometheus monitoring", "Backup and recovery"],
      technologies: ["FelCloud", "Podman", "GitLab CI/CD", "GitHub Actions", "Docker", "Caddy", "Prometheus", "OpenStack Swift", "PostgreSQL"],
      highlights: [
        "Configured a self-hosted GitLab Runner with Podman for ephemeral development environments.",
        "Automated quality gates, image delivery, migrations, health validation and rollback.",
        "Implemented Prometheus, Grafana and Alertmanager across seven observability services.",
        "Validated PostgreSQL backups and restores on OpenStack Swift with SHA-256 integrity checks."
      ],
      links: []
    },
    {
      slug: "fyp-grading",
      title: "FYP Grading Platform",
      category: "cloud",
      categoryLabel: "Cloud & Full-Stack",
      context: "SQU internship · Oman",
      period: "Jun - Jul 2026",
      short: "A traceable final-year project evaluation platform containerized and deployed on Microsoft Azure.",
      overview: "The platform centralizes final-year project evaluation and replaces a fragmented Excel and MATLAB workflow. It combines a Spring Boot API, React interface and PostgreSQL database in a reproducible Azure deployment.",
      role: "I contributed across application engineering, Docker packaging, GitHub Actions, HTTPS deployment and infrastructure handover.",
      images: [
        fypBase + "1-live-azure-https-application.png",
        fypBase + "2-github-actions-successful-run.png",
        fypBase + "3-real-docker-compose-status.png",
        fypBase + "4-real-https-tls-verification.png",
        fypBase + "5-azure-virtual-machine-overview.jpg"
      ],
      imageLabels: ["Live Azure application", "Successful delivery pipeline", "Docker Compose runtime", "HTTPS verification", "Azure virtual machine"],
      technologies: ["Azure", "Docker", "GitHub Actions", "Spring Boot", "React", "PostgreSQL"],
      highlights: [
        "Replaced an Excel and MATLAB process with traceable multi-role evaluation.",
        "Automated frontend and backend container publishing with GitHub Actions.",
        "Deployed a health-checked Docker Compose runtime behind HTTPS."
      ],
      links: [
        { label: "Repository", url: "https://github.com/ranym-eng/FYP-Online-Grading-Platform", icon: "bi-github" }
      ]
    },
    {
      slug: "eco-resource",
      title: "Eco-Resource B2B",
      category: "cloud",
      categoryLabel: "Cloud-Native Platform",
      context: "ESPRIT cloud project",
      period: "Oct 2025 - Jun 2026",
      short: "A hybrid cloud platform combining OpenStack, Kubernetes, Azure delivery and infrastructure observability.",
      overview: "Eco-Resource connects companies exchanging reusable industrial resources. Its hybrid architecture combines an Angular frontend on Azure with a Spring Boot backend running on Kubernetes and OpenStack.",
      role: "My focus covered private-cloud architecture, Kubernetes automation, CI/CD, observability and role-based Angular workflows.",
      images: [
        "assets/img/projects/eco-resource/2analytics.jpeg",
        "assets/img/projects/eco-resource/3openstack.png",
        "assets/img/projects/eco-resource/4kubernetes.png",
        "assets/img/projects/eco-resource/5grafana.png"
      ],
      imageLabels: ["Operational analytics", "OpenStack infrastructure", "Kubernetes runtime", "Grafana monitoring"],
      technologies: ["OpenStack", "Kubernetes", "Ansible", "GitLab CI/CD", "Azure", "Prometheus", "Grafana", "Zabbix"],
      highlights: [
        "Built an OpenStack foundation with isolated networks and persistent storage.",
        "Automated a multi-node Kubernetes deployment with Ansible.",
        "Connected the Azure frontend to the Spring Boot backend on Kubernetes.",
        "Implemented Prometheus, Grafana and Zabbix observability."
      ],
      links: [
        { label: "Frontend", url: "https://github.com/ranym-eng/eco-ressource-b2b-frontend", icon: "bi-github" },
        { label: "Backend", url: "https://github.com/ranym-eng/eco-ressource-b2b-backend", icon: "bi-github" }
      ]
    },
    {
      slug: "test-traceability",
      title: "Test Traceability Platform",
      category: "software",
      categoryLabel: "Software Engineering",
      context: "Sagemcom internship",
      period: "Jan - Jun 2024",
      short: "A centralized quality platform for firmware test traces, production indicators and Power BI reporting.",
      overview: "The platform gives quality teams one place to investigate firmware test traces, follow serial numbers and monitor production indicators through operational and Power BI dashboards.",
      role: "I built Angular workflows, .NET services, SQL Server data access and Power BI reporting.",
      images: [
        "assets/img/projects/sagemcom/2dashboard.png",
        "assets/img/projects/sagemcom/3traces.png",
        "assets/img/projects/sagemcom/1authentication.png"
      ],
      imageLabels: ["Quality dashboard", "Trace investigation", "Secure authentication"],
      technologies: ["Angular", ".NET", "Power BI", "SQL Server"],
      highlights: [
        "Centralized test results and firmware trace investigation.",
        "Added authentication, access control and operational workflows.",
        "Delivered interactive quality monitoring through Power BI."
      ],
      links: [
        { label: "Frontend", url: "https://github.com/ranym-eng/test-trace-management-frontend", icon: "bi-github" },
        { label: "Backend", url: "https://github.com/ranym-eng/Web-based-test-logging-management-system", icon: "bi-github" }
      ]
    },
    {
      slug: "gymify",
      title: "Gymify",
      category: "software",
      categoryLabel: "Web & Desktop",
      context: "ESPRIT team project",
      period: "Jan - May 2025",
      short: "A coordinated web and desktop product for memberships, classes, events and community workflows.",
      overview: "Gymify brings gym operations and member services into connected web and desktop experiences backed by one central database.",
      role: "I contributed to business workflows, user-facing interfaces, real-time features and intelligent assistance.",
      images: [
        "assets/img/projects/gymify/1home.png",
        "assets/img/projects/gymify/2marketplace.png",
        "assets/img/projects/gymify/3ai-chat.png",
        "assets/img/projects/gymify/4calendar.png"
      ],
      imageLabels: ["Member experience", "Marketplace", "AI assistant", "Course calendar"],
      technologies: ["Symfony", "JavaFX", "MySQL", "WebSocket", "AI"],
      highlights: [
        "Multi-role memberships, classes, events and marketplace workflows.",
        "Connected Symfony web and JavaFX desktop applications.",
        "Added real-time communication and AI-assisted interactions."
      ],
      links: [
        { label: "Web repository", url: "https://github.com/ranym-eng/Gymify-symfony", icon: "bi-github" },
        { label: "Desktop repository", url: "https://github.com/ranym-eng/Gymify-desktop", icon: "bi-display" }
      ]
    },
    {
      slug: "cafeconnect",
      title: "CafeConnect",
      category: "software",
      categoryLabel: "Web & Mobile",
      context: "BeeCoders internship",
      period: "Jul - Sep 2023",
      short: "Connected web and mobile workflows for products, orders and billing through a shared REST API.",
      overview: "CafeConnect helps cafe teams manage their catalog, customer orders and billing from web and mobile clients connected to the same backend.",
      role: "I developed full-stack workflows across Angular, Spring Boot, Flutter and MySQL.",
      images: [
        "assets/img/projects/cafeconnect/2orders.png",
        "assets/img/projects/cafeconnect/3products.png",
        "assets/img/projects/cafeconnect/1login.png"
      ],
      imageLabels: ["Order management", "Product catalog", "Authentication"],
      technologies: ["Angular", "Spring Boot", "Flutter", "MySQL", "REST API"],
      highlights: [
        "Unified product, category, order and invoice management.",
        "Shared REST services across web and mobile interfaces.",
        "Secured access to operational cafe workflows."
      ],
      links: []
    },
    {
      slug: "heart-risk",
      title: "Heart Risk Prediction",
      category: "ai",
      categoryLabel: "AI & Data",
      context: "Machine learning project",
      period: "Sep - Dec 2025",
      short: "An interactive workspace for risk prediction, risk levels and similar-patient clustering.",
      overview: "The application compares supervised and unsupervised approaches through a single interface for patient-level exploration and decision support.",
      role: "I prepared the data, compared models and delivered the results through an interactive Python interface.",
      images: [
        "assets/img/projects/heart-ai/dashboard.png",
        "assets/img/projects/heart-ai/binary-result.png",
        "assets/img/projects/heart-ai/clusters.png",
        "assets/img/projects/heart-ai/multiclass-result.png"
      ],
      imageLabels: ["Project dashboard", "Binary prediction", "Patient clusters", "Risk level analysis"],
      technologies: ["Python", "XGBoost", "Random Forest", "K-Means", "Streamlit"],
      highlights: [
        "XGBoost and Random Forest prediction workflows.",
        "K-Means grouping for comparable patient profiles.",
        "Visual results, risk levels and feature-importance analysis."
      ],
      links: [
        { label: "Live demo", url: "https://ml-heartdisease-33xtbcsv2lig92i98ev6uw.streamlit.app/", icon: "bi-play-circle" },
        { label: "Repository", url: "https://github.com/ranym-eng/ML-heartdisease", icon: "bi-github" }
      ]
    },
    {
      slug: "foodify",
      title: "Foodify",
      category: "mobile",
      categoryLabel: "Mobile Product",
      context: "Academic project",
      period: "Oct - Dec 2024",
      short: "A role-based restaurant experience for discovery, reservations, ordering and owner operations.",
      overview: "Foodify connects customer discovery and ordering with restaurant-side operational dashboards in one mobile product.",
      role: "I designed and implemented role-based mobile journeys with FlutterFlow and Firebase.",
      images: [
        "assets/img/projects/foodify/1roles.jpg",
        "assets/img/projects/foodify/2restaurants.png",
        "assets/img/projects/foodify/3dashboard.jpg"
      ],
      imageLabels: ["Role selection", "Restaurant discovery", "Owner dashboard"],
      technologies: ["FlutterFlow", "Firebase", "REST API"],
      highlights: [
        "Separate customer and restaurant-owner experiences.",
        "Restaurant discovery, reservations and ordering workflows.",
        "Operational dashboards for restaurant management."
      ],
      links: [
        { label: "Live app", url: "https://projetmobile-cjdox1.flutterflow.app/", icon: "bi-phone" }
      ]
    }
  ];

  window.RANYM_PROJECTS = projects;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function renderProjectCard(project, projectIndex) {
    const imageSlides = Array.isArray(project.images) ? project.images : [];
    const visualSlides = Array.isArray(project.visualSlides) ? project.visualSlides : [];
    const slideCount = imageSlides.length || visualSlides.length;
    const categoryIcons = {
      cloud: "bi-cloud-check",
      software: "bi-code-square",
      ai: "bi-cpu",
      mobile: "bi-phone"
    };
    const categoryIcon = categoryIcons[project.category] || "bi-grid";

    const slides = imageSlides.length
      ? imageSlides.map((image, imageIndex) => {
        const label = project.imageLabels[imageIndex] || "Project screen";
        return '<img class="compact-project-slide ' + (imageIndex === 0 ? "active" : "") + '" src="' + escapeHtml(image) + '" alt="' + escapeHtml(project.title + " - " + label) + '" loading="' + (projectIndex < 3 && imageIndex === 0 ? "eager" : "lazy") + '">';
      }).join("")
      : visualSlides.map((slide, slideIndex) =>
        '<div class="compact-project-slide compact-project-visual ' + (slideIndex === 0 ? "active" : "") + '" aria-label="' + escapeHtml(project.title + " - " + slide.label) + '">' +
          '<i class="bi ' + escapeHtml(slide.icon) + '"></i>' +
          '<div><span>' + escapeHtml(slide.eyebrow) + '</span><strong>' + escapeHtml(slide.label) + '</strong></div>' +
        '</div>'
      ).join("");

    const dots = Array.from({ length: slideCount }, (item, imageIndex) =>
      '<span class="' + (imageIndex === 0 ? "active" : "") + '" aria-hidden="true"></span>'
    ).join("");

    const tags = project.technologies.slice(0, 3).map(technology =>
      "<span>" + escapeHtml(technology) + "</span>"
    ).join("");

    const mediaCount = imageSlides.length
      ? '<span class="compact-project-count" aria-label="' + imageSlides.length + ' project screenshots"><i class="bi bi-images" aria-hidden="true"></i><span>' + imageSlides.length + '</span></span>'
      : '<span class="compact-project-count" aria-label="Project overview"><i class="bi bi-diagram-3" aria-hidden="true"></i></span>';

    return '<a class="compact-project-card category-' + escapeHtml(project.category) + '" data-rotating-project data-category="' + escapeHtml(project.category) + '" href="project-details.html?project=' + encodeURIComponent(project.slug) + '" aria-label="View ' + escapeHtml(project.title) + ' project details">' +
      '<div class="compact-project-media">' +
        slides +
        '<span class="compact-project-type"><i class="bi ' + escapeHtml(categoryIcon) + '" aria-hidden="true"></i>' + escapeHtml(project.categoryLabel) + '</span>' +
        '<div class="project-slide-dots">' + dots + '</div>' +
        mediaCount +
      '</div>' +
      '<div class="compact-project-body">' +
        '<div class="compact-project-meta"><span><i class="bi bi-briefcase" aria-hidden="true"></i>' + escapeHtml(project.context) + '</span><span>' + escapeHtml(project.period) + '</span></div>' +
        '<h3>' + escapeHtml(project.title) + '</h3>' +
        '<p>' + escapeHtml(project.short) + '</p>' +
        '<div class="compact-project-footer"><div class="compact-project-tags">' + tags + '</div><span class="compact-project-open" aria-hidden="true"><i class="bi bi-arrow-up-right"></i></span></div>' +
      '</div>' +
    '</a>';
  }

  function renderCards() {
    const latestGrid = document.getElementById("latest-project-grid");
    const archiveGrid = document.getElementById("project-grid");
    if (!latestGrid || !archiveGrid) return;

    latestGrid.innerHTML = projects.slice(0, 3).map((project, projectIndex) =>
      renderProjectCard(project, projectIndex)
    ).join("");

    archiveGrid.innerHTML = projects.slice(3).map((project, projectIndex) =>
      renderProjectCard(project, projectIndex + 3)
    ).join("");

    initCardSlideshows();
    initFilters();
  }

  function initCardSlideshows() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.querySelectorAll("[data-rotating-project]").forEach((card, cardIndex) => {
      const slides = Array.from(card.querySelectorAll(".compact-project-slide"));
      const dots = Array.from(card.querySelectorAll(".project-slide-dots span"));
      if (slides.length < 2) return;

      let activeIndex = 0;
      let initialTimer;
      let rotationTimer;

      const showSlide = (index) => {
        slides[activeIndex].classList.remove("active");
        dots[activeIndex].classList.remove("active");
        activeIndex = index;
        slides[activeIndex].classList.add("active");
        dots[activeIndex].classList.add("active");
      };

      const start = () => {
        if (reduceMotion || initialTimer || rotationTimer) return;
        initialTimer = window.setTimeout(() => {
          showSlide((activeIndex + 1) % slides.length);
          initialTimer = undefined;
          rotationTimer = window.setInterval(() => showSlide((activeIndex + 1) % slides.length), 3800);
        }, 4300 + (cardIndex % 3) * 250);
      };

      const stop = () => {
        window.clearTimeout(initialTimer);
        window.clearInterval(rotationTimer);
        initialTimer = undefined;
        rotationTimer = undefined;
      };

      card.addEventListener("mouseenter", stop);
      card.addEventListener("mouseleave", start);
      card.addEventListener("focusin", stop);
      card.addEventListener("focusout", start);
      start();
    });
  }

  function initFilters() {
    const buttons = Array.from(document.querySelectorAll("[data-project-filter]"));
    const cards = Array.from(document.querySelectorAll("[data-category]"));
    const sections = Array.from(document.querySelectorAll("[data-project-section]"));

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.dataset.projectFilter;
        buttons.forEach(item => {
          const isActive = item === button;
          item.classList.toggle("active", isActive);
          item.setAttribute("aria-pressed", String(isActive));
        });
        cards.forEach(card => {
          const matchesFilter = filter === "all"
            || (filter === "other" ? card.dataset.category !== "cloud" : card.dataset.category === filter);
          card.hidden = !matchesFilter;
        });
        sections.forEach(section => {
          const sectionCards = Array.from(section.querySelectorAll("[data-category]"));
          section.hidden = !sectionCards.some(card => !card.hidden);
        });
      });
    });
  }

  function renderDetail() {
    const mount = document.getElementById("project-detail-content");
    if (!mount) return;

    const slug = new URLSearchParams(window.location.search).get("project");
    const project = projects.find(item => item.slug === slug);

    if (!project) {
      mount.innerHTML = '<div class="project-not-found"><p>Project not found.</p><a href="portfolio.html">Return to the portfolio</a></div>';
      return;
    }

    document.title = project.title + " - Ranym Mejri";
    document.body.dataset.projectCategory = project.category;

    const hasImages = Array.isArray(project.images) && project.images.length > 0;
    const thumbnails = hasImages ? project.images.map((image, index) =>
      '<button type="button" class="' + (index === 0 ? "active" : "") + '" data-detail-thumb="' + index + '" aria-label="Show ' + escapeHtml(project.imageLabels[index]) + '">' +
        '<img src="' + escapeHtml(image) + '" alt="" loading="lazy">' +
      '</button>'
    ).join("") : "";

    const gallery = hasImages
      ? '<div class="project-detail-gallery">' +
          '<div class="project-detail-main">' +
            '<img id="project-detail-image" src="' + escapeHtml(project.images[0]) + '" alt="' + escapeHtml(project.title + " - " + project.imageLabels[0]) + '">' +
            '<button type="button" class="detail-gallery-button detail-gallery-prev" aria-label="Previous screen"><i class="bi bi-arrow-left"></i></button>' +
            '<button type="button" class="detail-gallery-button detail-gallery-next" aria-label="Next screen"><i class="bi bi-arrow-right"></i></button>' +
            '<span id="project-detail-caption">' + escapeHtml(project.imageLabels[0]) + '</span>' +
          '</div>' +
          '<div class="project-detail-thumbs">' + thumbnails + '</div>' +
        '</div>'
      : '<div class="project-detail-visuals" aria-label="' + escapeHtml(project.title) + ' project overview">' +
          project.visualSlides.map(slide =>
            '<div class="project-detail-visual">' +
              '<i class="bi ' + escapeHtml(slide.icon) + '"></i>' +
              '<div><span>' + escapeHtml(slide.eyebrow) + '</span><strong>' + escapeHtml(slide.label) + '</strong></div>' +
            '</div>'
          ).join("") +
        '</div>';

    const technologies = project.technologies.map(technology =>
      "<span>" + escapeHtml(technology) + "</span>"
    ).join("");

    const highlights = project.highlights.map(highlight =>
      '<li><i class="bi bi-check2"></i><span>' + escapeHtml(highlight) + '</span></li>'
    ).join("");

    const links = project.links.map(link =>
      '<a href="' + escapeHtml(link.url) + '" target="_blank" rel="noopener noreferrer"><i class="bi ' + escapeHtml(link.icon) + '"></i>' + escapeHtml(link.label) + '</a>'
    ).join("");

    mount.innerHTML =
      '<article class="project-detail-article">' +
        '<header class="project-detail-heading">' +
          '<div><p>' + escapeHtml(project.categoryLabel) + '</p><h1>' + escapeHtml(project.title) + '</h1></div>' +
          '<div class="project-detail-context"><span>' + escapeHtml(project.context) + '</span><span>' + escapeHtml(project.period) + '</span></div>' +
        '</header>' +
        '<div class="project-detail-layout">' +
          gallery +
          '<div class="project-detail-copy">' +
            '<p class="project-detail-lead">' + escapeHtml(project.overview) + '</p>' +
            '<div class="project-detail-role"><span>My contribution</span><p>' + escapeHtml(project.role) + '</p></div>' +
            '<ul class="project-detail-highlights">' + highlights + '</ul>' +
            '<div class="project-detail-tech">' + technologies + '</div>' +
            (links ? '<div class="project-detail-links">' + links + '</div>' : '') +
          '</div>' +
        '</div>' +
      '</article>';

    if (hasImages) initDetailGallery(project);
  }

  function initDetailGallery(project) {
    const mainImage = document.getElementById("project-detail-image");
    const caption = document.getElementById("project-detail-caption");
    const thumbs = Array.from(document.querySelectorAll("[data-detail-thumb]"));
    const previous = document.querySelector(".detail-gallery-prev");
    const next = document.querySelector(".detail-gallery-next");
    if (!mainImage || !thumbs.length) return;

    let activeIndex = 0;

    const showImage = (index) => {
      activeIndex = (index + project.images.length) % project.images.length;
      mainImage.classList.add("changing");
      window.setTimeout(() => {
        mainImage.src = project.images[activeIndex];
        mainImage.alt = project.title + " - " + project.imageLabels[activeIndex];
        caption.textContent = project.imageLabels[activeIndex];
        thumbs.forEach((thumb, thumbIndex) => thumb.classList.toggle("active", thumbIndex === activeIndex));
        mainImage.classList.remove("changing");
      }, 120);
    };

    thumbs.forEach(thumb => thumb.addEventListener("click", () => showImage(Number(thumb.dataset.detailThumb))));
    previous.addEventListener("click", () => showImage(activeIndex - 1));
    next.addEventListener("click", () => showImage(activeIndex + 1));
    document.addEventListener("keydown", event => {
      if (event.key === "ArrowLeft") showImage(activeIndex - 1);
      if (event.key === "ArrowRight") showImage(activeIndex + 1);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderCards();
    renderDetail();
  });
})();
