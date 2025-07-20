import { useEffect, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load project data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-5">
        <span className="loading text-4xl font-bold loading-spinner text-warning"></span>
      </div>
    );
  }

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="py-12 md:my-18">
      <SectionTitle
        title="My Projects"
        subTitle="A glimpse into the real-world applications I’ve built with passion.
        Problem-solving tools to creative experiments — explore my work."
      />

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-2 md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-20">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project}></ProjectCard>
        ))}
      </div>

      {/* See All Button */}
      {!showAll && projects.length > 3 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="relative inline-block overflow-hidden border-2 border-[#FFAF22] text-white px-6 py-2 rounded-lg shadow transition duration-300 group"
          >
            <span className="relative z-10 group-hover:text-white transition duration-300">
              See All Projects
            </span>
            <span className="absolute left-0 top-0 h-full w-0 bg-[#FFAF22] transition-all duration-800 group-hover:w-full"></span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
