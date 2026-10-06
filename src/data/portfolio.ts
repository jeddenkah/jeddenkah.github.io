import type { Experience, Education, Project, Certification, Organization } from '../types/portfolio';

export const personalInfo = {
  name: "Ifen Faridian Rahmadan",
  title: "Expert Industrial Engineer & Fullstack System Integrator",
  headline: "Building high-performance manufacturing MES, IoT integrations & scalable cloud applications.",
  summary: "Adaptive, innovative, and agile software engineer & system integrator with extensive experience in smart factory digitalization (Industry 4.0), PLC & OT-to-IT integrations, real-time telemetry, and modern fullstack architectures.",
  phone: "+6285726265851",
  email: "ifenfaridian@gmail.com",
  linkedin: "https://linkedin.com/in/ifen-faridian",
  github: "https://github.com/jeddenkah",
  location: "Jakarta & Bandung, Indonesia"
};

export const metricsSummary = [
  { label: "Factory Uptime Target", value: "99.9%", color: "#31ce01", ringColor: "var(--color-recovery-green)", desc: "High availability MES" },
  { label: "Digital Integrations", value: "100%", color: "#415eee", ringColor: "var(--color-metric-blue)", desc: "Paperless workflow" },
  { label: "Production Throughput", value: "+35%", color: "#ffab94", ringColor: "var(--color-coral-signal)", desc: "Efficiency optimization" },
  { label: "Response Latency", value: "<15ms", color: "#b9a6ff", ringColor: "var(--color-sleep-lilac)", desc: "Real-time WebSocket & PLC" }
];

export const experiences: Experience[] = [
  {
    company: "PT. Astra Otoparts Tbk. Nusametal Division",
    location: "Jakarta, Indonesia",
    role: "Expert of Industrial Engineering",
    period: "Jan 2026 - Jun 2026",
    description: [
      "Conduct research and identify emerging IT/OT technologies to optimize precision manufacturing workflows.",
      "Supervise enterprise application lifecycle, ensuring rigorous adherence to industrial compliance, high availability, and project targets.",
      "Architect resilient microservices and distributed event brokers for high-throughput factory lines."
    ],
    stack: ["RabbitMQ", "Docker", "IIS", "Microservices", "System Architecture", "OT/IT Security"]
  },
  {
    company: "PT. Astra Otoparts Tbk. Nusametal Division",
    location: "Jakarta, Indonesia",
    role: "System Integrator",
    period: "Jan 2025 - Dec 2025",
    description: [
      "Orchestrated full-scale smart factory digital integration connecting shopfloor machinery (OT) with enterprise cloud architectures (IT).",
      "Pioneered AI Visual Inspection, Edge Machine Learning models, and bi-directional WebSocket pipelines for real-time telemetry.",
      "Maintained 99.9% MES application availability and fortified internal industrial cybersecurity.",
      "Engineered modular development frameworks accelerating cross-team software delivery."
    ],
    stack: ["Node.js", "Nest.js", "Express.js", "Python", "FastAPI", "Flask", "React.js", "Laravel", "MySQL", "PostgreSQL", "InfluxDB", "Redis", "Nginx", "IIS", "Docker"]
  },
  {
    company: "PT. Astra Otoparts Tbk. Nusametal Division",
    location: "Jakarta, Indonesia",
    role: "Digitalization Staff",
    period: "Jun 2023 - Dec 2024",
    description: [
      "Engineered direct PLC (Programmable Logic Controller) hardware integrations into web dashboards for zero-latency monitoring.",
      "Developed custom manufacturing tracking modules replacing legacy paper workflows.",
      "Gathered cross-functional requirements and delivered end-to-end digital solutions on the factory floor."
    ],
    stack: ["Laravel", "Node.js", "React.js", "PLC Integration", "MySQL", "PostgreSQL", "Redis", "Bootstrap"]
  },
  {
    company: "Bandung Techno Park",
    location: "Bandung, Indonesia",
    role: "Fullstack Web Developer",
    period: "Jul 2022 - Feb 2023",
    description: [
      "Engineered the University Career Development Center (CDC) comprehensive platform spanning CMS, portal, and applicant pipelines.",
      "Designed secure high-traffic database schemas and responsive portal experiences."
    ],
    stack: ["Laravel", "PostgreSQL", "Bootstrap", "jQuery", "REST API"]
  },
  {
    company: "BuildWith Angga",
    location: "Bandung, Indonesia",
    role: "Laravel Backend Developer Intern",
    period: "Nov 2021 - Jan 2022",
    description: [
      "Resolved 23 mission-critical defects on core platform and CMS architectures.",
      "Built dynamic Member Analytics Dashboards providing actionable insights on subscription cohorts."
    ],
    stack: ["Laravel", "MySQL", "Redis", "Analytics", "Bootstrap"]
  },
  {
    company: "Panak.id",
    location: "Bali, Indonesia",
    role: "Fullstack Web Developer Intern",
    period: "May 2021 - Aug 2021",
    description: [
      "Built Panak.id livestock crowdfunding platform and Edunak company knowledge hub.",
      "Developed Pasarnak e-commerce portal for processed livestock goods."
    ],
    stack: ["Laravel", "MySQL", "E-Commerce", "Crowdfunding", "Bootstrap"]
  },
  {
    company: "Edura Indonesia",
    location: "Bandung, Indonesia",
    role: "Fullstack Web Developer Contract",
    period: "Jul 2020 - Dec 2020",
    description: [
      "Engineered online tryout examination platform featuring dynamic exam generation, anti-cheat mechanisms, and instant analytics."
    ],
    stack: ["Laravel", "Vue.js", "MySQL", "Bootstrap"]
  },
  {
    company: "Faculty of Industrial Engineering Telkom University",
    location: "Bandung, Indonesia",
    role: "Junior Programmer",
    period: "Jun 2020 - Sep 2020",
    description: [
      "Built SOFI (Sidang Online FRI) digitizing student final defense scheduling, evaluation, and graduation workflows 100% online."
    ],
    stack: ["Laravel", "MySQL", "Bootstrap", "Workflow Automation"]
  }
];

