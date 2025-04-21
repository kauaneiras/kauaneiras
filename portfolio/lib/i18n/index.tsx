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
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "Minhas habilidades técnicas e áreas de especialização",
      programming: {
        name: "Programação",
        skills: {
          name: "Programação",
          items: [
            { name: "JavaScript", level: "85" },
            { name: "TypeScript", level: "75" },
            { name: "Python", level: "70" },
            { name: "C/C++", level: "65" },
            { name: "Java", level: "45" },
            { name: "Go", level: "30" },
            { name: "assembly Risc V", level: "25" },
          ]
        },
      },
      frontend: {
        name: "Frontend",
        skills: {
          name: "Frontend",
          items: [
            { name: "React", level: "85" },
            { name: "HTML & CSS", level: "85" },
            { name: "Next", level: "80" },
            { name: "React Native", level: "70" },
            { name: "Vue.js", level: "70" },
            { name: "WordPress", level: "70" },
            { name: "Figma", level: "60" },
          ]
        },
      },
      backend: {
        name: "Backend",
        skills: {
          name: "Backend",
          items: [
            { name: "Node.js", level: "80" },
            { name: "Express", level: "80" },
            { name: "Nest", level: "75" },
            { name: "Django", level: "70" },
            { name: "Spring Boot", level: "55" },
            { name: "SQL", level: "85" },
            { name: "MongoDB", level: "70" },
            { name: "Redis", level: "60" },
          ]
        },
      },
      devops: {
        name: "DevOps",
        skills: {
          name: "DevOps",
          items: [
            { name: "Git & Gitflow", level: "90" },
            { name: "Docker & Docker Compose", level: "80" },
            { name: "Kubernetes", level: "55" },
            { name: "Pipeline de Integração e Entrega (CI/CD)", level: "60" },
            { name: "Unit Testing", level: "0" },
            { name: "Podman", level: "70" },
          ]
        },
      },
      ai: {
        name: "IA",
        skills: {
          name: "IA",
          items: [
            { name: "Prompt Engineering", level: "85" },
            { name: "LLM Integration", level: "85" },
            { name: "AI Agents", level: "60" },
            { name: "n8n", level: "65" },
            { name: "comfyUI", level: "45" },
          ]
        },
      },
      cloud: {
        name: "Infraestrutura & Nuvem",
        skills: {
          name: "Infraestrutura & Nuvem",
          items: [
            { name: "OpenStack", level: "60" },
            { name: "Virtualização", level: "60" },
            { name: "Azure", level: "55" },
            { name: "AWS", level: "50" },
            { name: "Network Security", level: "45" },
            { name: "Networking", level: "65" },
            { name: "Terraform", level: "35" },
          ]
        },
      },
      soft: {
        name: "Habilidades Interpessoais",
        skills: {
          name: "Habilidades Interpessoais",
          items: [
            { name: "Comunicação", level: "90" },
            { name: "Aprendizado Rápido", level: "90" },
            { name: "Trabalho em Equipe", level: "85" },
            { name: "Liderança", level: "80" },
            { name: "Resolução de Problemas", level: "90" },
            { name: "Organização", level: "85" },
          ]
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
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Have a question or want to work together? Feel free to contact me!",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      sending: "Sending...",
      send: "Send Message",
      messageSent: "Message sent!",
      messageSentDesc: "Thank you for your message. I'll get back to you soon.",
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
    },
    skills: {
      title: "Habilidades & Expertise",
      subtitle: "Minhas habilidades técnicas e áreas de especialização",
      programming: {
        name: "Programação",
        skills: {
          name: "Programação",
          items: [
            { name: "JavaScript", level: "85" },
            { name: "TypeScript", level: "75" },
            { name: "Python", level: "70" },
            { name: "C/C++", level: "65" },
            { name: "Java", level: "45" },
            { name: "Go", level: "30" },
            { name: "assembly Risc V", level: "25" },
          ]
        },
      },
      frontend: {
        name: "Frontend",
        skills: {
          name: "Frontend",
          items: [
            { name: "React", level: "85" },
            { name: "HTML & CSS", level: "85" },
            { name: "Next", level: "80" },
            { name: "React Native", level: "70" },
            { name: "Vue.js", level: "70" },
            { name: "WordPress", level: "70" },
            { name: "Figma", level: "60" },
          ]
        },
      },
      backend: {
        name: "Backend",
        skills: {
          name: "Backend",
          items: [
            { name: "Node.js", level: "80" },
            { name: "Express", level: "80" },
            { name: "Nest", level: "75" },
            { name: "Django", level: "70" },
            { name: "Spring Boot", level: "55" },
            { name: "SQL", level: "85" },
            { name: "MongoDB", level: "70" },
            { name: "Redis", level: "60" },
          ]
        },
      },
      devops: {
        name: "DevOps",
        skills: {
          name: "DevOps",
          items: [
            { name: "Git & Gitflow", level: "90" },
            { name: "Docker & Docker Compose", level: "80" },
            { name: "Kubernetes", level: "55" },
            { name: "Pipeline de Integração e Entrega (CI/CD)", level: "60" },
            { name: "Unit Testing", level: "0" },
            { name: "Podman", level: "70" },
          ]
        },
      },
      ai: {
        name: "IA",
        skills: {
          name: "IA",
          items: [
            { name: "Prompt Engineering", level: "85" },
            { name: "LLM Integration", level: "85" },
            { name: "AI Agents", level: "60" },
            { name: "n8n", level: "65" },
            { name: "comfyUI", level: "45" },
          ]
        },
      },
      cloud: {
        name: "Nuvem",
        skills: {
          name: "Nuvem",
          items: [
            { name: "OpenStack", level: "60" },
            { name: "Virtualização", level: "60" },
            { name: "Azure", level: "55" },
            { name: "AWS", level: "50" },
            { name: "Network Security", level: "45" },
            { name: "Networking", level: "65" },
            { name: "Terraform", level: "35" },
          ]
        },
      },
      soft: {
        name: "Habilidades Interpessoais",
        skills: {
          name: "Habilidades Interpessoais",
          items: [
            { name: "Comunicação", level: "90" },
            { name: "Aprendizado Rápido", level: "90" },
            { name: "Trabalho em Equipe", level: "85" },
            { name: "Liderança", level: "80" },
            { name: "Resolução de Problemas", level: "90" },
            { name: "Organização", level: "85" },
          ]
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
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Tem uma pergunta ou quer trabalhar junto? Sinta-se à vontade para me contatar!",
      name: "Nome",
      email: "Email",
      subject: "Assunto",
      message: "Mensagem",
      sending: "Enviando...",
      send: "Enviar Mensagem",
      messageSent: "Mensagem enviada!",
      messageSentDesc: "Obrigado pela sua mensagem. Entrarei em contato em breve.",
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
        "Spezialisiert auf moderne Webtechnologien, KI-Integration und Cloud-Infrastruktur. Entwicklung innovativer Lösungen mit React, Node.js, und Django.",
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
    },
    skills: {
      title: "Fähigkeiten & Expertise",
      subtitle: "Meine technischen Fähigkeiten und Fachgebiete",
      programming: {
        name: "Programmierung",
        skills: {
          name: "Programmierung",
          items: [
            { name: "JavaScript", level: "85" },
            { name: "TypeScript", level: "75" },
            { name: "Python", level: "70" },
            { name: "C/C++", level: "65" },
            { name: "Java", level: "45" },
            { name: "Go", level: "30" },
            { name: "assembly Risc V", level: "25" },
          ]
        },
      },
      frontend: {
        name: "Frontend",
        skills: {
          name: "Frontend",
          items: [
            { name: "React", level: "85" },
            { name: "HTML & CSS", level: "85" },
            { name: "Next", level: "80" },
            { name: "React Native", level: "70" },
            { name: "Vue.js", level: "70" },
            { name: "WordPress", level: "70" },
            { name: "Figma", level: "60" },
          ]
        },
      },
      backend: {
        name: "Backend",
        skills: {
          name: "Backend",
          items: [
            { name: "Node.js", level: "80" },
            { name: "Express", level: "80" },
            { name: "Nest", level: "75" },
            { name: "Django", level: "70" },
            { name: "Spring Boot", level: "55" },
            { name: "SQL", level: "85" },
            { name: "MongoDB", level: "70" },
            { name: "Redis", level: "60" },
          ]
        },
      },
      devops: {
        name: "DevOps",
        skills: {
          name: "DevOps",
          items: [
            { name: "Git & Gitflow", level: "90" },
            { name: "Docker & Docker Compose", level: "80" },
            { name: "Kubernetes", level: "55" },
            { name: "Pipeline de Integração e Entrega (CI/CD)", level: "60" },
            { name: "Unit Testing", level: "0" },
            { name: "Podman", level: "70" },
          ]
        },
      },
      ai: {
        name: "KI",
        skills: {
          name: "KI",
          items: [
            { name: "Prompt Engineering", level: "85" },
            { name: "LLM Integration", level: "85" },
            { name: "AI Agents", level: "60" },
            { name: "n8n", level: "65" },
            { name: "comfyUI", level: "45" },
          ]
        },
      },
      cloud: {
        name: "Cloud",
        skills: {
          name: "Cloud",
          items: [
            { name: "OpenStack", level: "60" },
            { name: "Virtualização", level: "60" },
            { name: "Azure", level: "55" },
            { name: "AWS", level: "50" },
            { name: "Network Security", level: "45" },
            { name: "Networking", level: "65" },
            { name: "Terraform", level: "35" },
          ]
        },
      },
      soft: {
        name: "Soft Skills",
        skills: {
          name: "Soft Skills",
          items: [
            { name: "Comunicação", level: "90" },
            { name: "Aprendizado Rápido", level: "90" },
            { name: "Trabalho em Equipe", level: "85" },
            { name: "Liderança", level: "80" },
            { name: "Resolução de Problemas", level: "90" },
            { name: "Organização", level: "85" },
          ]
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
    },
    contact: {
      title: "Kontakt aufnehmen",
      subtitle: "Haben Sie eine Frage oder möchten Sie zusammenarbeiten? Kontaktieren Sie mich gerne!",
      name: "Name",
      email: "E-Mail",
      subject: "Betreff",
      message: "Nachricht",
      sending: "Senden...",
      send: "Nachricht senden",
      messageSent: "Nachricht gesendet!",
      messageSentDesc: "Vielen Dank für Ihre Nachricht. Ich werde mich in Kürze bei Ihnen melden.",
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
    },
    skills: {
      title: "Kapabloj & Spertizo",
      subtitle: "Miaj teknikaj kapabloj kaj spertizaj kampoj",
      programming: {
        name: "Programado",
        skills: {
          name: "Programado",
          items: [
            { name: "JavaScript", level: "85" },
            { name: "TypeScript", level: "75" },
            { name: "Python", level: "70" },
            { name: "C/C++", level: "65" },
            { name: "Java", level: "45" },
            { name: "Go", level: "30" },
            { name: "assembly Risc V", level: "25" },
          ]
        },
      },
      frontend: {
        name: "Frontendo",
        skills: {
          name: "Frontendo",
          items: [
            { name: "React", level: "85" },
            { name: "HTML & CSS", level: "85" },
            { name: "Next", level: "80" },
            { name: "React Native", level: "70" },
            { name: "Vue.js", level: "70" },
            { name: "WordPress", level: "70" },
            { name: "Figma", level: "60" },
          ]
        },
      },
      backend: {
        name: "Malantaŭendo",
        skills: {
          name: "Malantaŭendo",
          items: [
            { name: "Node.js", level: "80" },
            { name: "Express", level: "80" },
            { name: "Nest", level: "75" },
            { name: "Django", level: "70" },
            { name: "Spring Boot", level: "55" },
            { name: "SQL", level: "85" },
            { name: "MongoDB", level: "70" },
            { name: "Redis", level: "60" },
          ]
        },
      },
      devops: {
        name: "DevOps",
        skills: {
          name: "DevOps",
          items: [
            { name: "Git & Gitflow", level: "90" },
            { name: "Docker & Docker Compose", level: "80" },
            { name: "Kubernetes", level: "55" },
            { name: "Pipeline de Integração e Entrega (CI/CD)", level: "60" },
            { name: "Unit Testing", level: "0" },
            { name: "Podman", level: "70" },
          ]
        },
      },
      ai: {
        name: "AI",
        skills: {
          name: "AI",
          items: [
            { name: "Prompt Engineering", level: "85" },
            { name: "LLM Integration", level: "85" },
            { name: "AI Agents", level: "60" },
            { name: "n8n", level: "65" },
            { name: "comfyUI", level: "45" },
          ]
        },
      },
      cloud: {
        name: "Nubo",
        skills: {
          name: "Nubo",
          items: [
            { name: "OpenStack", level: "60" },
            { name: "Virtualização", level: "60" },
            { name: "Azure", level: "55" },
            { name: "AWS", level: "50" },
            { name: "Network Security", level: "45" },
            { name: "Networking", level: "65" },
            { name: "Terraform", level: "35" },
          ]
        },
      },
      soft: {
        name: "Molaj Kapabloj",
        skills: {
          name: "Molaj Kapabloj",
          items: [
            { name: "Comunicação", level: "90" },
            { name: "Aprendizado Rápido", level: "90" },
            { name: "Trabalho em Equipe", level: "85" },
            { name: "Liderança", level: "80" },
            { name: "Resolução de Problemas", level: "90" },
            { name: "Organização", level: "85" },
          ]
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
    },
    contact: {
      title: "Kontaktu Min",
      subtitle: "Ĉu vi havas demandon aŭ volas kunlabori? Ne hezitu kontakti min!",
      name: "Nomo",
      email: "Retpoŝto",
      subject: "Temo",
      message: "Mesaĝo",
      sending: "Sendante...",
      send: "Sendi Mesaĝon",
      messageSent: "Mesaĝo sendita!",
      messageSentDesc: "Dankon pro via mesaĝo. Mi respondos baldaŭ.",
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
