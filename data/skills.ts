import {
  SiJavascript, SiTypescript, SiHtml5, SiCss, SiPython, SiPhp,
  SiNpm, SiWebpack, SiVite, SiEslint, SiPrettier, SiJest, SiPostman,
  SiGit, SiGitlab, SiGithub, SiDocker, SiVercel, SiReact, SiAngular,
  SiNextdotjs, SiTailwindcss, SiZod, SiReacthookform, SiDaisyui,
  SiNodedotjs, SiExpress, SiDjango, SiPostgresql, SiMysql, SiDirectus,
  SiWordpress, SiN8n
} from "@icons-pack/react-simple-icons";
import { FileQuestion } from "lucide-react";

export const skillsCategories = [
  {
    title: "Languages",
    items: [
      { name: "Javascript", icon: SiJavascript, rating: 8 },
      { name: "Typescript", icon: SiTypescript, rating: 8 },
      { name: "HTML5", icon: SiHtml5, rating: 8 },
      { name: "CSS", icon: SiCss, rating: 8 },
      { name: "Python", icon: SiPython, rating: 5 },
      { name: "PHP", icon: SiPhp, rating: 6 },
    ],
  },
  {
    title: "Build Tools",
    items: [
      { name: "NPM", icon: SiNpm, rating: 8 },
      { name: "Webpack", icon: SiWebpack, rating: 5 },
      { name: "Vite", icon: SiVite, rating: 5 },
      { name: "ESLint + Prettier", icon: SiEslint, rating: 5, extraIcon: SiPrettier },
    ],
  },
  {
    title: "Testing and Debugging",
    items: [
      { name: "Jest", icon: SiJest, rating: 4 },
      { name: "Postman", icon: SiPostman, rating: 9 },
    ],
  },
  {
    title: "DevOps & CI/CD",
    items: [
      { name: "Git", icon: SiGit, rating: 8 },
      { name: "Gitlab", icon: SiGitlab, rating: 8 },
      { name: "Github", icon: SiGithub, rating: 8 },
      { name: "Docker", icon: SiDocker, rating: 5 },
      { name: "Vercel", icon: SiVercel, rating: 9 },
    ],
  },
  {
    title: "Frontend Frameworks & Libraries",
    items: [
      { name: "React", icon: SiReact, rating: 7 },
      { name: "Angular", icon: SiAngular, rating: 8 },
      { name: "Nextjs", icon: SiNextdotjs, rating: 6 },
      { name: "TailwindCSS", icon: SiTailwindcss, rating: 7 },
      { name: "Zod", icon: SiZod, rating: 7 },
      { name: "React Hook Form", icon: SiReacthookform, rating: 8 },
      { name: "DaisyUI", icon: SiDaisyui, rating: 4 },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { name: "Node.js", icon: SiNodedotjs, rating: 5 },
      { name: "Express", icon: SiExpress, rating: 5 },
      { name: "Django", icon: SiDjango, rating: 4 },
      { name: "PostgreSQL", icon: SiPostgresql, rating: 2 },
      { name: "MySQL", icon: SiMysql, rating: 7 },
    ],
  },
  {
    title: "CMS",
    items: [
      { name: "Directus CMS", icon: SiDirectus, rating: 4 },
      { name: "Wordpress", icon: SiWordpress, rating: 2 },
    ],
  },
  {
    title: "Automation & AI Tools",
    items: [
      { name: "n8n", icon: SiN8n, rating: 1 },
      { name: "ChatGPT", icon: FileQuestion, rating: 5 },
      { name: "Cursor IDE", icon: FileQuestion, rating: 5 },
    ],
  },
];