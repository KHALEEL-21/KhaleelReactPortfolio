import React from "react";
import "./MySkillsTab.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaYoutube,
  FaBlogger,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiRedux,
  SiScikitlearn,
} from "react-icons/si";

function MySkillsTab() {
  return (
    <div className="skills-tab-container">
      <h2 className="skills-heading">My Skills</h2>

      <div className="skills-grid">
        {/* Frontend Skills */}
        <div className="skill-card">
          <h3 className="skill-category">Frontend Development</h3>
          <div className="skills-list">
            <span>
              <FaHtml5 /> HTML5
            </span>
            <span>
              <FaCss3Alt /> CSS3
            </span>
            <span>
              <FaJs /> JavaScript
            </span>
            <span>
              <SiTypescript /> TypeScript
            </span>
            <span>
              <FaReact /> React.js
            </span>
            <span>
              <SiRedux /> Redux
            </span>
          </div>
        </div>

        {/* Backend & Database */}
        <div className="skill-card">
          <h3 className="skill-category">Backend & Database</h3>
          <div className="skills-list">
            <span>
              <FaNodeJs /> Node.js
            </span>
            <span>
              <FaPhp /> PHP (Core)
            </span>
            <span>
              <SiMongodb /> MongoDB
            </span>
            <span>
              <FaDatabase /> SQL
            </span>
          </div>
        </div>

        {/* Learning Section */}
        <div className="skill-card">
          <h3 className="skill-category">Learning & Future Goals</h3>
          <div className="skills-list">
            <span>
              <SiNextdotjs /> Next.js
            </span>
            <span>
              <FaNodeJs /> Express.js
            </span>
            <span>
              <SiScikitlearn /> Data Science
            </span>
          </div>
        </div>

        {/* Creative Section */}
        <div className="skill-card">
          <h3 className="skill-category">Creative & Influence</h3>
          <div className="skills-list creative">
            <span>
              🎥 YouTuber <small>(4+ yrs, 1000+ videos)</small>
            </span>
            <span>
              ✍️ Blogger <small>(SEO & writing)</small>
            </span>
            <span>
              📱 Influencer <small>(10+ platforms)</small>
            </span>
            <span>✅ Adsense Verified</span>
          </div>

          <div className="social-icons">
            <FaYoutube />
            <FaFacebook />
            <FaInstagram />
            <FaTiktok />
            <FaTwitter />
            <FaBlogger />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkillsTab;
