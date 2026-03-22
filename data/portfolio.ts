export const portfolioData = {
  personal: {
    name: "Surendra Mahla",
    role: "Data-Driven Software Engineer",
    bio: [
      "I am a B.Tech Computer Science student passionate about Data Science, Machine Learning, and Full Stack Development. I specialize in building intelligent systems and scalable web applications using Python, Django, and modern tools.",
      "My work includes developing predictive machine learning models, database-integrated applications, and interactive dashboards that transform raw data into actionable business insights.",
      "I continuously explore new technologies, participate in technical events, and refine my problem-solving skills to grow as a modern software engineer."
    ],
    heroDescription: "I build intelligent systems combining Machine Learning, Data Analytics, and scalable Full Stack applications — transforming raw data into meaningful digital experiences.",
    github: "https://github.com/surendramahla",
    linkedin: "https://www.linkedin.com/in/surendramahla/"
  },
  stats: [
    { value: "8+", label: "Projects Built" },
    { value: "5+", label: "Core Technologies" },
    { value: "3+", label: "Domains" }
  ],
  skills: [
    { name: "Python", icon: "FaPython", color: "#3776AB" },
    { name: "Java", icon: "FaJava", color: "#f89820" },
    { name: "C / C++", icon: "FaCode", color: "#00599C" },
    { name: "JavaScript", icon: "FaJs", color: "#f7df1e" },
    { name: "Django", icon: "SiDjango", color: "#0C4B33" },
    { name: "Flask", icon: "SiFlask", color: "#ffffff" },
    { name: "Pandas", icon: "SiPandas", color: "#150458" },
    { name: "Scikit-learn", icon: "SiScikitlearn", color: "#f7931e" },
    { name: "MySQL", icon: "SiMysql", color: "#00758F" },
    { name: "Power BI", icon: "SiPowerbi", color: "#f2c811" },
    { name: "HTML", icon: "FaHtml5", color: "#e34f26" },
    { name: "CSS", icon: "FaCss3Alt", color: "#264de4" }
  ],
  projects: [
    {
      title: "Bank Marketing Deposit Prediction",
      description: "End-to-end machine learning pipeline predicting term deposit subscriptions using feature engineering, model selection, and evaluation techniques.",
      techStack: ["Python", "Scikit-learn", "Pandas", "EDA"],
      githubUrl: "https://github.com/surendramahla/Bank-Marketing-Deposit-Subscription-Prediction",
      featured: true,
      icon: "FaChartLine",
      image: "/bank.jpg"
    },
    {
      title: "TechInsights",
      description: "Full-stack blogging platform with user authentication, admin dashboard, markdown editor, and comment system for dynamic content management.",
      techStack: ["Django", "Python", "SQLite"],
      githubUrl: "https://github.com/surendramahla/TechInsights",
      featured: false,
      icon: "FaBlog",
      image: "/blog.jpg"
    },
    {
      title: "Airline Management System",
      description: "Desktop-based airline booking system built using Java Swing with MySQL integration, featuring authentication, ticket booking, and management functionalities.",
      techStack: ["Java", "Swing", "MySQL"],
      githubUrl: "https://github.com/surendramahla/Airline-Management-System",
      featured: false,
      icon: "FaPlane",
      image: "/airline.jpg"
    },
    {
      title: "Flask Todo App with Image Upload",
      description: "Web-based Todo application developed using Flask and SQLite, allowing users to manage tasks and securely upload images with validation.",
      techStack: ["Flask", "SQLite", "Werkzeug"],
      githubUrl: "https://github.com/surendramahla/flask-todo-app-with-image-upload",
      featured: false,
      icon: "FaCheckCircle",
      image: "/todo.jpg"
    },
    {
      title: "SQLite CRUD Project",
      description: "Database-driven CRUD application demonstrating Create, Read, Update, and Delete operations with SQLite and Python.",
      techStack: ["Python", "SQLite", "CRUD"],
      githubUrl: "https://github.com/surendramahla/sqlite-crud-project",
      featured: false,
      icon: "FaDatabase",
      image: "/SQLITE.jpg"
    },
    {
      title: "Car Sales Analysis Dashboard",
      description: "Data analytics project analyzing car sales performance with YTD, MTD, and YOY metrics using interactive dashboards and visualizations.",
      techStack: ["Python", "Pandas", "Data Analysis"],
      githubUrl: "https://app.powerbi.com/groups/me/reports/9f91d476-7c8c-4aaf-84c8-a3d58fec4858/99f1edd57eee1f287de2?experience=power-bi",
      featured: false,
      icon: "FaChartBar",
      image: "/Carsales.png"
    },
    {
      title: "Shopify Sales Dashboard",
      description: "Interactive Power BI dashboard analyzing Shopify sales data to uncover revenue trends, customer behavior, and product performance insights.",
      techStack: ["Power BI", "DAX", "Data Analytics", "Data Visualization"],
      githubUrl: "https://app.powerbi.com/groups/me/reports/3f1b636a-bc0a-46f6-9643-b26c0f94a232/455d3a9c8ff6e24ade71?experience=power-bi",
      featured: true,
      icon: "FaChartPie",
      image: "/Shopify.png"
    }
  ],
  experience: [
    {
      title: "Airline Management System",
      company: "Java Swing + MySQL",
      date: "June 2025 – July 2025",
      description: "Developed a GUI-based airline booking system with authentication, passenger management, scheduling, and ticket booking modules. Implemented MySQL integration with optimized queries and full CRUD operations."
    },
    {
      title: "Data Analytics Job Simulation",
      company: "Quantium & Forage",
      date: "May 2025 – June 2025",
      description: "Performed customer segmentation, transaction analysis, and strategic recommendations using Python. Extracted actionable insights from large retail datasets."
    },
    {
      title: "Data Visualization Simulation",
      company: "Tata & Forage",
      date: "May 2025 – June 2025",
      description: "Designed interactive dashboards and executive-level reports. Applied storytelling techniques to convert raw datasets into meaningful business insights."
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Lovely Professional University",
      date: "2021 – 2025",
      description: "Focusing on Software Engineering, Data Structures, Algorithms, and Machine Learning."
    }
  ],
  certifications: [
    {
      title: "Data Analytics Job Simulation",
      issuer: "Quantium (via Forage)",
      date: "2025",
      link: "#"
    },
    {
      title: "Data Visualization Simulation",
      issuer: "Tata (via Forage)",
      date: "2025",
      link: "#"
    }
  ],
  resumeUrl: "/resume.pdf"
};
