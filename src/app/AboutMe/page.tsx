"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
const AboutMe = () => {
  return (
    <div className={styles.main}>
      <Navbar showSlider={false} />
      <h1>Wenas</h1>
    </div>
  );
};

export default AboutMe;
