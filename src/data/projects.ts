import codingPlatformCover from "@/assets/projects/codingPlatformCover.png"
import codingPlatform1 from "@/assets/projects/codingPlatform1.png"
import codingPlatform2 from "@/assets/projects/codingPlatform2.png"
import codingPlatform3 from "@/assets/projects/codingPlatform3.png"
import pfaCover from "@/assets/projects/pfaCover.png"
import pfa1 from "@/assets/projects/pfa1.png"
import pfa2 from "@/assets/projects/pfa2.png"
import pfa3 from "@/assets/projects/pfa3.png"
import pfa4 from "@/assets/projects/pfa4.png"
import tuteeTutorImg from "@/assets/projects/tuteetutor.svg";
import tuteetutor1 from "@/assets/projects/tuteeTutor1.png"
import tuteetutor2 from "@/assets/projects/tuteeTutor2.png"
import tuteetutor3 from "@/assets/projects/tuteeTutor3.png"
import tuteetutor4 from "@/assets/projects/tuteeTutor4.png"
import tuteetutor5 from "@/assets/projects/tuteeTutor5.png"
import careerBoostImg from "@/assets/projects/careerboost.png";
import careerboost1 from "@/assets/projects/careerboost1.png"
import careerboost2 from "@/assets/projects/careerboost2.png"
import careerboost3 from "@/assets/projects/careerboost3.png"
import tictactoeCoverImg from "@/assets/projects/tictactoe-cover.png"
import tictactoe1 from "@/assets/projects/tictactoe1.png"
import tictactoe2 from "@/assets/projects/tictactoe2.png"
import tictactoe3 from "@/assets/projects/tictactoe3.png"
import harCoverImg from "@/assets/projects/har-cover.png"
import har1 from "@/assets/projects/har1.png"
import har2 from "@/assets/projects/har2.png"
import har3 from "@/assets/projects/har3.png"

export interface ProjectDetail {
  slug: string;
  title: string;
  summary: string;
  description: string;
  achievement?: string;
  tech: string[];
  github?: string;
  live?: string;
  coverImage: string;
  gallery: string[];
  highlights: string[];
  details: {
    title: string;
    items: string[];
  }[];
  metadata: {
    label: string;
    value: string;
  }[];
}

