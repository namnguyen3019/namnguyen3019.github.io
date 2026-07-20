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
    { n: "2", l: "Documented artifacts" },
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
  {
    id: "ar-02",
    title: "Traditional ML vs. Deep Learning in Healthcare",
    tag: "Applied AI · Comparative Deck",
    year: "2026 · Applied AI · Group Presentation",
    indexMeta: "Applied AI · 2026",
    lead:
      "A four-member group deck weighing interpretable machine learning against deep learning across two systems already running in hospitals — Epic's Sepsis Model and Google Health's diabetic-retinopathy CNN. My role was the comparative, strategic, and ethical synthesis that turns the contrast into an adoption decision.",
    objective:
      "Cut through the abstract 'ML vs. deep learning' debate by grounding it in two deployed clinical systems, then answer the question a healthcare CTO actually faces: which paradigm to adopt, when, and at what risk.",
    process: [
      "Mapped the head-to-head trade-space in a data-complexity blueprint — data type, feature engineering, dataset size, interpretability, compute, and deployment — for Epic's tabular sepsis model versus Google's image CNN.",
      "Stress-tested whether either system could swap paradigms, set against a three-axis trade-off — cost, FDA / SaMD regulatory path, and clinical risk — to show where interpretability and accuracy pull apart.",
      "Turned the comparison into a phased adoption roadmap — ML-first, targeted deep-learning pilots, then multimodal and federated learning — projected against a five-year horizon to 2031.",
      "Closed on the ethical reckoning: model bias (Obermeyer, 2019), black-box liability, and data privacy, each answered with a concrete governance commitment.",
    ],
    tools: [
      "Comparative Analysis",
      "Evidence Synthesis",
      "Google Gemini",
      "Google Scholar",
      "PubMed",
      "JAMA Network",
      "HTML / CSS / JS",
    ],
    value:
      "Shows I can take two competing technical approaches and produce a decision, not just a comparison — grounding the recommendation in deployed systems, regulatory reality, cost, and peer-reviewed evidence a clinical stakeholder would accept.",
    transferable:
      "A reusable way to choose between ML and deep learning: judge the shape of the data and the cost of a wrong answer (false positive vs. false negative), weigh interpretability against accuracy, and sequence adoption — interpretable models first, deep learning only where accuracy is a safety requirement.",
    links: [
      {
        label: "View the deck",
        href: "/artifacts/ml-vs-dl-healthcare/",
      },
    ],
  },
];

const profile = {
  summary: [
    "Born in northern Vietnam, I was raised on hard work and big dreams. After school I wasn't just doing homework—I was working the fields, the family shop, and a restaurant, then speed-running life strategies on Age of Empires. I learned physics to invent things, learned gratitude after losing a close friend, and learned that life is short—so I like to make it count.",
    "In 2019 I came to America planning to engineer the sun with solar panels, switched to IT in 2022, and am now mastering AI in 2026—because why pick one future when you can upgrade to all of them? I'm passionate about becoming \\\"crazy rich,\\\" eating pho like it's a personality trait, and playing pickleball with such intensity the ball files an HR complaint. I'm building AI systems to connect millions of people around shared passions—starting right here in Texas with DinkPass, an AI-enabled sports facility platform.",
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
