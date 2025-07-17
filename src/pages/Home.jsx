import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner/Banner";
import SkillAndTech from "./SkillAndTech/SkillAndTech";
import WhatIDo from "./WhatIDo/WhatIDo";

const Home = () => {
    return (
        <div className="pt-20">
           <Banner></Banner>
           <AboutMe></AboutMe>
           <SkillAndTech></SkillAndTech>
           <WhatIDo></WhatIDo>
        </div>
    );
};

export default Home;