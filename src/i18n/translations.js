export const translations = {
  en: {
    nav: {
      experience: "Experience",
      tools: "Tools",
      projects: "Projects",
      contact: "Contact",
      toggleTheme: "Toggle theme",
      toggleLanguage: "Switch to French",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    header: {
      title: "Hi, I'm Jatin.",
      description:
        "I'm a software engineer based in Montreal.",
      imageAlt: "Photo of the Montreal skyline at dusk",
      currently: "Currently @ Smartbills",
      scrollHint: "Scroll to experience",
    },
    tools: {
      heading: "Tools & Technologies",
      languages: "Languages",
      frameworks: "Frameworks",
      other: "Other",
    },
    experience: {
      heading: "Experience",
      present: "Present",
      items: [
        {
          role: "Software Developer Intern",
          company: "Smartbills Technologies Inc.",
          dates: "May 2025 - Present",
          bullets: [
            "Developed Dockerized fintech microservices in React.js, React Native, TypeScript, and .NET, introduced Stripe subscriptions, and reduced provisioning times by integrating Terraform with CI/CD pipelines to automate infrastructure deployments",
            "Architected a decoupled event-driven receipt processing pipeline using AWS Textract, EventBridge, SQS, SNS, and ECS to ingest receipts forwarded by email and extract structured data via OCR, reducing manual uploads by 70%",
          ],
          tech: ["React.js", "React Native", "TypeScript", ".NET", "Docker", "Terraform", "AWS"],
        },
        {
          role: "Software Developer Intern",
          company: "CAE Inc.",
          dates: "May 2024 - Aug 2024",
          bullets: [
            "Built a form processing tool using React.js, TypeScript, and .NET, streamlining metadata reporting and reducing weekly manual workloads by 10+ hours across the internal engineering department",
            "Developed a REST API with a custom advanced search engine used by 800+ users to give them over 5x faster searching capabilities on large datasets and integrated unit testing with Jest to maintain over 95% code coverage",
          ],
          tech: ["React.js", "TypeScript", ".NET", "Jest"],
        },
        {
          role: "Software Engineer Intern",
          company: "Ivalua Inc.",
          dates: "Dec 2022 - May 2023",
          bullets: [
            "Reduced page load times by optimizing SQL queries, introducing Redis caching in the .NET backend, and modernizing React.js components, significantly improving the user experience for 55,000+ users",
          ],
          tech: ["React.js", ".NET", "SQL", "Redis"],
        },
      ],
    },
    projects: {
      heading: "Projects",
      comingSoon: "More coming soon...",
      site: "SITE",
      code: "CODE",
      items: {
        classAvailability: {
          title: "Class Availability Notifier",
          description: "Sign up for SMS alerts when course seats open",
          alt: "Screenshot of the Class Availability Notifier signup page",
        },
        goodNews: {
          title: "Good News Finder Neural Network",
          description: "AI model that aggregates good news online",
          alt: "Diagram of a neural network used by the Good News Finder",
        },
        distributed: {
          title: "Distributed System",
          description: "Scalable app built with microservice architecture",
          alt: "Architecture diagram of the distributed microservice system",
        },
        tsp: {
          title: "Travelling Salesman Problem Visualizer",
          description: "Visualize and learn about this infamous problem",
          alt: "Animated visualization of the Travelling Salesman Problem solver",
        },
        physics: {
          title: "Physics Simulations",
          description: "Desktop application consisting of two physics simulations",
          alt: "Animated physics simulation running in a desktop window",
        },
      },
    },
    footer: {
      interested: "Interested in connecting?",
      findInfo: "Find my info below!",
      links: "Links",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      copyEmail: "Copy email address",
      copied: "Copied!",
    },
    misc: {
      backToTop: "Back to top",
    },
  },
  fr: {
    nav: {
      experience: "Expérience",
      tools: "Outils",
      projects: "Projets",
      contact: "Contact",
      toggleTheme: "Changer le thème",
      toggleLanguage: "Switch to English",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
    header: {
      title: "Salut, je suis Jatin.",
      description:
        "Je suis ingénieur logiciel basé à Montréal.",
      imageAlt: "Photo de la skyline de Montréal au crépuscule",
      currently: "Actuellement @ Smartbills",
      scrollHint: "Faire défiler vers l'expérience",
    },
    tools: {
      heading: "Outils & Technologies",
      languages: "Langages",
      frameworks: "Frameworks",
      other: "Autres",
    },
    experience: {
      heading: "Expérience",
      present: "Présent",
      items: [
        {
          role: "Stagiaire en développement logiciel",
          company: "Smartbills Technologies Inc.",
          dates: "Mai 2025 – Présent",
          bullets: [
            "Développé des microservices fintech conteneurisés avec Docker en React.js, React Native, TypeScript et .NET, intégré les abonnements Stripe, et réduit les temps de provisionnement en intégrant Terraform aux pipelines CI/CD pour automatiser les déploiements d'infrastructure",
            "Architecturé un pipeline découplé et piloté par événements pour le traitement de reçus à l'aide d'AWS Textract, EventBridge, SQS, SNS et ECS afin d'ingérer les reçus transférés par courriel et d'extraire les données structurées par OCR, réduisant les téléversements manuels de 70 %",
          ],
          tech: ["React.js", "React Native", "TypeScript", ".NET", "Docker", "Terraform", "AWS"],
        },
        {
          role: "Stagiaire en développement logiciel",
          company: "CAE Inc.",
          dates: "Mai 2024 – Août 2024",
          bullets: [
            "Conçu un outil de traitement de formulaires en React.js, TypeScript et .NET, simplifiant le rapport de métadonnées et réduisant la charge de travail manuelle hebdomadaire de plus de 10 heures au sein du département d'ingénierie interne",
            "Développé une API REST dotée d'un moteur de recherche avancé personnalisé, utilisée par plus de 800 utilisateurs pour effectuer des recherches plus de 5 fois plus rapides sur de grands ensembles de données, et intégré des tests unitaires avec Jest afin de maintenir une couverture de code supérieure à 95 %",
          ],
          tech: ["React.js", "TypeScript", ".NET", "Jest"],
        },
        {
          role: "Stagiaire en génie logiciel",
          company: "Ivalua Inc.",
          dates: "Déc. 2022 – Mai 2023",
          bullets: [
            "Réduit les temps de chargement des pages en optimisant les requêtes SQL, en introduisant la mise en cache Redis dans le backend .NET et en modernisant des composants React.js, améliorant significativement l'expérience utilisateur pour plus de 55 000 utilisateurs",
          ],
          tech: ["React.js", ".NET", "SQL", "Redis"],
        },
      ],
    },
    projects: {
      heading: "Projets",
      comingSoon: "Plus à venir...",
      site: "SITE",
      code: "CODE",
      items: {
        classAvailability: {
          title: "Notificateur de disponibilité de cours",
          description: "Recevez des SMS lorsque des places de cours s'ouvrent",
          alt: "Capture d'écran de la page d'inscription au notificateur",
        },
        goodNews: {
          title: "Réseau neuronal de bonnes nouvelles",
          description: "Modèle d'IA qui agrège les bonnes nouvelles en ligne",
          alt: "Schéma du réseau neuronal utilisé par le projet",
        },
        distributed: {
          title: "Système distribué",
          description: "Application évolutive en architecture de microservices",
          alt: "Schéma de l'architecture du système de microservices",
        },
        tsp: {
          title: "Visualiseur du problème du voyageur de commerce",
          description: "Visualisez et apprenez sur ce célèbre problème",
          alt: "Animation du solveur du problème du voyageur de commerce",
        },
        physics: {
          title: "Simulations physiques",
          description: "Application de bureau comprenant deux simulations physiques",
          alt: "Animation d'une simulation physique dans une fenêtre de bureau",
        },
      },
    },
    footer: {
      interested: "Envie de discuter ?",
      findInfo: "Retrouvez mes coordonnées ci-dessous !",
      links: "Liens",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Courriel",
      copyEmail: "Copier l'adresse courriel",
      copied: "Copié !",
    },
    misc: {
      backToTop: "Retour en haut",
    },
  },
};
