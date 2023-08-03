"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import { Hero } from "@/components/Hero/Hero";
import { StudyCases } from "@/containers/StudyCases";

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
      <Hero />
      <StudyCases />
    </div>
  );
}
