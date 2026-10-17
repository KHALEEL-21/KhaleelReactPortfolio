import './HeroSection.scss';
import { FaArrowDown, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import myProfilePhoto from '../assets/ks-2.png'; 
import resumeFile from '../assets/Khaleel_FrontendEngineer_2.pdf';
import { useTranslation } from 'react-i18next';

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-eyebrow"><span /> FRONTEND ENGINEER <i /> REACT SPECIALIST</p>
        <h1>
          Building
          <span className="hero-title-accent"> better</span>
          <span className="hero-title-end"> digital experiences.</span>
        </h1>
        <p className="hero-intro">
          I’m <strong>Khaleelullah Sheriff</strong> — a frontend engineer who turns complex ideas
          into clear, reliable, and delightful web experiences.
        </p>
        <p className="hero-description">{t('description')}</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Explore my work <FaArrowDown />
          </a>
          <a href={resumeFile} className="btn-secondary" download="Khaleelullah-Sheriff-Resume.pdf">
            <FaDownload /> Download resume
          </a>
        </div>
        <div className="hero-socials">
          <span>FIND ME ON</span>
          <a href="https://github.com/KHALEEL-21" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
          <a href="https://in.linkedin.com/in/khaleelullah-sheriff-k-947b62245" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="portrait-graphic" aria-hidden="true"><span>K</span></div>
        <span className="portrait-index">INDEPENDENT THINKER. TEAM PLAYER.</span>
        <img src={myProfilePhoto} alt="Portrait of Khaleelullah Sheriff" className="myProfile" />
        <div className="portrait-caption"><strong>Khaleelullah Sheriff</strong><span>Frontend Engineer · Chennai, India</span></div>
        <span className="portrait-stamp" aria-hidden="true">KS<br />2026</span>
      </div>
    </section>
  );
}

export default HeroSection;
