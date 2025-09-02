import './HeroSection.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import myProfilePhoto from '../assets/ks-2.png'; 
import { useTranslation, Trans } from 'react-i18next';

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-image">
        <div className="blob-bg">
          <img src={myProfilePhoto} alt="Khaleelullah Sheriff" className="myProfile" />
        </div>
      </div>

      <div className="hero-text">
        <h3>{t('hello')}</h3>

        <h1>
          {/* 👇 Trans allows using <bold> and <br /> from translations */}
          <Trans i18nKey="intro" values={{ name: "Khaleelullah Sheriff" }}
            components={{
              bold: <span className="highlight" />,
              br: <br />
            }}
          />
        </h1>

        <p>{t('description')}</p>

        <div className="hero-buttons">
          <a href="https://github.com/KHALEEL-21" target="_blank" className="btn-primary" rel="noopener noreferrer">
            <FaGithub /> {t('github')}
          </a>
          <a
            href="https://in.linkedin.com/in/khaleelullah-sheriff-k-947b62245"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FaLinkedin /> {t('linkedin')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
