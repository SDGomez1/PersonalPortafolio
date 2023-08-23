interface WorkCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  source: string;
  idImage: string;
}

export const WorkCardEnglish: WorkCard[] = [
  {
    id: 1,
    title: "Amazon Product Gallery",
    subtitle: "UX Design | Developed with NextJs",
    description:
      "Complete design and develop of a web page based on showing the best product deals on Amazon",
    source: "/SAD.png",
    idImage: "SADImage",
  },
  {
    id: 2,
    title: "MS Dev Col Landing Page",
    subtitle: "UX Design | Developed with ReactJs",
    description:
      "Brand Concept, page design, integration with whatsApp and dinamic animations. Coded and deployed entirely",
    source: "/MSDEV.png",
    idImage: "MSDEVImage",
  },
  {
    id: 3,
    title: "AIPPIA WebPage",
    subtitle: "Coding | FullStack Development with NextJs",
    description:
      "Code implementation with backend API connections to MailChimp. From design to coded website",
    source: "/AIPPIA.png",
    idImage: "AIPPIAImage",
  },
];

export const WorkCardSpanish: WorkCard[] = [
  {
    id: 1,
    title: "Galeria de Productos",
    subtitle: "Diseño UX | Desarrollado con NextJS",
    description:
      "Diseño completo y desarrollo de una página web basada en mostrar las mejores ofertas de productos en Amazon",
    source: "/SAD.png",
    idImage: "SADImage",
  },
  {
    id: 2,
    title: "MS Dev Col Landing",
    subtitle: "Diseño UX | Desarrollado con ReactJs",
    description:
      "Concepto de marca, diseño de página, integración con whatsApp y animaciones dinámicas. Codificado y desplegado en su totalidad",
    source: "/MSDEV.png",
    idImage: "MSDEVImage",
  },
  {
    id: 3,
    title: "Pagina Web AIPPIA ",
    subtitle: "Codigo | Desarrollo FullStack con NextJs",
    description:
      "Implementación de código con conexiones API backend a MailChimp. Del diseño al sitio web codificado",
    source: "/AIPPIA.png",
    idImage: "AIPPIAImage",
  },
];
