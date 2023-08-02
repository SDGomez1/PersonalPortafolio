import styles from "@/styles/components/Navbar/Navbar.module.css";
import { Slider } from "./Slider";
import { Burger } from "./Burger";

export const Navbar = () => {
  return (
    <nav className={styles.main}>
      <Slider />
      <Burger />
    </nav>
  );
};
