import "./CareerSection.scss";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

function CareerSection() {
  const { t } = useTranslation();

  return (
    <section className="career-section" id="about">
      <div className="career-intro">
        <p className="section-kicker">{t("about.kicker")}</p>
        <h2 className="career-heading">
          {t("about.heading")}<br />
          <span>{t("about.headingAccent")}</span>
        </h2>
        <p className="career-bio">{t("about.bio")}</p>
        <a className="career-link" href="mailto:kkhaleel.dev@gmail.com">
          {t("about.contact")} <FaArrowUpRightFromSquare aria-hidden="true" />
        </a>
      </div>

      <div className="career-details">
        <div className="career-detail">
          <div className="career-detail-heading">
            <span className="career-detail-index">01</span>
            <h3>{t("about.experience")}</h3>
          </div>
          <div className="career-entry">
            <div className="career-entry-top">
              <h4>{t("about.jobTitle")}</h4>
              <span>{t("about.present")}</span>
            </div>
            <p className="career-entry-meta">{t("about.company")}</p>
            <p className="career-entry-copy">{t("about.jobDescription")}</p>
            <div className="career-tags">
              <span>React</span><span>TypeScript</span><span>REST APIs</span>
              <span>ECharts</span><span>Nivo</span><span>Responsive UI</span>
            </div>
          </div>
        </div>

        <div className="career-detail education-detail">
          <div className="career-detail-heading">
            <span className="career-detail-index">02</span>
            <h3>{t("about.education")}</h3>
          </div>
          <div className="career-entry">
            <div className="career-entry-top">
              <h4>{t("about.degree")}</h4>
              <span>{t("about.studyDates")}</span>
            </div>
            <p className="career-entry-meta">{t("about.undergraduate")}</p>
            <p className="career-entry-copy">{t("about.educationDescription")}</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CareerSection;
