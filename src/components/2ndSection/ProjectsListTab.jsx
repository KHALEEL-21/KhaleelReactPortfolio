import "./ProjectsListTab.scss";
import { useTranslation } from "react-i18next";

const projects = [
  {
    tech: ["React", "File Uploads", "Data Visualization", "Interactive Dashboards"],
    year: "project",
  },
  {
    tech: ["React", "React Flow", "Flowcharts", "Workflow Design"],
    year: "project",
  },
  {
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
    year: "present",
  },
  {
    tech: [
      "React",
      ".NET REST APIs",
      "Live telemetry",
      "Warehouse visualization",
      "Route rendering",
    ],
    year: "professional",
  },
  {
    tech: [
      "React",
      "Authentication",
      "Real-time communication",
      "Firebase",
      "Vercel",
    ],
    year: "independent",
  },
  {
    tech: ["React", "Responsive UI", "Deployment"],
    year: "2025",
  },
  {
    tech: ["React", "MongoDB", "Node.js", "Express", "REST APIs", "JWT", "Socket.IO"],
    year: "2025",
  },
  {
    tech: ["React", "PHP", "MySQL", ".NET", "UI debugging"],
    year: "2021 — 2023",
  },
];

const ProjectsListTab = () => {
  const { t } = useTranslation();

  return (
    <section className="projects-tab-container" id="projects">
      <div className="section-heading">
        <p className="section-kicker">{t("projects.kicker")}</p>
        <h2 className="projects-heading">{t("projects.heading")}</h2>
        <p className="section-description">{t("projects.description")}</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={t(`projects.items.${index}.title`)} className={`project-card${index === 0 ? " project-card--featured" : ""}`}>
            <div className="project-card-topline">
              <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="project-year">
                {project.year === "project" || project.year === "professional" || project.year === "independent" || project.year === "present"
                  ? t(`projects.${project.year}`)
                  : project.year}
              </span>
            </div>
            <div className="project-card-body">
              <div className="project-card-copy">
                <h3 className="project-title">{t(`projects.items.${index}.title`)}</h3>
                <p className="project-description">{t(`projects.items.${index}.description`)}</p>
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
                    <b>{t("projects.dashboard")}</b>
                    <span className="dashboard-avatar">KS</span>
                  </div>
                  <div className="dashboard-metrics">
                    <div><small>{t("projects.components")}</small><strong>{t("projects.reusableUi")}</strong></div>
                    <div><small>{t("projects.deployments")}</small><strong>{t("projects.clients")}</strong></div>
                  </div>
                  <div className="dashboard-chart">
                    <div className="chart-label"><strong>{t("projects.visualization")}</strong><span>ECharts · Nivo · D3</span></div>
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
                  <div className="dashboard-bottom"><span>● {t("projects.interactiveReporting")}</span><span>{t("projects.illustration")}</span></div>
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
