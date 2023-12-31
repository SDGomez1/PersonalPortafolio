import { useAppSelector } from "@/redux/hooks";
import styles from "@/styles/components/Navbar/BackToHome.module.css";
import Link from "next/link";

export const BactToHome = () => {
  const state = useAppSelector((state) => state.switch.value);
  return (
    <Link href="/">
      <span
        className={styles.main}
        style={state ? { background: "#EED5FF" } : { background: "#E9EEEF" }}
      >
        <svg
          width="28"
          height="24"
          viewBox="0 0 35 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807609 11.0711 0.807609 10.4853 1.3934L0.939339 10.9393ZM35 10.5L2 10.5L2 13.5L35 13.5L35 10.5Z"
            fill={state ? "#6127C9" : "#1A5859"}
          />
        </svg>
      </span>
    </Link>
  );
};
