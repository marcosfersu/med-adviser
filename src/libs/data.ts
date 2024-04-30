import { m } from "framer-motion";

export type IProgramData = string;

export const ProgramData: IProgramData[] = [
  "Acceso a las grabaciones de las clases.",
  "Material de apoyo con el resumen de cada clase.",
  "Guías paso a paso, plantillas y workbooks para implementar los conceptos teóricos en su consultorio.",
  "Scripts para que adapte y entregue a su staff.",
  "Acceso a una sesión del Health Experience Mastermind.",
];

export interface IAccordionData {
  id: number;
  title: string;
  preTitle: string;
  content: string[];
}

export const AccordionData: IAccordionData[] = [
  {
    id: 1,
    title: "Marketing Médico",
    preTitle: "MÓDULO I",
    content: [
      "Marketing y su evolución",
      "Personal Branding",
      "¿Cómo diferenciarnos en un entorno cada vez más competitivo?",
      "Marketing Digital",
      "Pasos para planear y ejecutar una estrategia digital",
      "Principales errores en el uso de redes sociales",
    ],
  },
  {
    id: 2,
    title: "La Experiencia del Paciente",
    preTitle: "MÓDULO II",
    content: [
      "¿Cómo eligen los pacientes?",
      "Patient journey",
      "¿Cómo conducir una consulta exitosa?",
      "Negociación con el paciente",
      "Fidelización de pacientes",
    ],
  },
  {
    id: 3,
    title: "¿Cómo aumentar mis Ventas?",
    preTitle: "MÓDULO III",
    content: [
      "La venta como proceso",
      "Diferentes etapas de la venta",
      "Venta tradicional Vs. Venta profesional",
      "Protocolos de venta",
      "Neuroventas",
    ],
  },
  {
    id: 4,
    title: "Liderazgo & Equipos de Alto Rendimiento",
    preTitle: "MÓDULO IV",
    content: [
      "El rol del líder",
      "Habilidades de coaching",
      "Pasos para la incorporación de personal",
      "Motivación e incentivos",
    ],
  },
  {
    id: 5,
    title: "Management de médico a empresario",
    preTitle: "MÓDULO V",
    content: [
      "Diferentes roles del manager",
      "Información y métricas para la toma de decisiones",
      "Gestión en base a objetivos",
      "Evaluación de resultados y de comportamientos",
      "La información como activo estratégico",
      "Cómo lograr comportamientos a través de otros. Delegación efectiva",
    ],
  },
  {
    id: 6,
    title: "Productividad",
    preTitle: "MÓDULO VI",
    content: [
      "Gestión del Tiempo",
      "Estrategias para aumentar su productividad",
    ],
  },
];