export const projects: Project[] = [
  {
    title: "Visibility End to End (MES)",
    year: "2023 - 2025",
    category: "Smart Factory & Industrial IoT",
    description: "Enterprise Manufacturing Execution System orchestrating material movement, machine telemetry, automated quality assurance, robot synchronizations, and live floor displays.",
    stack: ["Node.js", "Nest.js", "FastAPI", "React.js", "InfluxDB", "RabbitMQ", "Redis", "Docker", "PLC"],
    accentColor: "#31ce01",
    metrics: [
      { label: "Floor Visibility", value: "100%", colorToken: "#31ce01" },
      { label: "Latency", value: "<15ms", colorToken: "#415eee" },
      { label: "Paperless", value: "Zero Paper", colorToken: "#ffab94" }
    ]
  },
  {
    title: "Scan 2 Go (SAP Integrated Logistics)",
    year: "2023 - 2024",
    category: "Enterprise ERP & Barcode Scan",
    description: "High-speed warehouse goods transactions system (Goods Receipt & Transfer Posting) powered by barcode scanning with bidirectional real-time SAP synchronization.",
    stack: ["Laravel", "SAP RFC", "React.js", "MySQL", "Redis", "Tailwind CSS"],
    accentColor: "#415eee",
    metrics: [
      { label: "Sync Speed", value: "Instant", colorToken: "#415eee" },
      { label: "Accuracy", value: "99.98%", colorToken: "#31ce01" }
    ]
  },
  {
    title: "AI Visual Inspection & Telemetry",
    year: "2024 - 2025",
    category: "Computer Vision & Edge AI",
    description: "Real-time edge machine vision pipeline detecting manufacturing defects on high-speed stamping lines with immediate defect classification alerts.",
    stack: ["Python", "OpenCV", "FastAPI", "WebSocket", "PyTorch", "Docker"],
    accentColor: "#b9a6ff",
    metrics: [
      { label: "Inference", value: "30 FPS", colorToken: "#b9a6ff" },
      { label: "Accuracy", value: "98.7%", colorToken: "#31ce01" }
    ]
  },
  {
    title: "Auto Plotting Assessor (Google OR-Tools)",
    year: "2022",
    category: "Operations Research & AI Scheduling",
    description: "Automated combinatorial optimization system for thesis proposal examiner scheduling utilizing Constraint Programming Satisfiability (CP-SAT).",
    stack: ["Python", "Google OR-Tools", "CP-SAT", "Node.js", "React.js", "MySQL"],
    accentColor: "#ffab94",
    metrics: [
      { label: "Schedule Time", value: "3.2s", colorToken: "#ffab94" },
      { label: "Conflict Rate", value: "0%", colorToken: "#31ce01" }
    ]
  },
  {
    title: "SOFI (Online Thesis Defense Portal)",
    year: "2020",
    category: "Academic Workflow Automation",
    description: "Comprehensive university portal managing complete student final assignment workflows, jury assignment, scoring, and graduation milestones.",
    stack: ["Laravel", "MySQL", "Bootstrap", "PHP"],
    accentColor: "#ffca00",
    metrics: [
      { label: "Paper Reduced", value: "100%", colorToken: "#31ce01" },
      { label: "Faculty Adoption", value: "FRI Telkom", colorToken: "#415eee" }
    ]
  },
  {
    title: "Berempati Crowdfunding & Auction",
    year: "2020",
    category: "Web Application Platform",
    description: "Charity crowdfunding web app integrating item donation auctions with automated direct disbursement to verified causes.",
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
    "Practicum Assistant for Basic Algorithms & Programming Course",
    "2nd Place Capture The Flag (CTF) Cybersecurity Competition",
    "Top 8 Facebook Developer Circle Clash of Code",
    "Top 10 Computing Competitive Programming Telkom University"
  ]
};

