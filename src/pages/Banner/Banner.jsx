import React, { useEffect } from "react";
import AOS from "aos";
import { Typewriter } from "react-simple-typewriter";
import bannerImg from "../../assets/banner-img.png";
import { FaArrowDownLong } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 pb-5 md:pb-0 pt-2 md:pt-12 lg:pt-16">
      {/* Banner Content */}
      <div className="md:w-1/2 text-center md:text-left" data-aos="fade-up">
        <h1 className="roboto text-4xl md:text-5xl font-bold mb-4">
          Hi<span className="text-[#FFAF22]">,</span> I'm Joynul Abedin
        </h1>

        {/* Typewriter effect here */}
        <h2 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-4 inter">
          <Typewriter
            words={[
              "MERN Stack Developer",
              "Problem Solver",
              "Lifelong Learner",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <p className="inter text-gray-300 mb-6">
          I’m passionate about solving real-world problems and take pride in
          building meaningful solutions from the ground up. I’m looking to join
          a forward-thinking team where I can grow, contribute my skills, and
          help develop applications that make a real difference in people’s
          lives.
        </p>

        <div className="flex justify-center md:justify-normal gap-3">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={1000}
            offset={-50}
            className="inline-block cursor-pointer whitespace-nowrap border-0 bg-[#FFAF22] text-white px-2 md:px-6 py-3 rounded-lg inter shadow hover:scale-105 transition duration-300"
          >
            View My Work
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={1000}
            offset={-10}
            className="relative cursor-pointer inline-block overflow-hidden border-2 border-[#FFAF22] text-yellow-300 px-2 md:px-6 py-3 rounded-lg shadow transition duration-300 inter group"
          >
            <span className="relative z-10 group-hover:text-white transition duration-300">
              Get In Touch
            </span>
            <span className="absolute left-0 top-0 h-full w-0 bg-[#FFAF22] transition-all duration-800 group-hover:w-full"></span>
          </ScrollLink>
        </div>
        {/* Scroll Arrow */}
        <div className="mt-8 flex flex-col items-center animate-bounce">
          <p className="text-base inter">Scroll to explore</p>
          <span className="mt-2 text-[#FFAF22]">
            <FaArrowDownLong />
          </span>
        </div>
      </div>

      {/* Banner Img */}
      <div
        className="flex end w-[280px] md:w-1/2 mt-5 md:mt-0"
        data-aos="flip-right"
      >
        <img
          src={bannerImg}
          alt="Joynul Abedin"
          className="w-full max-w-sm mx-auto rounded-br-[50px] rounded-tr-[50px] rounded-tl-[50px] border-l-[12px] border-b-[12px] border-l-amber-400 border-b-amber-400 shadow-yellow-300 shadow-[0_1px_15px_rgba(255,255,255,0.1)] animate-zoomInOut"
        />
      </div>
    </div>
  );
};

export default Banner;
