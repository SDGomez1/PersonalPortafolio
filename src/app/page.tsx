"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import { Hero } from "@/components/Hero/Hero";
import { StudyCases } from "@/containers/StudyCases";
import { useAppSelector } from "@/redux/hooks";
import { motion } from "framer-motion";

export default function Home() {
  const isInView = useAppSelector((state) => state.workInView.value);
  return (
    <motion.div
      className={styles.main}
      animate={
        isInView
          ? { backgroundColor: "rgb(249,255,238)" }
          : { backgroundColor: "rgb(255,255,255)" }
      }
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      <Navbar />
      <Hero />
      <StudyCases />
    </motion.div>
  );
}
