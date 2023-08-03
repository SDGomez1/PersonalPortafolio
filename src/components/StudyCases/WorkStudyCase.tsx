import styles from "@/styles/components/StudyCases/WorkStudyCase.module.css";
import { motion } from "framer-motion";
export const WorkStudyCase = () => {
  return (
    <motion.div
      className={styles.main}
      whileHover={{ scale: 1.02, backgroundColor: "rgb(255,255,255)" }}
      transition={{ duration: 0.3, type: "tween" }}
    >
      <div className={styles.textContainer}>
        <h3>Caso de estudio 1</h3>
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
