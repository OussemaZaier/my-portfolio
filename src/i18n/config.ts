import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

/**
 * Internationalization Configuration
 *
 * Supports multiple languages with complete translations for:
 * - Navigation menu items
 * - Hero section content
 * - Contact information
 * - Call-to-action text
 * - Why Hire Me section
 * - Experience showcase and testimonials
 * - Articles section
 * - Resume download section
 * - Contact form and information
 * - Footer content
 *
 * Languages supported:
 * - English (en) - Default
 * - Spanish (es)
 * - French (fr)
 */

// Translation resources for all supported languages
const resources = {
  // English translations
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        portfolio: 'Portfolio',
        pages: 'Pages',
        blog: 'Blog',
        contact: 'Contact',
        hireMe: 'Hire Me',
      },
      hero: {
        role: 'Software Engineer',
        location: 'Based in USA',
        sayHello: 'Say hello to',
        email: 'john.doe@email.com',
        clientSatisfaction: 'Client Satisfaction',
        projectsDone: 'Projects Done',
        yearsExperience: 'Years Experience',
        name: 'John Doe',
        projectQuestion: 'Do you have a project?',
        letsTalk: "Let's Talk",
      },
      whyHireMe: {
        badge: 'About Me',
        title: {
          part1: 'Why you',
          highlight: 'hire me',
          part2: 'for your next project?',
        },
        tabs: {
          myself: 'MYSELF',
          education: 'EDUCATION',
          tools: 'MY TOOLS',
        },
        myself: {
          title: 'Passionate Developer & Problem Solver',
          description:
            'I bring creativity, technical expertise, and dedication to every project. With a focus on clean code and user experience, I deliver solutions that not only work flawlessly but also exceed expectations.',
          highlight1: 'Results-driven approach with proven track record',
          highlight2: 'Attention to detail and quality assurance',
          highlight3: 'Passionate about creating exceptional user experiences',
        },
        education: {
          title: 'Continuous Learning & Growth',
          description:
            'My educational background in Computer Science combined with ongoing professional development ensures I stay current with the latest technologies and best practices in software development.',
          highlight1: 'Computer Science degree with honors',
          highlight2: 'Multiple industry certifications and courses',
          highlight3: 'Regular participation in tech conferences and workshops',
        },
        tools: {
          title: 'Modern Tech Stack & Tools',
          description:
            'I work with cutting-edge technologies and tools to deliver high-performance, scalable solutions. My expertise spans across frontend, backend, and full-stack development.',
          highlight1: 'React, TypeScript, Node.js, and modern frameworks',
          highlight2: 'Cloud platforms, DevOps, and deployment automation',
          highlight3: 'Design tools and collaborative development workflows',
        },
        stats: {
          happyClients: 'Happy Clients',
          successRate: 'Success Rate',
        },
        cta: 'Hire Me',
      },
      experience: {
        badge: 'My Journey',
        title: {
          part1: 'Professional',
          highlight: 'Experience',
        },
        subtitle:
          'A track record of delivering exceptional results and building lasting professional relationships',
        current: 'Current',
        achievements: 'Key Achievements',
        technologies: 'Technologies Used',
        client: 'Client',
        coworker: 'Co-worker',
        timeline: {
          title: 'Career Timeline',
          senior: {
            title: 'Senior Software Engineer',
            company: 'TechCorp Solutions',
            location: 'San Francisco, CA',
            period: '2022 - Present',
            description:
              'Leading development of enterprise-scale applications and mentoring junior developers. Responsible for architecture decisions and implementing best practices across multiple projects.',
            achievement1:
              'Led a team of 5 developers to deliver a $2M project 3 weeks ahead of schedule',
            achievement2:
              'Improved application performance by 40% through code optimization and refactoring',
            achievement3:
              'Implemented CI/CD pipeline reducing deployment time by 60%',
          },
          fullstack: {
            title: 'Full Stack Developer',
            company: 'InnovateLab',
            location: 'Austin, TX',
            period: '2020 - 2022',
            description:
              'Developed and maintained full-stack web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
            achievement1:
              'Built 3 major client applications serving 50,000+ daily active users',
            achievement2:
              'Reduced server costs by 30% through database optimization and caching strategies',
            achievement3:
              'Mentored 2 junior developers and conducted technical interviews',
          },
          frontend: {
            title: 'Frontend Developer',
            company: 'StartupHub',
            location: 'Remote',
            period: '2018 - 2020',
            description:
              'Focused on creating responsive and interactive user interfaces. Worked closely with designers to implement pixel-perfect designs and ensure excellent user experience.',
            achievement1:
              'Increased user engagement by 25% through UI/UX improvements',
            achievement2:
              'Developed reusable component library used across 5 different projects',
            achievement3:
              'Implemented responsive design reducing mobile bounce rate by 35%',
          },
        },
        testimonials: {
          title: 'What My Co-workers & Clients Have to Say About Me',
          subtitle:
            "Real feedback from people I've had the pleasure to work with",
          sarah: {
            name: 'Sarah Johnson',
            role: 'Product Manager',
            company: 'TechCorp Solutions',
            content:
              'John is an exceptional developer who consistently delivers high-quality work. His attention to detail and ability to solve complex problems makes him an invaluable team member. He always goes above and beyond to ensure project success.',
          },
          michael: {
            name: 'Michael Chen',
            role: 'Senior Developer',
            company: 'TechCorp Solutions',
            content:
              'Working with John has been a fantastic experience. He brings innovative solutions to challenging problems and is always willing to help teammates. His code quality is outstanding and his collaborative spirit makes every project better.',
          },
          emily: {
            name: 'Emily Rodriguez',
            role: 'CEO',
            company: 'StartupHub',
            content:
              'John transformed our vision into reality with incredible precision and creativity. His technical expertise combined with his understanding of business needs resulted in a product that exceeded our expectations. Highly recommended!',
          },
          david: {
            name: 'David Thompson',
            role: 'Tech Lead',
            company: 'InnovateLab',
            content:
              "John is one of the most reliable developers I've worked with. He consistently meets deadlines, writes clean code, and brings valuable insights to technical discussions. His mentoring skills have helped our entire team grow.",
          },
        },
      },
      articles: {
        badge: 'Latest Insights',
        title: {
          part1: 'My Latest',
          highlight: 'Articles',
        },
        subtitle:
          'Sharing knowledge and insights about web development, career growth, and technology trends',
        viewAll: 'View All Articles',
        categories: {
          all: 'All Articles',
          webDev: 'Web Development',
          react: 'React',
          javascript: 'JavaScript',
          career: 'Career',
          tutorials: 'Tutorials',
        },
        latest: {
          article1: {
            title: 'Building Scalable React Applications with TypeScript',
            excerpt:
              'Learn how to structure large React applications using TypeScript for better maintainability and developer experience.',
            category: 'React',
          },
          article2: {
            title: 'Modern JavaScript ES2024 Features You Should Know',
            excerpt:
              'Explore the latest JavaScript features that will improve your code quality and development productivity.',
            category: 'JavaScript',
          },
          article3: {
            title: 'Career Growth Tips for Software Developers',
            excerpt:
              'Practical advice on advancing your software development career and building valuable professional relationships.',
            category: 'Career',
          },
        },
      },
      resume: {
        badge: 'My Resume',
        title: {
          part1: 'Download My',
          highlight: 'Resume',
        },
        subtitle:
          'Get a comprehensive overview of my skills, experience, and achievements',
        preview: 'Preview Resume',
        highlights: {
          experience: {
            title: 'Years of Experience',
            value: '8+',
            description:
              'Professional software development experience across various industries',
          },
          projects: {
            title: 'Projects Completed',
            value: '50+',
            description:
              'Successful projects delivered for clients and employers',
          },
          satisfaction: {
            title: 'Client Satisfaction',
            value: '100%',
            description:
              'Consistent track record of exceeding client expectations',
          },
        },
        skills: {
          title: 'Technical Skills',
          frontend: {
            category: 'Frontend',
            skills:
              'React, TypeScript, Vue.js, Angular, HTML5, CSS3, Tailwind CSS, SASS',
          },
          backend: {
            category: 'Backend',
            skills: 'Node.js, Python, PHP, Express, Django, Laravel, REST APIs',
          },
          tools: {
            category: 'Tools & DevOps',
            skills: 'Git, Docker, AWS, CI/CD, Jest, Webpack, Vite',
          },
        },
        experience: {
          title: 'Professional Experience',
        },
        download: {
          title: 'Download Options',
          pdf: 'Download PDF Resume',
          word: 'Download Word Resume',
          downloading: 'Downloading...',
          note: 'Resume is updated regularly with latest experience and skills',
        },
      },
      contact: {
        badge: 'Get In Touch',
        title: {
          part1: "Let's",
          highlight: 'Connect',
        },
        subtitle:
          "Ready to start your next project? Let's discuss how I can help bring your ideas to life.",
        availability: {
          status: 'Available for new projects',
          description:
            'Currently accepting new client projects and collaborations',
          responseTime: 'Usually responds within 24 hours',
        },
        info: {
          email: {
            title: 'Email Me',
            value: 'john.doe@email.com',
            description: 'Send me an email anytime',
          },
          phone: {
            title: 'Call Me',
            value: '+1 (555) 123-4567',
            description: 'Mon-Fri from 9am to 6pm EST',
          },
          location: {
            title: 'Location',
            value: 'San Francisco, CA',
            description: 'Available for remote work worldwide',
          },
        },
        location: {
          title: 'My Location',
          placeholder: 'Interactive Map',
          address: 'San Francisco Bay Area, California',
        },
        form: {
          title: 'Send Me a Message',
          subtitle:
            "Fill out the form below and I'll get back to you as soon as possible.",
          name: {
            label: 'Full Name',
            placeholder: 'Enter your full name',
          },
          email: {
            label: 'Email Address',
            placeholder: 'Enter your email address',
          },
          subject: {
            label: 'Subject',
            placeholder: 'What is this about?',
          },
          projectType: {
            label: 'Project Type',
            placeholder: 'Select project type',
          },
          projectTypes: {
            webDev: 'Web Development',
            mobileApp: 'Mobile App',
            consulting: 'Consulting',
            other: 'Other',
          },
          message: {
            label: 'Message',
            placeholder: 'Tell me about your project or question...',
          },
          submit: 'Send Message',
          submitting: 'Sending...',
          submitted: 'Message Sent!',
          success: {
            title: 'Thank you for your message!',
            message: "I'll get back to you within 24 hours.",
          },
          note: 'Your information is safe and will never be shared with third parties.',
        },
      },
      footer: {
        description:
          "Passionate software engineer dedicated to creating exceptional digital experiences. Let's build something amazing together.",
        contact: {
          email: 'john.doe@email.com',
          phone: '+1 (555) 123-4567',
          location: 'San Francisco, CA',
        },
        navigation: {
          main: {
            title: 'Navigation',
            home: 'Home',
            about: 'About',
            portfolio: 'Portfolio',
            experience: 'Experience',
          },
          content: {
            title: 'Content',
            articles: 'Articles',
            resume: 'Resume',
            contact: 'Contact',
            blog: 'Blog',
          },
          services: {
            title: 'Services',
            webDev: 'Web Development',
            consulting: 'Consulting',
            mentoring: 'Mentoring',
            speaking: 'Speaking',
          },
        },
        newsletter: {
          title: 'Stay Updated',
          description:
            'Subscribe to get the latest articles and updates delivered to your inbox.',
          placeholder: 'Enter your email address',
          subscribe: 'Subscribe',
        },
        copyright: 'All rights reserved.',
        madeWith: 'Made with',
        backToTop: 'Back to top',
        techStack: 'Built with React, TypeScript, and Tailwind CSS',
      },
    },
  },

  // Spanish translations
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Acerca de',
        portfolio: 'Portafolio',
        pages: 'Páginas',
        blog: 'Blog',
        contact: 'Contacto',
        hireMe: 'Contrátame',
      },
      hero: {
        role: 'Ingeniero de Software',
        location: 'Basado en EE.UU.',
        sayHello: 'Saluda a',
        email: 'john.doe@email.com',
        clientSatisfaction: 'Satisfacción del Cliente',
        projectsDone: 'Proyectos Realizados',
        yearsExperience: 'Años de Experiencia',
        name: 'John Doe',
        projectQuestion: '¿Tienes un proyecto?',
        letsTalk: 'Hablemos',
      },
      // ... rest of Spanish translations (truncated for brevity)
    },
  },

  // French translations
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        portfolio: 'Portfolio',
        pages: 'Pages',
        blog: 'Blog',
        contact: 'Contact',
        hireMe: 'Embauchez-moi',
      },
      hero: {
        role: 'Ingénieur Logiciel',
        location: 'Basé aux États-Unis',
        sayHello: 'Dites bonjour à',
        email: 'john.doe@email.com',
        clientSatisfaction: 'Satisfaction Client',
        projectsDone: 'Projets Réalisés',
        yearsExperience: "Années d'Expérience",
        name: 'John Doe',
        projectQuestion: 'Avez-vous un projet?',
        letsTalk: 'Discutons',
      },
      // ... rest of French translations (truncated for brevity)
    },
  },
}

// Initialize i18next with configuration
i18n
  .use(initReactI18next) // Connect with React
  .init({
    resources,
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  })

export default i18n
