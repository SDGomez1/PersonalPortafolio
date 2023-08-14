"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import { Footer } from "@/components/Footer/Footer";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
const AboutMe = () => {
  const state = useAppSelector((state) => state.switch.value);
  const currentLanguage = useAppSelector((state) => state.language.value);
  return (
    <div className={styles.main}>
      <Navbar showSlider={false} />
      <div className={styles.space}></div>
      <section className={styles.content}>
        <div>
          <h3>{!currentLanguage ? "This is Who I Am" : "Quien soy yo"}</h3>
          <p>
            {!currentLanguage
              ? "As a developer I like to focus on creating optimized web applications, combining not only software but design and product development. I love to create web pages that runs smoothly in every device and deliver a good user experience. As an Electronic Engineer I love to design, test and repair circuits of every type. I love the nanotechnology and currently I’m focused on creating microsystems and sensors. Also, these two areas combine when I develop control. applications for electronic systems that optimize the use of resources and can achieve tasks that otherwise would appear impossible with that technology. Finally, I love other areas like marketing and design. That complements my journey as a developer and electronic engineer."
              : `Como desarrollador me gusta enfocarme en crear aplicaciones web optimizadas, combinando no solo software sino diseño y desarrollo de productos. Me encanta crear páginas web que funcionen sin problemas en todos los dispositivos y brinden una buena experiencia de usuario. Como Ingeniero Electrónico me encanta diseñar, probar y reparar circuitos de todo tipo. Me encanta la nanotecnología y actualmente estoy enfocado en crear microsistemas y sensores. Además, estas dos áreas se combinan cuando desarrollo aplicaciones de control para sistemas electrónicos que optimizan el uso de recursos y pueden lograr tareas que de otra manera parecerían imposibles con esa tecnología. Finalmente, me encantan otras áreas como el marketing y el diseño. 
               Eso complementa mi viaje como desarrollador e ingeniero electrónico.`}
          </p>
        </div>
        <div>
          <span className={styles.img}>
            <Image src="/PersonalFoto.jpg" width={778} height={564} alt="" />
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutMe;
