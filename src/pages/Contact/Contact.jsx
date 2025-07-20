import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import AOS from "aos";
import { useEffect } from "react";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";

const Contact = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="bg-[#242734] pb-8 md:pb-15 pt-20">
      <SectionTitle
        title="Let’s Build Something Great Together"
        subTitle="Got an idea in mind? I’d love to hear more about it. Let’s connect and explore how we can turn your vision into reality."
      ></SectionTitle>
      {/* Contact Section */}
      <section className="px-4 pt-16">
        <div className="max-w-6xl px-5 mx-auto flex flex-col md:flex-row gap-10 items-start">
          {/* Left Side - Contact Info */}
          <div data-aos="fade-up" data-aos-duration="3000">
            <h2 className="text-xl md:text-3xl font-bold mb-4 roboto">
              Contact Information
            </h2>
            <p className="text-gray-300 inter mb-6">
              I’d love to hear from you! Whether you have a question or just
              want to say hi, don’t hesitate to reach out.
            </p>
            <div className="space-y-4 inter text-gray-300">
              <p>
                <strong>Email:</strong> joynula969@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +880 1301249019
              </p>
              <p>
                <strong>Location:</strong> Sylhet, Bangladesh
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-center md:text-left text-yellow-400 text-xl font-bold inter">
                Follow me
              </h3>
              <div className="flex items-center gap-8 md:gap-5 mt-6 md:mt-4 justify-center md:justify-normal">
                <a
                  href="https://www.linkedin.com/in/devjoynul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="hover:text-cyan-500 text-3xl hover:scale-108 transition duration-500"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/joynul24"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  className="hover:text-gray-900 text-3xl hover:scale-108 transition duration-500"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://web.facebook.com/ma.joynul"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  className="hover:text-blue-500 text-3xl hover:scale-108 transition duration-500"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form
            className="rounded-lg space-y-4"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h2 className=" text-xl md:text-2xl font-semibold roboto">
              Send Me a Message
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#424758] px-4 py-2 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#424758] px-4 py-2 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full bg-[#424758] px-4 py-2 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-[#FFAF22] text-white w-full px-6 py-2 rounded-md hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
