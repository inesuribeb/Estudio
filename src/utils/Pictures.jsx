// Pictures.jsx
const column1Images = [
    { src: "/CAPTURAS/1.png", alt: "imagen de un niño", category: "Photography", order: 1 },
    { src: "/CAPTURAS/chicocapucharoja.png", alt: "RETRATO DE CHUCO CON CAPUCHA ROJA", category: "Photography", order: 2 },
    { src: "/CAPTURAS/2.png", alt: "nose", category: "Photography", order: 3 },
    { src: "/CAPTURAS/2.2.2.png", alt: "", category: "Photography", order: 4 },
    { src: "/CAPTURAS/albaylabrador.png", alt: "chico y chica sentados", category: "Photography", order: 5 },
    { src: "/CAPTURAS/design1.PNG", alt: "chico y chica sentados", category: "Design", order: 6 },
    { src: "/CAPTURAS/ramoflores.png", alt: "ramo de flores", category: "Photography", order: 7 },
    { src: "/CAPTURAS/albaamarillo.png", alt: "imagen de chica con camiseta amarilla", category: "Photography", order: 8 },
    { src: "/CAPTURAS/MANU6.png", alt: "foto de chico bailando en un desguace", category: "Photography", order: 9 },
    { src: "/CAPTURAS/ZPLAYA.jpg", alt: "atardecer con pesca", category: "Photography", order: 10 },
    { src: "/CAPTURAS/design10.png", alt: "atardecer con pesca", category: "Design", order: 11 }
  ];
  
  const column2Images = [
    { src: "/CAPTURAS/1.1.png", alt: "imagen de niños senegaleses", category: "Photography", order: 12 },
    { src: "/CAPTURAS/2.2.png", alt: "NOSE", category: "Photography", order: 13 },
    { src: "/CAPTURAS/design9.jpg", alt: "NOSE", category: "Design", order: 14 },
    { src: "/CAPTURAS/2.2.2.2.png", alt: "NOSE", category: "Photography", order: 15 },
    { src: "/CAPTURAS/playa.png", alt: "chica corriendo en playa", category: "Photography", order: 16 },
    { src: "/CAPTURAS/bolsoro.png", alt: "detalle de bolso rojo", category: "Photography", order: 17 },
    { src: "/CAPTURAS/alazne.png", alt: "foto mujer en blanco y negro", category: "Photography", order: 18 },
    { src: "/CAPTURAS/señoramosca.png", alt: "foto de una mosca en un sombrero de señora", category: "Photography", order: 19 },
    { src: "/CAPTURAS/paisaje2.png", alt: "paisaje", category: "Photography", order: 20 },
    { src: "/CAPTURAS/design2.PNG", alt: "paisaje", category: "Design", order: 21 },
    { src: "/CAPTURAS/nwhr.png", alt: "pescador porta un pez", category: "Photography", order: 22 },
    { src: "/CAPTURAS/ZABRAZO.png", alt: "chicas abrazandose", category: "Photography", order: 23 },
    { src: "/CAPTURAS/design8.PNG", alt: "chicas abrazandose", category: "Design", order: 24 }
  ];
  
  const column3Images = [
    { src: "/CAPTURAS/1.1.1.png", alt: "chico acrobacia", category: "Photography", order: 25 },
    { src: "/CAPTURAS/design6.PNG", alt: "chico acrobacia", category: "Design", order: 26 },
    { src: "/CAPTURAS/1.1.1.1.png", alt: "nose", category: "Photography", order: 27 },
    { src: "/CAPTURAS/BOSQUENOCHE.jpg", alt: "casa en el bosque de noche", category: "Photography", order: 28 },
    { src: "/CAPTURAS/senegalstyle.png", alt: "chico senegales bien vestido", category: "Photography", order: 29 },
    { src: "/CAPTURAS/design3.PNG", alt: "chico senegales bien vestido", category: "Design", order: 30 },
    { src: "/CAPTURAS/MANOSATRAS.png", alt: "manos de chica puestos atras", category: "Photography", order: 31 },
    { src: "/CAPTURAS/albamorado.png", alt: "chica con vestido morado", category: "Photography", order: 32 },
    { src: "/CAPTURAS/helenpies.png", alt: "chica sentada en cama", category: "Photography", order: 33 },
    { src: "/CAPTURAS/paisaje1.png", alt: "PAISAJE", category: "Photography", order: 34 },
    { src: "/CAPTURAS/elen.png", alt: "foto detalle de ojo azul de chica", category: "Photography", order: 35 },
    { src: "/CAPTURAS/ZMALLORCA.png", alt: "terraza en atardecer", category: "Photography", order: 36 },
    { src: "/CAPTURAS/swipe.png", alt: "swipe", category: "Design", order: 37 }
  ];
  
  // Agregamos una función que combine todas las imágenes para facilitar su uso
  const allImages = [...column1Images, ...column2Images, ...column3Images];
  
  // Exportamos las imágenes individualmente y también todas juntas
  export { column1Images, column2Images, column3Images, allImages };
  
  // Exportamos una función que devuelve todas las imágenes filtradas por categoría
  export const getImagesByCategory = (category) => {
    if (category === 'All') {
      return allImages;
    }
    return allImages.filter(img => img.category === category);
  };