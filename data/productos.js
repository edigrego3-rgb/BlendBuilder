// productos.js - Catálogo completo Rojo Malbec (46 productos)

const productos = [
    // ═══════════════════════════════════════════════════════════════
    // 🧂 SALES GOURMET (9 productos)
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
        tagline: "La herencia de las cocinas británicas, con alma argentina.",
        descripcion: "Un tributo a la tradición culinaria inglesa reinterpretado con ingredientes locales de primera calidad. Esta sal de hierbas combina el aroma del perejil fresco, el carácter del tomillo y el punto justo de pimienta blanca. Su perfil herbáceo y delicadamente especiado eleva cualquier preparación sin dominarla.",
        ingredientes: "Sal marina, perejil, tomillo, ajo, romero, cebolla, pimienta blanca",
        maridaje: "Pollo asado, pescados al horno, papas rústicas, vegetales grillados"
    },
    {
        id: 3,
        nombre: "Sal de Hierbas Ahumadas",
        categoria: "sales",
        emoji: "🌿",
        tagline: "Donde el fuego se encuentra con el jardín.",
        descripcion: "Una experiencia sensorial que evoca fogones patagónicos y huertos mediterráneos. Este blend armónico une hierbas aromáticas cuidadosamente seleccionadas con notas sutiles de ahumado. Perfecta para quienes buscan agregar profundidad y complejidad a sus platos sin recurrir al picante.",
        ingredientes: "Sal marina, cebolla, puerro, ajo, albahaca, coriandro, tomillo, cebolla de verdeo, ají",
        maridaje: "Cerdo ahumado, vegetales a la parrilla, carnes braseadas"
    },
    {
        id: 4,
        nombre: "Sal de Limón y Chile",
        categoria: "sales",
        emoji: "🍋",
        tagline: "Cítricos del Mediterráneo con el fuego latinoamericano.",
        descripcion: "Un equilibrio magistral entre la frescura vibrante del limón y el calor suave del chile. Esta sal versátil despierta los sabores de mariscos y pescados, transformando preparaciones simples en experiencias gastronómicas memorables. Su intensidad controlada la hace apta para paladares que buscan emoción sin excesos.",
        ingredientes: "Sal marina, cáscara de limón deshidratada, ají, pimentón español, tomate deshidratado, achiote",
        maridaje: "Ceviche, pescados a la plancha, tacos, aguachile"
    },
    {
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
        nombre: "Sal Esvanetian",
        categoria: "sales",
        emoji: "🏔️",
        imagen: "products/sal tipo svanetian.png",
        tagline: "El tesoro oculto del Cáucaso georgiano.",
        descripcion: "Originaria de la región montañosa de Svaneti en Georgia, esta sal ancestral combina hierbas frescas, especias cálidas y flores de calendula con el toque dorado del azafrán. Un blend de tradición milenaria que aporta capas de sabor únicas a cualquier preparación.",
        ingredientes: "Sal marina, ajo, perejil, cilantro, fenogreco, hinojo, tomillo, romero, flor de caléndula, cáscara de limón, azafrán",
        maridaje: "Khachapuri, carnes estofadas, vegetales asados, sompás"
    },
    {
        id: 9,
        nombre: "Sal Vikinga Ahumada",
        categoria: "sales",
        emoji: "⚔️",
        tagline: "El legado de los guerreros nórdicos.",
        descripcion: "Una sal de carácter intenso que evoca los ahumaderos vikingos del norte de Europa. La cúrcuma dorada se funde con el dulzor de la cebolla quemada y el calor de la pimienta negra. Ideal para quienes buscan sabores robustos y ahumados con personalidad.",
        ingredientes: "Sal marina, cúrcuma, cebolla, pimienta negra, cebolla quemada deshidratada",
        maridaje: "Salmón ahumado, carnes asadas, stews, preparaciones nórdicas"
    },

    // ═══════════════════════════════════════════════════════════════
    // 🌶️ BLENDS ESPECIADOS (21 productos)
    // ═══════════════════════════════════════════════════════════════
    // 🌶️ BLENDS DE ESPECIAS (16 productos relevantes para navegación)
    // ═══════════════════════════════════════════════════════════════
    {
        id: 10,
        nombre: "Advieh Persa",
        categoria: "blends",
        emoji: "🌸",
        tagline: "La joya aromática del antiguo Imperio Persa.",
        descripcion: "Un blend ceremonial que ha perfumado las cocinas persas durante milenios. La cúrcuma dorada se une a los cálidos abrazos de la canela y el cardamomo, mientras los pétalos de rosa aportan una elegancia floral incomparable. El azafrán, el oro rojo de Irán, corona esta mezcla majestuosa.",
        ingredientes: "Cúrcuma, coriandro, canela, pétalos de rosas, comino, jengibre, cardamomo, nuez moscada, azafrán",
        maridaje: "Arroz persa (tahdig), cordero, pollo, guisos de legumbres"
    },
    {
        id: 11,
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
        id: 12,
        nombre: "Baharat",
        categoria: "blends",
        emoji: "🌙",
        tagline: "Las mil y una noches en un blend.",
        descripcion: "El 'especias' en árabe, este blend es el corazón de la cocina del Medio Oriente. Capas de pimentón ahumado, canela cálida y cardamomo se entrelazan con el punch de la pimienta negra y verde. El clavo de olor añade el misterio final a esta mezcla aromática indispensable.",
        ingredientes: "Pimentón español, canela, coriandro, nuez moscada, kümmel, cardamomo, comino, pimienta negra, pimienta verde, clavo de olor",
        maridaje: "Shawarma, kafta, arroces, cordero, vegetales rellenos"
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
        nombre: "Criolla Deshidratada",
        categoria: "blends",
        emoji: "🥗",
        tagline: "La base de la cocina argentina en un frasco.",
        descripcion: "Todo el sabor del chimichurri y la salsa criolla, concentrado y listo para usar. Tomate, cebolla crispy y morrón forman la base de este blend que captura la esencia de nuestras tradiciones culinarias. Versátil y práctico, sin perder autenticidad.",
        ingredientes: "Tomate deshidratado, cebolla crispy, morrón rojo, cebolla de verdeo, ají molido, orégano, ajo, estragón",
        maridaje: "Asado, empanadas, provoleta, choripán, carnes a la parrilla"
    },
    {
        id: 15,
        nombre: "Curry Colombo",
        categoria: "blends",
        emoji: "🥥",
        tagline: "El Caribe francés en estado puro.",
        descripcion: "Originario de las Antillas francesas, este curry tropical se diferencia por sus notas frutales y frescas. El sumac aporta acidez, la leche de coco suaviza, y el limón marroquí añade un perfume exótico. Menos picante que sus primos indios, pero igualmente aromático.",
        ingredientes: "Coriandro, cúrcuma, sumac, arroz, leche de coco, comino, ajo, mostaza, fenogreco, limón marroquí, pimienta blanca, ají molido, clavo de olor",
        maridaje: "Pollo, pescados, mariscos, arroz, vegetales tropicales"
    },
    {
        id: 16,
        nombre: "Crocante de Panko, Sésamo y Limón",
        categoria: "blends",
        emoji: "🍞",
        tagline: "Textura y sabor en perfecta armonía.",
        descripcion: "Un topping crujiente que transforma cualquier plato. El panko japonés se combina con la riqueza del sésamo blanco y negro, semillas de amapola y el brillo del limón. Listo para espolvorear y gratinar.",
        ingredientes: "Panko, sésamo blanco, ajo, cebolla, sésamo negro, semillas de amapola, perejil, cáscara de limón, sal marina, pimienta blanca, orégano",
        maridaje: "Pescados, pastas, ensaladas, vegetales gratinados, sushi bowls"
    },
    {
        id: 17,
        nombre: "Khmeli Suneli",
        categoria: "blends",
        emoji: "🌿",
        tagline: "La mezcla sagrada de Georgia.",
        descripcion: "El blend más emblemático de la cocina georgiana, usado en casi todos sus platos tradicionales. Una sinfonía de hierbas secas donde la mejorana, la caléndula y el fenogreco lideran, mientras el azafrán añade su toque dorado. Complejo, aromático e insustituible.",
        ingredientes: "Mejorana, flor de caléndula, ajedrea, albahaca, coriandro, sésamo, semillas de eneldo, fenogreco, estragón, laurel, hinojo, azafrán",
        maridaje: "Satsivi, lobio, sopas georgianas, guisos, pollo"
    },
    {
        id: 18,
        nombre: "Muddica Atturrata",
        categoria: "blends",
        emoji: "🇮🇹",
        tagline: "La tradición siciliana crujiente.",
        descripcion: "Pan rallado tostado en aceite de oliva según la receta de las nonnas sicilianas. Este condimento humilde pero delicioso se usa para 'vestir' las pastas cuando el queso no alcanza. Crujiente, dorado, perfumado con ajo y perejil.",
        ingredientes: "Panko, aceite de oliva, ajo, cayena, perejil, sal marina",
        maridaje: "Pasta con sardinas, pasta con brócoli, verduras gratinadas, pescados al horno"
    },
    {
        id: 19,
        nombre: "Nanami Tōgarashi",
        categoria: "blends",
        emoji: "🇯🇵",
        tagline: "Los siete sabores de Japón.",
        descripcion: "Una variante premium del clásico shichimi togarashi. El picante del gochigaru coreano y el ají se equilibran con sésamo dual, cítricos de mandarina, la estimulante pimienta de Sichuan y el umami del alga kombu. Adictivo y versátil.",
        ingredientes: "Pimiento gochigaru, ají molido, sésamo blanco, cáscara de mandarina, sésamo negro, jengibre, pimienta de Sichuan, semillas de amapola, alga kombu",
        maridaje: "Ramen, udon, arroz, gyozas, tempura, aguacate"
    },
    {
        id: 20,
        nombre: "Panch Phoron",
        categoria: "blends",
        emoji: "🌱",
        tagline: "Las cinco joyas de Bengala.",
        descripcion: "El blend emblema de la cocina bengalí y del este de India. Cinco semillas enteras en proporciones iguales: fenogreco amargo, hinojo dulce, comino negro misterioso, comino terroso y mostaza punzante. Se tuesta en aceite caliente para liberar su magia aromática.",
        ingredientes: "Fenogreco, semillas de hinojo, comino negro, comino, mostaza negra",
        maridaje: "Dal, vegetales, pescados bengalíes, pickles, panes"
    },
    {
        id: 21,
        nombre: "Pesto Siciliano con Pistacho",
        categoria: "blends",
        emoji: "🥜",
        tagline: "El verde esmeralda de Bronte.",
        descripcion: "Una versión seca del legendario pesto alla trapanese siciliano. El pistacho partido protagoniza junto al tomate deshidratado y la albahaca. Levadura nutricional aporta el toque umami que normalmente da el queso. Listo para rehidratar con aceite de oliva.",
        ingredientes: "Pistacho, tomate deshidratado, levadura nutricional, albahaca, sal marina, perejil, cebolla, pimienta blanca, cayena, cáscara de limón, hinojo",
        maridaje: "Pastas, focaccia, pescados, bruschetta, risotto"
    },
    {
        id: 22,
        nombre: "Blend Pescados y Mariscos",
        categoria: "blends",
        emoji: "🐟",
        tagline: "El abrazo del Mediterráneo.",
        descripcion: "Diseñado específicamente para realzar los frutos del mar sin enmascararlos. Cítricos vibrantes, hierbas frescas y un toque de pimentón crean el acompañamiento perfecto para pescados delicados y mariscos intensos por igual.",
        ingredientes: "Pimentón nacional, cáscara de limón, perejil, ajo, puerro, semillas de eneldo, estragón, tomillo, pimienta negra, sal marina",
        maridaje: "Merluza, salmón, camarones, calamares, mariscos a la plancha"
    },
    {
        id: 23,
        nombre: "Tandoori Masala",
        categoria: "blends",
        emoji: "🔶",
        tagline: "El fuego sagrado de los hornos de arcilla.",
        descripcion: "El blend que da vida al legendario pollo tandoori. Coriandro, comino y cardamomo forman la base, mientras la cúrcuma aporta su color característico y el jengibre su frescura picante. Perfecto para marinadas que transforman cualquier proteína.",
        ingredientes: "Coriandro, pimentón, ajo, comino, jengibre, cebolla, cúrcuma, fenogreco, sal marina, apio, pimienta negra, azúcar mascabo, cardamomo, ajedrea, laurel, clavo de olor",
        maridaje: "Pollo, cordero, vegetales, paneer, naan"
    },
    {
        id: 24,
        nombre: "Za'atar",
        categoria: "blends",
        emoji: "🫓",
        tagline: "El perfume del Levante.",
        descripcion: "El condimento más antiguo del mundo, mencionado en textos bíblicos. Esta mezcla levantina combina el sumac ácido, el sésamo tostado y un trío de hierbas mediterráneas. Un sabor que define a todo Medio Oriente.",
        ingredientes: "Sumac, sésamo blanco, tomillo, mejorana, orégano, sal marina",
        maridaje: "Hummus, labneh, pita, huevos, ensaladas, aceite de oliva"
    },
    {
        id: 25,
        nombre: "Blend Burger",
        categoria: "blends",
        emoji: "🍔",
        tagline: "El secreto de la hamburguesa perfecta.",
        descripcion: "Un condimento funcional creado para despertar en contacto con la grasa caliente. La acidez del pepino deshidratado, el punch de la mostaza y el humo sutil crean el perfil 'pickle' que toda burger necesita. Diseñado para smash burgers y beyond.",
        ingredientes: "Cebolla, pimentón, pepino en polvo, mostaza, sal tipo British, ajo, pimienta larga, apio, humo en polvo",
        maridaje: "Hamburguesas, cerdo, papas fritas, sándwiches"
    },
    {
        id: 26,
        nombre: "Sloopy Joe",
        categoria: "blends",
        emoji: "🍔",
        tagline: "El clásico americano hecho polvo mágico",
        descripcion: "Una 'salsa deshidratada' donde la harina de arroz garantiza que la salsa no se separe del pan.",
        ingredientes: "Pimentón, cebolla, pimiento verde, mascabo, mostaza, ajo, pimentón ahumado, harina de arroz, apio, cayena, ácido cítrico, clavo de olor",
        maridaje: "Sandwiches, hot dogs, carnes desmenuzadas"
    },
    {
        id: 27,
        nombre: "Dip Ranch",
        categoria: "blends",
        emoji: "🥗",
        tagline: "Perfil Ranch sin aditivos químicos",
        descripcion: "El auténtico perfil Ranch sin aditivos. El buttermilk proporciona acidez láctica, la harina de arroz controla viscosidad.",
        ingredientes: "Suero de manteca, sal marina, ajo, cebolla, perejil, eneldo, harina de arroz, cebolla de verdeo, mostaza, pimienta negra, ácido cítrico",
        maridaje: "Vegetales crudos, alitas de pollo, papas fritas, ensaladas"
    },
    {
        id: 28,
        nombre: "Blend Bosque y Brasas",
        categoria: "blends",
        emoji: "🌲",
        tagline: "Montreal Steak elevado",
        descripcion: "El enebro aporta la resina del bosque y el cacao la profundidad terrosa, creando un umami oscuro ideal para carnes rojas.",
        ingredientes: "Pimienta negra, sal marina, coriandro, ajo, mostaza, pimentón, cebolla, enebro, nibs de cacao, eneldo, ají",
        maridaje: "Ojo de bife, picaña, ciervo, jabalí, portobellos asados"
    },
    {
        id: 29,
        nombre: "Blend Kebab & Dip",
        categoria: "blends",
        emoji: "🥙",
        tagline: "Marinado y dip en uno",
        descripcion: "Formulado para actuar como condimento de marinado o como base instantánea para dips lácteos.",
        ingredientes: "Ajo, menta, perejil, comino, cebolla, pimienta negra, limón, sumac, sal marina",
        maridaje: "Kebabs, cordero, pollo, yogurt griego, pan pita"
    },
    {
        id: 30,
        nombre: "Jerk Jamaica",
        categoria: "blends",
        emoji: "🇯🇲",
        tagline: "El blend seco del Caribe",
        descripcion: "El blend seco que se comporta como el tradicional húmedo. El aroma predominante es Allspice y Lima.",
        ingredientes: "Sal marina, ajo, cebolla, mascabo, tomillo, cayena, pimienta negra, jengibre, limón, canela, nuez moscada, ácido cítrico, comino, clavo de olor, pimienta de Jamaica",
        maridaje: "Pollo, cerdo, mariscos, vegetales al grill"
    },

    // ═══════════════════════════════════════════════════════════════
    // 💚 LÍNEA VITAL - 0% SODIO (7 productos)
    // ═══════════════════════════════════════════════════════════════
    {
        id: 31,
        nombre: "Vital Caldo",
        categoria: "vital",
        emoji: "🍵",
        tagline: "Base umami 0% sodio",
        descripcion: "El poder saborizante del umami sin una pizca de sodio. La sinergia de hongos shiitake y hongos de pino genera un poder saborizante +40% superior a un caldo tradicional.",
        ingredientes: "Levadura nutricional, hongos shiitake, hongos de pino, cebolla, ajo, apio, perejil",
        maridaje: "Arroces, guisos, sopas, vegetales al vapor",
        sinSodio: true
    },
    {
        id: 32,
        nombre: "Vital Italia",
        categoria: "vital",
        emoji: "🇮🇹",
        tagline: "Umami mediterráneo sin sal",
        descripcion: "Perfecto para la cocina italiana donde el sabor de hongos y tomate se potencian mutuamente.",
        ingredientes: "Levadura nutricional, shiitake, hongos de pino, tomate deshidratado, albahaca, orégano, ajo",
        maridaje: "Pastas, risottos, pizzas, focaccia",
        sinSodio: true
    },
    {
        id: 33,
        nombre: "Vital India",
        categoria: "vital",
        emoji: "🇮🇳",
        tagline: "Curry sin sal",
        descripcion: "La cúrcuma y el hongo de pino se potencian mutuamente en color y profundidad umami.",
        ingredientes: "Levadura nutricional, shiitake, hongos de pino, cúrcuma, jengibre, coriandro, canela",
        maridaje: "Currys, salteados de vegetales, platos con leche de coco",
        sinSodio: true
    },
    {
        id: 34,
        nombre: "Vital Parrilera",
        categoria: "vital",
        emoji: "🥩",
        tagline: "Potenciador parrillero sin sodio",
        descripcion: "Al introducir puerro y coriandro, el sabor del shiitake no se pierde sino que se proyecta. La nota ahumada es el hilo conductor.",
        ingredientes: "Levadura nutricional, pimentón ahumado, shiitake, hongos de pino, puerro, ají, mascabo, comino, pimienta verde, coriandro",
        maridaje: "Carnes rojas, tofu, hongos frescos a la plancha",
        sinSodio: true
    },
    {
        id: 35,
        nombre: "Vital Criollo",
        categoria: "vital",
        emoji: "🇦🇷",
        tagline: "Sazonador criollo de vanguardia",
        descripcion: "La molienda diferencial crea una base invisible que funde en el alimento mientras las escamas de verdeo aportan estética artesanal.",
        ingredientes: "Levadura nutricional, shiitake, ají, cebolla de verdeo, pimentón, laurel, ñaco, pimienta verde",
        maridaje: "Carnes, cerdo, pollo, empanadas, guisos, vegetales",
        sinSodio: true
    },
    {
        id: 36,
        nombre: "Vital Citrus",
        categoria: "vital",
        emoji: "🍋",
        tagline: "Lemon Pepper sin sodio",
        descripcion: "La clave es el Sumac como puente de acidez y la Pimienta Verde como brillo aromático.",
        ingredientes: "Levadura nutricional, shiitake, limón deshidratado, sumac, tomillo, pimienta verde",
        maridaje: "Pescados, aves, vegetales al vapor, ensaladas",
        sinSodio: true
    },
    {
        id: 37,
        nombre: "Vital Tipo Queso",
        categoria: "vital",
        emoji: "🧀",
        tagline: "Perfil parmesano sin sodio",
        descripcion: "Mimetismo sensorial >95% sin sodio. Replica la experiencia del parmesano rallado para mantecaturas y gratinados.",
        ingredientes: "Levadura nutricional, shiitake, hongos de pino, mostaza, leche en polvo, sésamo tostado, cúrcuma, ácido láctico",
        maridaje: "Risottos, polentas, Cacio e Pepe, gratinados",
        sinSodio: true
    },

    // ═══════════════════════════════════════════════════════════════
    // 🌶️ PIMIENTAS DE AUTOR (3 productos)
    // ═══════════════════════════════════════════════════════════════
    {
        id: 38,
        nombre: "Pimienta Negra de Autor",
        categoria: "pimientas",
        emoji: "🖤",
        tagline: "Tierra – sal – humo",
        descripcion: "Inspirada en la cocina francesa clásica y la tradición persa-magrebí. La pimienta larga aporta dulzor especiado, el limón marroquí suma umami salino.",
        ingredientes: "Pimienta negra, pimienta larga, pimienta de Jamaica, limón marroquí, cardamomo negro, comino negro",
        maridaje: "Carnes rojas grasas, ojo de bife, entraña, cordero, estofados, ragú, hongos, quesos estacionados"
    },
    {
        id: 39,
        nombre: "Pimienta Roja y Pimienta Larga",
        categoria: "pimientas",
        emoji: "❤️",
        tagline: "Fuego suave y dulzura especiada",
        descripcion: "Un encuentro entre el fuego suave de la pimienta roja y la dulzura especiada de la pimienta larga, con notas frutales y florales.",
        ingredientes: "Pimienta roja, pimienta larga, mandarina, nibs de cacao, rosa mosqueta",
        maridaje: "Cerdo, pato, postres de chocolate, frutas asadas, quesos cremosos"
    },
    {
        id: 40,
        nombre: "Pimienta Verde de Autor",
        categoria: "pimientas",
        emoji: "💚",
        tagline: "Perfil seco, adulto y botánico",
        descripcion: "La naranja amarga ancla el aroma llevando al territorio del bosque europeo y el gin clásico.",
        ingredientes: "Pimienta verde, pimienta blanca, enebro, pimienta de sichuan, hinojo, naranja amarga",
        maridaje: "Pescados grasos (trucha, salmón), aves, ensaladas amargas, Gin Tonic, hongos"
    },

    // ═══════════════════════════════════════════════════════════════
    // 🍹 BASES PARA MOCKTAILS (3 productos)
    // ═══════════════════════════════════════════════════════════════
    {
        id: 41,
        nombre: "Mocktail Floral Hibiscus",
        categoria: "mocktails",
        emoji: "🌺",
        tagline: "Base para Ruby Lotus",
        descripcion: "El hibiscus es visualmente dominante con un perfil floral intenso y color rubí natural.",
        ingredientes: "Flor de hibiscus, pétalos de rosas, pomelo glaseado, jengibre, lemon grass",
        maridaje: "Sirope para mocktails, soda, agua tónica, cócteles sin alcohol"
    },
    {
        id: 42,
        nombre: "Mocktail Dorado Especiado",
        categoria: "mocktails",
        emoji: "🍎",
        tagline: "Inspirado en Apple Pie",
        descripcion: "Manzana deshidratada con especias cálidas y flor de saúco para un perfil otoñal reconfortante.",
        ingredientes: "Manzana deshidratada, naranja, canela, cardamomo, flor de saúco",
        maridaje: "Hot Toddy, cidra caliente, postres, infusiones"
    },
    {
        id: 43,
        nombre: "Mocktail Aperitivo Botánico",
        categoria: "mocktails",
        emoji: "🍊",
        tagline: "Inspirado en los amari europeos",
        descripcion: "Un puente hacia la coctelería adulta sin alcohol. Tridente cítrico con raíz amarga.",
        ingredientes: "Naranja amarga, naranja, pomelo glaseado, coriandro, enebro, genciana",
        maridaje: "Spritz sin alcohol, agua tónica, vermut, aperitivos"
    },

    // ═══════════════════════════════════════════════════════════════
    // 🍵 TÉS DE AUTOR (3 productos)
    // ═══════════════════════════════════════════════════════════════
    {
        id: 44,
        nombre: "Rooibos Ámbar Africano",
        categoria: "tes",
        emoji: "☀️",
        tagline: "Equilibrio dulce y especiado",
        descripcion: "El picor del jengibre se convierte en nota de fondo que calienta el paladar. Color rojizo brillante, sin cafeína.",
        ingredientes: "Rooibos, rosa mosqueta, jengibre glaseado, miel en polvo, naranja, pétalos de rosas",
        maridaje: "Caliente o frío (Ice Tea), postres, desayuno"
    },
    {
        id: 45,
        nombre: "Té Karak",
        categoria: "tes",
        emoji: "☕",
        tagline: "La joya del Golfo Pérsico",
        descripcion: "'Karak' significa 'fuerte' en referencia a su intensidad especiada. El azafrán aporta el color dorado que diferencia un té callejero de uno premium.",
        ingredientes: "Té negro premium, cardamomo, canela, clavo de olor, azafrán en hebras",
        maridaje: "Con leche evaporada y azúcar, tradición árabe"
    },
    {
        id: 46,
        nombre: "Té Pu-Erh Rojo Malbec",
        categoria: "tes",
        emoji: "🍷",
        tagline: "Té de guarda con alma de vino",
        descripcion: "El Pu-erh es un té 'vivo' que absorbe aromas externos. Color caoba profundo con destellos rubí.",
        ingredientes: "Té Pu-erh rojo, naranja, jengibre glaseado, canela, flor de caléndula",
        maridaje: "Digestivo, chocolates amargos, quesos añejos"
    }
];

// Categorías con sus detalles
const categorias = {
    sales: { nombre: "Sales Gourmet", icono: "🧂", color: "#f5f5f5" },
    blends: { nombre: "Blends de Especias", icono: "🌶️", color: "#fff3e0" },
    vital: { nombre: "Línea Vital (0% Sodio)", icono: "💚", color: "#e8f5e9" },
    pimientas: { nombre: "Pimientas de Autor", icono: "🌶️", color: "#ffebee" },
    mocktails: { nombre: "Bases Mocktails", icono: "🍹", color: "#e3f2fd" },
    tes: { nombre: "Tés de Autor", icono: "🍵", color: "#fce4ec" }
};
