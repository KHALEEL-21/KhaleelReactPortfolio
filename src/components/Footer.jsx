import React, { useState } from 'react';
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
import * as emailjs from '@emailjs/browser'; // Use * as emailjs to fix bundler issues

function Footer() {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_4m97vro',   // Your EmailJS Service ID
      'template_6n39dks',  // Your EmailJS Template ID
      formData,
      'w6eyRqDy8yDYoAYIP' // Your EmailJS Public Key
    )
    .then(() => {
      alert('Message sent successfully!');
      setFormData({ email: '', message: '' });
      setShowForm(false);
    })
    .catch(() => {
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <footer className="footer">
      {/* Footer Title */}
      <p className="footer-text">{t("footer.connect") || "Connect with me"}</p>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://in.linkedin.com/in/khaleelullah-sheriff-k-947b62245" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/KHALEEL-21" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.youtube.com/@VIBEZBROTHERS" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
        <a href="https://www.facebook.com/khaleelviews/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
        <a href="https://www.instagram.com/khaleel_views/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        <a href="mailto:kkhaleel.dev@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email"><FaEnvelope /></a>
      </div>

      {/* Contact Me Button */}
      <button onClick={() => setShowForm(!showForm)} className="contact-btn">
        Contact Me
      </button>

      {/* Contact Form */}
      {showForm && (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      )}

      {/* Footer Copyright */}
      <p className="copyright">
        &copy; {new Date().getFullYear()} Khaleelullah Sheriff. {t("footer.rights") || "All rights reserved."}
      </p>
    </footer>
  );
}

export default Footer;
