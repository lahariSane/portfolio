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
    period: "Jan 2026 - Present",
    location: "Hyderabad",
    summary:
      "Software engineering intern working on Agent Studio, specifically the Agent Builder used to configure and debug custom AI agents.",
    responsibilities: [
      "Working on stabilizing a new version of the Agent Builder by resolving compatibility and debug issues related to Pydantic-based execution outputs.",
      "Improving builder architecture and node behavior (loop, tool, if-else) to enhance reliability and reduce dependency coupling.",
      "Adding validations, test coverage across multiple environments, and contributing to frontend and backend features such as cursor-based pagination.",
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
