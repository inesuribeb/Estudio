// ProfessionalProjects.jsx

const professionalProjects = [
    {
        id: "001",
        client: "INMO ARTAZA",
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
        year: 2024,
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
    },
];

export default professionalProjects;