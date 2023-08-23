interface ProjectCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
  idImg: string;
}

export const ProjectCardEnglish: ProjectCard[] = [
  {
    id: 1,
    title: "Medical Appointment | Web App",
    subtitle: "FullStack with NextJs | Database schema design",
    description:
      "Code implementation with backend API connections to MailChimp. From design to coded website",
    imgSrc: "/MedicalAPP.png",
    idImg: "MEDICALImage",
  },
  {
    id: 2,
    title: "Llama Gallery | Web Page",
    subtitle: "FullStack with NextJs | Database schema design",
    description:
      "Code implementation with backend API connections to MailChimp. From design to coded website",
    imgSrc: "/LlamaGallery.png",
    idImg: "LlamaGallery",
  },
];

export const ProjectCardSpanish: ProjectCard[] = [
  {
    id: 1,
    title: "Citas Medicas | Aplicación Web",
    subtitle: "FullStack con NextJs | Diseño de esquema de base de datos",
    description:
      "Página completa con autenticación, conexión a base de datos y desarrollo front end   ",
    imgSrc: "/MedicalAPP.png",
    idImg: "MEDICALImage",
  },
  {
    id: 2,
    title: "Galería de llamas | Página web",
    subtitle: "FullStack con NextJs | Creacion de paginas dinamicas",
    description:
      "Implementacion de paginas dinamicas basada en información disponible en base datos",
    imgSrc: "/LlamaGallery.png",
    idImg: "LlamaGallery",
  },
];
