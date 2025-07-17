import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import { FaCode } from "react-icons/fa";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { SiDatabricks } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { GrDatabase } from "react-icons/gr";

const WhatIDo = () => {
    return (
        <div className="bg-[#242734] py-10 md:py-16">
            <div>
                <SectionTitle title="What I Do" subTitle="I specialize in building user-friendly websites, modern web apps, and solving real-world problems through code."></SectionTitle>
            </div>
            {/* Card Container */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16 px-3 md:px-4">
                {/* card 1 */}
                <div className="bg-[#424758] p-6 rounded md:rounded-none flex flex-col space-y-3 hover:bg-[#FFAF22] hover:-translate-y-2 duration-800">
                    <span className="text-2xl  md:text-2xl lg:text-3xl"><FaCode /></span>
                    <h3 className="roboto md:text-xl font-bold">Frontend Development</h3>
                    <p className="inter text-gray-300">Skilled in designing and developing responsive, user-centric interfaces using modern JavaScript, React, and Tailwind CSS.</p>
                </div>
                {/* card 2 */}
                <div className="bg-[#424758] p-6 rounded md:rounded-none flex flex-col space-y-3 hover:bg-[#FFAF22] hover:-translate-y-2 duration-800">
                    <span className="text-2xl  md:text-2xl lg:text-3xl"><BsDatabaseFillCheck /></span>
                    <h3 className="roboto md:text-xl font-bold">Backend Architecture</h3>
                    <p className="inter text-gray-300">Designing secure authentication systems and building scalable APIs using Node.js, Express, and MongoDB.</p>
                </div>
                {/* card 3 */}
                <div className="bg-[#424758] p-6 rounded md:rounded-none flex flex-col space-y-3 hover:bg-[#FFAF22] hover:-translate-y-2 duration-800">
                    <span className="text-2xl  md:text-2xl lg:text-3xl"><SiDatabricks /></span>
                    <h3 className="roboto md:text-xl font-bold">Full-Stack Integration</h3>
                    <p className="inter text-gray-300">Developing complete web applications using MongoDB, Express, React, and Node.js with smooth data flow and optimized performance.</p>
                </div>
                {/* card 4 */}
                <div className="bg-[#424758] p-6 rounded md:rounded-none flex flex-col space-y-3 hover:bg-[#FFAF22] hover:-translate-y-2 duration-800">
                    <span className="text-2xl  md:text-2xl lg:text-3xl"><MdDesignServices /></span>
                    <h3 className="roboto md:text-xl font-bold">UI/UX Optimization</h3>
                    <p className="inter text-gray-300">Designing user interfaces that are not only easy to use but also visually appealing, ensuring an engaging and seamless experience for users across all devices.</p>
                </div>
                {/* card 5 */}
                <div className="bg-[#424758] p-6 rounded md:rounded-none flex flex-col space-y-3 hover:bg-[#FFAF22] hover:-translate-y-2 duration-800">
                    <span className="text-2xl  md:text-2xl lg:text-3xl"><GrDatabase /></span>
                    <h3 className="roboto md:text-xl font-bold">Deployment & Hosting</h3>
                    <p className="inter text-gray-300">Efficiently deploying web apps on popular hosting services such as Netlify, Firebase, and Vercel to ensure optimal performance and accessibility.</p>
                </div>
                {/* card 6 */}
                <div className="bg-[#424758] p-6 rounded md:rounded-none flex flex-col space-y-3 hover:bg-[#FFAF22] hover:-translate-y-2 duration-800">
                    <span className="text-2xl  md:text-2xl lg:text-3xl"><GrDatabase /></span>
                    <h3 className="roboto md:text-xl font-bold">Performance Tuning</h3>
                    <p className="inter text-gray-300">Optimizing React applications through code splitting, lazy loading, and other best practices to ensure faster load times and smoother user experience.</p>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;