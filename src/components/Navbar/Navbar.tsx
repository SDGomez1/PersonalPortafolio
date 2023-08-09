import styles from "@/styles/components/Navbar/Navbar.module.css";
import { Slider } from "./Slider";
import { Burger } from "./Burger";

export const Navbar = (props: { showSlider: boolean }) => {
  return (
    <nav
      className={styles.main}
      style={
        props.showSlider
          ? { justifyContent: "space-between" }
          : { justifyContent: "flex-end" }
      }
    >
      {props.showSlider ? <Slider /> : <></>}

      <Burger />
    </nav>
  );
};
