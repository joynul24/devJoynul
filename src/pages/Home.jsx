import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import SkillAndTech from "./SkillAndTech/SkillAndTech";
import WhatIDo from "./WhatIDo/WhatIDo";

const Home = () => {
    return (
        <div className="pt-20">
           <Banner></Banner>
           <AboutMe></AboutMe>
           <SkillAndTech></SkillAndTech>
           <WhatIDo></WhatIDo>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default Home;