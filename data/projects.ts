export interface Project {
  title: string;
  type: "Professional" | "Side Project" | "Open Source" | "Learning Project";
  description: string;
  tech: string[];
  role: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "MahFrend",
    type: "Side Project",
    description:
      "Web application that manages loans from your family and friends.",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "Postgres"],
    role: "Fullstack Developer",
    liveUrl: "https://mahfrend.vercel.app/",
    githubUrl: "https://github.com/ongkristopher/MahFrend"
  },
  {
    title: "Jerome AI Web Application",
    type: "Side Project",
    description:
      "Web application that converts dead language (Latin) documents in PDF format into English language.",
    tech: ["Next.js", "React", "Tailwind CSS", "Figma"],
    role: "Frontend Developer, Designer",
  },
  {
    title: "LeadMail",
    type: "Side Project",
    description:
      "A mail app designed for lead generation for small businesses, suited with AI to summarize email threads.",
    tech: ["React", "Tailwind CSS"],
    role: "Frontend Developer",
  },
  {
    title: "React SWAPI",
    type: "Side Project",
    description:
      "A frontend application that consumes the Star Wars API (SWAPI) to display information about Star Wars characters, planets, and starships.",
    tech: ["React", "Redux", "Material UI", "Axios"],
    role: "Frontend Developer",
    liveUrl: "https://ongkristopher-react-swapi.vercel.app/",
    githubUrl: "https://github.com/ongkristopher/react-swapi"
  },
  {
    title: "Extel's Website",
    type: "Professional",
    description: "Extel Insights' public-facing webpage.",
    tech: ["Angular", "Tailwind CSS", "Figma"],
    role: "Frontend Developer",
    liveUrl: "https://extelinsights.com",
  },
  {
    title: "Extel's Business Voting Tool",
    type: "Professional",
    description:
      "A tool for business institutions' asset managers to create validated qualitative market intelligence for Research, Sales, and Trading.",
    tech: ["Angular", "Tailwind CSS", "Figma"],
    role: "Frontend Developer",
  },
  {
    title: "Extel's Voting Tool Admin & Business Dashboard",
    type: "Professional",
    description:
      "Admin and business dashboard for Extel to validate votes, set up voting periods, and configure ballots for voting usage.",
    tech: ["Angular", "SCSS", "Figma"],
    role: "Frontend Developer",
  },
  {
    title: "Traxmate IoT Tracking Platform",
    type: "Professional",
    description:
      "A tracking data processing hub that ingests raw tracking and sensor data and outputs business-related events.",
    tech: ["Angular", "SCSS", "Adobe XD"],
    role: "Frontend Developer",
  },
  {
    title: "NBS HRIS",
    type: "Professional",
    description:
      "Web-based Human Resource Information System covering timekeeping with biometrics integration, leave management, employee movement, and payroll.",
    tech: ["PHP", "JavaScript", "ExtJS", "MySQL", "HTML", "CSS"],
    role: "Web Developer",
  },
  {
    title: "NBS ESS (Employee Self Service)",
    type: "Professional",
    description:
      "Web-based application for employees to manage leave filings, time log modifications, and approver management of manpower.",
    tech: ["Angular", "Node.js", "MySQL"],
    role: "Web Developer",
  },
  {
    title: "Northeast Business Solutions Website",
    type: "Professional",
    description: "Company website for Northeast Business Solutions Inc.",
    tech: ["HTML", "JavaScript", "CSS", "PHP"],
    role: "Web Developer",
    liveUrl: "https://nbs.systems",
  },
  {
    title: "Victory Church Event Reservation",
    type: "Professional",
    description:
      "Web-based event management system for safely managing event attendees during the COVID-19 pandemic.",
    tech: ["Angular", "Node.js", "MySQL"],
    role: "Web Developer",
  },
];
