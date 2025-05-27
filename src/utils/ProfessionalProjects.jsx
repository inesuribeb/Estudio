// ProfessionalProjects.jsx

const professionalProjects = [
    {
        id: "001",
        client: "Inmobiliaria Artaza",
        sector: {
            es: ["Inmobiliario"],
            en: ["Real Estate"]
        },
        services: {
            es: ["Diseño Web", "Dirección Creativa", "Desarrollo Full Stack", "Branding", "Fotografía", "Identidad de marca"],
            en: ["Web Design", "Creative Direction", "Full Stack Development", "Branding", "Photography", "Brand Identity"]
        },
        web: "https://artaza.inesuribe.es/",
        image: [
            { src: "/Artaza/1.png", alt: "INMO ARTAZA" },
        ],
        year: 2025,
        slogan: {
            es: ["Habitando Getxo"],
            en: ["Living Getxo"]
        },
    },
    {
        id: "002",
        client: "Swipe Agency",
        sector: {
            es: ["Moda"],
            en: ["Fashion"]
        },
        services: {
            es: ["Diseño Web", "Dirección Creativa", "Desarrollo Full Stack", "Branding", "Identidad de marca"],
            en: ["Web Design", "Creative Direction", "Full Stack Development", "Branding", "Brand Identity"]
        },
        web: "https://swipeagency.es/",
        image: [
            { src: "/ProfessionalProjects/gloverall1.png", alt: "Fotografía Gloverall" },
        ],
        year: 2025,
        slogan: {
            es: ["Tradición moderna"],
            en: ["Modern tradition"]
        },
    },
    {
        id: "003",
        client: "Rocio Machimbarrena",
        sector: {
            es: ["E-commerce", "Moda"],
            en: ["E-commerce", "Fashion"]
        },
        services: {
            es: ["Diseño Web", "Dirección Creativa", "Desarrollo Full Stack", "Fotografía"],
            en: ["Web Design", "Creative Direction", "Full Stack Development", "Photography"]
        },
        web: "https://machimba.inesuribe.es/home",
        image: [
            { src: "/ProfessionalProjects/MachimPP.png", alt: "Detalle bolso marca Rocio Marchimbarrena" },
        ],
        year: 2024,
        slogan: {
            es: ["Bolsos únicos y ediciones limitadas"],
            en: ["Unique bags and limited editions"]
        },
    },
    {
        id: "004",
        client: "Lishom",
        sector: {
            es: ["E-commerce", "Moda"],
            en: ["E-commerce", "Fashion"]
        },
        services: {
            es: ["Dirección Creativa", "Fotografía"],
            en: ["Creative Direction", "Photography"]
        },
        web: "",
        image: [
            { src: "/ProfessionalProjects/lishomPP.png", alt: "Detalle bolso marca Rocio Marchimbarrena" },
        ],
        year: 2025,
        slogan: {
            es: ["Hecho a mano con calma"],
            en: ["Slowly handmade"]
        },
    },
];

export default professionalProjects;