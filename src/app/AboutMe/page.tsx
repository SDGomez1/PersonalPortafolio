"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import { Footer } from "@/components/Footer/Footer";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
const AboutMe = () => {
  const state = useAppSelector((state) => state.switch.value);
  return (
    <div className={styles.main}>
      <Navbar showSlider={false} />
      <section className={styles.content}>
        <div>
          <h3 style={state ? { color: "#6127C9" } : { color: "#1a5859" }}>
            This is Who I Am
          </h3>
          <p style={state ? { color: "#6127C9" } : { color: "#1a5859" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fermentum pellentesque nisl non egestas. Nunc vehicula dolor ut
            egestas posuere. Quisque fringilla eleifend risus cursus facilisis.
            Suspendisse sit amet quam leo. Suspendisse ut orci orci. In eget
            sagittis nisi. Sed nec eros interdum, dapibus dui id, posuere
            tortor. Vivamus feugiat urna ac erat tristique egestas. Donec ut
            varius erat. Nam faucibus lacinia magna eu dapibus. Aliquam
            porttitor venenatis metus a placerat. Sed in nisi ut erat finibus
            tempor. Ut bibendum nibh dui, ut iaculis lacus commodo in.
            Vestibulum quis tellus magna.
          </p>
        </div>
        <div>
          <span className={styles.img}>
            <Image
              src="/PersonalFoto.jpg"
              width={778}
              height={564}
              alt=""
              style={{ left: "-190px", position: "absolute" }}
            />
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutMe;
