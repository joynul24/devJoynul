import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";

// Frontend logos
import html from "../../assets/all-skills-logo/html.png";
import css from "../../assets/all-skills-logo/css.png";
import js from "../../assets/all-skills-logo/js.png";
import tailwind from "../../assets/all-skills-logo/tailwind.png";
import bootstrap from "../../assets/all-skills-logo/bootstrap.png";
import react from "../../assets/all-skills-logo/react-js.png";
import vue from "../../assets/all-skills-logo/vue-js.png";
import daisyUi from "../../assets/all-skills-logo/daisyUI.png";

// Backend skill logos
import nodeJs from "../../assets/all-skills-logo/node-js.png";
import express from "../../assets/all-skills-logo/express-js.png";
import jwt from "../../assets/all-skills-logo/jwt.png";
import mongodb from "../../assets/all-skills-logo/mongodb.png";
import firebase from "../../assets/all-skills-logo/firebase.png";
import netlify from "../../assets/all-skills-logo/netlify.png";
import stripe from "../../assets/all-skills-logo/stripe.png";
import github from "../../assets/all-skills-logo/github.png";

// skill list with optional logo
const skills1 = [
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "JS", logo: js },
  { name: "Tailwind", logo: tailwind },
  { name: "Bootstrap", logo: bootstrap },
  { name: "React", logo: react },
  { name: "Vue", logo: vue },
  { name: "DaisyUi", logo: daisyUi },
];

const skills2 = [
  { name: "Node.js", logo: nodeJs },
  { name: "Express", logo: express },
  { name: "JWT", logo: jwt },
  { name: "Mongodb", logo: mongodb },
  { name: "Firebase", logo: firebase },
  { name: "Netlify", logo: netlify },
  { name: "Stripe", logo: stripe },
  { name: "Github", logo: github },
];

// Skill card render function
const renderSkill = (skill, i) => (
  <div
    key={i}
    className={`backdrop-blur-md inter bg-white/15  text-white px-6 py-3 rounded-lg shadow 
    text-sm md:text-base transition-transform duration-300 transform 
    hover:scale-110 flex items-center gap-2`}
  >
    {skill.logo && (
      <img
        src={skill.logo}
        alt={skill.name}
        className="w-6 h-6 object-contain"
      />
    )}
    {skill.name}
  </div>
);

// Main component
const SkillAndTech = () => {
  return (
    <div className="py-20 md:py-25">
      <SectionTitle
        title="Skills & Technologies"
        subTitle="A comprehensive toolkit for building modern web applications"
      />

      {/* Scroll Left (Row 1) */}
      <div className="mt-10 md:mt-12 overflow-hidden">
        <div className="flex gap-6 whitespace-nowrap scroll-left min-w-max">
          {[...skills1, ...skills1].map((skill, i) =>
            renderSkill(skill, i, "blue")
          )}
        </div>
      </div>

      {/* Scroll Right (Row 2) */}
      <div className="overflow-hidden mt-5 md:mt-8">
        <div className="flex gap-6 whitespace-nowrap scroll-right min-w-max">
          {[...skills2, ...skills2].map((skill, i) =>
            renderSkill(skill, i, "green")
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillAndTech;
