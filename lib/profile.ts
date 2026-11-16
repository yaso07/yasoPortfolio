export const profile = {
  name: "Yasodharan Raman",
  firstName: "Yasodharan",
  role: "Front-End Developer",
  focus: "React.js, Next.js, TypeScript",
  location: "Salem, Tamil Nadu, India",
  phone: "+91 80726 87133",
  phoneHref: "tel:+918072687133",
  email: "yasoyasodharan29@gmail.com",
  github: "https://github.com/yaso07",
  githubLabel: "github.com/yaso07",
  resumePath: "/Yasodharan-Raman-Resume.pdf",
  summary:
    "Front-End Developer with nearly 5 years of experience building responsive, scalable web applications with React.js, Next.js and JavaScript/TypeScript. Skilled in UI development, REST API integration and state management with Redux and Context API, with working knowledge of Node.js, Express.js and Java.",
  summaryDetail:
    "Experienced in performance optimisation, SEO-friendly rendering and Agile delivery on international client projects — from recipe platforms and marketing dashboards to vehicle-service systems.",
  languages: ["Tamil", "English"],
}

export const stats = [
  { value: "~5 yrs", label: "Shipping web apps" },
  { value: "6", label: "Client products" },
  { value: "7.9", label: "CGPA, B.E. CSE" },
]

export const skillGroups = [
  {
    title: "Front end",
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Redux",
      "Context API",
      "Responsive Web Design",
      "Cross-Browser Compatibility",
    ],
  },
  {
    title: "Back end and data",
    items: ["Node.js", "Express.js", "Java", "REST APIs", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools and practices",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Webpack",
      "Vite",
      "Chart.js",
      "Sanity CMS",
      "Unit and API Testing",
      "Debugging",
      "Agile",
      "Data Structures and Algorithms",
    ],
  },
]

export type ExperienceItem = {
  role: string
  company: string
  period: string
  location: string
  current?: boolean
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: "Front-End Developer",
    company: "Foss Freaks",
    period: "Feb 2024 – Present",
    location: "Remote",
    current: true,
    points: [
      "Built and maintained full-stack web applications with React.js and Node.js in a remote team.",
      "Designed responsive UI components and integrated RESTful APIs, improving user engagement and backend response times.",
      "Optimised front-end and back-end performance to improve load speed and scalability.",
    ],
  },
  {
    role: "Software Engineer Trainee",
    company: "Aspire Systems",
    period: "Jan 2023 – Jan 2024",
    location: "Chennai, India",
    points: [
      "Completed intensive training in Java, Angular and full-stack development practices.",
      "Developed and deployed a full-stack web application using Angular, Node.js and MySQL.",
      "Gained hands-on experience with REST API integration, form validation, component-based architecture and Agile workflows.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Zoho",
    period: "Apr 2022 – May 2022",
    location: "Coimbatore, India",
    points: [
      "Trained in Java full-stack development: Servlets, JSP, JDBC and MySQL.",
      "Built a full-stack web application on MVC architecture, with Servlets and JSP for the presentation layer and JDBC for database access.",
    ],
  },
]

