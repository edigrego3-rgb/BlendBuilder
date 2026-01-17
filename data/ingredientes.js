// Datos de ingredientes exportados del diccionario BOTANICA
// Total: 60 ingredientes
const INGREDIENTES = [
  {
    "id": 1,
    "nombre": "Sal Marina Liberato Entrefina",
    "icono": "🧂",
    "familia": "Mineral",
    "origen": "Salinas del Litoral Atlántico",
    "descripcion": "Cristales de sal marina obtenidos por evaporación solar. Rica en oligoelementos.",
    "perfiles": [
      "neutro"
    ],
    "categoria": "sales"
  },
  {
    "id": 2,
    "nombre": "Sumac",
    "icono": "🍇",
    "familia": "Anacardiaceae",
    "origen": "Levante Mediterráneo, Irán",
    "descripcion": "Bayas secas con sabor ácido-afrutado con notas de limón y frambuesa.",
    "perfiles": [
      "citrico",
      "acido"
    ],
    "categoria": "especias"
  },
  {
    "id": 3,
    "nombre": "Cardamomo",
    "icono": "💚",
    "familia": "Zingiberaceae",
    "origen": "Montes Ghats, India",
    "descripcion": "La 'Reina de las Especias'. Perfil eucaliptado, mentolado y cítrico.",
    "perfiles": [
      "citrico"
    ],
    "categoria": "especias"
  },
  {
    "id": 4,
    "nombre": "Cardamomo Negro",
    "icono": "💚",
    "familia": "Zingiberaceae",
    "origen": "Himalaya, Nepal",
    "descripcion": "Cápsulas ahumadas sobre fuego de madera. Perfil intensamente ahumado.",
    "perfiles": [
      "ahumado",
      "terroso"
    ],
    "categoria": "ahumados"
  },
  {
    "id": 5,
    "nombre": "Pimienta Larga",
    "icono": "⚫",
    "familia": "Piperaceae",
    "origen": "India, Indonesia",
    "descripcion": "Predecesora de la pimienta negra. Sabor picante-dulce, notas de canela.",
    "perfiles": [
      "picante",
      "dulce"
    ],
    "categoria": "especias"
  },
  {
    "id": 6,
    "nombre": "Cúrcuma en Polvo",
    "icono": "🌟",
    "familia": "Zingiberaceae",
    "origen": "Sur de Asia",
    "descripcion": "Rizoma dorado. Sabor terroso con notas de jengibre. Antiinflamatorio.",
    "perfiles": [
      "terroso"
    ],
    "categoria": "especias"
  },
  {
    "id": 7,
    "nombre": "Coriandro",
    "icono": "🌱",
    "familia": "Apiaceae",
    "origen": "Mediterráneo Oriental",
    "descripcion": "Semillas con perfil cítrico-floral y notas de naranja.",
    "perfiles": [
      "floral",
      "citrico"
    ],
    "categoria": "especias"
  },
  {
    "id": 8,
    "nombre": "Comino en Grano",
    "icono": "🌰",
    "familia": "Apiaceae",
    "origen": "Levante, Egipto",
    "descripcion": "Semillas con aroma terroso-cálido. Esencial en cocina del Medio Oriente.",
    "perfiles": [
      "terroso"
    ],
    "categoria": "especias"
  },
  {
    "id": 9,
    "nombre": "Canela en Polvo",
    "icono": "🍂",
    "familia": "Lauraceae",
    "origen": "Sri Lanka (Ceilán)",
    "descripcion": "Corteza del árbol de canela. Perfil dulce-especiado.",
    "perfiles": [
      "dulce"
    ],
    "categoria": "especias"
  },
  {
    "id": 10,
    "nombre": "Pétalos de Rosas",
    "icono": "🌹",
    "familia": "Rosaceae",
    "origen": "Bulgaria/Irán",
    "descripcion": "Pétalos de rosa de Damasco. Perfil floral intenso con notas de miel.",
    "perfiles": [
      "floral",
      "dulce"
    ],
    "categoria": "flores"
  },
  {
    "id": 11,
    "nombre": "Romero",
    "icono": "🌿",
    "familia": "Lamiaceae",
    "origen": "Cuenca Mediterránea",
    "descripcion": "Hojas con aroma alcanforado-resinoso. 'Rocío del mar'.",
    "perfiles": [
      "terroso"
    ],
    "categoria": "hierbas"
  },
  {
    "id": 12,
    "nombre": "Tomillo",
    "icono": "🌿",
    "familia": "Lamiaceae",
    "origen": "Región Mediterránea",
    "descripcion": "Hojas con perfil herbáceo-terroso y notas de clavo.",
    "perfiles": [
      "terroso"
    ],
    "categoria": "hierbas"
  },
  {
    "id": 13,
    "nombre": "Albahaca",
    "icono": "🌿",
    "familia": "Lamiaceae",
    "origen": "India, África tropical",
    "descripcion": "Hojas con perfil dulce-anisado. 'Hierba real' en griego.",
    "perfiles": [
      "dulce"
    ],
    "categoria": "hierbas"
  },
  {
    "id": 14,
    "nombre": "Pimentón Español (Dulce)",
    "icono": "🔴",
    "familia": "Solanaceae",
    "origen": "La Vera, Extremadura",
    "descripcion": "Pimientos secos con perfil dulce-ahumado. DOP La Vera.",
    "perfiles": [
      "ahumado",
      "dulce"
    ],
    "categoria": "ahumados"
  },
  {
    "id": 15,
    "nombre": "Ajo Granulado",
    "icono": "🧄",
    "familia": "Amaryllidaceae",
    "origen": "Asia Central",
    "descripcion": "Bulbo deshidratado. Perfil pungente-sulfuroso con notas dulces.",
    "perfiles": [
      "picante",
      "dulce"
    ],
    "categoria": "especias"
  },
  {
    "id": 16,
    "nombre": "Jengibre en Polvo",
    "icono": "🫚",
    "familia": "Zingiberaceae",
    "origen": "Sudeste Asiático",
    "descripcion": "Rizoma con perfil picante-cálido con notas cítricas.",
    "perfiles": [
      "citrico",
      "picante",
      "terroso"
    ],
    "categoria": "especias"
  },
  {
    "id": 17,
    "nombre": "Nuez Moscada",
    "icono": "🥜",
    "familia": "Myristicaceae",
    "origen": "Islas Banda, Indonesia",
    "descripcion": "Semilla con perfil cálido-dulce con notas de madera.",
    "perfiles": [
      "terroso",
      "dulce"
    ],
    "categoria": "especias"
  },
  {
    "id": 18,
    "nombre": "Fenogreco",
    "icono": "🌱",
    "familia": "Fabaceae",
    "origen": "Mediterráneo Oriental",
    "descripcion": "Semillas con perfil de maple y curry.",
    "perfiles": [
      "dulce"
    ],
    "categoria": "especias"
  },
  {
    "id": 19,
    "nombre": "Azafrán en Polvo",
    "icono": "🧡",
    "familia": "Iridaceae",
    "origen": "Irán, Cachemira",
    "descripcion": "La especia más cara del mundo. Perfil floral-metálico con miel.",
    "perfiles": [
      "floral",
      "dulce"
    ],
    "categoria": "especias"
  },
  {
    "id": 20,
    "nombre": "Flor de Caléndula",
    "icono": "🌼",
    "familia": "Asteraceae",
    "origen": "Región Mediterránea",
    "descripcion": "Pétalos dorados. 'Oro de María'. Colorante natural.",
    "perfiles": [
      "floral"
    ],
    "categoria": "flores"
  },
  {
    "id": 21,
    "nombre": "Semillas de Hinojo",
    "icono": "🌱",
    "familia": "Apiaceae",
    "origen": "Cuenca Mediterránea",
    "descripcion": "Semillas con perfil anisado-dulce. Digestivo tradicional.",
    "perfiles": [
      "dulce"
    ],
    "categoria": "especias"
  },
  {
    "id": 22,
    "nombre": "Mejorana",
    "icono": "🌿",
    "familia": "Lamiaceae",
    "origen": "Chipre, Turquía",
    "descripcion": "Prima dulce del orégano. Perfil floral-balsámico.",
    "perfiles": [
      "floral",
      "dulce"
    ],
    "categoria": "hierbas"
  },
  {
    "id": 23,
    "nombre": "Clavo de Olor",
    "icono": "🪵",
    "familia": "Myrtaceae",
    "origen": "Islas Molucas, Indonesia",
    "descripcion": "Botones florales. Perfil intenso, cálido-dulce. Antiséptico.",
    "perfiles": [
      "floral",
      "terroso",
      "dulce"
    ],
    "categoria": "especias"
  },
  {
    "id": 24,
    "nombre": "Pimienta Negra en Grano",
    "icono": "⚫",
    "familia": "Piperaceae",
    "origen": "Costa Malabar, India",
    "descripcion": "'Oro negro'. El rey de las especias. Picante característico.",
    "perfiles": [
      "picante"
    ],
    "categoria": "especias"
  },
  {
    "id": 25,
    "nombre": "Semillas de Sésamo Blanco",
    "icono": "🌱",
    "familia": "Pedaliaceae",
    "origen": "África, India",
    "descripcion": "'Ábrete Sésamo'. Sabor nuez-dulce. Aceites omega-6.",
    "perfiles": [
      "dulce"
    ],
    "categoria": "especias"
  },
  {
    "id": 26,
    "nombre": "Panko",
    "icono": "🌱",
    "familia": "Producto procesado",
    "origen": "Japón",
    "descripcion": "Pan rallado japonés. Textura aireada y crujiente.",
    "perfiles": [
      "terroso"
    ],
    "categoria": "especias"
  },
  {
    "id": 27,
    "nombre": "Orégano",
    "icono": "🌿",
    "familia": "Lamiaceae",
    "origen": "Colinas del Mediterráneo",
    "descripcion": "Hojas con perfil intenso, terroso-picante. 'Alegría de la montaña'.",
    "perfiles": [
      "picante",
      "terroso"
    ],
    "categoria": "hierbas"
  },
  {
    "id": 28,
    "nombre": "Perejil",
    "icono": "🌱",
    "familia": "Apiaceae",
    "origen": "Mediterráneo Central",
    "descripcion": "Hojas herbáceas con notas de anís. Purificador del aliento.",
    "perfiles": [
      "terroso"
    ],
    "categoria": "especias"
  },
  {
    "id": 29,
    "nombre": "Cebolla en Escama",
    "icono": "🌱",
    "familia": "Amaryllidaceae",
    "origen": "Asia Central",
    "descripcion": "Bulbo deshidratado. Dulzor concentrado. Base aromática universal.",
    "perfiles": [
      "terroso"
    ],
    "categoria": "especias"
  },
  {
    "id": 30,
    "nombre": "Tomate Deshidratado",
    "icono": "🌱",
    "familia": "Solanaceae",
    "origen": "América del Sur",
    "descripcion": "Umami intenso. Glutamato natural concentrado.",
    "perfiles": [
      "umami"
    ],
    "categoria": "especias"
  },
  {
    "id": 31,
    "nombre": "Levadura Nutricional",
    "icono": "🌱",
    "familia": "Saccharomyces",
    "origen": "Producción controlada",
    "descripcion": "Sabor umami-queso sin lácteos. Rica en vitaminas B.",
    "perfiles": [
      "umami"
    ],
    "categoria": "especias"
  },
  {
    "id": 32,
    "nombre": "Pistacho Partido",
    "icono": "🌱",
    "familia": "Anacardiaceae",
    "origen": "Irán, Sicilia",
    "descripcion": "Nuez verde esmeralda. Sabor dulce-terroso. 'Nuez sonriente'.",
    "perfiles": [
      "terroso",
      "dulce"
    ],
    "categoria": "especias"
  },
  {
    "id": 33,
    "nombre": "Harina de Vino",
    "icono": "🌱",
    "familia": "Producto artesanal",
    "origen": "Traslasierra, Córdoba",
    "descripcion": "Orujo de Malbec. Polifenoles y antocianos. Sabor tánico.",
    "perfiles": [
      "terroso"
    ],
    "categoria": "especias"
  },
  {
    "id": 34,
    "nombre": "Carbón Activado",
    "icono": "🌱",
    "familia": "Carbono procesado",
    "origen": "Cáscara de coco",
    "descripcion": "Color negro intenso sin alterar sabor. Purificación ancestral.",
    "perfiles": [
      "terroso"
    ],
    "categoria": "especias"
  },
  {
    "id": 35,
    "nombre": "Achiote",
    "icono": "🌱",
    "familia": "Bixaceae",
    "origen": "Amazonía, Centroamérica",
    "descripcion": "Semillas rojas. Colorante y sabor terroso-pimienta. Maya.",
    "perfiles": [
      "picante",
      "terroso"
    ],
    "categoria": "especias"
  },
  {
    "id": 36,
    "nombre": "Pimiento Gochugaru",
    "icono": "🌱",
    "familia": "Solanaceae",
    "origen": "Corea",
    "descripcion": "Chile coreano. Picante moderado con dulzor frutal. Esencial kimchi.",
    "perfiles": [
      "picante"
    ],
    "categoria": "especias"
  },
  {
    "id": 37,
    "nombre": "Pimienta de Sichuan",
    "icono": "⚫",
    "familia": "Rutaceae",
    "origen": "Sichuan, China",
    "descripcion": "Sensación de hormigueo. Cítrica-floral, efecto anestésico.",
    "perfiles": [
      "floral",
      "citrico"
    ],
    "categoria": "especias"
  },
  {
    "id": 38,
    "nombre": "Alga Kombu",
    "icono": "🌱",
    "familia": "Laminariaceae",
    "origen": "Mares de Japón",
    "descripcion": "Umami natural. Base del dashi japonés.",
    "perfiles": [
      "umami"
    ],
    "categoria": "especias"
  },
  {
    "id": 39,
    "nombre": "Mostaza Amarilla",
    "icono": "🌱",
    "familia": "Brassicaceae",
    "origen": "Cuenca Mediterránea",
    "descripcion": "Semillas suaves con picante moderado. Mustum ardens.",
    "perfiles": [
      "picante"
    ],
    "categoria": "especias"
  },
  {
    "id": 40,
    "nombre": "Mostaza Negra",
    "icono": "🌱",
    "familia": "Brassicaceae",
    "origen": "Sur de Asia",
    "descripcion": "Más picante que la amarilla. Esencial en tadka indio.",
    "perfiles": [
      "picante"
    ],
    "categoria": "especias"
  },
  {
    "id": 41,
    "nombre": "Ajedrea",
    "icono": "🌿",
    "familia": "Lamiaceae",
    "origen": "Mediterráneo, Cáucaso",
    "descripcion": "Hierba de los sátiros. Perfil picante-herbáceo.",
    "perfiles": [
      "picante"
    ],
    "categoria": "hierbas"
  },
  {
    "id": 42,
    "nombre": "Estragón",
    "icono": "🌱",
    "familia": "Asteraceae",
    "origen": "Siberia, Asia Central",
    "descripcion": "'Pequeño dragón'. Perfil anisado-licorizado. Finas hierbas.",
    "perfiles": [
      "terroso"
    ],
    "categoria": "especias"
  },
  {
    "id": 43,
    "nombre": "Semillas de Eneldo",
    "icono": "🌱",
    "familia": "Apiaceae",
    "origen": "Mediterráneo Oriental",
    "descripcion": "Perfil anisado-alcanforado. 'Dilla' = calmar.",
    "perfiles": [
      "terroso"
    ],
    "categoria": "especias"
  },
  {
    "id": 44,
    "nombre": "Semillas de Amapola",
    "icono": "🌱",
    "familia": "Papaveraceae",
    "origen": "Mediterráneo Oriental",
    "descripcion": "Semillas con sabor nuez-dulce. Panadería centroeuropea.",
    "perfiles": [
      "dulce"
    ],
    "categoria": "especias"
  },
  {
    "id": 45,
    "nombre": "Flor de Lavanda",
    "icono": "💜",
    "familia": "Lamiaceae",
    "origen": "Provenza, Francia",
    "descripcion": "Flores púrpuras. Perfil floral-alcanforado. 'Lavare'.",
    "perfiles": [
      "floral"
    ],
    "categoria": "flores"
  },
  {
    "id": 46,
    "nombre": "Cáscara de Limón Deshidratada",
    "icono": "🍋",
    "familia": "Rutaceae",
    "origen": "Asia, Mediterráneo",
    "descripcion": "Zeste seco. Perfil cítrico intenso. Contra el escorbuto.",
    "perfiles": [
      "citrico"
    ],
    "categoria": "citricos"
  },
  {
    "id": 47,
    "nombre": "Cáscara de Mandarina Deshidratada",
    "icono": "🍊",
    "familia": "Rutaceae",
    "origen": "China",
    "descripcion": "Chen pi medicinal. Más dulce y floral que limón.",
    "perfiles": [
      "floral",
      "citrico",
      "dulce"
    ],
    "categoria": "citricos"
  },
  {
    "id": 48,
    "nombre": "Limón Marroquí Deshidratado",
    "icono": "🍋",
    "familia": "Rutaceae",
    "origen": "Marruecos",
    "descripcion": "Limones fermentados en sal. Sabor umami-cítrico. Tagines.",
    "perfiles": [
      "citrico",
      "umami"
    ],
    "categoria": "citricos"
  },
  {
    "id": 49,
    "nombre": "Café Tostado",
    "icono": "☕",
    "familia": "Rubiaceae",
    "origen": "Etiopía, Yemen",
    "descripcion": "Perfil amargo-caramelizado. 800+ compuestos aromáticos.",
    "perfiles": [
      "terroso"
    ],
    "categoria": "especias"
  },
  {
    "id": 50,
    "nombre": "Cascarilla de Café",
    "icono": "☕",
    "familia": "Rubiaceae",
    "origen": "Fincas de café",
    "descripcion": "Cascara. Sabor dulce-afrutado con notas de hibisco.",
    "perfiles": [
      "dulce"
    ],
    "categoria": "especias"
  },
  {
    "id": 51,
    "nombre": "Hongos Shiitake (Tallos)",
    "icono": "🌱",
    "familia": "Omphalotaceae",
    "origen": "Japón, China",
    "descripcion": "Umami concentrado. 'Seta del árbol shii'. Nobleza china.",
    "perfiles": [
      "umami"
    ],
    "categoria": "especias"
  },
  {
    "id": 52,
    "nombre": "Merkén Chileno",
    "icono": "🌶️",
    "familia": "Solanaceae",
    "origen": "Araucanía, Chile",
    "descripcion": "Ají ahumado Mapuche. Patrimonio cultural de Chile.",
    "perfiles": [
      "picante",
      "ahumado"
    ],
    "categoria": "ahumados"
  },
  {
    "id": 53,
    "nombre": "Enebro",
    "icono": "🌱",
    "familia": "Cupressaceae",
    "origen": "Hemisferio Norte",
    "descripcion": "Bayas resinosas-pino. Base de la ginebra.",
    "perfiles": [
      "terroso"
    ],
    "categoria": "especias"
  },
  {
    "id": 54,
    "nombre": "Puerro Deshidratado",
    "icono": "🌱",
    "familia": "Amaryllidaceae",
    "origen": "Mediterráneo Oriental",
    "descripcion": "Allium suave. Perfil cebolla-dulce. Símbolo de Gales.",
    "perfiles": [
      "dulce"
    ],
    "categoria": "especias"
  },
  {
    "id": 55,
    "nombre": "Pimienta Blanca en Grano",
    "icono": "⚫",
    "familia": "Piperaceae",
    "origen": "Costa Malabar, India",
    "descripcion": "Pimienta sin cáscara. Más suave y terrosa.",
    "perfiles": [
      "floral",
      "picante",
      "terroso"
    ],
    "categoria": "especias"
  },
  {
    "id": 56,
    "nombre": "Pimienta Verde",
    "icono": "⚫",
    "familia": "Piperaceae",
    "origen": "India, Camboya",
    "descripcion": "Bayas inmaduras. Frescura herbácea. Cocina francesa.",
    "perfiles": [
      "terroso"
    ],
    "categoria": "especias"
  },
  {
    "id": 57,
    "nombre": "Menta",
    "icono": "🌿",
    "familia": "Lamiaceae",
    "origen": "Europa, Asia",
    "descripcion": "Hojas refrescantes. Efecto mentolado. Digestivo.",
    "perfiles": [
      "terroso"
    ],
    "categoria": "hierbas"
  },
  {
    "id": 58,
    "nombre": "Flor de Hibiscus",
    "icono": "🌺",
    "familia": "Malvaceae",
    "origen": "Asia, África",
    "descripcion": "Flores rojas. Sabor ácido-afrutado. Rica en vitamina C.",
    "perfiles": [
      "acido"
    ],
    "categoria": "flores"
  },
  {
    "id": 59,
    "nombre": "Cayena",
    "icono": "🌱",
    "familia": "Solanaceae",
    "origen": "América Central",
    "descripcion": "Chile muy picante. Activa la termogénesis.",
    "perfiles": [
      "picante"
    ],
    "categoria": "especias"
  },
  {
    "id": 60,
    "nombre": "Cacao en Polvo",
    "icono": "🌱",
    "familia": "Malvaceae",
    "origen": "América Central",
    "descripcion": "Alimento de los dioses. Perfil amargo-dulce.",
    "perfiles": [
      "dulce"
    ],
    "categoria": "especias"
  }
];

// Mapeo de perfiles a emojis para display
const PERFIL_ICONS = {
    "terroso": "🌍",
    "floral": "🌸",
    "citrico": "🍋",
    "picante": "🔥",
    "ahumado": "💨",
    "dulce": "🍯",
    "acido": "🍋",
    "neutro": "⚪",
    "umami": "🍄",
    "mineral": "💎"
};
