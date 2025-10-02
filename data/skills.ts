import {
  SiReacthookform,
  SiWebpack
} from "@icons-pack/react-simple-icons";
import { FileQuestion } from "lucide-react";
import { Angular, CssOld, CursorLight, Daisyui, Directus, Django, Docker, Eslint, Expressjs, Git, GithubLight, Gitlab, Html5, Javascript, Jest, Mysql, N8n, NextjsIconDark, Nodejs, Npm, NxLight, Php, Postgresql, Postman, PrettierIconLight, Python, ReactLight, Tailwindcss, Typescript, Vercel, Vitejs, Wordpress, Zod } from "@/components/ui/svgs";

export const skillsCategories = [
  {
    title: "Languages",
    items: [
      { name: "Javascript", icon: Javascript, rating: 8 },
      { name: "Typescript", icon: Typescript, rating: 8 },
      { name: "HTML5", icon: Html5, rating: 8 },
      { name: "CSS", icon: CssOld, rating: 8 },
      { name: "Python", icon: Python, rating: 5 },
      { name: "PHP", icon: Php, rating: 6 },
    ],
  },
  {
    title: "Build Tools",
    items: [
      { name: "NPM", icon: Npm, rating: 8 },
      { name: "Webpack", icon: SiWebpack, rating: 5 },
      { name: "Vite", icon: Vitejs, rating: 5 },
      { name: "Nx", icon: NxLight, rating: 4 },
      { name: "ESLint + Prettier", icon: Eslint, rating: 5, extraIcon: PrettierIconLight },
    ],
  },
  {
    title: "Testing and Debugging",
    items: [
      { name: "Jest", icon: Jest, rating: 4 },
      { name: "Postman", icon: Postman, rating: 9 },
    ],
  },
  {
    title: "DevOps & CI/CD",
    items: [
      { name: "Git", icon: Git, rating: 8 },
      { name: "Gitlab", icon: Gitlab, rating: 8 },
      { name: "Github", icon: GithubLight, rating: 8 },
      { name: "Docker", icon: Docker, rating: 5 },
      { name: "Vercel", icon: Vercel, rating: 8 },
    ],
  },
  {
    title: "Frontend Frameworks & Libraries",
    items: [
      { name: "React", icon: ReactLight, rating: 7 },
      { name: "Angular", icon: Angular, rating: 8 },
      { name: "Nextjs", icon: NextjsIconDark, rating: 6 },
      { name: "TailwindCSS", icon: Tailwindcss, rating: 7 },
      { name: "Zod", icon: Zod, rating: 7 },
      { name: "React Hook Form", icon: SiReacthookform, rating: 8 },
      { name: "DaisyUI", icon: Daisyui, rating: 4 },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { name: "Node.js", icon: Nodejs, rating: 5 },
      { name: "Express", icon: Expressjs, rating: 5 },
      { name: "Django", icon: Django, rating: 4 },
      { name: "PostgreSQL", icon: Postgresql, rating: 2 },
      { name: "MySQL", icon: Mysql, rating: 7 },
    ],
  },
  {
    title: "CMS",
    items: [
      { name: "Directus CMS", icon: Directus, rating: 4 },
      { name: "Wordpress", icon: Wordpress, rating: 2 },
    ],
  },
  {
    title: "Automation & AI Tools",
    items: [
      { name: "n8n", icon: N8n, rating: 1 },
      { name: "ChatGPT", icon: FileQuestion, rating: 5 },
      { name: "Cursor IDE", icon: CursorLight, rating: 5 },
    ],
  },
];