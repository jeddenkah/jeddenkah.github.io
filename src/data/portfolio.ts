import type { Experience, Education, Project, Certification, Organization } from '../types/portfolio';

export const personalInfo = {
  name: "Ifen Faridian Rahmadan",
  title: "Expert Industrial Engineer & Fullstack System Integrator",
  headline: "Building high-performance manufacturing MES, IoT integrations & scalable cloud applications.",
  summary: "Adaptive, innovative, and agile software engineer & system integrator with extensive experience in smart factory digitalization (Industry 4.0), PLC & OT-to-IT integrations, real-time telemetry, and modern fullstack architectures.",
  email: "ifenfaridian@gmail.com",
  linkedin: "https://linkedin.com/in/ifen-faridian",
  github: "https://github.com/jeddenkah",
  location: "Jakarta & Bandung, Indonesia"
};

export const metricsSummary = [
  { label: "Server Availability", value: "99.9%", color: "#31ce01", ringColor: "var(--color-recovery-green)", desc: "Target 100% uptime" },
  { label: "Digital Integration", value: "100%", color: "#415eee", ringColor: "var(--color-metric-blue)", desc: "IT & OT domains" },
  { label: "Defects Resolved", value: "23 Bugs", color: "#ffab94", ringColor: "var(--color-coral-signal)", desc: "Core platform & CMS" },
  { label: "Academic Digitization", value: "100%", color: "#b9a6ff", ringColor: "var(--color-sleep-lilac)", desc: "Faculty-wide SOFI" }
];

export const experiences: Experience[] = [
  {
    company: "PT. Astra Otoparts Tbk. Nusametal Division",
    location: "Jakarta, Indonesia",
    role: "Expert of Industrial Engineering",
    period: "Jan 2026 - Jun 2026",
    description: [
      "Conduct research and identify emerging technologies related to IT to support and optimize manufacturing processes.",
      "Supervise application development activities, ensuring adherence to requirements, quality standards, and project objectives."
    ],
    stack: ["RabbitMQ", "Docker", "IIS", "Microservices", "System Architecture"]
  },
  {
    company: "PT. Astra Otoparts Tbk. Nusametal Division",
    location: "Jakarta, Indonesia",
    role: "System Integrator",
    period: "Jan 2025 - Dec 2025",
    description: [
      "Decided on the appropriate programming technology stack based on project and business requirements.",
      "Orchestrated the integration of digital systems within the factory environment, covering both IT and OT domains.",
      "Conducted research on emerging technologies to support factory digitalization initiatives, including AI Visual Inspection, Machine Learning, WebSockets, and more.",
      "Ensured server uptime reliability with a target of achieving early-100% availability.",
      "Responsible for the internal cybersecurity of the factory's MES applications.",
      "Guided digitalization development initiatives to align with the long-term vision of achieving a sustainable Industry 4.0.",
      "Developed best-practice base applications and frameworks to enable easier future development and scalability for the programming team."
    ],
    stack: ["Node.js", "Express.js", "Nest.js", "React.js", "Python", "Flask", "FastAPI", "Laravel", "Bootstrap", "MySQL", "PostgreSQL", "InfluxDB", "Redis", "Nginx", "IIS"]
  },
  {
    company: "PT. Astra Otoparts Tbk. Nusametal Division",
    location: "Jakarta, Indonesia",
    role: "Digitalization Staff",
    period: "Jun 2023 - Dec 2024",
    description: [
      "Gathering requirements from users based on their problems (including problem solving).",
      "Develop app based on user requirements.",
      "Coordinate with relevant parties regarding the use of the application.",
      "Integrating Programmable Logic Controller (PLC) with Web Programming."
    ],
    stack: ["Laravel", "Node.js", "React.js", "Bootstrap", "MySQL", "PostgreSQL", "Redis", "PLC Integration"]
  },
  {
    company: "Bandung Techno Park",
    location: "Bandung, Indonesia",
    role: "Fullstack Web Developer",
    period: "Jul 2022 - Feb 2023",
    description: [
      "Develop Career Development Center (CDC) Website for University with CMS and frontpage."
    ],
    stack: ["Laravel", "PostgreSQL", "Bootstrap", "jQuery"]
  },
  {
    company: "BuildWith Angga",
    location: "Bandung, Indonesia",
    role: "Laravel Backend Developer Intern",
    period: "Nov 2021 - Jan 2022",
    description: [
      "Develop and maintain the main website of BuildWith Angga.",
      "Fix 23 crucial bug on main website and CMS.",
      "Develop Smart Member Analytics to spectate information about member types."
    ],
    stack: ["Laravel", "MySQL", "Bootstrap", "Redis"]
  },
  {
    company: "Panak.id",
    location: "Bali, Indonesia",
    role: "Fullstack Web Developer Intern",
    period: "May 2021 - Aug 2021",
    description: [
      "Create Panak.id as a company website for livestock crowdfunding and build company blogs named Edunak.",
      "Develop e-commerce named Pasarnak for selling processed livestock products."
    ],
    stack: ["Laravel", "MySQL", "Bootstrap"]
  },
  {
    company: "Edura Indonesia",
    location: "Bandung, Indonesia",
    role: "Fullstack Web Developer Contract",
    period: "Jul 2020 - Dec 2020",
    description: [
      "Advance a web application for tryout tests from creating exam questions, exams, as for as progress reports."
    ],
    stack: ["Laravel", "Vue.js", "MySQL", "Bootstrap"]
  },
  {
    company: "Faculty of Industrial Engineering Telkom University",
    location: "Bandung, Indonesia",
    role: "Junior Programmer",
    period: "Jun 2020 - Sep 2020",
    description: [
      "Expand a SOFI (Sidang Online FRI) which is a web application for managing student final assignments from submission, scheduling, up to graduation results.",
      "Officially used since 2020 at the Telkom University Industrial Engineering Faculty, and succeeded in shortening the process and making the entire process 100% digital in one app."
    ],
    stack: ["Bootstrap", "Laravel", "MySQL"]
  }
];

