// productos.js - Catálogo Rojo Malbec (19 productos seleccionados)

const productos = [
    // ═══════════════════════════════════════════════════════════════
    // 🧂 SALES GOURMET (7 productos)
    // ═══════════════════════════════════════════════════════════════
    {
        id: 1,
        nombre: "Sal al Malbec",
        categoria: "sales",
        emoji: "🍷",
        imagen: "products/sal al malbec.jpg",
        tagline: "El alma de Mendoza en cada cristal",
        descripcion: "Esta sal única nace de la fusión entre el mar y la vid. Elaborada artesanalmente con sal marina y auténtico vino Malbec de la región cuyana, cada grano captura la esencia terrosa y frutal de nuestros viñedos. Su característico tono violáceo y su perfil sensorial equilibrado la convierten en el toque final perfecto para carnes rojas, quesos estacionados y risottos.",
        ingredientes: "Sal marina, vino Malbec",
        maridaje: "Bife de chorizo, tabla de quesos, carpaccio de carne"
    },
    {
        id: 2,
        nombre: "Sal British",
        categoria: "sales",
        emoji: "🇬🇧",
        imagen: "products/Sal British.png",
        tagline: "La herencia de las cocinas británicas, con alma argentina.",
        descripcion: "Un tributo a la tradición culinaria inglesa reinterpretado con ingredientes locales de primera calidad. Esta sal de hierbas combina el aroma del perejil fresco, el carácter del tomillo y el punto justo de pimienta blanca. Su perfil herbáceo y delicadamente especiado eleva cualquier preparación sin dominarla.",
        ingredientes: "Sal marina, perejil, tomillo, ajo, romero, cebolla, pimienta blanca",
        maridaje: "Pollo asado, pescados al horno, papas rústicas, vegetales grillados"
    },
    {
        id: 3,
        nombre: "Sal de Limón y Chile",
        categoria: "sales",
        emoji: "🍋",
        imagen: "products/Sal de limon y chile.png",
        tagline: "Cítricos del Mediterráneo con el fuego latinoamericano.",
        descripcion: "Un equilibrio magistral entre la frescura vibrante del limón y el calor suave del chile. Esta sal versátil despierta los sabores de mariscos y pescados, transformando preparaciones simples en experiencias gastronómicas memorables. Su intensidad controlada la hace apta para paladares que buscan emoción sin excesos.",
        ingredientes: "Sal marina, cáscara de limón deshidratada, ají, pimentón español, tomate deshidratado, achiote",
        maridaje: "Ceviche, pescados a la plancha, tacos, aguachile"
    },
    {
        id: 4,
        nombre: "Sal de Rosas y Romero",
        categoria: "sales",
        emoji: "🌹",
        imagen: "products/sal marina de rosas y romero.jpg",
        tagline: "Romance aromático en estado puro.",
        descripcion: "Una creación poética que fusiona la elegancia floral de los pétalos de rosa con el carácter resinoso del romero mediterráneo. El toque de pimienta roja aporta una calidez sutil que realza las notas florales. Ideal para quienes buscan sofisticación en cada bocado.",
        ingredientes: "Sal marina, pétalos de rosas, romero, pimienta roja",
        maridaje: "Cordero, ensaladas gourmet, quesos de cabra, postres con frutas rojas"
    },
    {
        id: 5,
        nombre: "Sal del Desierto",
        categoria: "sales",
        emoji: "🏜️",
        imagen: "products/sal_del_desierto.png",
        tagline: "Los secretos del Medio Oriente en tu cocina.",
        descripcion: "Inspirada en las rutas de las especias que cruzaban los desiertos antiguos, esta sal exótica combina el ácido frutal del sumac con la intensidad aromática de la pimienta larga y el misterio ahumado del cardamomo negro. Una experiencia sensorial que transporta a tierras lejanas.",
        ingredientes: "Sal marina, sumac, pimienta larga, cardamomo negro",
        maridaje: "Kebabs, hummus, carnes de caza, preparaciones árabes"
    },
    {
        id: 6,
        nombre: "Sal Negra Tipo Hawaiana",
        categoria: "sales",
        emoji: "🖤",
        imagen: "products/sal-negra-hawaiana.png",
        tagline: "Dramatismo visual, sutileza en el paladar.",
        descripcion: "Inspirada en las sales volcánicas del Pacífico, esta versión artesanal combina el negro profundo del carbón activado con notas vinosas de nuestra harina de vino Malbec. Su color impactante contrasta con su sabor delicado, perfecto para dar el toque final visual y gustativo a tus platos.",
        ingredientes: "Sal marina, pimienta larga, carbón activado, harina de vino",
        maridaje: "Sushi, aguacate, huevos benedictinos, carnes premium"
    },
    {
        id: 7,
        nombre: "Sal Esvanetian",
        categoria: "sales",
        emoji: "🏔️",
        imagen: "products/sal tipo svanetian.png",
        tagline: "El tesoro oculto del Cáucaso georgiano.",
        descripcion: "Originaria de la región montañosa de Svaneti en Georgia, esta sal ancestral combina hierbas frescas, especias cálidas y flores de calendula con el toque dorado del azafrán. Un blend de tradición milenaria que aporta capas de sabor únicas a cualquier preparación.",
        ingredientes: "Sal marina, ajo, perejil, cilantro, fenogreco, hinojo, tomillo, romero, flor de caléndula, cáscara de limón, azafrán",
        maridaje: "Khachapuri, carnes estofadas, vegetales asados, sompás"
    },

    // ═══════════════════════════════════════════════════════════════
    // 🌶️ BLENDS DE ESPECIAS (10 productos)
    // ═══════════════════════════════════════════════════════════════
    {
        id: 8,
        nombre: "España Profunda",
        categoria: "blends",
        emoji: "🥘",
        imagen: "products/españa.png",
        tagline: "El alma de la auténtica paella.",
        descripcion: "Capturá el secreto de los maestros arroceros españoles. Un blend de molienda ultra-fina donde la nobleza pura del azafrán y el dulzor del pimiento se encuentran con una sutil esencia de mar. El sabor y el color inconfundible de la cocina tradicional de Valencia.",
        ingredientes: "Pimentón, azafrán, ajo, cebolla, perejil, tomillo, pimienta blanca",
        maridaje: "Paellas, arroces caldosos, cazuelas de mariscos, pescados a la plancha"
    },
    {
        id: 9,
        nombre: "Curry Colombo",
        categoria: "blends",
        emoji: "🥥",
        imagen: "products/Curri Colombo.jpg",
        tagline: "El Caribe francés en estado puro.",
        descripcion: "Originario de las Antillas francesas, este curry tropical se diferencia por sus notas frutales y frescas. El sumac aporta acidez, la leche de coco suaviza, y el limón marroquí añade un perfume exótico. Menos picante que sus primos indios, pero igualmente aromático.",
        ingredientes: "Coriandro, cúrcuma, sumac, arroz, leche de coco, comino, ajo, mostaza, fenogreco, limón marroquí, pimienta blanca, ají molido, clavo de olor",
        maridaje: "Pollo, pescados, mariscos, arroz, vegetales tropicales"
    },
    {
        id: 10,
        nombre: "Sloppy Joe",
        categoria: "blends",
        emoji: "🍔",
        imagen: "products/sloppy_joe_v2.png",
        tagline: "El clásico americano hecho polvo mágico.",
        descripcion: "Un bocado de New Orleans en tu cocina. Una 'salsa deshidratada' donde la harina de arroz garantiza que la salsa no se separe del pan. El secreto para que esa carne picada entre panes tenga el sabor intenso, dulce y ahumado del sur de Estados Unidos.",
        ingredientes: "Pimentón, cebolla, pimiento verde, mascabo, mostaza, ajo, pimentón ahumado, harina de arroz, apio, cayena, ácido cítrico, clavo de olor",
        maridaje: "Sandwiches, hot dogs, carnes desmenuzadas, hamburguesas"
    },
    {
        id: 11,
        nombre: "Mole Mexicano",
        categoria: "blends",
        emoji: "🍫",
        imagen: "products/Mole Mexicano.png",
        tagline: "Alquimia prehispánica en tu cocina.",
        descripcion: "Un homenaje a la cocina prehispánica. Este blend fusiona el calor ahumado de los chiles secos, la profundidad oscura del cacao, especias cálidas como canela y clavo, y un toque terroso de semillas tostadas. Un perfil oscuro, aterciopelado y de picor amable.",
        ingredientes: "Chiles secos, cacao, canela, clavo de olor, semillas tostadas, pimienta negra",
        maridaje: "Pollo asado, guisos de cerdo, enchiladas, arroces intensos"
    },
    {
        id: 12,
        nombre: "Za'atar",
        categoria: "blends",
        emoji: "🫓",
        imagen: "products/zaatar_rojo_malbec.png",
        tagline: "El perfume del Levante.",
        descripcion: "El condimento más antiguo del mundo, mencionado en textos bíblicos. Esta mezcla levantina combina el sumac ácido, el sésamo tostado y un trío de hierbas mediterráneas. Un sabor que define a todo Medio Oriente.",
        ingredientes: "Sumac, sésamo blanco, tomillo, mejorana, orégano, sal marina",
        maridaje: "Hummus, labneh, pita, huevos, ensaladas, aceite de oliva"
    },
    {
        id: 13,
        nombre: "BBQ Rojo Malbec",
        categoria: "blends",
        emoji: "🔥",
        imagen: "products/barbacoa rub.png",
        tagline: "El arte del asado, perfeccionado.",
        descripcion: "Un homenaje a la cultura del fuego y el humo. Este BBQ rub de autor combina la profundidad del pimentón ahumado con la umami de los hongos shiitake, el dulce del mascabo y notas tostadas de café. Capas de especias se revelan lentamente durante la cocción, creando cortezas caramelizadas perfectas.",
        ingredientes: "Tomate deshidratado, pimentón ahumado, ajo, cebolla, azúcar mascabo, hongos shiitake, sal marina, levadura nutricional, café tostado, canela, pimienta blanca, cayena, merkén, jengibre, enebro, coriandro, apio, laurel, mejorana",
        maridaje: "Costillas, brisket, pulled pork, alitas de pollo, vegetales ahumados"
    },
    {
        id: 14,
        nombre: "Nanami Tōgarashi",
        categoria: "blends",
        emoji: "🇯🇵",
        imagen: "products/nanami torigashi final.jpg",
        tagline: "Los siete sabores de Japón.",
        descripcion: "Una variante premium del clásico shichimi togarashi. El picante del gochigaru coreano y el ají se equilibran con sésamo dual, cítricos de mandarina, la estimulante pimienta de Sichuan y el umami del alga kombu. Adictivo y versátil.",
        ingredientes: "Pimiento gochigaru, ají molido, sésamo blanco, cáscara de mandarina, sésamo negro, jengibre, pimienta de Sichuan, semillas de amapola, alga kombu",
        maridaje: "Ramen, udon, arroz, gyozas, tempura, aguacate"
    },
    {
        id: 15,
        nombre: "Panch Phoron",
        categoria: "blends",
        emoji: "🌱",
        imagen: "products/panch phoron.png",
        tagline: "Las cinco joyas de Bengala.",
        descripcion: "El blend emblema de la cocina bengalí y del este de India. Cinco semillas enteras en proporciones iguales: fenogreco amargo, hinojo dulce, comino negro misterioso, comino terroso y mostaza punzante. Se tuesta en aceite caliente para liberar su magia aromática.",
        ingredientes: "Fenogreco, semillas de hinojo, comino negro, comino, mostaza negra",
        maridaje: "Dal, vegetales, pescados bengalíes, pickles, panes"
    },
    {
        id: 16,
        nombre: "Ajo a las Hierbas Gourmet",
        categoria: "blends",
        emoji: "🧄",
        imagen: "products/ajo a las hierbas.png",
        tagline: "Ajo elevado a la máxima expresión.",
        descripcion: "Para los verdaderos amantes del ajo. Una base generosa de ajo granulado se enriquece con un ramillete de hierbas mediterráneas y provenzales. Notas sutiles de hinojo, lavanda y limón aportan complejidad, mientras el mascabo agrega un toque de dulzura terrosa.",
        ingredientes: "Ajo, hinojo, romero, tomillo, albahaca, mejorana, estragón, cebolla, cáscara de limón, azúcar mascabo, pimienta negra, semillas de apio, flor de lavanda",
        maridaje: "Pan de ajo, pastas, carnes, mantecas saborizadas, vegetales asados"
    },
    {
        id: 17,
        nombre: "Glühwein",
        categoria: "blends",
        emoji: "🍷",
        imagen: "products/gluhwein.png",
        tagline: "El espíritu de los mercados de invierno europeos.",
        descripcion: "Un blend reconfortante y festivo que combina la calidez rústica de la canela y el clavo de olor, la elegancia del anís estrellado, toques de cardamomo y la frescura dulce de cáscaras de cítricos deshidratadas. Llena el ambiente con un perfume mágico y envuelve el paladar con un calor reconfortante.",
        ingredientes: "Canela, clavo de olor, anís estrellado, cardamomo, cáscaras de cítricos deshidratadas, jengibre",
        maridaje: "Vino caliente (Malbec joven), sidra caliente, jugo de manzana especiado"
    },

    // ═══════════════════════════════════════════════════════════════
    // 💚 LÍNEA VITAL - 0% SODIO (1 producto)
    // ═══════════════════════════════════════════════════════════════
    {
        id: 18,
        nombre: "Vital Caldo",
        categoria: "vital",
        emoji: "🍵",
        imagen: "products/vital_caldo_v2.png",
        tagline: "Base umami 0% sodio",
        descripcion: "El poder saborizante del umami sin una pizca de sodio. La sinergia de hongos shiitake y hongos de pino genera un poder saborizante +40% superior a un caldo tradicional.",
        ingredientes: "Levadura nutricional, hongos shiitake, hongos de pino, cebolla, ajo, apio, perejil",
        maridaje: "Arroces, guisos, sopas, vegetales al vapor",
        sinSodio: true
    },

    // ═══════════════════════════════════════════════════════════════
    // 🌶️ PIMIENTAS DE AUTOR (1 producto)
    // ═══════════════════════════════════════════════════════════════
    {
        id: 19,
        nombre: "Pimienta Roja y Pimienta Larga",
        categoria: "pimientas",
        emoji: "❤️",
        imagen: "products/pimienta_roja_v2.png",
        tagline: "Fuego suave y dulzura especiada",
        descripcion: "Un encuentro entre el fuego suave de la pimienta roja y la dulzura especiada de la pimienta larga, con notas frutales y florales. La mandarina y el cacao aportan un perfil complejo de calor frutal, cítricos y notas de chocolate amargo.",
        ingredientes: "Pimienta roja, pimienta larga, mandarina, nibs de cacao, rosa mosqueta",
        maridaje: "Cerdo, pato, postres de chocolate, frutas asadas, quesos cremosos"
    }
];

// Categorías con sus detalles
const categorias = {
    sales: { nombre: "Sales Gourmet", icono: "🧂", color: "#f5f5f5" },
    blends: { nombre: "Blends de Especias", icono: "🌶️", color: "#fff3e0" },
    vital: { nombre: "Línea Vital (0% Sodio)", icono: "💚", color: "#e8f5e9" },
    pimientas: { nombre: "Pimientas de Autor", icono: "🌶️", color: "#ffebee" }
};
