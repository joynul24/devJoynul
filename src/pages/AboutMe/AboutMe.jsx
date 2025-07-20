import { useEffect } from "react";
import AOS from "aos";
import htmlLogo from "../../assets/skills-logo/html-skill-logo.png";
import cssLogo from "../../assets/skills-logo/css-skill-logo.png";
import jsLogo from "../../assets/skills-logo/js-skill-logo.png";
import reactLogo from "../../assets/skills-logo/react-skill-logo.png";
import backendLogo from "../../assets/skills-logo/backend-skill-logo.png";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import { FaDownload } from "react-icons/fa6";

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
        <div className="flex flex-col md:flex-row gap-12 mt-12 md:mt-25">
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
            <p className="text-gray-200 inter">
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

          {/* Technical Skills */}
          <div
            className="flex-1 md:mr-4 pl-2 md:pl-0 pr-2 md:px-0"
            data-aos-duration="1000"
          >
            <h2 className="md:text-2xl roboto font-bold mb-4">
              Technical Skills
            </h2>
            <div>
              {/* Progress 1 */}
              <div
                className="w-full mb-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="flex justify-between items-center">
                  <img className="w-8" src={htmlLogo} alt="HTML" />
                  <p className="text-right text-sm text-white">85%</p>
                </div>
                <progress
                  className="progress progress-accent w-full"
                  value="85"
                  max="100"
                ></progress>
              </div>

              {/* Progress 2 */}
              <div
                className="w-full mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex justify-between items-center">
                  <img className="w-8" src={cssLogo} alt="CSS" />
                  <p className="text-right text-sm text-white">80%</p>
                </div>
                <progress
                  className="progress progress-info w-full"
                  value="80"
                  max="100"
                ></progress>
              </div>

              {/* Progress 3 */}
              <div
                className="w-full mb-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex justify-between items-center">
                  <img className="w-8" src={jsLogo} alt="JavaScript" />
                  <p className="text-right text-sm text-white">75%</p>
                </div>
                <progress
                  className="progress progress-warning w-full"
                  value="75"
                  max="100"
                ></progress>
              </div>

              {/* Progress 4 */}
              <div
                className="w-full mb-3"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="flex justify-between items-center">
                  <img className="w-8" src={reactLogo} alt="React" />
                  <p className="text-right text-sm text-white">70%</p>
                </div>
                <progress
                  className="progress progress-error w-full"
                  value="70"
                  max="100"
                ></progress>
              </div>

              {/* Progress 5 */}
              <div
                className="w-full mb-3"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="flex justify-between items-center">
                  <img className="w-8" src={backendLogo} alt="Backend" />
                  <p className="text-right text-sm text-white">60%</p>
                </div>
                <progress
                  className="progress progress-secondary w-full"
                  value="60"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
