import styles from "@/styles/components/StudyCases/WorkStudyCase.module.css";
import { motion } from "framer-motion";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
export const WorkStudyCase = (props: {
  title: string;
  subtitle: string;
  description: string;
  source: string;
  idImage: string;
}) => {
  const isInView = useAppSelector((state) => state.workInView.value);

  return (
    <motion.div
      className={styles.main}
      transition={{ duration: 0.3, type: "tween" }}
      animate={
        isInView
          ? {
              background: "rgba(26, 88, 89, 1)",
            }
          : {
              background: "rgba(245, 246, 247, 1)",
            }
      }
    >
      <div className={styles.textContainer}>
        <h3>{props.title}</h3>
        <p className={styles.subtitle}>{props.subtitle}</p>
        <p className={styles.description}>{props.description}</p>
        <button>View Study Case</button>
      </div>
      <div id={styles.image}>
        <span id={props.idImage}>
          <Image src={props.source} fill sizes="" alt="" />
        </span>
      </div>
    </motion.div>
  );
};
