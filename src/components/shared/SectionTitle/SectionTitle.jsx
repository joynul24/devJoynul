import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const SectionTitle = ({ title, subTitle }) => {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <div data-aos="zoom-in-up">
      <h2 className="text-2xl md:text-3xl lg:text-4xl roboto font-extrabold text-center">
        {title}
      </h2>
      <p className="text-center inter max-w-2xl mx-auto mt-2 text-gray-200 px-2 md:px-0">
        {subTitle}
      </p>
    </div>
  );
};

export default SectionTitle;
