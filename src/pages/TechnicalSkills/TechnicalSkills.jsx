import htmlLogo from "../../assets/skills-logo/html-skill-logo.png";
import cssLogo from "../../assets/skills-logo/css-skill-logo.png";
import jsLogo from "../../assets/skills-logo/js-skill-logo.png";
import reactLogo from "../../assets/skills-logo/react-skill-logo.png";
import backendLogo from "../../assets/skills-logo/backend-skill-logo.png";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";

const TechnicalSkills = () => {
  return (
    <div className="mx-w-6xl md:w-6xl mx-auto py-10 md:py-20 px-2">
      {/* Technical Skills */}
      <SectionTitle title="Technical Skills" subTitle="A collection of modern technologies and tools I work with
to build efficient, scalable, and user-friendly applications."></SectionTitle>
      <div
        className="md:mr-4 pl-2 md:pl-0 pr-2 md:px-0"
        data-aos-duration="1000"
      >
        <h2 className="md:text-2xl roboto font-bold mb-4">Skills</h2>
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
  );
};

export default TechnicalSkills;
