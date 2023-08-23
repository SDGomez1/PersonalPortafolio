"use client";
import styles from "@/styles/components/Hero/Hero.module.css";
import { motion } from "framer-motion";

import { Raleway } from "next/font/google";
import { useAppSelector } from "@/redux/hooks";
import { Decoration } from "./Decoration";

const raleway = Raleway({ subsets: ["latin"] });

export const Hero = () => {
  const state = useAppSelector((state) => state.switch.value);
  const currentLanguage = useAppSelector((state) => state.language.value);

  const actualWindowSize = window.matchMedia("(max-width: 700px)").matches;

  return (
    <section className={styles.main}>
      <motion.h1
        style={raleway.style}
        animate={
          state
            ? {
                background: "linear-gradient(315deg,#EED5FF 0%,#EED5FF 100%)",
              }
            : {
                background:
                  "linear-gradient(315deg,#1a5859 0%,rgba(153, 179, 180, 0.84) 100%)",
              }
        }
      >
        {!currentLanguage ? "I'm Sergio" : "Soy Sergio"}
      </motion.h1>
      <motion.h2
        style={raleway.style}
        animate={state ? { color: "#FFFFFF" } : { color: "#1a5859" }}
      >
        {!currentLanguage
          ? state
            ? "These are my projects, focused on learning new skills, using new procedures and dicovering new ways to approach to web development"
            : "A Full stack developer that loves to develop applications. I do the design, coding and deploying. In Bogota, Colombia"
          : state
          ? "Estos son mis proyectos, enfocados en aprender nuevas habilidades, utilizar nuevos procedimientos y descubrir nuevas formas de abordar el desarrollo web."
          : "Un desarrollador Full Stack al que le encanta desarrollar aplicaciones. Hago el diseño, el codigo y la implementación. En Bogotá, Colombia"}
      </motion.h2>

      {actualWindowSize ? <></> : <Decoration />}
    </section>
  );
};
