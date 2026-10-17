import "./CareerSection.scss";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function CareerSection() {
  return (
    <section className="career-section" id="about">
      <div className="career-intro">
        <p className="section-kicker">A LITTLE ABOUT ME</p>
        <h2 className="career-heading">
          Thoughtful interfaces.<br />
          <span>Reliable engineering.</span>
        </h2>
        <p className="career-bio">
          I’m Khaleelullah, a frontend engineer with 3+ years of experience designing,
          building, testing, and shipping production web applications. I enjoy turning
          complex product requirements into clear interfaces, reusable components, and
          responsive data-rich experiences.
        </p>
        <a className="career-link" href="mailto:kkhaleel.dev@gmail.com">
          Get in touch <FaArrowUpRightFromSquare aria-hidden="true" />
        </a>
      </div>

      <div className="career-details">
        <div className="career-detail">
          <div className="career-detail-heading">
            <span className="career-detail-index">01</span>
            <h3>Experience</h3>
          </div>
          <div className="career-entry">
            <div className="career-entry-top">
              <h4>Frontend Developer</h4>
              <span>Oct 2023 — Present</span>
            </div>
            <p className="career-entry-meta">Intellizest Solutions · Chennai</p>
            <p className="career-entry-copy">
              Building the TurboFusion Analytics Platform with React, TypeScript, and
              modern frontend architecture. Translate product requirements into reusable
              dashboard and reporting interfaces; integrate .NET and Python REST APIs;
              optimize interactive chart rendering; and deliver responsive, cross-browser
              data visualizations for 20+ client deployments. Collaborate with product,
              backend, and leadership teams through requirements reviews, code reviews,
              and CI/CD demonstrations.
            </p>
            <div className="career-tags">
              <span>React</span><span>TypeScript</span><span>REST APIs</span>
              <span>ECharts</span><span>Nivo</span><span>Responsive UI</span>
            </div>
          </div>
        </div>

        <div className="career-detail education-detail">
          <div className="career-detail-heading">
            <span className="career-detail-index">02</span>
            <h3>Education</h3>
          </div>
          <div className="career-entry">
            <div className="career-entry-top">
              <h4>B.Sc. Computer Science</h4>
              <span>2020 — 2023</span>
            </div>
            <p className="career-entry-meta">Undergraduate degree</p>
            <p className="career-entry-copy">
              Built a strong foundation in computer science, software development,
              and problem solving.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CareerSection;
