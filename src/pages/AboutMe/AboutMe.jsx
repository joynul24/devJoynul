import { useEffect } from "react";
import AOS from "aos";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import { FaDownload } from "react-icons/fa6";
import myPic from "../../assets/about-pic/about-pic2.png"

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#242734] mt-5 md:mt-20">
      <div className="max-w-6xl mx-auto py-10 md:py-20 px-2">
        <SectionTitle
          title="About me"
          subTitle="I am passionate about creating effective and user-friendly web interfaces, guided by a creative mindset and a keen eye for detail in design."
        />
        <div className="flex items-center flex-col md:flex-row gap-8 mt-12 md:mt-25">
          {/* Content */}
          <div
            className="flex-1 pl-2"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <h1 className="roboto text-xl md:text-3xl font-bold mb-4">
              Hello<span className="text-[#FFAF22]">,</span> I'm Joynul{" "}
              <span className="text-[#FFAF22]">Abedin</span>
            </h1>
            <p className="text-gray-300 inter">
              My deep interest in web development sparked during my early
              college days while exploring the internet. What started as mere
              curiosity gradually turned into a passion. I find joy in writing
              code, fixing bugs, and bringing my ideas to life in digital form.
              Currently, I’m working with React, Firebase, and MongoDB, striving
              to improve myself little by little every day. My goal is to create
              things that are useful, meaningful, and make a real impact in
              people’s lives.
            </p>

            <div className=" mt-8 md:mt-15">
              <a
                href="https://docs.google.com/document/d/1ay-5XywRiqSJFi2K7Hmg1mZejiB2kPRqBtNt8aQq7M8/export?format=pdf"
                download
                className="relative inline-block overflow-hidden border-2 border-[#FFAF22] text-yellow-300 px-2 md:px-6 py-3 rounded-lg shadow transition duration-300 inter group"
              >
                <span className="relative z-10 group-hover:text-white transition duration-300 flex items-center gap-2">
                  <FaDownload />
                  Resume
                </span>
                <span className="absolute left-0 top-0 h-full w-0 bg-[#FFAF22] transition-all duration-800 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* About image*/}
          <div
            className="flex-1"
            
          >
            <div data-aos="zoom-in"
            data-aos-duration="3000" className="flex justify-center">
             <img className="w-full md:w-[350px] lg:w-[370px] border rounded-2xl md:rounded-full shadow-lg shadow-amber-300" src={myPic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
