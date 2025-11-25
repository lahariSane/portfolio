export interface Experience {
  slug: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    slug: "typeface",
    company: "Typeface",
    role: "Software Engineering Intern",
    period: "Jan 2026 - Jun 2026",
    location: "Hyderabad (Upcoming)",
    summary:
      "Incoming software engineering intern focusing on intelligent content creation experiences across the Typeface platform.",
    responsibilities: [
      "Selected to join the Growth Engineering squad to help redefine AI-guided campaign builders.",
      "Will collaborate with product designers to prototype and validate new real-time collaboration primitives.",
      "Tasked with instrumenting product funnels to uncover and resolve adoption friction points.",
    ],
  },
  {
    slug: "tally-solutions",
    company: "Tally Solutions Pvt Ltd",
    role: "Engineering Intern",
    period: "May 2025 - Aug 2025",
    location: "Bangalore, India",
    summary:
      "Built production-ready React Native applications and TypeScript services that enabled real-time borrower eligibility insights for field teams.",
    responsibilities: [
      "Developed OTP-authenticated onboarding with automated fallback flows.",
      "Integrated TypeScript APIs backed by Sequelize ORM and MySQL.",
      "Optimized UI performance for low-connectivity environments.",
    ],
  },
  {
    slug: "iiit-sricity",
    company: "IIIT Sricity",
    role: "Research Intern",
    period: "Mar 2025 - Aug 2025",
    location: "Under Dr. Annushree Bablani",
    summary:
      "Explored postpartum depression screening frameworks and partnered with clinicians to outline digital intervention prototypes.",
    responsibilities: [
      "Synthesized findings from medical literature reviews and patient interviews.",
      "Distilled product requirements for a mobile-first screening companion.",
      "Aligned research outputs with engineering feasibility assessments.",
    ],
  },
];
