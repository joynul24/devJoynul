import { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
  const { image, title, description, technologies, liveLink, github } = project || {};

  const imgRef = useRef(null);
  const containerHeight = 200;
  const [scrollAmount, setScrollAmount] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleImageLoad = () => {
    if (imgRef.current) {
      const imageHeight = imgRef.current.offsetHeight;
      const diff = imageHeight - containerHeight;
      setScrollAmount(diff > 0 ? diff : 0);
    }
  };

  return (
   <div
  className="card bg-[#3A3D58] border-gray-600 border rounded-lg shadow-md hover:shadow-lg hover:shadow-yellow-300 transition duration-300 relative overflow-hidden flex flex-col" // 👉 flex-col card
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  data-aos="fade-up"
>
  {/* Image Container */}
  <div className="w-full h-[200px] overflow-hidden relative">
    <img
      ref={imgRef}
      src={image}
      alt="Project Screenshot"
      onLoad={handleImageLoad}
      className="w-full object-cover transition-transform duration-[4000ms] ease-in-out"
      style={{
        transform: hovered
          ? `translateY(-${scrollAmount}px)`
          : "translateY(0)",
      }}
    />
  </div>

  {/* Card Body */}
  <div className="px-3 py-5 flex flex-col flex-grow justify-between"> {/* 👉 flex-grow + justify-between */}
    <div>
      <h2 className="card-title roboto text-white">{title}</h2>
      <p className="inter text-xs text-gray-300 mb-3">{description}</p>

      {/* Technologies */}
      <div
        className="flex flex-wrap gap-2 mt-3"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {technologies?.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-[#424758] text-white inter px-2 py-1 rounded-full border border-white/30"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* 👉 Bottom Buttons - Always at bottom */}
    <div className="flex items-center gap-2 mt-5">
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#545d7a] hover:bg-[#566388] px-3 py-2 rounded-md text-white text-xs"
      >
        <FaExternalLinkAlt /> Live
      </a>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 px-3 py-2 rounded-md text-white text-xs"
      >
        <FaGithub /> Code
      </a>
    </div>
  </div>
</div>

  );
};

export default ProjectCard;
