import React from 'react';
import './Footer.scss';
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaEnvelope
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p className="footer-text">{t("footer.connect")}</p>
      <div className="social-icons">
        <a href="https://in.linkedin.com/in/khaleelullah-sheriff-k-947b62245" target='blank' aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/KHALEEL-21" target='blank' aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.youtube.com/@VIBEZBROTHERS" target='blank' aria-label="YouTube"><FaYoutube /></a>
        <a href="https://www.facebook.com/khaleelviews/" target='blank' aria-label="Facebook"><FaFacebook /></a>
        <a href="https://www.instagram.com/khaleel_views/" target='blank' aria-label="Instagram"><FaInstagram /></a>
        <a href="mailto:kkhaleel.dev@gmail.com" target='blank' aria-label="Email"><FaEnvelope /></a>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} Khaleelullah Sheriff. {t("footer.rights")}
      </p>
    </footer>
  );
}

export default Footer;
