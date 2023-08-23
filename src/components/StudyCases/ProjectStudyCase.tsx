import styles from "@/styles/components/StudyCases/ProjectStudyCase.module.css";
import { motion } from "framer-motion";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";

export const ProjectStudyCase = (props: {
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
  idImg: string;
}) => {
  const isInView = useAppSelector((state) => state.workInView.value);
  return (
    <motion.div
      className={styles.main}
      animate={isInView ? { background: "#320C67" } : { background: "#320C67" }}
      transition={{ duration: 0.3, type: "tween" }}
    >
      <div className={styles.textContainer}>
        <h3>{props.title}</h3>
        <p className={styles.subtitle}>{props.subtitle}</p>
        <p className={styles.description}>{props.description}</p>
        <button>See Project learnings</button>
      </div>
      <div id={styles.image}>
        <span id={props.idImg}>
          <Image src={props.imgSrc} sizes="" fill alt="" />
        </span>
      </div>
    </motion.div>
  );
};
