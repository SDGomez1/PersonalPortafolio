import styles from "@/styles/containers/StudyCases.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { WorkStudyCase } from "@/components/StudyCases/WorkStudyCase";
import { ProjectStudyCase } from "@/components/StudyCases/ProjectStudyCase";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { setInView } from "@/redux/features/workInView/WorkInViewSlice";

export const StudyCases = () => {
  const state = useAppSelector((state) => state.switch.value);
  const dispatch = useAppDispatch();

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  useEffect(() => {
    dispatch(setInView(isInView));
  });
  if (!state) {
    return (
      <section ref={ref} className={styles.main}>
        <WorkStudyCase
          title="Amazon Product Gallery"
          subtitle="UX Design | Developed with NextJs"
          description="Complete design and develop of a web page based on showing the best product deals on Amazon"
          source="/SAD.png"
          idImage="SADImage"
        />
        <WorkStudyCase
          title="MS Dev col Landing Page"
          subtitle="UX Design | Developed with ReactJs"
          description="Brand Concept, page design, integration with whatsApp and dinamic animations. Coded and deployed entirely"
          source="/MSDEV.png"
          idImage="MSDEVImage"
        />
        <WorkStudyCase
          title="AIPPIA WebPage"
          subtitle="Coding | FullStack Development with NextJs"
          description="Code implementation with backend API connections to MailChimp. From design to coded website"
          source="/AIPPIA.png"
          idImage="AIPPIAImage"
        />
      </section>
    );
  } else {
    return (
      <section className={styles.main}>
        <ProjectStudyCase
          title="Medical Appointment | Web App"
          subtitle="FullStack with NextJs | Database schema design"
          description="Code implementation with backend API connections to MailChimp. From design to coded website"
          imgSrc="/MedicalAPP.png"
          idImg="MEDICALImage"
        />
        <ProjectStudyCase
          title="Llama Gallery | Web Page"
          subtitle="FullStack with NextJs | Database schema design"
          description="Code implementation with backend API connections to MailChimp. From design to coded website"
          imgSrc="/LlamaGallery.png"
          idImg="LlamaGallery"
        />
      </section>
    );
  }
};
