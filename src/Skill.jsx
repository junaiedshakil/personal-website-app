import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { FaCss3Alt, FaGit, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { RiNextjsLine, RiNodejsFill } from "react-icons/ri";
import { SiExpress, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: DiJavascript1, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: RiNextjsLine, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Git", icon: FaGit, color: "text-red-500" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-300" },
  { name: "MongoDB", icon: DiMongodb, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-300" },
  { name: "Node.js", icon: RiNodejsFill, color: "text-green-500" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="w-full h-[550px] py-20 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My Skills
          </h2>
          <p className="mt-3 text-gray-400">
            Technologies I use to build modern web experiences
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-gray-500 hover:scale-105 transition duration-300">
                  <Icon className={`text-5xl ${skill.color}`} />

                  <p className="mt-4 text-sm font-medium text-white">
                    {skill.name}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Skills;
