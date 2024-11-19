import React, { useEffect } from "react";
import "./animate.css";
import AnimatedBody from "./AnimatedBody.tsx";
import AnimatedTitle from "./AnimatedTitle.tsx";
import lottie from "lottie-web";
import {
  SiGit,
  SiGithub,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import AnimatedTools from "./AnimatedTools.tsx";

const Skills = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById(
        "lottie-skills-container"
      ) as HTMLElement,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/skills-animation.json",
    });
  }, []);
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="tools"
    >
      <AnimatedTitle
        text={"TOOLS IM USING."}
        className={
          "text-center text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] mb-8 md:text-[60px] lg:text-[80px]"
        }
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
      />
      <div className="flex justify-center">
        <div className="mx-auto flex w-full flex-col items-center justify-center self-center">
          <div className="mx-auto w-full justify-center">
            <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
              <AnimatedBody delay={0.2} text="Frontend" />
              <div>
                <AnimatedTools
                  className="grid grid-cols-5 gap-4"
                  delay={0.2}
                  stepSize={0.1}
                  iconSize={50}
                >
                  <SiTypescript size={50} />
                  <SiJavascript size={50} />
                  <SiReact size={50} />

                  <SiNextdotjs size={50} />
                </AnimatedTools>
              </div>
            </div>
            <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
              <AnimatedBody delay={0.3} text="Backend" />
              <div>
                <AnimatedTools
                  className="grid grid-cols-5 gap-4"
                  delay={0.3}
                  stepSize={0.1}
                  iconSize={50}
                >
                  <SiPostgresql size={50} />
                  <SiMysql size={50} />
                  <SiMongodb size={50} />
                  <SiNodedotjs size={50} />
                </AnimatedTools>
              </div>
            </div>
            <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
              <AnimatedBody delay={0.4} text="Other" />
              <div>
                <AnimatedTools
                  className="grid grid-cols-5 gap-4"
                  delay={0.4}
                  stepSize={0.1}
                  iconSize={50}
                >
                  <SiGithub size={50} />
                  <SiGit size={50} />
                </AnimatedTools>
              </div>
            </div>
          </div>
        </div>
        {/* Contenedor de la animación */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div
            id="lottie-skills-container"
            className="w-full h-full max-w-lg"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
