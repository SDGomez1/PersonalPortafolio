import { useAppSelector } from "@/redux/hooks";
import styles from "@/styles/components/Navbar/Menu.module.css";
import { motion } from "framer-motion";

export const Menu = () => {
  const state = useAppSelector((state) => state.switch.value);
  return (
    <motion.nav
      className={styles.menu}
      animate={state ? { background: "#EED5FF" } : { background: "#E9EEEF" }}
    >
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </motion.nav>
  );
};
