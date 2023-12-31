import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import styles from "@/styles/components/Hero/Decoration.module.css";
export const Decoration = () => {
  const state = useAppSelector((state) => state.switch.value);

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
    <>
      <motion.p
        id={styles.JS}
        style={{
          translateY: scrollOutputYminus,
          translateX: scrollOutputXminus,
          filter: `blur(${blur})`,
          rotate: "-20.037deg",
          background: state
            ? "linear-gradient(180deg, #5F26C8 0%, #C25BEF 100%)"
            : "linear-gradient(180deg, #d2ddde 0%, #bbcccd 100%)",
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
          rotate: "-23.95deg",
          background: state
            ? "linear-gradient(180deg, #A94EE5 0%, #7532D1 100%)"
            : "linear-gradient(180deg, #cedadb 0%, #c0d0d1 100%)",
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
          rotate: "17.45deg",
          background: state
            ? "#7431D1"
            : "linear-gradient(180deg, #e9eeef 0%, #d2ddde 100%)",
        }}
      />
      <motion.span
        id={styles.two}
        style={{
          translateY: scrollOutputYminus,
          translateX: scrollOutputXminus,
          filter: `blur(${blur})`,
          rotate: "-10.236deg",
          background: state ? "#AC50E7" : "#e9eeef",
        }}
      />
      <motion.span
        id={styles.three}
        style={{
          translateY: scrollOutputYminus,
          translateX: scrollOutput,
          filter: `blur(${blur})`,
          rotate: "29.626deg",
          background: state ? "#7431D1" : "#f5f6f7",
        }}
      />
      <motion.span
        id={styles.four}
        style={{
          translateY: scrollOutputYminus,
          translateX: scrollOutput,
          filter: `blur(${blur})`,
          rotate: "33.342deg",
          background: state
            ? "#AA4EE6"
            : "linear-gradient(180deg, #E9EEEF 0%, #D4DFE0 100%)",
        }}
      />
      <motion.span
        id={styles.five}
        style={{
          translateY: scrollOutput,
          translateX: scrollOutput,
          filter: `blur(${blur})`,
          rotate: "-8.34deg",
          background: state ? "#AA4EE6" : "#E9EEEF",
        }}
      />
    </>
  );
};
