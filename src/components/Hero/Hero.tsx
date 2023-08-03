"use client";
import styles from "@/styles/components/Hero/Hero.module.css";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";

import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const Hero = () => {
  const { scrollY } = useScroll();
  const scrollData = useTransform(scrollY, [0, 100], [0, 20], {
    clamp: false,
  });
  const scrollDataYminus = useTransform(scrollY, [0, 100], [0, -20], {
    clamp: false,
  });
  const scrollDataXminus = useTransform(scrollY, [0, 100], [0, -30], {
    clamp: false,
  });
  const blurData = useTransform(scrollY, [0, 100], [0, 1], {
    clamp: false,
  });

  const scrollOutput = useSpring(scrollData, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const scrollOutputXminus = useSpring(scrollDataXminus, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const scrollOutputYminus = useSpring(scrollDataYminus, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [blur, setBlur] = useState("0px");

  useMotionValueEvent(blurData, "change", () => {
    setBlur(`${blurData.get()}px`);
  });

  return (
    <section className={styles.main}>
      <h1 style={raleway.style}>I'm Sergio</h1>
      <h2 style={raleway.style}>
        A Full stack developer that loves to develop applications. I do the
        design, coding and deploying. In Bogota, Colombia
      </h2>
      <motion.p
        id={styles.JS}
        style={{
          translateY: scrollOutputYminus,
          translateX: scrollOutputXminus,
          filter: `blur(${blur})`,
          rotate: "-20.037deg",
        }}
      >
        JS
      </motion.p>
      <motion.p
        id={styles.CSS}
        style={{
          translateY: scrollOutput,
          translateX: scrollOutput,
          filter: `blur(${blur})`,
          rotate: "26.624deg",
        }}
      >
        CSS
      </motion.p>
      <motion.span
        id={styles.one}
        style={{
          translateY: scrollOutput,
          translateX: scrollOutputXminus,
          filter: `blur(${blur})`,
          rotate: "-36.038deg",
        }}
      />
      <motion.span
        id={styles.two}
        style={{
          translateY: scrollOutputYminus,
          translateX: scrollOutputXminus,
          filter: `blur(${blur})`,
          rotate: "-10.236deg",
        }}
      />
      <motion.span
        id={styles.three}
        style={{
          translateY: scrollOutputYminus,
          translateX: scrollOutput,
          filter: `blur(${blur})`,
          rotate: "29.626deg",
        }}
      />
      <motion.span
        id={styles.four}
        style={{
          translateY: scrollOutputYminus,
          translateX: scrollOutput,
          filter: `blur(${blur})`,
          rotate: "33.342deg",
        }}
      />
      <motion.span
        id={styles.five}
        style={{
          translateY: scrollOutput,
          translateX: scrollOutput,
          filter: `blur(${blur})`,
          rotate: "18.63deg",
        }}
      />
    </section>
  );
};
