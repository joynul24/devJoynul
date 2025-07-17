import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner/Banner";
import SkillAndTech from "./SkillAndTech/SkillAndTech";

const Home = () => {
    return (
        <div className="pt-20">
           <Banner></Banner>
           <AboutMe></AboutMe>
           <SkillAndTech></SkillAndTech>
        </div>
    );
};

export default Home;