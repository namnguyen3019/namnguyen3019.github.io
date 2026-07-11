// ---------------------------------------------------------------------------
// Portfolio of Artifacts — single source of content.
// Each "artifact" is a piece of proof-of-work documented end to end:
// Objective (why) · Process (how) · Tools (what) · Value (why it matters)
// plus a "Transferable" note so the portfolio doubles as a resource for others.
// Edit the data below to update the site; components read from these exports.
// ---------------------------------------------------------------------------

const logotext = "Nam Nguyen";
const brandTag = "Portfolio of Artifacts";

const meta = {
  title: "Nam Nguyen — Portfolio of Artifacts",
  description:
    "Full Stack Software Engineer building AI-enabled enterprise systems, SaaS platforms, and scalable digital infrastructure. Projects documented as artifacts — objective, process, tools, and value.",
};

const hero = {
  name: "Nam Nguyen",
  roleLead: "Full Stack Software Engineer building ",
  roleEmph: "AI-enabled enterprise systems",
  roleTail: ", SaaS platforms, and scalable digital infrastructure.",
  thesis:
    "Every project below is documented as an artifact — its objective, the process behind it, the tools used, and the value it created. The point isn't just what shipped, but how it was built and what you can take from it. Consider this a record of work, and a resource for anyone solving similar problems.",
  location: "Texas, United States",
  availability: "Available for enterprise & SaaS work",
  stats: [
    { n: "8+", l: "Years full-stack" },
    { n: "3", l: "Industries · Retail · Energy · SaaS" },
    { n: "6", l: "Documented artifacts" },
    { n: "MS", l: "Management Info Systems" },
  ],
};

