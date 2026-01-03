// Update this file to change content across the site (projects, experience, socials, etc.)

export type Link = {
  label: string
  href: string
}

export type Project = {
  id: string
  title: string
  subtitle: string
  tech: string[]
  bullets: string[]
  links?: Link[]
  // If you have a screenshot for the project, put it in /public/images/projects/
  // and set image to something like: "/images/projects/book-finder.png"
  image?: string
}

export type Experience = {
  id: string
  role: string
  org: string
  dates: string
  location?: string
  bullets: string[]
  links?: Link[]
  // Optional logo path in /public/images/ (ex: "/images/orgs/mcmaster.png")
  logo?: string
}

export const SITE = {
  name: "Simardeep Dhanda",
  title: "Software Engineering Student",
  tagline: "I build fast, practical software products and love systems that scale.",
  location: "Hamilton, ON",
  email: "simardhanda1@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/SimardeepDhanda" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/simardhanda/" },
  ] as Link[],
}

export const NAV = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
] as Link[]

export const PROJECTS: Project[] = [
  {
    id: "book-finder",
    title: "Book Finder",
    subtitle: "Multi-Library Book Search Engine",
    tech: ["Node.js", "Express.js", "JavaScript", "YAML", "HTML", "CSS"],
    bullets: [
      "Implemented a full-stack Node.js/Express web app delivering real-time ISBN availability across 6+ library systems, reducing manual lookup time by ~90% via consolidated catalogue APIs, real-time polling, caching, and location-based search (Google Places, progressive radius, Haversine).",
      "Developed a modular adapter system that improved API reliability by implementing YAML-configurable adapters with intelligent pattern matching, resilient web scraping, timeouts, rate limiting, and robust error handling.",
      "Optimized server performance by eliminating HTTP 413 payload errors and restoring 100% successful handling of large API responses by tuning Express body-size limits and improving UX.",
    ],
    image: "/images/projects/book-finder.png",
    links: [
      { label: "GitHub", href: "https://github.com/SimardeepDhanda/globalISBNtracker" },
      { label: "Live", href: "https://book-isbn-tracker.vercel.app/" },
    ],
  },
  {
    id: "mealmap",
    title: "MealMap",
    subtitle: "McMaster Campus Meal Planner",
    tech: ["Python", "FastAPI", "SQL", "Supabase", "Next.js", "React", "TypeScript"],
    bullets: [
      "Built MealMap to improve access to real-time campus meal and nutrition data, reducing average meal-selection time by ~35% by integrating the McMaster Nutrition Services API for live menu and nutrition information.",
      "Implemented a personalized meal-planning experience that reduced users' average meal costs by 20% by building a React UI for dietary and budget inputs.",
      "Designed a PostgreSQL schema to store preferences and history and supported a recommendation workflow optimizing for cost and nutrition.",
    ],
    image: "/images/projects/mealmap.png",
    links: [
      { label: "GitHub", href: "https://github.com/your-handle/mealmap" },
      { label: "Live", href: "https://your-live-link.com" },
    ],
  },
  {
    id: "voice-flow-trainer",
    title: "Voice Flow Trainer",
    subtitle: "Voice-Driven Conversation Practice",
    tech: ["TypeScript", "React", "Vite", "Tailwind CSS", "OpenAI Whisper", "OpenAI TTS"],
    bullets: [
      "Developed a full-stack voice-driven conversation training platform, increasing real-time roleplay throughput 3x and reducing voice latency to below 200 ms using a Next.js/TypeScript frontend and an end-to-end voice pipeline (Whisper STT, GPT-4o dialogue, OpenAI TTS).",
      "Implemented a secure, production-ready architecture that improved deployment frequency 3x and reduced runtime errors by 40% using serverless API routes, strict TypeScript typing, Vercel CI/CD, and responsive Tailwind UI.",
    ],
    image: "/images/projects/voice-flow-trainer.png",
    links: [
      { label: "GitHub", href: "https://github.com/SimardeepDhanda/voice-flow-trainer" },
      { label: "Live", href: "https://convo-assistant.vercel.app/" },
    ],
  },
  {
    id: "ehr-ml",
    title: "Disease Detection with EHR Machine Learning",
    subtitle: "Clinical Risk Classification Prototype",
    tech: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib"],
    bullets: [
      "Developed and refined logistic regression and SVM classifiers for EHR data, achieving 91.5% average accuracy and ROC-AUC > 0.90 through feature engineering, preprocessing, and hyperparameter tuning.",
      "Improved model performance by increasing predictive accuracy by 12% and reducing training time by 25% through null handling, standardization, and targeted feature engineering.",
      "Built a prototype interface to reduce diagnostic turnaround time by 35% by delivering disease-detection alerts from a validated reference database.",
    ],
    image: "/images/projects/ehr-ml.png",
    links: [
      { label: "GitHub", href: "https://github.com/SimardeepDhanda/Heart-Failure-Prediction-Model" },
    ],
  },
]

export const EXPERIENCE: Experience[] = [
  {
    id: "mcmaster-exoskeleton",
    role: "Software Developer",
    org: "McMaster Exoskeleton Team",
    dates: "Jan 2025 – Present",
    bullets: [
      "Developed control systems and embedded software for lower-limb exoskeleton suits designed to enhance strength and mobility for first responders through wearable robotics.",
      "Built data acquisition and testing tools to support hardware integration, sensor calibration, and real-time performance monitoring during exoskeleton development cycles.",
      "Created user interfaces and visualization dashboards for system diagnostics, enabling faster debugging and improving team collaboration across mechanical, electrical, and software domains.",
    ],
    logo: "/images/orgs/mcmaster-exoskeleton.png",
    links: [{ label: "Team", href: "https://www.macexo.com/" }],
  },
  {
    id: "canada-learning-code",
    role: "Software Development Coordinator",
    org: "Canada Learning Code",
    dates: "Dec 2023 – Present",
    location: "Greater Toronto Area",
    bullets: [
      "Led 20+ immersive technology bootcamps for 100+ GTA students, improving participant coding proficiency by 40% (pre/post assessments) through challenge-based curricula and hands-on instruction.",
      "Taught Python, HTML/CSS/JavaScript, and SQL while supporting learners through projects, debugging, and guided practice.",
      "Helped teams innovate and compete in rigorous events that tested both the technology and the team behind it.",
    ],
    logo: "/images/orgs/canada-learning-code.png",
    links: [{ label: "Organization", href: "https://www.canadalearningcode.ca/" }],
  },
]

// Resume page settings (PDF embed + download)
export const RESUME = {
  pdfUrl: "/resume.pdf", // place your PDF at /public/resume.pdf
  lastUpdated: "2026-01-02",
}

// Optional: quick highlights for the homepage
export const HIGHLIGHTS = [
  { label: "Focus", value: "Full-stack, systems, and practical ML" },
  { label: "Strengths", value: "Clean UX, reliability, and fast iteration" },
  { label: "Currently", value: "Building projects + co-op search" },
]

// Skills for the home page
export const SKILLS = {
  Languages: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "Bash", "MATLAB"],
  "Frameworks & Libraries": ["React", "FastAPI", "Node.js", "Express.js", "TensorFlow", "NumPy", "Pandas", "Tailwind CSS"],
  "Tools & Platforms": ["Git", "GitHub", "VS Code", "PyCharm", "Jupyter Notebooks", "PostgreSQL", "Google Cloud Platform (GCP)", "AWS", "Azure", "Vercel"],
}

