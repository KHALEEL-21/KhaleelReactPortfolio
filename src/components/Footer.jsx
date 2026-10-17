import React, { useState } from "react";
import "./Footer.scss";
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import * as emailjs from "@emailjs/browser"; // Use * as emailjs to fix bundler issues

function Footer() {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4m97vro", // Your EmailJS Service ID
        "template_6n39dks", // Your EmailJS Template ID
        formData,
        "w6eyRqDy8yDYoAYIP" // Your EmailJS Public Key
      )
      .then(() => {
        alert(t("footer.sent"));
        setFormData({ email: "", message: "" });
        setShowForm(false);
      })
      .catch(() => {
        alert(t("footer.failed"));
      });
  };

  return (
    <footer className="footer" id="contact">
      {/* Footer Title */}
      <p className="footer-kicker">{t("footer.kicker")}</p>
      <h2 className="footer-text">{t("footer.heading")}</h2>
      <p className="footer-description">{t("footer.description")}</p>

      {/* Social Icons */}
      <div className="social-icons">
        <a
          href="https://in.linkedin.com/in/khaleelullah-sheriff-k-947b62245"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("social.linkedin")}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/KHALEEL-21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("social.github")}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.youtube.com/@VIBEZBROTHERS"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("social.youtube")}
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.facebook.com/khaleelviews/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("social.facebook")}
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/khaleel_views/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("social.instagram")}
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:kkhaleel.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("social.email")}
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Contact Me Button */}
      <button onClick={() => setShowForm(!showForm)} className="contact-btn" aria-expanded={showForm}>
        {t("footer.contact")}
      </button>

      {/* Contact Form */}
      {showForm && (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder={t("footer.email")}
            aria-label={t("footer.email")}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder={t("footer.message")}
            aria-label={t("footer.message")}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">{t("footer.send")}</button>
        </form>
      )}

      {/* Footer Copyright */}
      <p className="copyright">
        &copy; {new Date().getFullYear()} Khaleelullah Sheriff.{" "}
        {t("footer.rights")}
      </p>
    </footer>
  );
}

export default Footer;
