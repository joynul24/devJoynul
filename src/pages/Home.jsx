import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="pt-20">
           <Banner></Banner>
           <AboutMe></AboutMe>
        </div>
    );
};

export default Home;