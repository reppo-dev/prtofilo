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
    id: "01",
    title: "Full-Stack App: React + Golang Fiber",
    desc: "A modern full-stack web application with React (TypeScript) frontend and Golang (Fiber) backend , Features JWT authentication.",
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
  {
    id: "02",
    title: "Shoppy - Full-Stack E-Commerce App",
    desc: "A modern full-stack e-commerce application built with Next.js and Golang Fiber, featuring product browsing, cart management, JWT authentication, user profiles, and AWS S3 image uploads.",

    image: "/shoppy/shoppy-home.png",

    tools: [
      "Next.js",
      "TypeScript",
      "Shadcn UI",
      "Zod",
      "Golang",
      "Fiber",
      "PostgreSQL",
      "GORM",
      "JWT",
      "AWS S3",
    ],

    liveUrl: "",
    haveLive: false,
    githubUrl: "https://github.com/reppo-dev/shoppy.git",

    overview:
      "Shoppy is a full-stack e-commerce application developed to explore modern web application architecture using Next.js and Golang. The project focuses on building a scalable shopping experience with secure authentication, product management, cloud-based image storage, and a responsive user interface.",

    role: "Full-Stack Developer (Solo Project)",
    duration: "3 weeks",

    features: [
      "JWT-based authentication with user registration and login",
      "Product listing with category filtering and search functionality",
      "Shopping cart with add and remove item actions",
      "User profile management and account updates",
      "Product creation with image uploads to AWS S3",
      "Responsive UI built with Shadcn UI components",
      "RESTful API architecture using Go Fiber",
      "Schema validation using Zod",
    ],

    screenshots: [
      { src: "/shoppy/home.png", alt: "Home page with product listing" },
      { src: "/shoppy/login.png", alt: "Login and registration page" },
      {
        src: "/shoppy/products-list.png",
        alt: "Products page with search and filters",
      },
      { src: "/shoppy/cart.png", alt: "Shopping cart page" },
      { src: "/shoppy/profile.png", alt: "User profile page" },
      {
        src: "/shoppy/create-product.png",
        alt: "Create product form with image upload",
      },
    ],

    techStack: [
      {
        category: "Frontend",
        items: ["Next.js", "TypeScript", "Shadcn UI", "Zod", "pnpm"],
      },
      {
        category: "Backend",
        items: ["Golang", "Fiber", "GORM", "JWT"],
      },
      {
        category: "Database",
        items: ["PostgreSQL"],
      },
      {
        category: "Cloud Services",
        items: ["AWS S3"],
      },
    ],

    structure: [
      {
        path: "frontend/app/",
        description: "Next.js App Router pages and layouts",
      },
      {
        path: "frontend/components/",
        description: "Reusable UI components and forms",
      },
      {
        path: "frontend/lib/",
        description: "Utilities, API helpers, and shared logic",
      },
      {
        path: "backend/handlers/",
        description: "HTTP request handlers and business logic",
      },
      {
        path: "backend/models/",
        description: "Database models managed with GORM",
      },
      {
        path: "backend/routes/",
        description: "API route definitions",
      },
      {
        path: "backend/main.go",
        description: "Application entry point",
      },
    ],

    setup: {
      backend: `cd backend
go mod tidy
go run main.go`,

      frontend: `cd frontend
pnpm install
pnpm dev`,

      env: [
        "GO_API_URL=http://localhost:8000",
        "JWT_SECRET=secret",
        "PARSPACK_ACCESS_KEY=your_access_key",
        "PARSPACK_SECRET_KEY=your_secret_key",
        "PARSPACK_ENDPOINT=your_endpoint",
        "PARSPACK_BUCKET_NAME=your_bucket",
        "PARSPACK_REGION=your_region",
        "PARSPACK_S3_PATH_STYLE=true",
      ],
    },
  },
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
