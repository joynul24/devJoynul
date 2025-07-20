import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import SkillAndTech from "./SkillAndTech/SkillAndTech";
import WhatIDo from "./WhatIDo/WhatIDo";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <div className="pt-20">
      <Banner></Banner>
      <Element name="about">
        <AboutMe></AboutMe>
      </Element>
      <Element name="skills">
        <SkillAndTech></SkillAndTech>
      </Element>
      <Element name="services">
        <WhatIDo></WhatIDo>
      </Element>
      <Element name="projects">
        <Projects></Projects>
      </Element>
      <Element name="contact">
        <Contact></Contact>
      </Element>
    </div>
  );
};

export default Home;
