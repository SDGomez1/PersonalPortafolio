import styles from "@/styles/components/Navbar/Slider.module.css";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { motion } from "framer-motion";
import { switching } from "@/redux/features/switchState/SwitchStateSlice";

export const Slider = () => {
  const state = useAppSelector((state) => state.switch.value);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.slider}>
      <motion.div
        className={styles.handle}
        initial={{ left: "5px" }}
        animate={state ? { left: "112px" } : { left: "8px" }}
        transition={{ duration: 0.3, type: "spring" }}
      ></motion.div>
      <p
        style={{ fontWeight: state ? "normal" : "bold" }}
        onClick={() => {
          dispatch(switching(false));
        }}
      >
        Work
      </p>
      <p
        style={{
          fontWeight: state ? "bold" : "normal",
          background: state
            ? "background: linear-gradient(300deg, #8DABAC 0%, #99B3B4 87.22%)"
            : "background: linear-gradient(300deg, #8DABAC 0%, #99B3B4 87.22%)",
        }}
        onClick={() => {
          dispatch(switching(true));
        }}
        className={styles.project}
      >
        Projects
      </p>
    </div>
  );
};
