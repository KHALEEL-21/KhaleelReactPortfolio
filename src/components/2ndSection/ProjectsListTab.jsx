import "./ProjectsListTab.scss";

const projects = [
  {
    title: "Dynamic Data Visualization",
    description:
      "A data exploration experience where users upload files and turn their data into interactive visualizations, with an Excel-inspired workflow for reviewing and working with the results.",
    tech: ["React", "File Uploads", "Data Visualization", "Interactive Dashboards"],
    year: "Project",
  },
  {
    title: "Advanced React Flow Library",
    description:
      "A reusable flowcharting experience for dynamically designing operational workflows, connecting steps, and visually mapping processes.",
    tech: ["React", "React Flow", "Flowcharts", "Workflow Design"],
    year: "Project",
  },
  {
    title: "TurboFusion Analytics Platform",
    description:
      "Enterprise analytics product for building dashboards and exploring business data. Developed reusable React interfaces for configurable dashboards, chart interactions, filtering, and API-powered reporting, supporting 20+ client deployments.",
    tech: [
      "React",
      "TypeScript",
      "Apache ECharts",
      "D3.js",
      "Nivo",
      "Recharts",
      "Chart.js",
      "REST APIs",
      ".NET",
      "Python",
    ],
    year: "2023 — Present",
  },
  {
    title: "Live Vehicle Tracking & Warehouse Product",
    description:
      "Real-time operations interface connected to .NET REST APIs, with warehouse layout visualization, live vehicle telemetry, animated vehicle movement, dynamic route rendering, and map-style tracking.",
    tech: [
      "React",
      ".NET REST APIs",
      "Live telemetry",
      "Warehouse visualization",
      "Route rendering",
    ],
    year: "Professional project",
  },
  {
    title: "CITAC — Business Leads Connection Platform",
    description:
      "Independently designed and delivered a production platform serving 1,000+ users. Owned the React frontend and authentication flows, with real-time communication and deployments to Firebase Hosting and Vercel.",
    tech: [
      "React",
      "Authentication",
      "Real-time communication",
      "Firebase",
      "Vercel",
    ],
    year: "Independent project",
  },
  {
    title: "VS Events Website",
    description:
      "Designed, built, and deployed a responsive events-management website with React as a focused personal development challenge.",
    tech: ["React", "Responsive UI", "Deployment"],
    year: "2025",
  },
  {
    title: "Tomato — Food Ordering Web App",
    description:
      "A multi-page food-ordering application covering the customer flow from menu browsing through delivery details and payment.",
    tech: ["React", "MongoDB", "Node.js", "Express", "REST APIs", "JWT", "Socket.IO"],
    year: "2025",
  },
  {
    title: "Portfolio & Earlier Academic Projects",
    description:
      "Earlier work includes a dynamic React portfolio, a PHP/MySQL hospital management system, and frontend fixes for a .NET blood-bank management project.",
    tech: ["React", "PHP", "MySQL", ".NET", "UI debugging"],
    year: "2021 — 2023",
  },
];

const ProjectsListTab = () => {
  return (
    <section className="projects-tab-container" id="projects">
      <div className="section-heading">
        <p className="section-kicker">SELECTED WORK</p>
        <h2 className="projects-heading">Selected work, from product UI to platforms</h2>
        <p className="section-description">Professional products and independent builds from my resume and portfolio.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={project.title} className={`project-card${index === 0 ? " project-card--featured" : ""}`}>
            <div className="project-card-topline">
              <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="project-year">{project.year}</span>
            </div>
            <div className="project-card-body">
              <div className="project-card-copy">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {index === 0 && (
                <div className="dashboard-preview" aria-hidden="true">
                  <div className="dashboard-top">
                    <span><i /><i /><i /></span>
                    <b>TURBOFUSION · PRODUCT UI</b>
                    <span className="dashboard-avatar">KS</span>
                  </div>
                  <div className="dashboard-metrics">
                    <div><small>COMPONENTS</small><strong>Reusable UI</strong></div>
                    <div><small>DEPLOYMENTS</small><strong>20+ clients</strong></div>
                  </div>
                  <div className="dashboard-chart">
                    <div className="chart-label"><strong>Data visualisation</strong><span>ECharts · Nivo · D3</span></div>
                    <svg viewBox="0 0 360 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="var(--primary-color)" stopOpacity=".28" />
                          <stop offset="100%" stopColor="var(--primary-color)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 78 C22 72 25 54 50 61 S81 83 104 55 S139 52 160 43 S187 58 213 35 S254 48 278 24 S319 38 360 9 V100 H0 Z" fill="url(#chart-fill)" />
                      <path d="M0 78 C22 72 25 54 50 61 S81 83 104 55 S139 52 160 43 S187 58 213 35 S254 48 278 24 S319 38 360 9" fill="none" stroke="var(--primary-color)" strokeWidth="3" />
                    </svg>
                  </div>
                  <div className="dashboard-bottom"><span>● Interactive reporting</span><span>Product UI illustration</span></div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsListTab;