export const projects: ProjectDetail[] = [
  {
    slug: "tally-codebrewers-solution",
    title: "Real-Time Coding Platform",
    summary:
      "Competitive programming platform built for Tally CodeBrewers. Features real-time code execution, live leaderboards, and collaborative coding rooms.",
    description:
      "A high-performance coding platform developed for the 'Commander of Full Stack' track at Tally CodeBrewers Hackathon. The system enables users to solve algorithmic problems in real-time with an integrated code editor. It features a secure execution sandbox to run untrusted code, a live leaderboard updated via WebSockets, and a robust admin panel for contest management.",
    achievement: "2nd Runner-up at Tally CodeBrewers Hackathon",
    tech: ["React.js", "Node.js", "Express", "Socket.IO", "MongoDB"],
    github: "https://github.com/DeepakJhawar/Tally",
    live: "https://web-wizards-coding-platform.vercel.app/",
    coverImage: codingPlatformCover,
    gallery: [codingPlatform1, codingPlatform2, codingPlatform3],
    highlights: [
      "Secured 2nd Runner-up position competing against top engineering teams nationwide.",
      "Engineered a real-time bi-directional communication layer using Socket.IO for instant leaderboard updates.",
      "Built a secure code execution engine capable of handling concurrent user submissions.",
    ],
    details: [
      {
        title: "Core Features",
        items: [
          "Interactive code editor with syntax highlighting and multi-language support.",
          "Real-time global leaderboard that updates instantly upon submission evaluation.",
          "Secure sandbox environment to execute user code without compromising server integrity.",
        ],
      },
      {
        title: "Technical Challenges Solved",
        items: [
          "Implemented flood control and rate limiting to prevent server overload during high-traffic contest windows.",
          "Synchronized game state and scores across all connected clients with millisecond latency.",
          "Optimized backend logic to handle multiple concurrent code compilation requests.",
        ],
      },
    ],
    metadata: [
      { label: "Event", value: "Tally CodeBrewers Hackathon" },
      { label: "Outcome", value: "2nd Runner-up" },
    ],
  },
  {
    slug: "personal-finance-assistant",
    title: "Personal Finance Assistant",
    summary:
      "A full-stack financial tracking application featuring interactive spending visualization and secure expense logging.",
    description:
      "Developed a comprehensive personal finance dashboard designed to help users track expenses and analyze spending habits. The application aggregates transaction data to provide actionable insights through interactive charts. It features secure user authentication, real-time budget tracking, and a responsive design for on-the-go finance management.",
    achievement: "",
    tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "JWT"],
    github: "https://github.com/lahariSane/Personal-Finance-Assistant",
    live: "",
    coverImage: pfaCover,
    gallery: [pfa1, pfa2, pfa3, pfa4],
    highlights: [
      "Designed an interactive dashboard using Chart.js to visualize spending distribution across categories.",
      "Implemented secure user authentication and session management using JSON Web Tokens (JWT).",
      "Built robust RESTful APIs to handle complex queries for monthly summaries and category-wise breakdowns.",
    ],
    details: [
      {
        title: "Key Capabilities",
        items: [
          "Expense & Income Tracking: intuitive forms to add transactions with dates, categories, and notes.",
          "Visual Analytics: Dynamic pie and bar charts showing where money is going month-over-month.",
          "AI Integration: Used Gemini API to extract transactions from a photo"
        ],
      },
      {
        title: "What I Solved",
        items: [
          "Optimized database queries with MongoDB aggregation pipelines to calculate totals instantly.",
          "Created reusable UI components for forms and charts to maintain design consistency.",
          "Ensured data privacy by hashing passwords and protecting API routes with middleware.",
        ],
      },
    ],
    metadata: [
      { label: "Type", value: "Personal Project" },
      { label: "Stack", value: "MERN" },
    ],
  },
  {
    slug: "tuteetutor-cms",
    title: "TuteeTutor",
    summary:
      "A full-stack Classroom Management System (CMS) designed to streamline student-teacher interactions, assignment tracking, and course material distribution.",
    description:
      "Developed a comprehensive web-based platform facilitating seamless classroom management. The system allows instructors to create courses, post announcements, and grade assignments, while students can join classes, submit work, and track their progress. The application is containerized using Docker for consistent deployment across development and production environments.",
    achievement: "",
    tech: ["React", "Node.js", "Express", "MongoDB", "Docker", "Material UI"],
    github: "https://github.com/lahariSane/tuteetutor-react",
    live: "https://tuteetutor-react-2.vercel.app/login",
    coverImage: tuteeTutorImg,
    gallery: [tuteetutor1, tuteetutor2, tuteetutor3, tuteetutor4, tuteetutor5],
    highlights: [
      "Architected a secure 4-role access system (Student, Faculty, HOD, Admin) with granular permission controls.",
      "Implemented a digital attendance tracking module, reducing manual paperwork and enabling real-time status updates.",
      "Designed structured communication channels to facilitate clear and efficient teacher-student interaction.",
    ],
    details: [
      {
        title: "Key Capabilities",
        items: [
          "Role-Based Dashboards: Custom UI views tailored to the specific needs of HODs (oversight), Faculty (management), and Students (view-only).",
          "Class Scheduling: Dynamic timetable management allowing faculty to organize and update lecture slots.",
          "Attendance System: Automated logging and retrieval of student attendance records.",
        ],
      },
      {
        title: "Technical Implementation",
        items: [
          "Utilized Docker Compose to orchestrate multi-container microservices for the frontend and backend.",
          "Designed RESTful APIs to handle complex relationships between Users, Courses, and Submissions.",
          "Implemented secure authentication and session management for data privacy.",
        ],
      },
    ],
    metadata: [
      { label: "Team", value: "5 members" },
      { label: "Stack", value: "MERN + Docker" },
    ],
  },
  {
    slug: "career-boost",
    title: "CareerBoost",
    summary:
      "An AI-driven resume analysis platform using RoBERTa and Gemini Pro to optimize candidate profiles for ATS compatibility.",
    description:
      "Developed a resume evaluation system designed to solve the challenge of manual resume screening and ATS rejection. The platform employs a dual-pipeline architecture: one pipeline processes resumes using a fine-tuned RoBERTa model for Named Entity Recognition (NER), while the second analyzes job descriptions using the Google Gemini Pro API. The system outputs a structured 'Fitment Score' to help candidates improve their hiring chances.",
    achievement: "",
    tech: ["RoBERTa", "BERT", "Google Gemini Pro API", "Python", "spaCy", "Deep Learning"],
    github: "", // Add your repo link if available
    live: "",
    coverImage: careerBoostImg,
    gallery: [careerboost1, careerboost2, careerboost3],
    highlights: [
      "Outperformed BERT and ALBERT models, achieving the highest F1 Score (77.6%) and Accuracy (84.1%) using RoBERTa.",
      "Engineered a weighted scoring algorithm that prioritizes Skills (60%), Degree (20%), and Field of Study (20%) for precise match calculation.",
      "Implemented a hybrid NLP approach combining supervised learning (NER) for resumes and Generative AI (Gemini) for unstructured job descriptions.",
    ],
    details: [
      {
        title: "System Architecture",
        items: [
          "Resume Pipeline: Utilizes RoBERTa to extract entities like Skills, Degrees, and College Names via Named Entity Recognition.",
          "JD Pipeline: Leverages Google Gemini Pro with one-shot prompt engineering to convert unstructured job descriptions into JSON format.",
          "Scoring Engine: Compares extracted entities from both pipelines to generate a percentage-based Fitment Score.",
        ],
      },
      {
        title: "Model Optimization",
        items: [
          "Conducted extensive hyperparameter tuning, identifying the optimal configuration: Learning Rate 5e-5, Batch Size 16, and Stride 128.",
          "Addressed BERT sequence length limitations by splitting text into overlapping chunks of 512 tokens to retain context.",
        ],
      },
    ],
    metadata: [
      { label: "Timeline", value: "Sep 2025" },
      { label: "Team", value: "3 members" },
    ],
  },
  {
    slug: "tic-tac-toe",
    title: "Tic Tac Toe - Minimax with Alpha-Beta Pruning",
    summary:
      "AI-powered Tic Tac Toe built with React, using the Minimax algorithm optimized with Alpha-Beta pruning for perfect play.",
    description:
      "An intelligent Tic Tac Toe web app where the computer plays optimally using the Minimax algorithm enhanced with Alpha-Beta pruning. Each board state is evaluated recursively with +1, 0, or -1 rewards representing win, draw, and loss. The React frontend offers an interactive, responsive, and minimal UI hosted on Render.",
    achievement: "",
    tech: [
      "React",
      "JavaScript",
      "Minimax Algorithm",
      "Alpha-Beta Pruning",
      "HTML",
      "CSS",
      "Render",
    ],
    github: "https://github.com/lahariSane/tic-tac-toe",
    live: "https://tic-tac-toe-74qe.onrender.com/",
    coverImage: tictactoeCoverImg,
    gallery: [
      tictactoe1,
      tictactoe2,
      tictactoe3
    ],
    highlights: [
      "Implemented Minimax with Alpha-Beta pruning for optimal AI gameplay.",
      "Recursive state evaluation assigning +1 (win), 0 (draw), -1 (loss).",
      "Responsive UI built with React functional components and hooks.",
      "Instant reset and replay functionality with smooth animations.",
    ],
    details: [
      {
        title: "AI Logic",
        items: [
          "Used Minimax algorithm to explore all possible moves and counter-moves.",
          "Applied Alpha-Beta pruning to skip branches that can’t affect the final outcome, improving efficiency.",
          "Evaluates terminal states with +1, 0, and -1 rewards.",
        ],
      },
      {
        title: "Frontend",
        items: [
          "Built with React for fast development and deployment.",
          "Uses modular components for the board, cells, and status display.",
          "Clean, responsive layout styled with CSS for mobile and desktop.",
        ],
      },
      {
        title: "Deployment",
        items: [
          "Deployed seamlessly on Render with reliable hosting and automatic environment configuration.",
        ],
      },
    ],
    metadata: [
      { label: "Duration", value: "2024" },
      { label: "Repository", value: "GitHub" },
    ],
  },
  {
    slug: "human-activity-recognizer",
    title: "Human Activity Recognizer (HAR)",
    summary:
      "Classifies human activities from smartphone sensor data using a feature-selection pipeline and Random Forest.",
    description:
      "A machine-learning pipeline for Human Activity Recognition (HAR) on the UCI Smartphone dataset. It performs label encoding, removes duplicate features, applies SelectKBest and RFE for feature selection, and trains a Random Forest classifier. The trained model is exported as a pickle file and evaluated via a separate testing notebook.",
    achievement: "",
    tech: [
      "Python",
      "Jupyter Notebook",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Joblib"
    ],
    github: "https://github.com/lahariSane/Human-Activity-Recognizer",
    live: "",
    coverImage: harCoverImg,
    gallery: [
      har1,
      har2,
      har3
    ],
    highlights: [
      "UCI Smartphone HAR dataset with 561 features and 6 activity labels.",
      "Duplicate-feature cleanup via custom utility before model training.",
      "Two-stage feature selection: SelectKBest followed by RFE.",
      "Random Forest classifier trained and exported as model (.pkl).",
      "Separate notebooks for training (HAR.ipynb) and testing (test.ipynb)."
    ],
    details: [
      {
        title: "Dataset & Preprocessing",
        items: [
          "Uses the UCI Human Activity Recognition dataset (accelerometer & gyroscope).",
          "Label encoding of target classes and removal of duplicate columns via utilities."
        ]
      },
      {
        title: "Feature Engineering",
        items: [
          "Top-k selection with SelectKBest to keep the most informative features.",
          "Recursive Feature Elimination (RFE) with Random Forest to refine the subset"
        ]
      },
      {
        title: "Modeling & Export",
        items: [
          "Random Forest classifier trained within a scikit-learn Pipeline.",
          "Model persisted to .pkl with joblib and reused in the testing notebook."
        ]
      },
      {
        title: "How to Run",
        items: [
          "Train: run HAR.ipynb to preprocess, select features, train, and export the model.",
          "Test: run test.ipynb to load pipeline.pkl/model.pkl and evaluate on test inputs."
        ]
      }
    ],
    metadata: [
      { label: "Duration", value: "2024" },
      { label: "Repository", value: "GitHub" }
    ]
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getOtherProjects = (slug: string) =>
  projects.filter((project) => project.slug !== slug);
