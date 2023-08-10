import Image from "next/image";
import styles from "@/styles/components/Footer/Footer.module.css";
import { useAppSelector } from "@/redux/hooks";
export const Footer = () => {
  const state = useAppSelector((state) => state.switch.value);
  return (
    <div
      className={styles.main}
      style={state ? { background: "#EED5FF" } : { background: "#E9EEEF" }}
    >
      <a href="https://www.linkedin.com/in/sd-gomez/" target="__blank">
        <Image src="/Linkedin.png" fill alt="" />
      </a>
      <a href="https://github.com/SDGomez1" target="__blank">
        <Image src="/Github.png" fill alt="" />
      </a>
    </div>
  );
};
