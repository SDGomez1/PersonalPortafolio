import styles from "@/styles/components/Navbar/Navbar.module.css";
import { Slider } from "./Slider";
import { Burger } from "./Burger";
import { BactToHome } from "./BackToHome";

export const Navbar = (props: { showSlider: boolean }) => {
  return (
    <nav className={styles.main}>
      {props.showSlider ? <Slider /> : <BactToHome />}
      <Burger />
    </nav>
  );
};
