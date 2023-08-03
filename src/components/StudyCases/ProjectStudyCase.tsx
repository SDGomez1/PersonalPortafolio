import styles from "@/styles/components/StudyCases/ProjectStudyCase.module.css";
export const ProjectStudyCase = () => {
  return (
    <div className={styles.main}>
      <div className={styles.textContainer}>
        <h3>Proyecto 1</h3>
        <p>Subtitulo</p>
        <p>Esta va ser la descripcion</p>
        <button>botton</button>
      </div>
      <div>
        <span>imagen</span>
      </div>
    </div>
  );
};
