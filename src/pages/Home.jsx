import './Home.scss';
import HeroSection from '../components/HeroSection';
import ProjectsListTab from '../components/2ndSection/ProjectsListTab';
import MySkillsTab from '../components/3rdSection/MySkillsTab';
import CareerSection from '../components/CareerSection';

function Home() {
  return (
    <div className="home-page">
      <div id="home"><HeroSection /></div>
      <CareerSection />
      <ProjectsListTab />
      <MySkillsTab />
    </div>
  );
}

export default Home;
