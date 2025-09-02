import React from 'react';
import './Home.scss';
import HeroSection from '../components/HeroSection';
import ProjectsListTab from '../components/2ndSection/ProjectsListTab';
import MySkillsTab from '../components/3rdSection/MySkillsTab';

function Home() {
  return (
    <>
    <div className="home-page">
    <HeroSection />
    <ProjectsListTab />
    <MySkillsTab />
    </div>
    </>
  );
}

export default Home;