export const certifications: Certification[] = [
  { name: "Certified Data Scientist", issuer: "BNSP (Badan Nasional Sertifikasi Profesi)", year: "2025", category: "AI & Data" },
  { name: "Certified Junior Web Developer", issuer: "BNSP", year: "2021", category: "Software Engineering" },
  { name: "SAP Certified - SAP01 Fundamental", issuer: "SAP", year: "2018", category: "Enterprise ERP" },
  { name: "SQL & Relational Database Professional", issuer: "Certiport / Technical Guild", year: "2018", category: "Database" }
];

export const organizations: Organization[] = [
  {
    role: "Project Lab Assistant & Team Lead",
    organization: "EDE (Enterprise Data & Engineering) Laboratory",
    period: "Jun 2020 - Jun 2021",
    description: "Led software engineering initiatives and mentored junior researchers in web development and fullstack architectures. Selected as Project Lead 3 times across 5 high-impact lab projects."
  },
  {
    role: "Member & Programming Mentor",
    organization: "Daspro (Dasar Pemrograman) Research Group - Telkom University",
    period: "Aug 2019 - Aug 2020",
    description: "Conducted collaborative algorithm research, competitive programming training sessions, and peer code reviews."
  },
  {
    role: "Web Development Division Lead",
    organization: "Central Computer Improvement (CCI) - Telkom University",
    period: "Sep 2018 - Sep 2020",
    description: "Organized web development masterclasses and hands-on bootcamps with 50+ active participants."
  }
];

export const techSkills = {
  languages: ["TypeScript", "JavaScript", "Python", "PHP", "SQL", "HTML5/CSS3"],
  backend: ["Node.js", "Nest.js", "Express.js", "FastAPI", "Flask", "Laravel", "RabbitMQ"],
  frontend: ["Svelte 5", "React.js", "Vue.js", "Tailwind CSS", "Bootstrap", "TypeScript"],
  databases: ["PostgreSQL", "MySQL", "InfluxDB (Time Series)", "Redis (Caching/PubSub)"],
  devopsIoT: ["Docker", "IIS", "Nginx", "PLC Integration (OT)", "WebSockets", "Git & CI/CD", "Linux/Windows Server"]
};

export const partnerBrands = [
  { name: "PT Astra Otoparts Tbk Nusametal Division", tag: "Enterprise Industrial of Smart Manufacturing" },
  { name: "Telkom University", tag: "Higher Education" },
  { name: "Bandung Techno Park", tag: "Technology Incubator" }
];
