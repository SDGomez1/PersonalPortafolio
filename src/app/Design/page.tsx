"use client";

import styles from "./page.module.css";

import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { useAppSelector } from "@/redux/hooks";
const Design = () => {
  const state = useAppSelector((state) => state.switch.value);
  return (
    <div className={styles.main}>
      <Navbar showSlider={false} />
      <section className={styles.content}>
        <h1> Under Construction</h1>
      </section>

      <Footer />
    </div>
  );
};

export default Design;