export const projects: Project[] = [
  {
    title: "Visibility End to End (MES)",
    year: "2023",
    category: "Smart Factory & Industrial IoT",
    description: "An internal company MES responsible for managing most of the operational process flows (including material movement, production reporting, achievement dashboards, quality assurance, and more), while integrating seamlessly with machines, robots, display screens, and other systems.",
    stack: ["Node.js", "Nest.js", "FastAPI", "React.js", "InfluxDB", "RabbitMQ", "Redis", "Docker", "PLC Integration"],
    accentColor: "#31ce01",
    metrics: [
      { label: "Operational Flow", value: "End-to-End", colorToken: "#31ce01" },
      { label: "Integration", value: "Machinery & Robots", colorToken: "#415eee" }
    ]
  },
  {
    title: "Scan 2 Go (SAP Integrated)",
    year: "2023",
    category: "Enterprise ERP & Warehouse Transactions",
    description: "An application for handling goods transactions (Goods Receipt & Transfer Posting) based on item identity scanning and fully integrated with SAP, featuring real-time scan transactions, real-time stock data, and customizable process flows.",
    stack: ["Laravel", "SAP RFC", "React.js", "MySQL", "Redis", "Bootstrap"],
    accentColor: "#415eee",
    metrics: [
      { label: "Transaction Mode", value: "Real-Time Scan", colorToken: "#415eee" },
      { label: "ERP Integration", value: "SAP Bidirectional", colorToken: "#31ce01" }
    ]
  },
  {
    title: "Auto Plotting Assessor (Google OR-Tools)",
    year: "2022",
    category: "Operations Research & Undergraduate Thesis",
    description: "Auto Plotting for Final Assignment Proposal Assessors using Constraint Programming Satisfiability (CP-SAT) Algorithm with Google OR-Tools.",
    stack: ["Python", "Google OR-Tools", "CP-SAT", "Node.js", "React.js", "MySQL"],
    accentColor: "#ffab94",
    metrics: [
      { label: "Optimization", value: "CP-SAT Algorithm", colorToken: "#ffab94" },
      { label: "Engine", value: "Google OR-Tools", colorToken: "#31ce01" }
    ]
  },
  {
    title: "SOFI (Sidang Online FRI)",
    year: "2020",
    category: "Academic Workflow Automation",
    description: "A web application for managing student final assignments from submission, scheduling, up to graduation results. Officially used since 2020 at the Telkom University Industrial Engineering Faculty, succeeding in shortening the process and making the entire process 100% digital in one app.",
    stack: ["Bootstrap", "Laravel", "MySQL"],
    accentColor: "#ffca00",
    metrics: [
      { label: "Process Digitization", value: "100% Digital", colorToken: "#31ce01" },
      { label: "Adoption", value: "FRI Telkom Univ", colorToken: "#415eee" }
    ]
  },
  {
    title: "Berempati Crowdfunding & Auction",
    year: "2020",
    category: "Web Application Platform",
    description: "A prototype of a crowdfunding web application named 'Berempati' to collect donations, and when donors have goods can choose auction and the profits from it will be donated immediately. Student's result of the Website Application Development course assignment.",
    stack: ["Laravel", "MySQL", "Bootstrap"],
    accentColor: "#415eee"
  }
];

