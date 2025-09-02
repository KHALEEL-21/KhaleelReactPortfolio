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
import { SiTypescript, SiNextdotjs, SiMongodb, SiRedux, SiScikitlearn } from "react-icons/si";

function MySkillsTab() {
  return (
    <div className="skills-tab">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">

        {/* Frontend Skills */}
        <div className="skills-group">
          <h3>Frontend Development</h3>
          <div className="skills-icons">
            <div className="skill-item"><FaHtml5 /> <span>HTML5</span></div>
            <div className="skill-item"><FaCss3Alt /> <span>CSS3</span></div>
            <div className="skill-item"><SiTypescript /> <span>TypeScript</span></div>
            <div className="skill-item"><FaJs /> <span>JavaScript</span></div>
            <div className="skill-item"><FaReact /> <span>React.js</span></div>
            <div className="skill-item"><SiRedux /> <span>Redux</span></div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skills-group">
          <h3>Backend & Database</h3>
          <div className="skills-icons">
            <div className="skill-item"><FaNodeJs /> <span>Node.js</span></div>
            <div className="skill-item"><FaPhp /> <span>PHP (Core)</span></div>
            {/* <div className="skill-item"><FaDatabase /> <span>SQL</span></div> */}
            <div className="skill-item"><SiMongodb /> <span>MongoDB</span></div>
          </div>
        </div>

        {/* Future Learning */}
        <div className="skills-group">
          <h3>Learning Next</h3>
          <div className="skills-icons">
            <div className="skill-item"><SiNextdotjs /> <span>Next.js</span></div>
            <div className="skill-item"><FaNodeJs /> <span>Express.js</span></div>
            <div className="skill-item"><SiScikitlearn /> <span>Data Science (Future)</span></div>
          </div>
        </div>

        {/* Content Creator & Social Media */}
        <div className="skills-group creative">
          <h3>Creative & Influence</h3>
          <div className="skills-icons">
            <div className="skill-item emoji">🎥
              <span>YouTuber <small>4+ yrs, 1000+ videos</small></span>
            </div>
            <div className="skill-item emoji">✍️
              <span>Blogger <small>SEO, blogs, content writing</small></span>
            </div>
            <div className="skill-item emoji">📱
              <span>Influencer <small>10+ platforms</small></span>
            </div>
            <div className="skill-item emoji">✅
              <span>Adsense Verified <small>Monetized</small></span>
            </div>
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