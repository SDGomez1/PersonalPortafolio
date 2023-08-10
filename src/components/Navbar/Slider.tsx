import styles from "@/styles/components/Navbar/Slider.module.css";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { motion } from "framer-motion";
import { switching } from "@/redux/features/switchState/SwitchStateSlice";

export const Slider = () => {
  const state = useAppSelector((state) => state.switch.value);
  const currentLanguage = useAppSelector((state) => state.language.value);
  const dispatch = useAppDispatch();

  return (
    <motion.div
      className={styles.slider}
      animate={state ? { background: "#EED5FF" } : { background: "#e9eeef" }}
    >
      <motion.div
        className={styles.handle}
        initial={{ left: "5px" }}
        animate={
          state
            ? { left: "112px", background: "#FAF2FF" }
            : { left: "8px", background: "#F5F6F7" }
        }
        transition={{ duration: 0.3, type: "spring" }}
      ></motion.div>
      <p
        style={
          state
            ? { fontWeight: "normal", color: "#703FCE" }
            : { fontWeight: "bold", color: "#555" }
        }
        onClick={() => {
          dispatch(switching(false));
        }}
      >
        {!currentLanguage ? "Work" : "Trabajos"}
      </p>
      <p
        style={{
          fontWeight: state ? "bold" : "normal",
          background: state
            ? "linear-gradient(300deg, #5B23C6 0%, #C25BEF 100%) "
            : "linear-gradient(300deg, #8DABAC 0%, #99B3B4 87.22%)",
        }}
        onClick={() => {
          dispatch(switching(true));
        }}
        className={styles.project}
      >
        {!currentLanguage ? "Projects" : "Ideas"}
      </p>
    </motion.div>
  );
};
