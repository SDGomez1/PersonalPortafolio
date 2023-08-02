import styles from "@/styles/components/Navbar/Burger.module.css";
import { useEffect, useState } from "react";
import { useAnimate, stagger } from "framer-motion";
import { Menu } from "./Menu";

const Path = (props: any) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="black"
    strokeLinecap="round"
    {...props}
  />
);

function useAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      [
        "nav",
        { right: isOpen ? "0" : "-400px" },
        { ease: isOpen ? [0.08, 0.65, 0.53, 0.96] : [], duration: 0.6 },
      ],
      [
        "li",
        {
          transform: isOpen ? "scale(1)" : "scale(0.5)",
          opacity: isOpen ? 1 : 0,
          filter: isOpen ? "blur(0px)" : "blur(10px)",
        },
        {
          delay: isOpen ? stagger(0.05) : stagger(0.05, { from: "last" }),
          at: isOpen ? "-0.1" : "<",
        },
      ],
    ]);
  }, [isOpen]);
  return scope;
}
export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useAnimation(isOpen);
  return (
    <div className={styles.main} onClick={() => setIsOpen(!isOpen)} ref={scope}>
      <svg width="23" height="18" viewBox="0 0 23 18">
        <Path
          d="M 2 2.5 L 20 2.5"
          className="top"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
        <Path
          d="M 2 16.346 L 20 16.346"
          className="bottom"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
      <Menu />
    </div>
  );
};