const artifacts = [
  {
    id: "ar-01",
    title: "7-Eleven Self-Checkout Platform",
    tag: "Retail · Enterprise Mobile",
    year: "2023 — Present · TechField LLC (Client: 7-Eleven)",
    indexMeta: "Retail · 2023—Now",
    lead:
      "Keeping self-checkout and digital commerce reliable across thousands of convenience-retail locations, where every minute of downtime is lost transactions.",
    objective:
      "Modernize the self-checkout and digital-commerce systems that shoppers and store staff depend on daily — raising performance, reliability, and maintainability of the mobile software running at national retail scale.",
    process: [
      "Partnered with engineering teams and stakeholders to map the self-checkout flows and their real-world failure points across the retail footprint.",
      "Built and refactored React Native / TypeScript modules for speed, resilience, and long-term maintainability at scale.",
      "Instrumented and resolved production issues, hardening error handling for high-traffic stores.",
      "Introduced AI-assisted steps into the delivery pipeline to lift velocity and code quality.",
    ],
    tools: ["React Native", "TypeScript", "Redux", "REST APIs", "CI/CD", "AWS"],
    value:
      "Demonstrates ownership of mission-critical, high-scale retail software — engineering for reliability under real operational pressure, not just shipping features.",
    transferable:
      "A repeatable pattern for stabilizing a large mobile fleet: observe the flow, isolate failure modes, refactor for resilience, then automate the pipeline around it.",
  },
  {
    id: "ar-02",
    title: "DinkPass — Sports Facility SaaS",
    tag: "SaaS · Product Ownership",
    year: "2026 — Present · Co-Founder & Technical Advisor",
    indexMeta: "SaaS · 2026—Now",
    lead:
      "A cloud-native SaaS that digitizes sports-facility management and player engagement for community-driven racquet sports.",
    objective:
      "Launch a SaaS platform that handles scheduling, reservations, player engagement, and analytics for sports facilities — built to scale with a growing community from day one.",
    process: [
      "Defined product strategy and technical architecture from zero.",
      "Designed cloud-based services for scheduling, reservations, engagement, and operational analytics.",
      "Built a mobile-first experience in React Native on a FastAPI + PostgreSQL backend, deployed on AWS.",
      "Set the scalability and infrastructure roadmap for long-term growth.",
    ],
    tools: ["React Native", "FastAPI", "PostgreSQL", "AWS", "Cloud Infrastructure"],
    value:
      "End-to-end product ownership — from architecture and infrastructure decisions to a shipped SaaS — with the founder judgment to balance speed against scalability.",
    transferable:
      "How to take a vertical SaaS from concept to a cloud-native architecture without over-building it before it has users.",
  },
  {
    id: "ar-03",
    title: "Enterprise API & BI Reporting Platform",
    tag: "Enterprise · Backend & Data",
    year: "2023 — 2024 · Mercury Systems, Inc.",
    indexMeta: "Enterprise · 2023—24",
    lead:
      "Trustworthy, real-time data behind the operational decisions of an enterprise — secure APIs plus the reporting layer teams actually use.",
    objective:
      "Give operations and business teams reliable, real-time information by building enterprise-grade APIs and reporting systems underneath their decision-making workflows.",
    process: [
      "Designed and built secure REST APIs and backend services in Java / Spring Boot.",
      "Implemented authentication and authorization with Spring Security and JWT.",
      "Built React / TypeScript single-page apps as the operational front end.",
      "Optimized database interactions and cloud deployment for performance at scale.",
    ],
    tools: ["Java", "Spring Boot", "Spring Security", "React", "TypeScript", "PostgreSQL", "AWS"],
    value:
      "Depth in the enterprise Java stack and secure system design — the backbone skills for regulated, data-critical business systems.",
    transferable:
      "A blueprint for a secure, reportable enterprise service: a typed API, JWT-based auth, and a reporting layer decision-makers genuinely rely on.",
  },
  {
    id: "ar-04",
    title: "AI-Assisted SDLC Workflow",
    tag: "Method · Engineering Practice",
    year: "2023 — Present · Cross-cutting",
    indexMeta: "Method · 2023—Now",
    lead:
      "Not just using AI dev tools — designing the workflow that makes a team faster and safer with them.",
    objective:
      "Modernize how software gets built by folding AI tools into the development lifecycle — improving delivery speed, code quality, and consistency across teams without eroding rigor.",
    process: [
      "Evaluated AI developer tools — GitHub Copilot, Cursor, Claude — against real delivery bottlenecks.",
      "Designed prompt patterns and review checkpoints so AI accelerates work without lowering the quality bar.",
      "Integrated AI steps into code review, generation, and testing inside existing CI/CD.",
      "Measured developer-productivity impact and iterated on the workflow.",
    ],
    tools: ["GitHub Copilot", "Cursor AI", "Claude", "OpenAI API", "Prompt Engineering", "CI/CD"],
    value:
      "Positions me at the front of AI-enabled engineering — designing the practice, not just consuming the tools.",
    transferable:
      "A practical framework any team can adopt to introduce AI into the SDLC while keeping code review and quality gates intact.",
  },
  {
    id: "ar-05",
    title: "Renewable-Energy CRM",
    tag: "Clean Energy · Full-Stack",
    year: "2018 — 2020 · FidSolar · Ho Chi Minh City",
    indexMeta: "Clean Energy · 2018—20",
    lead:
      "A CRM shaped around the real operational workflows of a solar-energy business, not a generic template.",
    objective:
      "Support solar-energy operations with a CRM that streamlines customer engagement and the internal workflows the team runs every day.",
    process: [
      "Built CRM modules for customer management and operational workflows.",
      "Developed responsive React / TypeScript front ends.",
      "Engineered Java / Spring backend services with a scalable Oracle schema and enterprise authentication.",
      "Optimized request processing and operational scalability.",
    ],
    tools: ["React", "TypeScript", "Java", "Spring Boot", "Oracle", "Hibernate"],
    value:
      "Domain fluency in renewable energy plus the full-stack range to deliver a working operational system, front to back.",
    transferable:
      "How to shape a CRM around one industry's actual workflows instead of bending a generic tool to fit.",
  },
  {
    id: "ar-06",
    title: "Solar Operations Web Platform",
    tag: "Clean Energy · Foundations",
    year: "2017 — 2018 · Viet Phan LLC",
    indexMeta: "Clean Energy · 2017—18",
    lead:
      "The early full-stack breadth — multiple frameworks, backend, and DevOps — that became the foundation for later enterprise and SaaS work.",
    objective:
      "Build and maintain full-stack web applications supporting solar-energy operations and the digital business infrastructure around them.",
    process: [
      "Designed full-stack applications for solar operational workflows.",
      "Built front ends in React and Vue.js.",
      "Engineered Java and relational-database backend services and APIs.",
      "Implemented CI/CD and deployment automation.",
    ],
    tools: ["React", "Vue.js", "Java", "MySQL", "PostgreSQL", "AWS"],
    value:
      "Proof of early breadth across frameworks, backend, and DevOps — the versatile base that everything since has been built on.",
    transferable:
      "The compounding value of learning CI/CD and multi-framework fundamentals early, before specializing.",
  },
];

