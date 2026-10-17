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
        <p className="hero-eyebrow"><span /> {t('hero.eyebrow')} <i /> {t('hero.specialty')}</p>
        <h1>
          {t('hero.title')}
          <span className="hero-title-accent">{t('hero.accent')}</span>
          <span className="hero-title-end">{t('hero.ending')}</span>
        </h1>
        <p className="hero-intro">{t('hero.intro')}</p>
        <p className="hero-description">{t('hero.description')}</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            {t('hero.explore')} <FaArrowDown />
          </a>
          <a href={resumeFile} className="btn-secondary" download="Khaleelullah-Sheriff-Resume.pdf">
            <FaDownload /> {t('hero.download')}
          </a>
        </div>
        <div className="hero-socials">
          <span>{t('hero.findMe')}</span>
          <a href="https://github.com/KHALEEL-21" target="_blank" rel="noopener noreferrer"><FaGithub /> {t('social.github')}</a>
          <a href="https://in.linkedin.com/in/khaleelullah-sheriff-k-947b62245" target="_blank" rel="noopener noreferrer"><FaLinkedin /> {t('social.linkedin')}</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="portrait-graphic" aria-hidden="true"><span>K</span></div>
        <span className="portrait-index">{t('hero.portraitIndex')}</span>
        <img src={myProfilePhoto} alt={t('hero.photoAlt')} className="myProfile" />
        <div className="portrait-caption"><strong>Khaleelullah Sheriff</strong><span>{t('hero.location')}</span></div>
        <span className="portrait-stamp" aria-hidden="true">KS<br />2026</span>
      </div>
    </section>
  );
}

export default HeroSection;
