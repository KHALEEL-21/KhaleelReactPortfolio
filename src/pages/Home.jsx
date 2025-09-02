import React from 'react';
import './Home.scss';
import HeroSection from '../components/HeroSection';
import ProjectsListTab from '../components/2ndSection/ProjectsListTab';
import MySkillsTab from '../components/3rdSection/MySkillsTab';
import AnimatedBg from '../components/AnimatedBg';
import WaveBackground from '../components/WaveBackground';

function Home() {
  return (
    <>
    <div className="home-page">
      {/* <AnimatedBg /> */}
      <WaveBackground />
    <HeroSection />
    <ProjectsListTab />
    <MySkillsTab />
    </div>
    </>
  );
}

export default Home;
