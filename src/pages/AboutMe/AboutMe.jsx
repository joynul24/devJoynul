import { useEffect } from "react";
import AOS from "aos";
import htmlLogo from "../../assets/skills-logo/html-skill-logo.png";
import cssLogo from "../../assets/skills-logo/css-skill-logo.png";
import jsLogo from "../../assets/skills-logo/js-skill-logo.png";
import reactLogo from "../../assets/skills-logo/react-skill-logo.png";
import backendLogo from "../../assets/skills-logo/backend-skill-logo.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#242734] mt-5 md:mt-20">
      <div className="max-w-6xl mx-auto py-25 px-2">
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

            <div className="mt-15">
              <h3
                className="text-center md:text-left text-xl md:text-2xl font-bold inter"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                Follow me
              </h3>
              <div className="flex items-center gap-8 md:gap-5 mt-6 md:mt-4 justify-center md:justify-normal">
                <a
                  href="https://www.linkedin.com/in/devjoynul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="hover:text-cyan-500 text-4xl transition duration-300 hover:-translate-y-2"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/joynul24"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="hover:text-gray-900 text-4xl transition duration-300 hover:-translate-y-2"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://web.facebook.com/ma.joynul"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="hover:text-blue-500 text-4xl transition duration-300 hover:-translate-y-2"
                >
                  <FaFacebook />
                </a>
              </div>
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
              <div className="w-full mb-3" data-aos="fade-up" data-aos-delay="100">
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
              <div className="w-full mb-3" data-aos="fade-up" data-aos-delay="200">
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
              <div className="w-full mb-3" data-aos="fade-up" data-aos-delay="300">
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
              <div className="w-full mb-3" data-aos="fade-up" data-aos-delay="400">
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
              <div className="w-full mb-3" data-aos="fade-up" data-aos-delay="500">
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
