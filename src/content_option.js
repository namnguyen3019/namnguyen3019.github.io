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
    { n: "1", l: "Documented artifact" },
    { n: "MS", l: "Management Info Systems" },
  ],
};

const artifacts = [
  {
    id: "ar-01",
    title: "Exploring AI & ML Tools in Practice",
    tag: "Applied AI · Hands-On Lab",
    year: "2026 · AI-LAB-500 · Hands-On Lab Report",
    indexMeta: "Applied AI · 2026",
    lead:
      "A hands-on survey of today's AI/ML tools — Claude Code, custom GPTs, and research assistants — that ends in a purpose-built study agent I designed, prompted, and shipped.",
    objective:
      "Move from using AI tools to evaluating them like an engineer: run the same task across multiple models, judge the outputs against explicit criteria, then build a custom AI agent aimed at a real user need.",
    process: [
      "Ran one structured prompt — a two-month AI/ML learning plan bound to a fixed set of course outcomes and topics — across three models: Claude Code on Haiku 4.5, Opus 4.8, and Sonnet 5.",
      "Scored the outputs on four criteria — correctness, relevance, completeness, and efficiency — and documented where the models diverged (mostly depth and formatting, not coverage).",
      "Tested two research tools against real tasks: Scholar GPT for cited academic answers, and Storm AI for first-draft brainstorming — noting Storm's strong structure but weak readability.",
      "Designed and built Study Boost, a custom GPT that plans coursework and supports studying — writing its behavior prompt, adding domain knowledge, selecting a model, and wiring external actions.",
    ],
    tools: [
      "Claude Code",
      "Haiku 4.5",
      "Opus 4.8",
      "Sonnet 5",
      "Custom GPTs",
      "Scholar GPT",
      "Storm AI",
      "Prompt Engineering",
    ],
    value:
      "Shows I can assess AI tools with a repeatable rubric instead of gut feel, then turn that judgment into a working agent built around a specific user — a busy student who needs a clear, usable study plan.",
    transferable:
      "A simple way to pick an AI model for a task: fix the prompt, run it across candidates, and grade the results on correctness, relevance, completeness, and efficiency before you commit.",
    links: [
      {
        label: "Try Study Boost",
        href: "https://chatgpt.com/g/g-6a53b0cf651081919342d373018af186-studyboost",
      },
      {
        label: "Scholar GPT session",
        href: "https://chatgpt.com/share/6a53aaa6-f394-83ea-8c01-1f5fd44c6ace",
      },
    ],
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
