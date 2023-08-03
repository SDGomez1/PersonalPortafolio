import styles from "@/styles/components/StudyCases/ProjectStudyCase.module.css";
import { motion } from "framer-motion";
import { useAppSelector } from "@/redux/hooks";
export const ProjectStudyCase = () => {
  const isInView = useAppSelector((state) => state.workInView.value);

  return (
    <motion.div
      className={styles.main}
      animate={{
        background: isInView ? "rgba(245, 246, 247, 1)" : "rgba(26, 88, 89, 1)",
      }}
    >
      <div className={styles.textContainer}>
        <h3>Proyecto 1</h3>
        <p>Subtitulo</p>
        <p>Esta va ser la descripcion</p>
        <button>botton</button>
      </div>
      <div>
        <span>imagen</span>
      </div>
    </motion.div>
  );
};