const profile = {
  summary: [
    "Technology professional with extensive experience designing and developing scalable enterprise software systems, AI-assisted development workflows, cloud infrastructure, and SaaS platforms that support operational efficiency and digital modernization.",
    "My work spans renewable energy, retail commerce, and SaaS technology services — from large-scale operational systems to optimizing software delivery pipelines and contributing to AI-enabled engineering modernization. Currently focused on scalable digital infrastructure, AI-assisted SDLC practices, and cloud-based SaaS innovation.",
  ],
  focus: [
    "AI-Assisted SDLC",
    "Enterprise Architecture",
    "Full-Stack Development",
    "Scalable Cloud Infrastructure",
    "SaaS Platform Engineering",
    "Mobile Systems",
    "REST APIs & Microservices",
    "CI/CD & DevOps",
  ],
  experience: [
    { role: "Senior Software Engineer", when: "Jul 2023 — Now", org: "TechField LLC · Client: 7-Eleven · Texas" },
    { role: "Co-Founder & Technical Advisor", when: "2026 — Now", org: "DinkPass — Sports Facility SaaS" },
    { role: "Full Stack Engineer", when: "Jan 2023 — Dec 2024", org: "Mercury Systems, Inc. · United States" },
    { role: "Software Developer", when: "Sep 2018 — Sep 2020", org: "FidSolar · Ho Chi Minh City" },
    { role: "Full Stack Software Developer", when: "Sep 2017 — Aug 2018", org: "Viet Phan LLC · Vietnam" },
    { role: "Technical Engineer", when: "Sep 2017 — May 2018", org: "Keyence · Ho Chi Minh City" },
  ],
  skills: [
    {
      label: "AI & Systems",
      items:
        "OpenAI API · GPT-4 Integration · AI-Assisted SDLC · Prompt Engineering · GitHub Copilot · Cursor AI · Claude · Speech-to-Text & Text-to-Speech · Real-Time AI Communication",
    },
    {
      label: "Frontend",
      items: "React.js · React Native · TypeScript · JavaScript · Redux · HTML5 · CSS3 · Bootstrap · Material UI",
    },
    {
      label: "Backend",
      items: "Java · Spring Boot · Spring MVC · Spring Security · Hibernate · JPA · RESTful APIs · Node.js · Python · FastAPI",
    },
    {
      label: "Cloud & Infra",
      items: "AWS (EC2 · S3 · RDS · CloudFront) · Firebase · CI/CD Pipelines · Cloud-Native Deployment",
    },
    { label: "Databases", items: "PostgreSQL · MySQL · Oracle · MongoDB" },
    {
      label: "DevOps",
      items: "Git · GitHub · JIRA · Postman · Maven · Agile / Scrum · CI/CD Automation · Performance Optimization",
    },
  ],
  education: [
    {
      deg: "M.S., Management Information Systems",
      school: "University of Houston–Clear Lake · Houston, Texas",
      when: "Graduated Dec 2022",
    },
    {
      deg: "B.Eng., Petroleum Engineering",
      school: "PetroVietnam University · Vietnam",
      when: "Graduated Aug 2017",
    },
  ],
};

const contact = {
  headline: "Let's build something worth documenting",
  blurb:
    "Open to enterprise engineering, SaaS product work, and AI-enabled modernization. The fastest way to reach me is email.",
  links: [
    { k: "Email", href: "mailto:nam.nguy3019@gmail.com", label: "nam.nguy3019@gmail.com" },
    { k: "GitHub", href: "https://github.com/namnguyen3019", label: "github.com/namnguyen3019" },
    { k: "LinkedIn", href: "https://linkedin.com/in/namnguyenhue", label: "in/namnguyenhue" },
    { k: "Web", href: "https://namnguyen.bio", label: "namnguyen.bio" },
  ],
};

export { logotext, brandTag, meta, hero, artifacts, profile, contact };