export type Project = {
  id: string
  title: string
  role: string
  period: string
  description: string
  highlights: string[]
  stack: string[]
  link?: string
  linkLabel?: string
  image?: string
  video?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "annabel-migration",
    title: "Annabel Karmel Website Migration",
    role: "Front-End Developer",
    period: "Apr 2026 – Sep 2026",
    featured: true,
    description:
      "Owned front-end development on moving annabelkarmel.com — the UK/US recipe website, admin and business portals, and mobile-app content — from WordPress to a custom-built platform.",
    highlights: [
      "Went live on 5 Oct 2026 with no downtime and zero server errors on about 700,000 requests in its first two days.",
      "Built a block-based content system to replace the WordPress Elementor page builder. Editors assemble recipes, articles and pages from reusable blocks, and saved changes reach the website within about two minutes.",
      "Built the new website front end in Next.js, including UK and US recipe versions with a country switch the browser remembers.",
      "Built the admin portal for content editing and user management, so the team can view member data as they did in WordPress admin.",
      "Migrated and checked all 366 recipes, including their UK and US versions, ingredients and methods.",
      "Added SEO metadata and Google recipe structured data. All 366 recipes pass Google's test.",
    ],
    stack: ["Next.js", "SEO", "Structured data", "Admin portal"],
    link: "https://www.annabelkarmel.com",
    linkLabel: "Visit annabelkarmel.com",
  },
  {
    id: "annabel-maintenance",
    title: "Annabel Karmel Platform",
    role: "Front-End Developer",
    period: "Sep 2026 – Present",
    description:
      "Maintain and improve the live Annabel Karmel platform: the UK/US recipe website, the admin portal, and the content that powers the iOS and Android app.",
    highlights: [
      "The app is an award-winning subscription recipe app for parents, with 1,500+ recipes, a 100+ first-foods weaning guide, meal planners, shopping lists and an allergy tracker.",
      "Support the weekly release of new recipes through the admin portal, so content published once appears on both the website and the app.",
      "Fix bugs and ship improvements from client feedback across the website, admin portal and app content.",
      "Help verify that migrated member data displays correctly in the app.",
    ],
    stack: ["Next.js", "Admin portal", "App content"],
    link: "https://www.annabelkarmel.com",
    linkLabel: "Visit the website",
  },
  {
    id: "shining-motors",
    title: "Shining Motors",
    role: "Vehicle service management",
    period: "May 2025 – Present",
    description:
      "Built the first version of a platform for customers, admins and vendors using React.js, Node.js and Express.",
    highlights: [
      "Implemented service booking, vehicle history, customer profiles and a vendor dashboard for orders, service slots and inventory.",
      "Developed REST APIs with Express.js and PostgreSQL, with JWT authentication and role-based access control.",
      "Built an analytics dashboard with Chart.js and dynamic SQL for bookings, revenue trends, top services and vendor performance, with day, week, month and custom-range filters.",
    ],
    stack: ["React.js", "Node.js", "Express", "PostgreSQL", "Chart.js"],
    image: "/images/image.png",
    link: "https://dev.theshiningmotors.com/",
    linkLabel: "Open the platform",
  },
  {
    id: "orrekie",
    title: "Orrekie",
    role: "Front-End Developer",
    period: "Feb 2025 – Jul 2025",
    description:
      "Built a professional platform for the Architecture, Engineering and Construction industry, with content on project management and automation tools.",
    highlights: [
      "Designed a clean, accessible interface that improved retention.",
      "Developed content modules on project information management, automation tools and productivity strategies.",
    ],
    stack: ["React", "Responsive UI"],
    image: "/images/orrekie.png",
    link: "https://amazing-insight-415210-production.web.app/",
    linkLabel: "Open Orrekie",
  },
  {
    id: "roc",
    title: "Jersey Island Tourism (ROC)",
    role: "Front-End Developer",
    period: "Apr 2024 – Jan 2025",
    description:
      "Developed a server-side rendered tourism web app with Next.js, integrating real-time APIs for navigation and interactivity.",
    highlights: [
      "Applied lazy loading and image optimisation.",
      "Connected Sanity CMS so non-technical editors can update content.",
      "Implemented SEO-friendly dynamic routing.",
    ],
    stack: ["Next.js", "Sanity CMS", "SEO"],
    image: "/images/roc.png",
    video: "https://www.youtube.com/embed/UElv9KpBYZU?si=s6w51Xvz_WlFZR2x",
    link: "https://www.roc.je/",
    linkLabel: "Visit roc.je",
  },
  {
    id: "oym",
    title: "Optimizing Your Marketing",
    role: "Front-End Developer",
    period: "Jun 2024 – Dec 2024",
    description:
      "Developed and maintained a Next.js data analytics dashboard, improving UI/UX and cross-platform accessibility.",
    highlights: [
      "Collaborated on real-time API integrations, reducing data sync issues and keeping end-to-end data flow consistent.",
      "Pulled marketing performance into one place for teams tracking campaigns across platforms.",
    ],
    stack: ["Next.js", "REST APIs", "Analytics"],
    image: "/images/oym.png",
    link: "https://app.optimiseyourmarketing.co.uk",
    linkLabel: "Open the dashboard",
  },
]

export const education = {
  degree: "Bachelor of Engineering",
  field: "Computer Science and Engineering",
  school: "Karpagam Institute of Technology",
  period: "Sep 2019 – May 2023",
  location: "Coimbatore, India",
  score: "CGPA 7.9 / 10",
}
