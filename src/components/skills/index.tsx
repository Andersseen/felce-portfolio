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
      className="min-h-section relative z-10 w-full items-center justify-center overflow-hidden bg-primary"
      id="tools"
    >
      <AnimatedTitle
        text={"TOOLS IM USING."}
        className={
          "text-center text-[40px] font-bold leading-[0.9em] tracking-tighter text-secondary sm:text-[45px] mb-8 md:text-[60px] lg:text-[80px]"
        }
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
      />
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex w-full flex-col items-center justify-center self-center p-8">
          <div className="mb-10 flex w-full flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-secondary md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16">
            <AnimatedBody delay={0.2} text="Frontend" />

            <AnimatedTools
              className="grid grid-cols-4 gap-4 justify-items-center"
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
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-secondary md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16">
            <AnimatedBody delay={0.3} text="Backend" />
            <div>
              <AnimatedTools
                className="grid grid-cols-4 gap-4 justify-items-center"
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
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-secondary md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16">
            <AnimatedBody delay={0.4} text="Other" />
            <div>
              <AnimatedTools
                className="grid grid-cols-2 gap-4 justify-items-center"
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
        {/* Contenedor de la animación */}
        <div className="w-full flex justify-center items-center">
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
