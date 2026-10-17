import "./MySkillsTab.scss";

const skillGroups = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "React & frontend",
    skills: [
      "React.js",
      "Next.js",
      "React Hooks",
      "Functional Components",
      "Context API",
      "Custom Hooks",
      "React Router",
      "Reusable Component Libraries",
      "Micro-frontends",
      "Composable UI",
      "Tailwind CSS",
      "SCSS",
      "Bootstrap",
    ],
  },
  {
    category: "State management & architecture",
    skills: ["Redux", "Context API", "Application State Architecture", "Component Architecture"],
  },
  {
    category: "APIs & integrations",
    skills: [
      "REST APIs",
      ".NET REST API Integration",
      "Python REST API Integration",
      "Axios",
      "Asynchronous Data Fetching",
      "Error Handling",
      "Postman",
      "Swagger",
    ],
  },
  {
    category: "Data visualization",
    skills: ["Apache ECharts", "D3.js", "Recharts", "Chart.js", "Nivo", "Apache Superset"],
  },
  {
    category: "Backend & data",
    skills: ["Node.js", "Express.js", ".NET Backend Integration", "Python Backend Integration", "MongoDB", "SQL"],
  },
  {
    category: "Testing, tools & delivery",
    skills: [
      "Jest",
      "React Testing Library",
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "VS Code",
      "Docker",
      "Firebase",
      "Vercel",
    ],
  },
  {
    category: "Engineering strengths",
    skills: [
      "Object-Oriented Design",
      "Data Structures & Algorithms",
      "Performance Optimization",
      "Responsive UI",
      "Cross-Browser Compatibility",
      "Code Reviews",
      "Mentoring",
      "Agile Development",
      "Debugging Production Issues",
      "Stakeholder Collaboration",
      "Requirements Gathering",
    ],
  },
];

const modernToolkit = [
  {
    category: "React and application data",
    skills: ["Next.js", "TanStack Query", "Zustand", "Redux Toolkit", "Server Components", "GraphQL"],
  },
  {
    category: "Testing and code quality",
    skills: ["Vitest", "Playwright", "Storybook", "ESLint", "Prettier", "Accessibility (WCAG)", "React Hook Form", "Zod"],
  },
  {
    category: "Frontend delivery",
    skills: ["Vite", "pnpm", "Tailwind CSS", "Web Vitals", "Lighthouse", "SEO", "GitHub Actions", "Docker basics"],
  },
];

function MySkillsTab() {
  return (
    <section className="skills-tab-container" id="skills">
      <div className="section-heading">
        <p className="section-kicker">TECHNICAL SKILLS</p>
        <h2 className="skills-heading">Tools I use to ship products</h2>
        <p className="section-description">
          Frontend engineering, visualisation, integrations, testing, and the practices
          I bring to a team.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.category}>
            <div className="skill-card-heading">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3 className="skill-category">{group.category}</h3>
            </div>
            <div className="skills-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <aside className="modern-toolkit" aria-labelledby="modern-toolkit-heading">
        <div className="modern-toolkit-intro">
          <p className="toolkit-kicker">CAREER REFERENCE</p>
          <h3 id="modern-toolkit-heading">Modern JavaScript toolkit</h3>
          <p>
            Common technologies and practices in current React roles. This is a learning
            reference, separate from the skills listed in my resume.
          </p>
        </div>
        <div className="modern-toolkit-groups">
          {modernToolkit.map((group) => (
            <div className="modern-toolkit-group" key={group.category}>
              <h4>{group.category}</h4>
              <div className="modern-toolkit-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}

export default MySkillsTab;
