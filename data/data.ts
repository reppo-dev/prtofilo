export interface ProjectDetail {
  id: string;
  title: string;
  desc: string;
  image: string;
  tools: string[];
  liveUrl: string;
  haveLive: boolean;
  githubUrl: string;

  overview: string;
  role: string;
  duration: string;
  features: string[];
  screenshots: {
    src: string;
    alt: string;
  }[];
  techStack: {
    category: string;
    items: string[];
  }[];
  structure: {
    path: string;
    description: string;
  }[];
  setup: {
    backend?: string;
    frontend?: string;
    env?: string[];
  };
}

export const projects: ProjectDetail[] = [
  {
    id: "02",
    title: "Full-Stack App: React + Golang Fiber",
    desc: "A modern full-stack web application with React (TypeScript) frontend and Golang (Fiber) backend. Features JWT authentication, role-based access control (RBAC), CRUD operations, and CSV export.",
    image: "/react-go-full-stack/react-go-fullstack-go.png",
    tools: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Golang",
      "Fiber",
      "PostgreSQL",
      "GORM",
      "JWT",
    ],
    liveUrl: "",
    haveLive: false,
    githubUrl: "https://github.com/reppo-dev/app-react-golang-full-stack.git",

    overview:
      "This is a production-scale admin dashboard built for managing e-commerce data. I developed it to deepen my understanding of full-stack architectures, focusing on secure authentication, role-based access, and clean separation of concerns between the React frontend and Go backend.",
    role: "Full-Stack Developer (Solo Project)",
    duration: "4 weeks",
    features: [
      "JWT stored in HTTP‑only cookies for secure authentication",
      "Password hashing with bcrypt",
      "Role‑based access control (Admin, User, Manager)",
      "CRUD operations for Products, Orders, and Users",
      "One‑click CSV export (Orders, Users, Products)",
      "Responsive UI built with Tailwind CSS and shadcn/ui",
      "RESTful API design using Go Fiber framework",
    ],
    screenshots: [
      { src: "/react-go-full-stack/login.png", alt: "Login page" },
      {
        src: "/react-go-full-stack/dashboard.png",
        alt: "Dashboard with sales chart",
      },
      { src: "/react-go-full-stack/user.png", alt: "User management table" },
      {
        src: "/react-go-full-stack/orders.png",
        alt: "Orders list with CSV export",
      },
    ],
    techStack: [
      {
        category: "Frontend",
        items: [
          "React 19",
          "TypeScript",
          "React Router Dom v6",
          "React Hook Form",
          "Zod",
          "Tailwind CSS",
          "Axios",
        ],
      },
      {
        category: "Backend",
        items: ["Golang", "Fiber", "GORM", "JWT", "bcrypt"],
      },
      {
        category: "Database",
        items: ["PostgreSQL"],
      },
    ],
    structure: [
      {
        path: "frontend/src/components/pages/",
        description: "Pages (Login, Register, Dashboard, Products, Orders...)",
      },
      {
        path: "frontend/src/components/",
        description: "Reusable UI components",
      },
      { path: "backend/controllers/", description: "Request handlers (Fiber)" },
      { path: "backend/models/", description: "GORM models" },
      { path: "backend/middleware/", description: "JWT and RBAC middleware" },
      { path: "backend/routes/", description: "API route definitions" },
      { path: "backend/main.go", description: "Application entry point" },
    ],
    setup: {
      backend: `cd backend
go mod tidy
# set environment variables (see .env.example)
go run main.go`,
      frontend: `cd frontend
npm install
npm run dev`,
      env: ["JWT_SECRET=your_super_secret_key"],
    },
  },
  // پروژه‌های دیگر را به همین شکل اضافه کنید...
];

export const aboutItems = [
  {
    id: 1,
    icon: "/images/recruitment.png",
    title: "1+ Years of Experience",
    text: "dolor sit amet consectetur. Erat mauris tortor suspendisse at",
  },
  // {
  //   id: 2,
  //   icon: "/images/portfolio.png",
  //   title: "Over 3 Projects Delivered",
  //   text: "dolor sit amet consectetur. Erat mauris tortor suspendisse at",
  // },
  // {
  //   id: 3,
  //   icon: "/images/review.png",
  //   title: "200+ Satisfied Clients",
  //   text: "dolor sit amet consectetur. Erat mauris tortor suspendisse at",
  // },
  {
    id: 4,
    icon: "/images/portfolio.png",
    title: "More 10 practice projects",
    text: "dolor sit amet consectetur. Erat mauris tortor suspendisse at",
  },
];

// 🖥️ Frontend
// React / Next.js (App Router)

// TypeScript

// Tailwind CSS / shadcn/ui

// React Router / React Hook Form / Zod

// HTML5, CSS3, Responsive Design

// ⚙️ Backend
// Go (Fiber framework)

// REST API Design & Development

// JWT Authentication (HTTP-only cookies)

// Role-Based Access Control (RBAC)

// Clean Architecture / MVC Pattern

// 🗄️ Database & ORMs
// PostgreSQL

// GORM (Go ORM)

// Prisma (Node/React side – if you still use it, نگهش دار)

// Database Design & Migration

// 🛠️ Tools & DevOps
// Git & GitHub

// Vercel / Netlify (Frontend Deployment)

// Docker (if used)

// VS Code, Terminal, Postman

// pnpm / npm / yarn

// 📊 Other
// CSV Export & Data Handling

// Responsive & Accessible UI (a11y)

// Agile / Scrum basics (اگه تجربه داری)
