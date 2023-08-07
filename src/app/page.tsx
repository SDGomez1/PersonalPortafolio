"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import { Hero } from "@/components/Hero/Hero";
import { StudyCases } from "@/containers/StudyCases";
import { useAppSelector } from "@/redux/hooks";
import { motion } from "framer-motion";
export default function Home() {
  const state = useAppSelector((state) => state.switch.value);
  const isInView = useAppSelector((state) => state.workInView.value);
  return (
    <motion.div
      className={styles.main}
      animate={
        state
          ? {
              background: isInView ? "#fff" : "#180228",
            }
          : { background: "#fff" }
      }
      transition={{ duration: 0.3, type: "tween" }}
    >
      <Navbar />
      <Hero />
      <StudyCases />
    </motion.div>
  );
}
