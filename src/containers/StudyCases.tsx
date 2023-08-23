import styles from "@/styles/containers/StudyCases.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { WorkStudyCase } from "@/components/StudyCases/WorkStudyCase";
import { ProjectStudyCase } from "@/components/StudyCases/ProjectStudyCase";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { setInView } from "@/redux/features/workInView/WorkInViewSlice";
import { WorkCardEnglish, WorkCardSpanish } from "@/data/WorkCard";
import { ProjectCardEnglish, ProjectCardSpanish } from "@/data/ProjectCard";
import { current } from "@reduxjs/toolkit";

export const StudyCases = () => {
  const state = useAppSelector((state) => state.switch.value);
  const language = useAppSelector((state) => state.language.value);

  const dispatch = useAppDispatch();

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  useEffect(() => {
    dispatch(setInView(isInView));
  });

  const WorkDataCard = !language
    ? WorkCardEnglish.map((currentData) => {
        return (
          <WorkStudyCase
            key={currentData.id}
            title={currentData.title}
            subtitle={currentData.subtitle}
            description={currentData.description}
            source={currentData.source}
            idImage={currentData.idImage}
          />
        );
      })
    : WorkCardSpanish.map((currentData) => {
        return (
          <WorkStudyCase
            key={currentData.id}
            title={currentData.title}
            subtitle={currentData.subtitle}
            description={currentData.description}
            source={currentData.source}
            idImage={currentData.idImage}
          />
        );
      });

  const ProjectDataCard = !language
    ? ProjectCardEnglish.map((currentData) => {
        return (
          <ProjectStudyCase
            key={currentData.id}
            title={currentData.title}
            subtitle={currentData.subtitle}
            description={currentData.description}
            imgSrc={currentData.imgSrc}
            idImg={currentData.idImg}
          />
        );
      })
    : ProjectCardSpanish.map((currentData) => {
        return (
          <ProjectStudyCase
            key={currentData.id}
            title={currentData.title}
            subtitle={currentData.subtitle}
            description={currentData.description}
            imgSrc={currentData.imgSrc}
            idImg={currentData.idImg}
          />
        );
      });

  if (!state) {
    return (
      <section ref={ref} className={styles.main}>
        {WorkDataCard}
      </section>
    );
  } else {
    return <section className={styles.main}>{ProjectDataCard}</section>;
  }
};
