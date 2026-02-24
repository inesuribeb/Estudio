const column1Images = [
    { src: "/artOpt/1.jpg", alt: "imagen de un niño", category: "Photography", order: 1 },
    { src: "/artOpt/chicocapucharoja.jpg", alt: "RETRATO DE CHUCO CON CAPUCHA ROJA", category: "Photography", order: 2 },
    { src: "/artOpt/2.jpg", alt: "nose", category: "Photography", order: 3 },
    { src: "/artOpt/2.2.2.jpg", alt: "", category: "Photography", order: 4 },

    { src: "/ProfessionalProjects/BellHouse/formatoinsta11.png", alt: "branding Bell House", category: "Design", order: 5 },

    { src: "/artOpt/albaylabrador.jpg", alt: "chico y chica sentados", category: "Photography", order: 6 },
    { src: "/artOpt/design1.jpg", alt: "chico y chica sentados", category: "Design", order: 7 },
    { src: "/artOpt/ramoflores.jpg", alt: "ramo de flores", category: "Photography", order: 8 },
    { src: "/artOpt/albaamarillo.jpg", alt: "imagen de chica con camiseta amarilla", category: "Photography", order: 9 },
    { src: "/artOpt/MANU6.jpg", alt: "foto de chico bailando en un desguace", category: "Photography", order: 10 },
    { src: "/artOpt/ZPLAYA.jpg", alt: "atardecer con pesca", category: "Photography", order: 11 },
    { src: "/artOpt/design10.jpg", alt: "atardecer con pesca", category: "Design", order: 12 }
  ];
  
  const column2Images = [
    { src: "/artOpt/1.1.jpg", alt: "imagen de niños senegaleses", category: "Photography", order: 12 },
    { src: "/artOpt/2.2.jpg", alt: "NOSE", category: "Photography", order: 13 },
    { src: "/artOpt/design9.jpg", alt: "NOSE", category: "Design", order: 14 },
    { src: "/artOpt/2.2.2.2.jpg", alt: "NOSE", category: "Photography", order: 15 },
    { src: "/artOpt/playa.jpg", alt: "chica corriendo en playa", category: "Photography", order: 16 },
    { src: "/artOpt/bolsoro.jpg", alt: "detalle de bolso rojo", category: "Photography", order: 17 },
    { src: "/artOpt/alazne.jpg", alt: "foto mujer en blanco y negro", category: "Photography", order: 18 },
    { src: "/artOpt/señoramosca.jpg", alt: "foto de una mosca en un sombrero de señora", category: "Photography", order: 19 },
    { src: "/artOpt/paisaje2.jpg", alt: "paisaje", category: "Photography", order: 20 },
    { src: "/artOpt/design2.jpg", alt: "paisaje", category: "Design", order: 21 },
    { src: "/artOpt/nwhr.jpg", alt: "pescador porta un pez", category: "Photography", order: 22 },
    { src: "/artOpt/ZABRAZO.jpg", alt: "chicas abrazandose", category: "Photography", order: 23 },
    { src: "/artOpt/design8.jpg", alt: "chicas abrazandose", category: "Design", order: 24 }
  ];
  
  const column3Images = [
    { src: "/artOpt/1.1.1.jpg", alt: "chico acrobacia", category: "Photography", order: 25 },
    { src: "/artOpt/design6.jpg", alt: "chico acrobacia", category: "Design", order: 26 },
    { src: "/artOpt/1.1.1.1.jpg", alt: "nose", category: "Photography", order: 27 },
    { src: "/artOpt/BOSQUENOCHE.jpg", alt: "casa en el bosque de noche", category: "Photography", order: 28 },
    { src: "/artOpt/senegalstyle.jpg", alt: "chico senegales bien vestido", category: "Photography", order: 29 },
    { src: "/artOpt/design3.jpg", alt: "chico senegales bien vestido", category: "Design", order: 30 },
    { src: "/artOpt/MANOSATRAS.jpg", alt: "manos de chica puestos atras", category: "Photography", order: 31 },
    { src: "/artOpt/albamorado.jpg", alt: "chica con vestido morado", category: "Photography", order: 32 },
    { src: "/artOpt/helenpies.jpg", alt: "chica sentada en cama", category: "Photography", order: 33 },
    { src: "/artOpt/paisaje1.jpg", alt: "PAISAJE", category: "Photography", order: 34 },
    { src: "/artOpt/elen.jpg", alt: "foto detalle de ojo azul de chica", category: "Photography", order: 35 },
    { src: "/artOpt/ZMALLORCA.jpg", alt: "terraza en atardecer", category: "Photography", order: 36 },
    { src: "/artOpt/swipe.jpg", alt: "swipe", category: "Design", order: 37 }
  ];
  
  const allImages = [...column1Images, ...column2Images, ...column3Images];
  
  export { column1Images, column2Images, column3Images, allImages };
  
  export const getImagesByCategory = (category) => {
    if (category === 'All') {
      return allImages;
    }
    return allImages.filter(img => img.category === category);
  };