import { About, Blog, Home, Newsletter, Person, Social, Work } from "@/types/content.types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Eftelya",
  lastName: "ÇELİK",
  name: `Eftelya ÇELİK`,
  role: "Computer Engineer",
  avatar: "/eftelya-avatar.jpg",
  email: "eftelyacelik@gmail.com",
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Türkçe"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/hopeffy",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/eftelya-celik/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Portfolio</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/gunkaf-25-website",
  },
  subline: (
    <>
      I'm Selene, a design engineer at{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m Eftelya, a computer engineering student passionate about data science, design, and building tech solutions that make life simpler and smarter. My journey blends software development, data, and creativity.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "CSArt",
        companyLink: "https://csart.com.tr/",
        timeframe: "Jun 2025 - Aug 2025",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Developed an enterprise-grade AI-powered document processing platform using modular monolith architecture
          </>,
          <>
            Implemented advanced features including <strong>AI document processing</strong>, <strong>multi-language support</strong>, and <strong>role-based access control</strong>
          </>,
          <>
            Integrated advanced AI technologies with semantic search capabilities
          </>
        ],
        images: [],
      },
      {
        company: "Akdeniz University",
        timeframe: "Oct 2024 - Jun 2025",
        role: "Web Administration (Günkaf25 & Kariyer Merkezi Webis) - part time",
        achievements: [
          <>
            Managed and maintained <strong>WordPress</strong> websites, handling content updates, user management, and site optimization to ensure smooth operation and improved user experience.
          </>,
        ],
      },
      {
        company: "CSArt",
        timeframe: "Jul 2024 - Aug 2024",
        companyLink: "https://csart.com.tr/",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Developed a comprehensive <strong>data analysis system</strong> for academic performance evaluation using <strong>Scopus research database</strong>
          </>,
          <>
            Implemented advanced <strong>SQL queries</strong>, <strong>data visualization</strong>, and <strong>statistical analysis</strong> for research publication metrics
          </>,
          <>
            Created interactive <strong>Python-based</strong> analysis pipeline for academic performance insights
          </>
        ],
        images: [],
      },
      {
        company: "Ergineer Software",
        companyLink: "https://ergineer.com/",
        timeframe: "Jun 2024 - Jul 2024",
        role: "Software Engineering Internship",
        achievements: [
          <>
            Developed mobile applications with <strong>Flutter</strong>, implementing <strong>token-based authentication</strong>, <strong>RESTful API integration</strong>, and <strong>responsive, user-friendly designs</strong>.
          </>,
        ],
        images: [],
      },
      {
        company: "Sednacloud",
        companyLink: "https://www.kod.com.tr/",
        timeframe: "Jun 2023 - Sep 2023",
        role: "Software Engineering Internship",
        achievements: [
          <>
            Developed a Jira-inspired task manager as a full-stack project using <strong>ASP.NET</strong> and <strong>Angular</strong>. 
            Gained experience in setting up and integrating <strong>Azure Blob Storage</strong> within an <strong>Onion Architecture</strong>, 
            while implementing key features such as task creation, deletion, status updates, file attachments, and admin operations.
          </>,
          <>
            Frontend Development Project repository: <a href="https://github.com/selinkhrmn/TaskManagerClient" target="_blank">Task Manager GitHub Repository</a>
          </>,
          <>
            Backend Development Project repository: <a href="https://github.com/Oguzhankeserr/TaskManager" target="_blank">Task Manager Server GitHub Repository</a>
          </>,
        ],
      },
      {
        company: "Sednacloud",
        companyLink: "https://www.kod.com.tr/",
        timeframe: "Jun 2022 - Sep 2022",
        role: "Software Engineering Internship",
        achievements: [
          <>
            Developed a basic hotel management web application using <strong>Angular</strong>, implementing login and registration functionalities. 
            Ensured <strong>responsive design</strong> for optimal user experience across devices and assisted in integrating <strong>token-based authentication</strong>.
          </>,
          <>
            Project repository: <a href="https://github.com/alikarakoc/HollieClient" target="_blank">HollieClient GitHub Repository</a>
          </>,
        ],
        images: [],
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Akdeniz University",
        description: <>Bachelor's Degree, Computer Engineering (Ongoing)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Backend Development",
        description: <>Building server-side applications and managing databases.</>,
        tags: [
          { name: "ASP.NET Core 8.0", icon: "dotnet" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "FastAPI", icon: "python" },
          { name: "Entity Framework Core", icon: "dotnet" },
          { name: "Docker", icon: "docker" },
          { name: "Elasticsearch", icon: "elasticsearch" },
        ],
        images: [],
      },
      {
        title: "Frontend Development",
        description: <>Creating interactive and responsive user interfaces.</>,
        tags: [
          { name: "Next.js 15", icon: "nextjs" },
          { name: "React 18", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "Azure MSAL", icon: "azure" },
        ],
        images: [],
      },
      {
        title: "AI & Data Science",
        description: <>Implementing AI-powered solutions and data analysis.</>,
        tags: [
          { name: "Google Gemini AI", icon: "ai" },
          { name: "LangChain", icon: "python" },
          { name: "Vector Embeddings", icon: "ai" },
          { name: "Natural Language Processing", icon: "ai" },
        ],
        images: [],
      },
      {
        title: "Tools & Collaboration",
        description: <>Version control, containerization, and DevOps practices.</>,
        tags: [
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "Docker", icon: "docker" },
          { name: "Azure Pipelines", icon: "azure" },
          { name: "CI/CD", icon: "devops" },
        ],
        images: [],
      },
    ],
  },  
  volunteering: {
    display: true,
    title: "Volunteering & Leadership",
    experiences: [
      {
        organization: "Akdeniz Career Summit",
        timeframe: "April 28, 2025",
        role: "Organizing Committee Member",
        description: (
          <>
            <p>
              Shipped the official website and contributed to operations, reaching nearly 500 registrations.
            </p>
            <a href="https://www.akdenizkariyerzirvesi.com.tr/" target="_blank" rel="noreferrer">
              akdenizkariyerzirvesi.com.tr
            </a>

            <div style={{ marginTop: 12 }}>
              <iframe
                src="https://www.akdenizkariyerzirvesi.com.tr/"
                height="400"
                width="100%"
                frameBorder="0"
                title="Akdeniz Career Summit Website"
                style={{ borderRadius: 12, border: '1px solid #e5e7eb' }}
              />
            </div>
          </>
        ),
        links: [{ name: "Official Website", url: "https://www.akdenizkariyerzirvesi.com.tr/" }],
      },
      {
        organization: "Akdeniz Data Club",
        timeframe: "Jan 2025 - Present",
        role: "Club President",
        description: (
          <>
            <p>
              Akdeniz University Data Science Club aims to provide students with practical knowledge in data science. 
               <br></br> <br></br> During my presidency, I supported this mission by building a new team, organizing events, and improving my leadership and communication skills.
            </p>
            
            <strong>Event Snapshot</strong>
            <p style={{ marginTop: 6 }}>
              I presented the first session of our monthly Case Study series on "Movie Recommendation System".
              Participants built an end‑to‑end recommender on real data.
            </p>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "8px 0 12px" }}>
              <span style={{ background: "#eef2ff", color: "#3730a3", padding: "4px 8px", borderRadius: 8, fontSize: 12 }}>
                Monthly Case Study
              </span>
              <span style={{ background: "#ecfeff", color: "#155e75", padding: "4px 8px", borderRadius: 8, fontSize: 12 }}>
                Presenter: Eftelya Çelik
              </span>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7304503804073238528"
                target="_blank"
                rel="noreferrer"
                style={{ background: "#f0fdf4", color: "#166534", padding: "4px 8px", borderRadius: 8, fontSize: 12, textDecoration: "none" }}
              >
                LinkedIn Post
              </a>
            </div>

            <div style={{ marginTop: 8 }}>
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7304503804073238528"
                height="570"
                width="100%"
                frameBorder="0"
                allowFullScreen
                title="LinkedIn Case Study Post"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ borderRadius: 12 }}
              />
            </div>
          </>
        ),
        links: [
          { name: "LinkedIn Case Study Post", url: "https://www.linkedin.com/feed/update/urn:li:activity:7304503804073238528" },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work };