export const education: Education = {
  institution: "Telkom University",
  location: "Bandung, Indonesia",
  degree: "Bachelor of Information Systems",
  period: "Aug 2018 - Sep 2022",
  gpa: "3.86 / 4.00 (Cum Laude)",
  thesis: {
    title: "Auto Plotting for Final Assignment Proposal Assessors using Constraint Programming Satisfiability (CP-SAT) Algorithm with Google OR-Tools",
    stack: ["Python", "Google OR-Tools", "CP-SAT", "Node.js", "React.js", "MySQL"]
  },
  highlights: [
    "Practicum Assistant for Basic Algorithms and Programming Course",
    "2nd Place Capture The Flag (CTF) Cybersecurity Competition at Faculty of Industrial Engineering, Telkom University",
    "Top 8 Facebook Developer Circle Clash of Code (Competitive Programming)",
    "Top 10 Computing Competitive Programming at Telkom University"
  ]
};

export const certifications: Certification[] = [
  { name: "Certified Data Scientist", issuer: "BNSP (Badan Nasional Sertifikasi Profesi)", year: "2025", category: "Data Science" },
  { name: "Certified Junior Web Developer", issuer: "BNSP", year: "2021", category: "Software Engineering" },
  { name: "SAP Certified - SAP01 Fundamental", issuer: "SAP", year: "2018", category: "Enterprise ERP" },
  { name: "SQL Database Professional", issuer: "Certiport / Technical Guild", year: "2018", category: "Database" }
];

export const organizations: Organization[] = [
  {
    role: "Project Lab Assistant & Team Lead",
    organization: "Enterprise Data & Engineering (EDE) Laboratory",
    period: "Jun 2020 - Jun 2021",
    description: "Recruit and empower lab members to take part in projects such as creating websites, and many more related to website development. Three times became a leader from five project works."
  },
  {
    role: "Member",
    organization: "Dasar Pemrograman (Daspro) Research Group - Telkom University",
    period: "Aug 2019 - Aug 2020",
    description: "Sharing and learning about Programming."
  },
  {
    role: "Member & Event Coordinator",
    organization: "Central Computer Improvement (CCI) - Telkom University",
    period: "Sep 2018 - Sep 2020",
    description: "Sharing and learning about Web Development. Held workshop event of Web Development consisting of 50+ participants."
  }
];

export const techSkills = {
  languages: ["TypeScript", "JavaScript", "Python", "PHP", "SQL", "HTML5/CSS3"],
  aiMl: ["Object Detection with YOLO", "Hermes Agent", "Claude Code", "Gemini", "9Router", "MCP Server", "Ollama", "AI Agent"],
  backend: ["Node.js", "Nest.js", "Express.js", "FastAPI", "Flask", "Laravel", "RabbitMQ"],
  frontend: ["Svelte 5", "React.js", "Vue.js", "Tailwind CSS", "Bootstrap", "jQuery"],
  databases: ["PostgreSQL", "MySQL", "InfluxDB", "Redis"],
  devopsIoT: ["Docker", "IIS", "Nginx", "PLC Integration", "WebSockets", "Git"]
};

export const partnerBrands = [
  { name: "PT Astra Otoparts Tbk Nusametal Division", tag: "Enterprise Industrial of Smart Manufacturing" },
  { name: "Telkom University", tag: "Higher Education" },
  { name: "Bandung Techno Park", tag: "Technology Incubator" }
];

