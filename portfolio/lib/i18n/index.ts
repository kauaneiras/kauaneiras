"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define available languages
export type Language = "en" | "pt" | "de" | "eo"

// Define translation structure
export type Translations = {
  [key: string]: string | Translations
}

// Translation dictionaries
const translations: Record<Language, Translations> = {
  en: {
    common: {
      level: "LVL",
      progress: "Progress",
      score: "Score",
      scrollDown: "Scroll down to continue",
    },
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    startScreen: {
      title: "PORTFOLIO ADVENTURE",
      loading: "Loading assets...",
      startButton: "START ADVENTURE",
      scrollToExplore: "Scroll down to explore after starting",
      navigate: "Navigate through my professional journey in this interactive experience",
      soundOff: "Sound Off",
      soundOn: "Sound On",
      light: "Light",
      dark: "Dark",
      controls: "Use arrow keys to navigate | Press SPACE to interact | ESC to pause",
    },
    hero: {
      adventureMode: "ADVENTURE MODE",
      greeting: "Hi, I'm",
      role: "Full Stack Developer",
      description:
        "Specializing in modern web technologies, AI integration, and cloud infrastructure. Building innovative solutions with React, Node.js, and Django.",
      downloadCV: "Download CV",
    },
    about: {
      title: "About Me",
      subtitle:
        "Full Stack Developer with expertise in modern web technologies, AI integration, and cloud infrastructure.",
      paragraph1:
        "I'm a passionate Full Stack Developer with a strong background in software engineering and a focus on creating innovative solutions. Currently pursuing a degree in Software Engineering at the University of Brasília, I combine academic knowledge with practical experience in the industry.",
      paragraph2:
        "My expertise spans across frontend and backend development, with a particular interest in AI technologies, natural language processing, and cloud infrastructure. I enjoy building scalable applications that solve real-world problems.",
      paragraph3:
        "When I'm not coding, I'm expanding my knowledge in new technologies or languages - both programming and human ones!",
      phone: "Phone",
      email: "Email",
      location: "Location",
    },
    experience: {
      title: "Experience & Education",
      subtitle: "My professional journey and educational background",
      work: {
        title: "Work",
        items: [
          {
            title: "Developer",
            company: "Natural Fluency",
            period: "11/2024 - present",
            description: [
              "Development of AI agents and prompts",
              "Integration with LLMs",
              "REST APIs with Django",
              "Interactive interfaces in React and React Native",
              "Use of SQL databases",
            ],
            skills: ["AI", "Django", "React", "React Native", "SQL"],
          },
          {
            title: "Internship",
            company: "National Electric Energy Agency - ANEEL",
            period: "04/2022 - 12/2024",
            description: [
              "Development of AI agents and prompts for Technical Notes evaluation",
              "Black box testing",
              "Data validation in the OPEE repository",
            ],
            skills: ["AI", "Testing", "Data Validation"],
          },
          {
            title: "Scholar",
            company: "Lab Telecom UnB",
            period: "09/2022 - present",
            description: [
              "Development of REST APIs with Express.js and Node.js",
              "Integration with SQL databases",
              "Creation of interfaces in React and WordPress",
              "Infrastructure virtualization with OpenStack",
              "Laboratory network and cloud management",
            ],
            skills: ["Node.js", "Express", "React", "WordPress", "OpenStack", "Cloud"],
          },
          {
            title: "Scholar",
            company: "Metala Nano",
            period: "07/2024 - 12/2024",
            description: ["Website development", "Organization of company documentation (pitch and business case)"],
            skills: ["Web Development", "Documentation"],
          },
        ],
      },
      education: {
        title: "Education",
        items: [
          {
            title: "Software Engineering",
            company: "University of Brasília",
            period: "2023 - 2026",
            description: ["In progress"],
            skills: [],
          },
          {
            title: "FullStack Web Dev Bootcamp",
            company: "Driven Education",
            period: "2022",
            description: ["Completed"],
            skills: ["HTML", "CSS", "Javascript", "React", "Node", "Express", "SQL", "MongoDB", "Redis", "Jest"],
          },
        ],
      },
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "My technical skills and areas of expertise",
      programming: "Programming",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      ai: "AI",
      languages: "Languages",
      cloud: "Cloud",
      soft: "Soft Skills",
      categories: {
        programming: {
          name: "Programming",
          skills: [
            { name: "JavaScript", level: 90 },
            { name: "TypeScript", level: 80 },
            { name: "Python", level: 70 },
            { name: "Java", level: 45 },
            { name: "C/C++", level: 60 },
          ],
        },
        frontend: {
          name: "Frontend",
          skills: [
            { name: "React", level: 90 },
            { name: "React Native", level: 85 },
            { name: "HTML & CSS", level: 90 },
            { name: "Vue.js", level: 70 },
            { name: "Next.js", level: 60 },
            { name: "WordPress", level: 80 },
          ],
        },
        backend: {
          name: "Backend",
          skills: [
            { name: "Node.js", level: 80 },
            { name: "Express", level: 80 },
            { name: "Django", level: 70 },
            { name: "Spring Boot", level: 45 },
          ],
        },
        bancos: {
          name: "Bancos de Dados",
          skills: [
            { name: "SQL", level: 85 },
            { name: "PostgreSQL", level: 80 },
            { name: "MySQL", level: 70 },
            { name: "MongoDB", level: 70 },
            { name: "Redis", level: 40 },
          ],
        },
        devops: {
          name: "DevOps",
          skills: [
            { name: "Gitflow", level: 65 },
            { name: "Docker", level: 80 },
            { name: "Kubernetes", level: 60 },
            { name: "CI/CD Github", level: 65 },
            { name: "Unit Testing", level: 75 },
          ],
        },
        ai: {
          name: "AI",
          skills: [
            { name: "Prompt Engineering", level: 80 },
            { name: "LLM Integration", level: 90 },
            { name: "NLP", level: 75 },
            { name: "RAG", level: 60 },
            { name: "AI Agents", level: 50 },
          ],
        },
        languages: {
          name: "Languages",
          skills: [
            { name: "Portuguese", level: 100 },
            { name: "English", level: 60 },
            { name: "German", level: 25 },
            { name: "Esperanto", level: 25 },
          ],
        },
        cloud: {
          name: "Cloud",
          skills: [
            { name: "OpenStack", level: 60 },
            { name: "AWS", level: 50 },
            { name: "Azure", level: 50 },
            { name: "Virtualization", level: 60 },
            { name: "Network Security", level: 50 },
          ],
        },
        soft: {
          name: "Soft Skills",
          skills: [
            { name: "Communication", level: 90 },
            { name: "Leadership", level: 85 },
            { name: "Fast Learning", level: 85 },
            { name: "Problem Solving", level: 90 },
            { name: "Teamwork", level: 85 },
          ],
        },
      },
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of my recent work and personal projects",
      filterProjects: "Filter Projects",
      allProjects: "All Projects",
      demo: "Demo",
      code: "Code",
      items: [
        {
          title: "AI Document Analyzer",
          description:
            "An AI-powered tool that analyzes technical documents and extracts key information using NLP techniques.",
          tags: ["AI", "NLP", "Python", "Django", "React"],
        },
        {
          title: "Cloud Infrastructure Dashboard",
          description: "A dashboard for monitoring and managing cloud infrastructure with real-time analytics.",
          tags: ["React", "Node.js", "OpenStack", "Cloud", "Docker"],
        },
        {
          title: "Mobile Learning Platform",
          description: "A cross-platform mobile app for interactive learning with personalized content.",
          tags: ["React Native", "Node.js", "MongoDB", "AI"],
        },
        {
          title: "API Gateway Service",
          description: "A scalable API gateway service with authentication, rate limiting, and request routing.",
          tags: ["Express.js", "Node.js", "Docker", "Kubernetes"],
        },
        {
          title: "Smart Home Automation",
          description: "An IoT-based smart home automation system with voice control and mobile app.",
          tags: ["IoT", "React", "Node.js", "C++", "AI"],
        },
        {
          title: "E-commerce Platform",
          description: "A full-featured e-commerce platform with payment integration and inventory management.",
          tags: ["React", "Node.js", "SQL", "Redis"],
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Have a question or want to work together? Feel free to contact me!",
      name: "Name",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      message: "Message",
      sending: "Sending...",
      send: "Send Message",
      messageSent: "Message sent!",
      messageSentDesc: "Thank you for your message. I'll get back to you soon.",
      location: "Location",
      locationValue: "Asa Norte, Brasília - DF",
    },
    footer: {
      copyright: "All rights reserved.",
      role: "Full Stack Developer | AI Specialist",
    },
    gameMenu: {
      title: "Portfolio Adventure",
      stats: "Stats",
      achievements: "Achievements",
      settings: "Settings",
      sectionsDiscovered: "Sections Discovered",
      background: "Background",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      unlockMore: "Unlock more sections to increase your score!",
      achievementLocked: "Achievement locked",
      sound: "Sound",
      theme: "Theme",
      language: "Language",
      resetProgress: "Reset Progress",
      resetDesc: "Start the adventure from the beginning",
      returnToStart: "Return to Start",
      returnDesc: "Go back to the start screen",
      resume: "Resume Adventure",
      reset: "Reset",
      start: "Start",
    },
    achievements: {
      aboutUnlocked: {
        name: "Background Discovered",
        description: "Learned about Kauan's background",
      },
      experienceUnlocked: {
        name: "Experience Explorer",
        description: "Discovered professional journey",
      },
      skillsUnlocked: {
        name: "Skill Seeker",
        description: "Uncovered technical abilities",
      },
      projectsUnlocked: {
        name: "Project Prospector",
        description: "Explored portfolio projects",
      },
      contactUnlocked: {
        name: "Contact Connector",
        description: "Reached the contact section",
      },
    },
  },
  pt: {
    common: {
      level: "NÍVEL",
      progress: "Progresso",
      score: "Pontuação",
      scrollDown: "Role para baixo para continuar",
    },
    nav: {
      home: "Início",
      about: "Sobre",
      experience: "Experiência",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contato",
    },
    startScreen: {
      title: "AVENTURA DE PORTFÓLIO",
      loading: "Carregando recursos...",
      startButton: "INICIAR AVENTURA",
      scrollToExplore: "Role para baixo para explorar após iniciar",
      navigate: "Navegue pela minha jornada profissional nesta experiência interativa",
      soundOff: "Som Desligado",
      soundOn: "Som Ligado",
      light: "Claro",
      dark: "Escuro",
      controls: "Use as setas para navegar | Pressione ESPAÇO para interagir | ESC para pausar",
    },
    hero: {
      adventureMode: "MODO AVENTURA",
      greeting: "Olá, eu sou",
      role: "Desenvolvedor Full Stack",
      description:
        "Especializado em tecnologias web modernas, integração de IA e infraestrutura em nuvem. Construindo soluções inovadoras com React, Node.js e Django.",
      downloadCV: "Baixar CV",
    },
    about: {
      title: "Sobre Mim",
      subtitle:
        "Desenvolvedor Full Stack com expertise em tecnologias web modernas, integração de IA e infraestrutura em nuvem.",
      paragraph1:
        "Sou um Desenvolvedor Full Stack apaixonado com forte experiência em engenharia de software e foco na criação de soluções inovadoras. Atualmente cursando Engenharia de Software na Universidade de Brasília, combino conhecimento acadêmico com experiência prática na indústria.",
      paragraph2:
        "Minha expertise abrange desenvolvimento frontend e backend, com interesse particular em tecnologias de IA, processamento de linguagem natural e infraestrutura em nuvem. Gosto de construir aplicações escaláveis que resolvem problemas do mundo real.",
      paragraph3:
        "Quando não estou codificando, estou expandindo meu conhecimento em novas tecnologias ou idiomas - tanto de programação quanto humanos!",
      phone: "Telefone",
      email: "Email",
      location: "Localização",
    },
    experience: {
      title: "Experiência & Educação",
      subtitle: "Minha jornada profissional e formação acadêmica",
      work: {
        title: "Trabalho",
        items: [
          {
            title: "Desenvolvedor",
            company: "Natural Fluency",
            period: "11/2024 - atual",
            description: [
              "Desenvolvimento de agentes e prompts de IA",
              "Integração com LLMs",
              "APIs REST com Django",
              "Interfaces interativas em React e React Native",
              "Uso de Bancos de dados SQL",
            ],
            skills: "IA,Django,React,React Native,SQL",
          },
          {
            title: "Estágio",
            company: "Agência Nacional de Energia Elétrica - ANEEL",
            period: "04/2022 - 12/2024",
            description: [
              "Desenvolvimento de agentes e prompts de IA para avaliação de Notas Técnicas",
              "Testes de caixa preta",
              "Validação de dados no repositório OPEE",
            ],
            skills: "IA,Testes,Validação de Dados",
          },
          {
            title: "Bolsista",
            company: "Lab Telecom UnB",
            period: "09/2022 - atual",
            description: [
              "Desenvolvimento de APIs REST com Express.js e Node.js",
              "Integração com bancos de dados SQL",
              "Criação de interfaces em React e WordPress",
              "Virtualização de infraestrutura com OpenStack",
              "Gestão da rede e nuvem do laboratório",
            ],
            skills: "Node.js,Express,React,WordPress,OpenStack,Nuvem",
          },
          {
            title: "Bolsista",
            company: "Metala Nano",
            period: "07/2024 - 12/2024",
            description: ["Desenvolvimento do site", "Organização da documentação da empresa (pitch e business case)"],
            skills: "Desenvolvimento Web,Documentação",
          },
        ],
      },
      education: {
        title: "Educação",
        items: [
          {
            title: "Engenharia de Software",
            company: "Universidade de Brasília",
            period: "2023 - 2026",
            description: ["Em andamento"],
            skills: "",
          },
          {
            title: "Bootcamp de Dev Web FullStack",
            company: "Driven Education",
            period: "2022",
            description: ["Finalizado"],
            skills: "HTML,CSS,Javascript,React,Node,Express,SQL,MongoDB,Redis,Jest",
          },
        ],
      },
    },
    skills: {
      title: "Habilidades & Expertise",
      subtitle: "Minhas habilidades técnicas e áreas de especialização",
      programming: "Programação",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      ai: "IA",
      languages: "Idiomas",
      cloud: "Nuvem",
      soft: "Habilidades Interpessoais",
      categories: {
        programming: {
          name: "Programação",
          skills: [
            { name: "JavaScript", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "Python", level: 80 },
            { name: "Java", level: 70 },
            { name: "C/C++", level: 75 },
          ],
        },
        frontend: {
          name: "Frontend",
          skills: [
            { name: "React", level: 90 },
            { name: "React Native", level: 85 },
            { name: "HTML & CSS", level: 95 },
            { name: "Vue.js", level: 70 },
            { name: "WordPress", level: 75 },
          ],
        },
        backend: {
          name: "Backend",
          skills: [
            { name: "Node.js", level: 85 },
            { name: "Django", level: 80 },
            { name: "Spring Boot", level: 65 },
            { name: "SQL", level: 85 },
            { name: "MongoDB", level: 75 },
          ],
        },
        devops: {
          name: "DevOps",
          skills: [
            { name: "Gitflow", level: 85 },
            { name: "Docker", level: 80 },
            { name: "Kubernetes", level: 65 },
            { name: "CI/CD Github", level: 75 },
            { name: "Testes Unitários", level: 80 },
          ],
        },
        ai: {
          name: "IA",
          skills: [
            { name: "Engenharia de Prompts", level: 90 },
            { name: "Integração com LLMs", level: 85 },
            { name: "PLN", level: 75 },
            { name: "Machine Learning", level: 70 },
            { name: "Agentes de IA", level: 80 },
          ],
        },
        languages: {
          name: "Idiomas",
          skills: [
            { name: "Português", level: 100 },
            { name: "Inglês", level: 75 },
            { name: "Alemão", level: 30 },
            { name: "Esperanto", level: 35 },
          ],
        },
        cloud: {
          name: "Nuvem",
          skills: [
            { name: "OpenStack", level: 80 },
            { name: "AWS", level: 70 },
            { name: "Azure", level: 65 },
            { name: "Virtualização", level: 85 },
            { name: "Segurança de Rede", level: 75 },
          ],
        },
        soft: {
          name: "Habilidades Interpessoais",
          skills: [
            { name: "Comunicação", level: 90 },
            { name: "Liderança", level: 85 },
            { name: "Aprendizado Rápido", level: 95 },
            { name: "Resolução de Problemas", level: 90 },
            { name: "Trabalho em Equipe", level: 85 },
          ],
        },
      },
    },
    projects: {
      title: "Projetos",
      subtitle: "Uma seleção dos meus trabalhos recentes e projetos pessoais",
      filterProjects: "Filtrar Projetos",
      allProjects: "Todos os Projetos",
      demo: "Demo",
      code: "Código",
      items: [
        {
          title: "Analisador de Documentos com IA",
          description:
            "Uma ferramenta baseada em IA que analisa documentos técnicos e extrai informações-chave usando técnicas de PLN.",
          tags: ["IA", "PLN", "Python", "Django", "React"],
        },
        {
          title: "Dashboard de Infraestrutura em Nuvem",
          description: "Um painel para monitorar e gerenciar infraestrutura em nuvem com análises em tempo real.",
          tags: ["React", "Node.js", "OpenStack", "Nuvem", "Docker"],
        },
        {
          title: "Plataforma de Aprendizado Mobile",
          description: "Um aplicativo móvel multiplataforma para aprendizado interativo com conteúdo personalizado.",
          tags: ["React Native", "Node.js", "MongoDB", "IA"],
        },
        {
          title: "Serviço de API Gateway",
          description:
            "Um serviço de API gateway escalável com autenticação, limitação de taxa e roteamento de requisições.",
          tags: ["Express.js", "Node.js", "Docker", "Kubernetes"],
        },
        {
          title: "Automação Residencial Inteligente",
          description: "Um sistema de automação residencial baseado em IoT com controle por voz e aplicativo móvel.",
          tags: ["IoT", "React", "Node.js", "C++", "IA"],
        },
        {
          title: "Plataforma de E-commerce",
          description: "Uma plataforma de e-commerce completa com integração de pagamento e gerenciamento de estoque.",
          tags: ["React", "Node.js", "SQL", "Redis"],
        },
      ],
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Tem uma pergunta ou quer trabalhar junto? Sinta-se à vontade para me contatar!",
      name: "Nome",
      email: "Email",
      phone: "Telefone",
      subject: "Assunto",
      message: "Mensagem",
      sending: "Enviando...",
      send: "Enviar Mensagem",
      messageSent: "Mensagem enviada!",
      messageSentDesc: "Obrigado pela sua mensagem. Entrarei em contato em breve.",
      location: "Localização",
      locationValue: "Asa Norte, Brasília - DF",
    },
    footer: {
      copyright: "Todos os direitos reservados.",
      role: "Desenvolvedor Full Stack | Especialista em IA",
    },
    gameMenu: {
      title: "Aventura de Portfólio",
      stats: "Estatísticas",
      achievements: "Conquistas",
      settings: "Configurações",
      sectionsDiscobertas: "Seções Descobertas",
      background: "Histórico",
      experience: "Experiência",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contato",
      unlockMore: "Desbloqueie mais seções para aumentar sua pontuação!",
      achievementLocked: "Conquista bloqueada",
      sound: "Som",
      theme: "Tema",
      language: "Idioma",
      resetProgress: "Reiniciar Progresso",
      resetDesc: "Comece a aventura do início",
      returnToStart: "Voltar ao Início",
      returnDesc: "Voltar para a tela inicial",
      resume: "Continuar Aventura",
      reset: "Reiniciar",
      start: "Início",
    },
    achievements: {
      aboutUnlocked: {
        name: "Histórico Descoberto",
        description: "Aprendeu sobre o histórico de Kauan",
      },
      experienceUnlocked: {
        name: "Explorador de Experiência",
        description: "Descobriu a jornada profissional",
      },
      skillsUnlocked: {
        name: "Buscador de Habilidades",
        description: "Descobriu habilidades técnicas",
      },
      projectsUnlocked: {
        name: "Prospector de Projetos",
        description: "Explorou projetos do portfólio",
      },
      contactUnlocked: {
        name: "Conector de Contato",
        description: "Alcançou a seção de contato",
      },
    },
  },
  de: {
    common: {
      level: "STUFE",
      progress: "Fortschritt",
      score: "Punktzahl",
      scrollDown: "Nach unten scrollen, um fortzufahren",
    },
    nav: {
      home: "Startseite",
      about: "Über mich",
      experience: "Erfahrung",
      skills: "Fähigkeiten",
      projects: "Projekte",
      contact: "Kontakt",
    },
    startScreen: {
      title: "PORTFOLIO-ABENTEUER",
      loading: "Lade Ressourcen...",
      startButton: "ABENTEUER STARTEN",
      scrollToExplore: "Nach unten scrollen, um nach dem Start zu erkunden",
      navigate: "Navigieren Sie durch meine berufliche Reise in dieser interaktiven Erfahrung",
      soundOff: "Ton aus",
      soundOn: "Ton an",
      light: "Hell",
      dark: "Dunkel",
      controls: "Pfeiltasten zum Navigieren | LEERTASTE zum Interagieren | ESC zum Pausieren",
    },
    hero: {
      adventureMode: "ABENTEUERMODUS",
      greeting: "Hallo, ich bin",
      role: "Full-Stack-Entwickler",
      description:
        "Spezialisiert auf moderne Webtechnologien, KI-Integration und Cloud-Infrastruktur. Entwicklung innovativer Lösungen mit React, Node.js und Django.",
      downloadCV: "Lebenslauf herunterladen",
    },
    about: {
      title: "Über Mich",
      subtitle:
        "Full-Stack-Entwickler mit Expertise in modernen Webtechnologien, KI-Integration und Cloud-Infrastruktur.",
      paragraph1:
        "Ich bin ein leidenschaftlicher Full-Stack-Entwickler mit einem starken Hintergrund in Softwareentwicklung und einem Fokus auf die Erstellung innovativer Lösungen. Derzeit studiere ich Softwareentwicklung an der Universität von Brasília und kombiniere akademisches Wissen mit praktischer Erfahrung in der Industrie.",
      paragraph2:
        "Meine Expertise erstreckt sich über Frontend- und Backend-Entwicklung, mit besonderem Interesse an KI-Technologien, natürlicher Sprachverarbeitung und Cloud-Infrastruktur. Ich entwickle gerne skalierbare Anwendungen, die reale Probleme lösen.",
      paragraph3:
        "Wenn ich nicht programmiere, erweitere ich mein Wissen in neuen Technologien oder Sprachen - sowohl Programmier- als auch menschliche Sprachen!",
      phone: "Telefon",
      email: "E-Mail",
      location: "Standort",
    },
    experience: {
      title: "Erfahrung & Ausbildung",
      subtitle: "Meine berufliche Reise und akademischer Hintergrund",
      work: {
        title: "Arbeit",
        items: [
          {
            title: "Entwickler",
            period: "11/2024 - heute",
            description: [
              "Entwicklung von KI-Agenten und Prompts",
              "Integration mit LLMs",
              "REST-APIs mit Django",
              "Interaktive Schnittstellen in React und React Native",
              "Verwendung von SQL-Datenbanken",
            ],
            skills: "KI,Django,React,React Native,SQL",
          },
          {
            title: "Praktikum",
            company: "Nationale Agentur für Elektroenergie - ANEEL",
            period: "04/2022 - 12/2024",
            description: [
              "Entwicklung von KI-Agenten und Prompts zur Bewertung technischer Hinweise",
              "Black-Box-Tests",
              "Datenvalidierung im OPEE-Repository",
            ],
            skills: "KI,Tests,Datenvalidierung",
          },
          {
            title: "Stipendiat",
            company: "Lab Telecom UnB",
            period: "09/2022 - heute",
            description: [
              "Entwicklung von REST-APIs mit Express.js und Node.js",
              "Integration mit SQL-Datenbanken",
              "Erstellung von Schnittstellen in React und WordPress",
              "Infrastrukturvirtualisierung mit OpenStack",
              "Verwaltung des Labornetzwerks und der Cloud",
            ],
            skills: "Node.js,Express,React,WordPress,OpenStack,Cloud",
          },
          {
            title: "Stipendiat",
            company: "Metala Nano",
            period: "07/2024 - 12/2024",
            description: [
              "Website-Entwicklung",
              "Organisation der Unternehmensdokumentation (Pitch und Business Case)",
            ],
            skills: "Web-Entwicklung,Dokumentation",
          },
        ],
      },
      education: {
        title: "Bildung",
        items: [
          {
            title: "Softwareentwicklung",
            company: "Universität von Brasília",
            period: "2023 - 2026",
            description: ["In Bearbeitung"],
            skills: "",
          },
          {
            title: "FullStack Web Dev Bootcamp",
            company: "Driven Education",
            period: "2022",
            description: ["Abgeschlossen"],
            skills: "HTML,CSS,Javascript,React,Node,Express,SQL,MongoDB,Redis,Jest",
          },
        ],
      },
    },
    skills: {
      title: "Fähigkeiten & Expertise",
      subtitle: "Meine technischen Fähigkeiten und Fachgebiete",
      programming: "Programmierung",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      ai: "KI",
      languages: "Sprachen",
      cloud: "Cloud",
      soft: "Soft Skills",
      categories: {
        programming: {
          name: "Programmierung",
          skills: [
            { name: "JavaScript", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "Python", level: 80 },
            { name: "Java", level: 70 },
            { name: "C/C++", level: 75 },
          ],
        },
        frontend: {
          name: "Frontend",
          skills: [
            { name: "React", level: 90 },
            { name: "React Native", level: 85 },
            { name: "HTML & CSS", level: 95 },
            { name: "Vue.js", level: 70 },
            { name: "WordPress", level: 75 },
          ],
        },
        backend: {
          name: "Backend",
          skills: [
            { name: "Node.js", level: 85 },
            { name: "Django", level: 80 },
            { name: "Spring Boot", level: 65 },
            { name: "SQL", level: 85 },
            { name: "MongoDB", level: 75 },
          ],
        },
        devops: {
          name: "DevOps",
          skills: [
            { name: "Gitflow", level: 85 },
            { name: "Docker", level: 80 },
            { name: "Kubernetes", level: 65 },
            { name: "CI/CD Github", level: 75 },
            { name: "Unit-Tests", level: 80 },
          ],
        },
        ai: {
          name: "KI",
          skills: [
            { name: "Prompt-Engineering", level: 90 },
            { name: "LLM-Integration", level: 85 },
            { name: "NLP", level: 75 },
            { name: "Machine Learning", level: 70 },
            { name: "KI-Agenten", level: 80 },
          ],
        },
        languages: {
          name: "Sprachen",
          skills: [
            { name: "Portugiesisch", level: 100 },
            { name: "Englisch", level: 75 },
            { name: "Deutsch", level: 30 },
            { name: "Esperanto", level: 35 },
          ],
        },
        cloud: {
          name: "Cloud",
          skills: [
            { name: "OpenStack", level: 80 },
            { name: "AWS", level: 70 },
            { name: "Azure", level: 65 },
            { name: "Virtualisierung", level: 85 },
            { name: "Netzwerksicherheit", level: 75 },
          ],
        },
        soft: {
          name: "Soft Skills",
          skills: [
            { name: "Kommunikation", level: 90 },
            { name: "Führung", level: 85 },
            { name: "Schnelles Lernen", level: 95 },
            { name: "Problemlösung", level: 90 },
            { name: "Teamarbeit", level: 85 },
          ],
        },
      },
    },
    projects: {
      title: "Projekte",
      subtitle: "Eine Auswahl meiner neuesten Arbeiten und persönlichen Projekte",
      filterProjects: "Projekte filtern",
      allProjects: "Alle Projekte",
      demo: "Demo",
      code: "Code",
      items: [
        {
          title: "KI-Dokumentenanalyse",
          description:
            "Ein KI-gestütztes Tool, das technische Dokumente analysiert und wichtige Informationen mit NLP-Techniken extrahiert.",
          tags: ["KI", "NLP", "Python", "Django", "React"],
        },
        {
          title: "Cloud-Infrastruktur-Dashboard",
          description: "Ein Dashboard zur Überwachung und Verwaltung der Cloud-Infrastruktur mit Echtzeit-Analysen.",
          tags: ["React", "Node.js", "OpenStack", "Cloud", "Docker"],
        },
        {
          title: "Mobile Lernplattform",
          description: "Eine plattformübergreifende mobile App für interaktives Lernen mit personalisierten Inhalten.",
          tags: ["React Native", "Node.js", "MongoDB", "KI"],
        },
        {
          title: "API-Gateway-Dienst",
          description:
            "Ein skalierbarer API-Gateway-Dienst mit Authentifizierung, Ratenbegrenzung und Anforderungsrouting.",
          tags: ["Express.js", "Node.js", "Docker", "Kubernetes"],
        },
        {
          title: "Smart Home Automation",
          description: "Ein IoT-basiertes Smart-Home-Automatisierungssystem mit Sprachsteuerung und mobiler App.",
          tags: ["IoT", "React", "Node.js", "C++", "KI"],
        },
        {
          title: "E-Commerce-Plattform",
          description: "Eine vollständige E-Commerce-Plattform mit Zahlungsintegration und Bestandsverwaltung.",
          tags: ["React", "Node.js", "SQL", "Redis"],
        },
      ],
    },
    contact: {
      title: "Kontakt aufnehmen",
      subtitle: "Haben Sie eine Frage oder möchten Sie zusammenarbeiten? Kontaktieren Sie mich gerne!",
      name: "Name",
      email: "E-Mail",
      phone: "Telefon",
      subject: "Betreff",
      message: "Nachricht",
      sending: "Senden...",
      send: "Nachricht senden",
      messageSent: "Nachricht gesendet!",
      messageSentDesc: "Vielen Dank für Ihre Nachricht. Ich werde mich in Kürze bei Ihnen melden.",
      location: "Standort",
      locationValue: "Asa Norte, Brasília - DF",
    },
    footer: {
      copyright: "Alle Rechte vorbehalten.",
      role: "Full-Stack-Entwickler | KI-Spezialist",
    },
    gameMenu: {
      title: "Portfolio-Abenteuer",
      stats: "Statistiken",
      achievements: "Erfolge",
      settings: "Einstellungen",
      sectionsDiscovered: "Entdeckte Abschnitte",
      background: "Hintergrund",
      experience: "Erfahrung",
      skills: "Fähigkeiten",
      projects: "Projekte",
      contact: "Kontakt",
      unlockMore: "Schalten Sie mehr Abschnitte frei, um Ihre Punktzahl zu erhöhen!",
      achievementLocked: "Erfolg gesperrt",
      sound: "Ton",
      theme: "Thema",
      language: "Sprache",
      resetProgress: "Fortschritt zurücksetzen",
      resetDesc: "Starten Sie das Abenteuer von Anfang an",
      returnToStart: "Zurück zum Start",
      returnDesc: "Zurück zum Startbildschirm",
      resume: "Abenteuer fortsetzen",
      reset: "Zurücksetzen",
      start: "Start",
    },
    achievements: {
      aboutUnlocked: {
        name: "Hintergrund entdeckt",
        description: "Über Kauans Hintergrund gelernt",
      },
      experienceUnlocked: {
        name: "Erfahrungserforscher",
        description: "Berufliche Reise entdeckt",
      },
      skillsUnlocked: {
        name: "Fähigkeitensucher",
        description: "Technische Fähigkeiten aufgedeckt",
      },
      projectsUnlocked: {
        name: "Projektprospekteur",
        description: "Portfolio-Projekte erkundet",
      },
      contactUnlocked: {
        name: "Kontaktverbinder",
        description: "Kontaktbereich erreicht",
      },
    },
  },
  eo: {
    common: {
      level: "NIVELO",
      progress: "Progreso",
      score: "Poentaro",
      scrollDown: "Rulumu malsupren por daŭrigi",
    },
    nav: {
      home: "Hejmo",
      about: "Pri",
      experience: "Sperto",
      skills: "Kapabloj",
      projects: "Projektoj",
      contact: "Kontakto",
    },
    startScreen: {
      title: "PORTFOLIA AVENTURO",
      loading: "Ŝargante rimedojn...",
      startButton: "KOMENCI AVENTURON",
      scrollToExplore: "Rulumu malsupren por esplori post komenco",
      navigate: "Navigu tra mia profesia vojaĝo en ĉi tiu interaga sperto",
      soundOff: "Sono Malŝaltita",
      soundOn: "Sono Ŝaltita",
      light: "Hela",
      dark: "Malhela",
      controls: "Uzu sagoklavojn por navigi | Premu SPACETON por interagi | ESC por paŭzi",
    },
    hero: {
      adventureMode: "AVENTURA REĜIMO",
      greeting: "Saluton, mi estas",
      role: "Tutpila Programisto",
      description:
        "Specialiĝinta pri modernaj retteknologioj, AI-integriĝo, kaj nuba infrastrukturo. Konstruante novigajn solvojn per React, Node.js, kaj Django.",
      downloadCV: "Elŝuti CV",
    },
    about: {
      title: "Pri Mi",
      subtitle: "Tutpila Programisto kun sperto pri modernaj retteknologioj, AI-integriĝo, kaj nuba infrastrukturo.",
      paragraph1:
        "Mi estas pasia Tutpila Programisto kun forta fono en programara inĝenierado kaj fokuso pri kreado de novigaj solvoj. Nuntempe studante Programaran Inĝenieradon ĉe la Universitato de Braziljo, mi kombinas akademian scion kun praktika sperto en la industrio.",
      paragraph2:
        "Mia sperto etendiĝas tra frontenda kaj malantaŭenda programado, kun aparta intereso pri AI-teknologioj, natura lingva procezado, kaj nuba infrastrukturo. Mi ĝuas konstrui skaleblan aplikaĵojn kiuj solvas realajn problemojn.",
      paragraph3:
        "Kiam mi ne programas, mi plivastigas mian scion pri novaj teknologioj aŭ lingvoj - ambaŭ programaj kaj homaj!",
      phone: "Telefono",
      email: "Retpoŝto",
      location: "Loko",
    },
    experience: {
      title: "Sperto & Edukado",
      subtitle: "Mia profesia vojaĝo kaj eduka fono",
      work: {
        title: "Laboro",
        items: [
          {
            title: "Programisto",
            period: "11/2024 - nune",
            description: [
              "Disvolvado de AI-agentoj kaj sugestoj",
              "Integriĝo kun LLMs",
              "REST-APIoj kun Django",
              "Interagaj interfacoj en React kaj React Native",
              "Uzo de SQL-datumbazoj",
            ],
            skills: "AI,Django,React,React Native,SQL",
          },
          {
            title: "Staĝo",
            period: "04/2022 - 12/2024",
            description: [
              "Disvolvado de AI-agentoj kaj sugestoj por taksado de Teknikaj Notoj",
              "Nigra skatola testado",
              "Datuma validigo en la OPEE-deponejo",
            ],
            skills: "AI,Testado,Datuma Validigo",
          },
          {
            title: "Stipendiulo",
            company: "Lab Telecom UnB",
            period: "09/2022 - nune",
            description: [
              "Disvolvado de REST-APIoj kun Express.js kaj Node.js",
              "Integriĝo kun SQL-datumbazoj",
              "Kreado de interfacoj en React kaj WordPress",
              "Infrastruktura virtualigo kun OpenStack",
              "Administrado de la laboratorio-reto kaj nubo",
            ],
            skills: "Node.js,Express,React,WordPress,OpenStack,Nubo",
          },
          {
            title: "Stipendiulo",
            company: "Metala Nano",
            period: "07/2024 - 12/2024",
            description: ["Reteja disvolvado", "Organizado de kompania dokumentado (prezento kaj negoca kazo)"],
            skills: "Reteja Disvolvado,Dokumentado",
          },
        ],
      },
      education: {
        title: "Edukado",
        items: [
          {
            title: "Programara Inĝenierado",
            company: "Universitato de Braziljo",
            period: "2023 - 2026",
            description: ["En progreso"],
            skills: "",
          },
          {
            title: "Tutpila Reteja Programada Trejnkurso",
            company: "Driven Education",
            period: "2022",
            description: ["Finita"],
            skills: "HTML,CSS,Javascript,React,Node,Express,SQL,MongoDB,Redis,Jest",
          },
        ],
      },
    },
    skills: {
      title: "Kapabloj & Spertizo",
      subtitle: "Miaj teknikaj kapabloj kaj spertizaj kampoj",
      programming: "Programado",
      frontend: "Frontendo",
      backend: "Malantaŭendo",
      devops: "DevOps",
      ai: "AI",
      languages: "Lingvoj",
      cloud: "Nubo",
      soft: "Molaj Kapabloj",
      categories: {
        programming: {
          name: "Programado",
          skills: [
            { name: "JavaScript", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "Python", level: 80 },
            { name: "Java", level: 70 },
            { name: "C/C++", level: 75 },
          ],
        },
        frontend: {
          name: "Frontendo",
          skills: [
            { name: "React", level: 90 },
            { name: "React Native", level: 85 },
            { name: "HTML & CSS", level: 95 },
            { name: "Vue.js", level: 70 },
            { name: "WordPress", level: 75 },
          ],
        },
        backend: {
          name: "Malantaŭendo",
          skills: [
            { name: "Node.js", level: 85 },
            { name: "Django", level: 80 },
            { name: "Spring Boot", level: 65 },
            { name: "SQL", level: 85 },
            { name: "MongoDB", level: 75 },
          ],
        },
        devops: {
          name: "DevOps",
          skills: [
            { name: "Gitflow", level: 85 },
            { name: "Docker", level: 80 },
            { name: "Kubernetes", level: 65 },
            { name: "CI/CD Github", level: 75 },
            { name: "Unueca Testado", level: 80 },
          ],
        },
        ai: {
          name: "AI",
          skills: [
            { name: "Sugesta Inĝenierado", level: 90 },
            { name: "LLM-Integriĝo", level: 85 },
            { name: "NLP", level: 75 },
            { name: "Maŝina Lernado", level: 70 },
            { name: "AI-Agentoj", level: 80 },
          ],
        },
        languages: {
          name: "Lingvoj",
          skills: [
            { name: "Portugala", level: 100 },
            { name: "Angla", level: 75 },
            { name: "Germana", level: 30 },
            { name: "Esperanto", level: 35 },
          ],
        },
        cloud: {
          name: "Nubo",
          skills: [
            { name: "OpenStack", level: 80 },
            { name: "AWS", level: 70 },
            { name: "Azure", level: 65 },
            { name: "Virtualigo", level: 85 },
            { name: "Reta Sekureco", level: 75 },
          ],
        },
        soft: {
          name: "Molaj Kapabloj",
          skills: [
            { name: "Komunikado", level: 90 },
            { name: "Gvidado", level: 85 },
            { name: "Rapida Lernado", level: 95 },
            { name: "Problemsolvado", level: 90 },
            { name: "Teamlaboro", level: 85 },
          ],
        },
      },
    },
    projects: {
      title: "Projektoj",
      subtitle: "Elekto de miaj lastaj laboroj kaj personaj projektoj",
      filterProjects: "Filtri Projektojn",
      allProjects: "Ĉiuj Projektoj",
      demo: "Demo",
      code: "Kodo",
      items: [
        {
          title: "AI-Dokumenta Analizilo",
          description:
            "AI-povigita ilo kiu analizas teknikajn dokumentojn kaj eltiras ŝlosilajn informojn uzante NLP-teknikojn.",
          tags: ["AI", "NLP", "Python", "Django", "React"],
        },
        {
          title: "Nuba Infrastruktura Panelo",
          description: "Panelo por monitorado kaj administrado de nuba infrastrukturo kun realtempaj analizoj.",
          tags: ["React", "Node.js", "OpenStack", "Nubo", "Docker"],
        },
        {
          title: "Poŝtelefona Lernada Platformo",
          description: "Transplatforma poŝtelefona aplikaĵo por interaga lernado kun personecigita enhavo.",
          tags: ["React Native", "Node.js", "MongoDB", "AI"],
        },
        {
          title: "API-Pordega Servo",
          description: "Skalebla API-pordega servo kun aŭtentikigo, rapidlimigo, kaj peta direktado.",
          tags: ["Express.js", "Node.js", "Docker", "Kubernetes"],
        },
        {
          title: "Inteligenta Hejma Aŭtomatigo",
          description: "IoT-bazita inteligenta hejma aŭtomatiga sistemo kun voĉa kontrolo kaj poŝtelefona aplikaĵo.",
          tags: ["IoT", "React", "Node.js", "C++", "AI"],
        },
        {
          title: "Elektronika Komerca Platformo",
          description: "Plena elektronika komerca platformo kun paga integriĝo kaj stoka administrado.",
          tags: ["React", "Node.js", "SQL", "Redis"],
        },
      ],
    },
    contact: {
      title: "Kontaktu Min",
      subtitle: "Ĉu vi havas demandon aŭ volas kunlabori? Ne hezitu kontakti min!",
      name: "Nomo",
      email: "Retpoŝto",
      phone: "Telefono",
      subject: "Temo",
      message: "Mesaĝo",
      sending: "Sendante...",
      send: "Sendi Mesaĝon",
      messageSent: "Mesaĝo sendita!",
      messageSentDesc: "Dankon pro via mesaĝo. Mi respondos baldaŭ.",
      location: "Loko",
      locationValue: "Asa Norte, Braziljo - DF",
    },
    footer: {
      copyright: "Ĉiuj rajtoj rezervitaj.",
      role: "Tutpila Programisto | AI-Specialisto",
    },
    gameMenu: {
      title: "Portfolia Aventuro",
      stats: "Statistikoj",
      achievements: "Atingoj",
      settings: "Agordoj",
      sectionsDiscovered: "Malkovritaj Sekcioj",
      background: "Fono",
      experience: "Sperto",
      skills: "Kapabloj",
      projects: "Projektoj",
      contact: "Kontakto",
      unlockMore: "Malŝlosu pli da sekcioj por pliigi vian poentaron!",
      achievementLocked: "Atingo ŝlosita",
      sound: "Sono",
      theme: "Etoso",
      language: "Lingvo",
      resetProgress: "Rekomenci Progreson",
      resetDesc: "Komencu la aventuron de la komenco",
      returnToStart: "Reiri al Komenco",
      returnDesc: "Reiri al la komenca ekrano",
      resume: "Daŭrigi Aventuron",
      reset: "Rekomenci",
      start: "Komenco",
    },
    achievements: {
      aboutUnlocked: {
        name: "Fono Malkovrita",
        description: "Lernis pri la fono de Kauan",
      },
      experienceUnlocked: {
        name: "Sperta Esploristo",
        description: "Malkovris profesian vojaĝon",
      },
      skillsUnlocked: {
        name: "Kapabla Serĉanto",
        description: "Malkovris teknikajn kapablojn",
      },
      projectsUnlocked: {
        name: "Projekta Prospektoro",
        description: "Esploris portfoliajn projektojn",
      },
      contactUnlocked: {
        name: "Kontakta Konektanto",
        description: "Atingis la kontaktan sekcion",
      },
    },
  },
}

// Create the language context
type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
})

// Create the language provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  // Set mounted state to true on client-side
  useEffect(() => {
    setMounted(true)

    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "pt", "de", "eo"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)
    }
  }, [language, mounted])

  // Translation function
  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key}`)
        return key
      }
    }

    return typeof value === "string" ? value : key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export function useTranslation() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }
  return context
}
