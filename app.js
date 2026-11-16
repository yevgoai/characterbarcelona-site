'use strict';
// Business contacts verified in Altegio.
const CONTACT = { altegio: 'https://character.altegio.me/', whatsapp: '+34697154297', phone: '+34697154297' };
const translations = {
  "ru": {
    "photoNote": "Фон, пеньюары и посадка адаптированы. Оригиналы — по нажатию на фото.",
    "roomTitle": "Пространство Character.",
    "viewPortfolio": "Смотреть работы",
    "skip": "К содержимому",
    "services": "Услуги",
    "works": "Работы",
    "team": "Мастера",
    "contact": "Контакты",
    "book": "Записаться",
    "bookVisit": "Записаться на визит",
    "heroOne": "Время проходит.",
    "heroTwo": "Обстоятельства меняются.",
    "heroDescription": "Барбершоп в Sant Gervasi, Барселона. Стрижём, делаем фейды и приводим в порядок бороды — спокойно и без спешки.",
    "explore": "Смотреть дальше",
    "heroPhoto": "Внимание. Мастерство. Character.",
    "servicesKicker": "Услуги",
    "servicesTitle": "Мужские стрижки.<br>Уход за бородой.",
    "servicesIntro": "Классика, фейд или длинные волосы — подскажем, что подойдёт именно вам.",
    "pricesNote": "Цены и свободное время видно сразу при записи.",
    "haircut": "Мужская стрижка",
    "haircutText": "Консультация, мытьё головы, стрижка и укладка.",
    "beard": "Стрижка бороды",
    "beardText": "Стрижка, моделирование бороды, бритьё и уход с горячим полотенцем.",
    "combo": "Стрижка и борода",
    "comboText": "Стрижка, моделирование бороды и бритьё за один визит.",
    "choose": "Выбрать",
    "worksKicker": "Наши работы",
    "worksTitle": "Что мы делаем<br>каждый день.",
    "moreWorks": "Больше в Instagram",
    "galleryHint": "Продолжай прокрутку",
    "gallerySwipe": "Нажмите на фото, чтобы открыть крупнее",
    "teamKicker": "Команда",
    "teamTitle": "Знакомьтесь,<br>это мы.",
    "teamIntro": "Нас четверо, и все мы говорим по-русски, так что объяснить, какую стрижку хочется, будет просто. Выбирайте мастера — или доверьтесь любому из нас.",
    "zhenya": "Евгений",
    "anastasiia": "Анастасия",
    "vova": "Вова",
    "contactKicker": "Контакты",
    "contactTitle": "Ждём вас<br>в гости.",
    "address": "Адрес",
    "findUs": "Как нас найти.",
    "directions": "Построить маршрут",
    "mapTitle": "Character Barbershop на Google Maps",
    "streetPending": "Точный адрес добавим перед запуском",
    "hours": "Время работы",
    "hoursSchedule": "Пн · 12:00–20:00<br>Вт–Сб · 10:00–20:00<br>Вс · 10:00–18:00",
    "getInTouch": "Связаться",
    "call": "Позвонить ↗",
    "callShort": "Звонок",
    "reduceMotion": "Меньше анимаций",
    "backTop": "Наверх ↑",
    "messageInstagram": "Написать в Instagram",
    "bookTitle": "Твой следующий визит.",
    "bookDescription": "Выбери мастера, услугу и удобное время в общей форме записи Character.",
    "whatsappTitle": "Напиши нам.",
    "whatsappDescription": "Обсуди свой визит в WhatsApp: +34 697 154 297.",
    "phoneTitle": "Всегда на связи.",
    "phoneDescription": "Телефон Character: +34 697 154 297.",
    "selected": "Выбранная услуга",
    "waMessage": "Здравствуйте! Хочу записаться в Character Barbershop. Подскажите свободное время.",
    "close": "Закрыть",
    "nav": "Основная навигация",
    "home": "Character Barbershop — главная",
    "portfolio0": "Текстура и объём",
    "portfolio1": "Классическая форма",
    "portfolio2": "Естественные кудри",
    "portfolio3": "Мягкие линии",
    "portfolio4": "Длина и движение",
    "portfolio5": "В деталях",
    "portfolio6": "Чистая форма",
    "moreServices": "Ещё 6 услуг",
    "longHair": "Стрижка удлинённых волос",
    "longCombo": "Удлинённая стрижка и борода",
    "fatherSon": "Отец + сын до 10 лет",
    "fatherSonText": "Только у Вовы — при записи выберите его.",
    "facial": "Уход за лицом Bullfrog",
    "camouflage": "Камуфляж волос / бороды",
    "wax": "Восковая депиляция",
    "duration30": "30 мин",
    "duration60": "60 мин",
    "duration90": "90 мин",
    "duration120": "120 мин",
    "faqKicker": "Вопросы",
    "faqTitle": "Перед первым<br>визитом.",
    "faqIntro": "Собрали то, о чём нас спрашивают чаще всего. Не нашли ответ — напишите, ответим.",
    "faqBookingQ": "Как записаться и выбрать мастера?",
    "faqBookingA": "Нажмите «Записаться» — откроется запись в Altegio. Там выбираете мастера (или «Любой специалист»), услугу и удобное время.",
    "faqHaircutQ": "Что входит в мужскую стрижку?",
    "faqHaircutA": "Делаем классические мужские стрижки, skin fade, taper и удлинённые формы. Визит включает консультацию, мытьё головы, стрижку, укладку и рекомендации по уходу. На стрижку отведено 60 минут; для длинных волос выберите отдельную услугу в Altegio.",
    "faqFamilyQ": "Можно прийти вместе с сыном?",
    "faqFamilyA": "Конечно, приходите! Посадим вас к двум мастерам в одно время, чтобы никому не пришлось ждать. Напишите в WhatsApp — договоримся.",
    "faqChoiceQ": "Пока не знаю, какую услугу выбрать.",
    "faqChoiceA": "Напишите нам в WhatsApp, какую длину и что хочется получить, — можно прислать фото стрижки, которая понравилась. Говорим по-русски, по-украински, по-английски и по-испански, а Евгений и Анастасия ещё и по-польски.",
    "reviews": "Отзывы",
    "reviewsKicker": "Отзывы",
    "reviewsTitle": "Что о нас говорят.",
    "reviewsIntro": "Нам очень приятно читать такие слова. Вот несколько отзывов из Google.",
    "reviewsCount": "211 отзывов в Google",
    "reviewsChecked": "По данным Google на 9 ноября 2026",
    "reviewsSelection": "Избранные отзывы · цитаты на языке оригинала",
    "reviewsAll": "Все отзывы в Google",
    "reviewsPrev": "Предыдущие отзывы",
    "reviewsNext": "Следующие отзывы",
    "reviewsStars": "5 из 5 звёзд",
    "reviewsCard": "Отзыв",
    "reviewsOf": "из",
    "reviewsHint": "Листайте, чтобы прочитать ещё",
    "spokenLanguages": "Языки общения",
    "languageUk": "Украинский",
    "languageEn": "Английский",
    "languageRu": "Русский",
    "languageEs": "Испанский",
    "languagePl": "Польский",
    "reviewExcerpt": "Цитата из отзыва",
    "chooseLanguage": "Язык сайта",
    "metaDescription": "Мужские стрижки, фейд, удлинённые волосы и оформление бороды в Sant Gervasi, Барселона. Русскоязычные барберы Character. Запись онлайн.",
    "careKicker": "Косметика",
    "careTitle": "Работаем<br>с Bullfrog.",
    "careIntro": "Нам нравится итальянская косметика Bullfrog, поэтому в работе используем только её. Посмотрите, что стоит у нас на полках, — для волос, бороды и кожи.",
    "careLink": "Наши средства",
    "careFoot": "Bullfrog, Милан",
    "catalogTitle": "Bullfrog в Character",
    "catalogIntro": "Всё, чем мы пользуемся в работе. Можно почитать про каждое средство и выбрать что-то для дома.",
    "catalogAll": "Всё",
    "catalogHair": "Волосы и укладка",
    "catalogBeard": "Борода и бритьё",
    "catalogSkin": "Лицо",
    "catalogBody": "Тело",
    "catalogFragrance": "Ароматы",
    "catalogSets": "Наборы",
    "catalogSearch": "Найти средство",
    "catalogCount": "средств",
    "catalogMore": "Показать ещё",
    "catalogEmpty": "По вашему запросу ничего не найдено.",
    "catalogSource": "Подробнее у Bullfrog",
    "catalogAvailability": "Не знаете, что выбрать? Спросите мастера — подскажет и покажет, как пользоваться.",
    "catalogLoading": "Открываем коллекцию…",
    "catalogError": "Не удалось загрузить коллекцию. Попробуйте ещё раз.",
    "catalogRetry": "Попробовать ещё",
    "catalogClose": "Закрыть коллекцию",
    "catalogReset": "Сбросить фильтры",
    "reviewTranslated": "Перевод отрывка отзыва",
    "showOriginal": "Показать оригинал",
    "showTranslation": "Показать перевод",
    "reviewsCurated": "Отзывы из Google",
    "careProduct0": "Многофункциональный бальзам для мягкости бороды и увлажнения кожи с оригинальным древесно-ароматическим запахом Agnostico.",
    "careProduct1": "Матовый воск с сильной фиксацией для текстуры и чёткого разделения прядей. Наносится на сухие волосы.",
    "careProduct2": "Солевой спрей для объёма, матовой текстуры и естественных волн. Наносится на влажные волосы перед сушкой.",
    "galleryPrev": "Предыдущая фотография",
    "galleryNext": "Следующая фотография",
    "galleryOpen": "Увеличить фотографию",
    "galleryTitle": "Работы Character",
    "heroThree": "Характер остается неизменным.",
    "nikita": "Ник"
  },
  "en": {
    "photoNote": "Backgrounds, capes and posture adapted. Tap a photo for the original.",
    "roomTitle": "The Character space.",
    "viewPortfolio": "Explore the work",
    "skip": "Skip to content",
    "services": "Services",
    "works": "Our work",
    "team": "Barbers",
    "contact": "Contact",
    "book": "Book a visit",
    "bookVisit": "Book your visit",
    "heroOne": "Time passes.",
    "heroTwo": "Circumstances change.",
    "heroDescription": "A barbershop in Sant Gervasi, Barcelona. Haircuts, fades and beard trims — done properly, without rushing.",
    "explore": "Scroll down",
    "heroPhoto": "Attention. Craft. Character.",
    "servicesKicker": "Services",
    "servicesTitle": "Men’s haircuts.<br>Beard grooming.",
    "servicesIntro": "Classic cut, fade or longer hair — we’ll tell you honestly what will suit you.",
    "pricesNote": "You’ll see prices and free slots as soon as you book.",
    "haircut": "Men’s haircut",
    "haircutText": "Consultation, wash, haircut and styling.",
    "beard": "Beard trim & shaping",
    "beardText": "Beard trimming, shaping, shaving and hot-towel care.",
    "combo": "Haircut & beard",
    "comboText": "A haircut, beard shaping and shave in one visit.",
    "choose": "Choose",
    "worksKicker": "Our work",
    "worksTitle": "What we do<br>every day.",
    "moreWorks": "More on Instagram",
    "galleryHint": "Keep scrolling",
    "gallerySwipe": "Tap a photo to see it bigger",
    "teamKicker": "The team",
    "teamTitle": "Hi,<br>this is us.",
    "teamIntro": "There are four of us, and we all speak English, so it’s easy to explain the cut you want. Pick a barber — or leave it to any of us.",
    "zhenya": "Yevhen",
    "anastasiia": "Anastasia",
    "vova": "Vova",
    "contactKicker": "Contact",
    "contactTitle": "Come and<br>see us.",
    "address": "Address",
    "findUs": "How to find us.",
    "directions": "Get directions",
    "mapTitle": "Character Barbershop on Google Maps",
    "streetPending": "Street address to be added before launch",
    "hours": "Opening hours",
    "hoursSchedule": "Mon · 12:00–20:00<br>Tue–Sat · 10:00–20:00<br>Sun · 10:00–18:00",
    "getInTouch": "Get in touch",
    "call": "Call us ↗",
    "callShort": "Call",
    "reduceMotion": "Reduce motion",
    "backTop": "Back to top ↑",
    "messageInstagram": "Message on Instagram",
    "bookTitle": "Your next good haircut.",
    "bookDescription": "Choose your barber, service and time in Character’s shared booking form.",
    "whatsappTitle": "Start a conversation.",
    "whatsappDescription": "Discuss your visit on WhatsApp: +34 697 154 297.",
    "phoneTitle": "Let’s get in touch.",
    "phoneDescription": "Call Character: +34 697 154 297.",
    "selected": "Selected service",
    "waMessage": "Hi! I would like to book a visit to Character Barbershop. What times are available?",
    "close": "Close",
    "nav": "Main navigation",
    "home": "Character Barbershop — home",
    "portfolio0": "Texture & volume",
    "portfolio1": "Classic shape",
    "portfolio2": "Natural curls",
    "portfolio3": "Soft lines",
    "portfolio4": "Length & movement",
    "portfolio5": "Curl detail",
    "portfolio6": "Clean shape",
    "moreServices": "6 more services",
    "longHair": "Longer haircut",
    "longCombo": "Longer haircut & beard",
    "fatherSon": "Father & son under 10",
    "fatherSonText": "Only with Vova — choose him when you book.",
    "facial": "Bullfrog facial care",
    "camouflage": "Hair / beard grey blending",
    "wax": "Waxing",
    "duration30": "30 min",
    "duration60": "60 min",
    "duration90": "90 min",
    "duration120": "120 min",
    "faqKicker": "Questions",
    "faqTitle": "Before your<br>first visit.",
    "faqIntro": "The things people ask us most often. Can’t find your answer? Send us a message.",
    "faqBookingQ": "How do I book and choose a barber?",
    "faqBookingA": "Tap “Book a visit” and our Altegio booking page opens. Pick a barber (or “Any specialist”), a service and a time that works for you.",
    "faqHaircutQ": "What is included in a men’s haircut?",
    "faqHaircutA": "We offer classic men’s cuts, skin fades, tapers and longer styles. Your visit includes a consultation, wash, haircut, styling and care advice. The haircut appointment is 60 minutes; for longer hair, choose the dedicated service in Altegio.",
    "faqFamilyQ": "Can I come with my son?",
    "faqFamilyA": "Of course — bring him along! We’ll book you both with two barbers at the same time, so nobody has to wait. Message us on WhatsApp and we’ll sort it out.",
    "faqChoiceQ": "I am not sure which service to choose.",
    "faqChoiceA": "Message us on WhatsApp with the length and look you’re after — feel free to send a photo of a cut you like. We speak English, Spanish, Ukrainian and Russian, and Yevhen and Anastasia speak Polish too.",
    "reviews": "Reviews",
    "reviewsKicker": "Reviews",
    "reviewsTitle": "What people say.",
    "reviewsIntro": "We love reading words like these. Here are a few of our Google reviews.",
    "reviewsCount": "211 reviews on Google",
    "reviewsChecked": "Google rating checked on 9 November 2026",
    "reviewsSelection": "Selected reviews · excerpts in the original language",
    "reviewsAll": "All reviews on Google",
    "reviewsPrev": "Previous reviews",
    "reviewsNext": "Next reviews",
    "reviewsStars": "5 out of 5 stars",
    "reviewsCard": "Review",
    "reviewsOf": "of",
    "reviewsHint": "Swipe to read more",
    "spokenLanguages": "Languages spoken",
    "languageUk": "Ukrainian",
    "languageEn": "English",
    "languageRu": "Russian",
    "languageEs": "Spanish",
    "languagePl": "Polish",
    "reviewExcerpt": "Review excerpt",
    "chooseLanguage": "Website language",
    "metaDescription": "Men’s haircuts, skin fades, longer styles and beard trims at Character in Sant Gervasi, Barcelona. English-speaking barbers. Book online.",
    "careKicker": "Products",
    "careTitle": "We use<br>Bullfrog.",
    "careIntro": "We like the Italian brand Bullfrog, so it’s the only one we use. Have a look at what’s on our shelves — for hair, beard and skin.",
    "careLink": "Our products",
    "careFoot": "Bullfrog, Milan",
    "catalogTitle": "Bullfrog at Character",
    "catalogIntro": "Everything we use at work. Read about each product and pick something for home.",
    "catalogAll": "All",
    "catalogHair": "Hair & styling",
    "catalogBeard": "Beard & shaving",
    "catalogSkin": "Face",
    "catalogBody": "Body",
    "catalogFragrance": "Fragrance",
    "catalogSets": "Sets",
    "catalogSearch": "Find a product",
    "catalogCount": "products",
    "catalogMore": "Show more",
    "catalogEmpty": "No products match your search.",
    "catalogSource": "Product details at Bullfrog",
    "catalogAvailability": "Not sure what to choose? Ask your barber — they’ll suggest something and show you how to use it.",
    "catalogLoading": "Opening the collection…",
    "catalogError": "The collection could not load. Please try again.",
    "catalogRetry": "Try again",
    "catalogClose": "Close collection",
    "catalogReset": "Clear filters",
    "reviewTranslated": "Translated excerpt",
    "showOriginal": "Show original",
    "showTranslation": "Show translation",
    "reviewsCurated": "Reviews from Google",
    "careProduct0": "Multi-purpose balm that softens the beard and moisturises skin, with the original woody-aromatic Agnostico scent.",
    "careProduct1": "Matte wax with firm hold for texture, separation and definition. Work into dry hair.",
    "careProduct2": "Salt spray for volume, matte texture and natural-looking waves. Apply to damp hair before drying.",
    "galleryPrev": "Previous photograph",
    "galleryNext": "Next photograph",
    "galleryOpen": "Enlarge photograph",
    "galleryTitle": "Character portfolio",
    "heroThree": "Character remains unchanged.",
    "nikita": "Nick"
  },
  "es": {
    "photoNote": "Fondos, capas y postura adaptados. Toca una foto para ver el original.",
    "roomTitle": "El espacio Character.",
    "viewPortfolio": "Ver trabajos",
    "skip": "Ir al contenido",
    "services": "Servicios",
    "works": "Trabajos",
    "team": "Barberos",
    "contact": "Contacto",
    "book": "Reservar",
    "bookVisit": "Reservar una cita",
    "heroOne": "El tiempo pasa.",
    "heroTwo": "Las circunstancias cambian.",
    "heroDescription": "Barbería en Sant Gervasi, Barcelona. Cortes, degradados y arreglo de barba, con calma y sin prisas.",
    "explore": "Sigue bajando",
    "heroPhoto": "Atención. Oficio. Character.",
    "servicesKicker": "Servicios",
    "servicesTitle": "Corte de pelo.<br>Arreglo de barba.",
    "servicesIntro": "Clásico, degradado o pelo largo: te diremos con sinceridad qué te queda bien.",
    "pricesNote": "Verás los precios y las horas libres al reservar.",
    "haircut": "Corte de pelo",
    "haircutText": "Consulta, lavado, corte y peinado.",
    "beard": "Arreglo de barba",
    "beardText": "Recorte, perfilado, afeitado y cuidado con toalla caliente.",
    "combo": "Corte y barba",
    "comboText": "Corte, diseño de barba y afeitado en una sola visita.",
    "choose": "Elegir",
    "worksKicker": "Nuestro trabajo",
    "worksTitle": "Lo que hacemos<br>cada día.",
    "moreWorks": "Más en Instagram",
    "galleryHint": "Sigue bajando",
    "gallerySwipe": "Toca una foto para verla en grande",
    "teamKicker": "El equipo",
    "teamTitle": "Hola,<br>somos nosotros.",
    "teamIntro": "Somos cuatro y todos hablamos español, así que es fácil explicarnos qué corte quieres. Elige barbero o déjate en manos de cualquiera de nosotros.",
    "zhenya": "Yevhen",
    "anastasiia": "Anastasia",
    "vova": "Vova",
    "contactKicker": "Contacto",
    "contactTitle": "Te esperamos<br>en Character.",
    "address": "Dirección",
    "findUs": "Cómo llegar.",
    "directions": "Cómo llegar",
    "mapTitle": "Character Barbershop en Google Maps",
    "streetPending": "Dirección completa por añadir antes del lanzamiento",
    "hours": "Horario",
    "hoursSchedule": "Lun · 12:00–20:00<br>Mar–Sáb · 10:00–20:00<br>Dom · 10:00–18:00",
    "getInTouch": "Hablemos",
    "call": "Llámanos ↗",
    "callShort": "Llamar",
    "reduceMotion": "Reducir animaciones",
    "backTop": "Volver arriba ↑",
    "messageInstagram": "Escribir en Instagram",
    "bookTitle": "Tu próximo buen corte.",
    "bookDescription": "Elige tu barbero, servicio y horario en el formulario de reservas de Character.",
    "whatsappTitle": "Empezamos con un mensaje.",
    "whatsappDescription": "Comenta tu visita por WhatsApp: +34 697 154 297.",
    "phoneTitle": "Hablemos.",
    "phoneDescription": "Teléfono de Character: +34 697 154 297.",
    "selected": "Servicio elegido",
    "waMessage": "¡Hola! Me gustaría reservar una cita en Character Barbershop. ¿Qué horarios tenéis disponibles?",
    "close": "Cerrar",
    "nav": "Navegación principal",
    "home": "Character Barbershop — inicio",
    "portfolio0": "Textura y volumen",
    "portfolio1": "Forma clásica",
    "portfolio2": "Rizos naturales",
    "portfolio3": "Líneas suaves",
    "portfolio4": "Largo y movimiento",
    "portfolio5": "Detalle de rizos",
    "portfolio6": "Forma definida",
    "moreServices": "6 servicios más",
    "longHair": "Corte de pelo largo",
    "longCombo": "Corte de pelo largo y barba",
    "fatherSon": "Padre e hijo menor de 10 años",
    "fatherSonText": "Solo con Vova: elígelo al reservar.",
    "facial": "Cuidado facial Bullfrog",
    "camouflage": "Camuflaje de canas en pelo / barba",
    "wax": "Depilación con cera",
    "duration30": "30 min",
    "duration60": "60 min",
    "duration90": "90 min",
    "duration120": "120 min",
    "faqKicker": "Preguntas",
    "faqTitle": "Antes de tu<br>primera visita.",
    "faqIntro": "Lo que más nos preguntáis. Si no encuentras la respuesta, escríbenos.",
    "faqBookingQ": "¿Cómo reservo y elijo a mi barbero?",
    "faqBookingA": "Pulsa «Reservar» y se abrirá nuestra página de Altegio. Elige barbero (o «Cualquier especialista»), el servicio y la hora que te venga bien.",
    "faqHaircutQ": "¿Qué incluye el corte de pelo?",
    "faqHaircutA": "Hacemos cortes clásicos para hombre, degradados skin fade, taper y estilos de pelo largo. La visita incluye consulta, lavado, corte, peinado y recomendaciones de cuidado. La cita de corte es de 60 minutos; para pelo largo, elige el servicio específico en Altegio.",
    "faqFamilyQ": "¿Puedo venir con mi hijo?",
    "faqFamilyA": "¡Claro, venid juntos! Os reservamos con dos barberos a la misma hora, para que nadie tenga que esperar. Escríbenos por WhatsApp y lo organizamos.",
    "faqChoiceQ": "No sé qué servicio elegir.",
    "faqChoiceA": "Escríbenos por WhatsApp qué largo y qué resultado buscas; si quieres, mándanos una foto de un corte que te guste. Hablamos español, inglés, ucraniano y ruso, y Yevhen y Anastasia también polaco.",
    "reviews": "Reseñas",
    "reviewsKicker": "Reseñas",
    "reviewsTitle": "Lo que dicen de nosotros.",
    "reviewsIntro": "Nos encanta leer cosas así. Aquí tienes algunas de nuestras reseñas en Google.",
    "reviewsCount": "211 reseñas en Google",
    "reviewsChecked": "Valoración consultada el 9 de noviembre de 2026",
    "reviewsSelection": "Reseñas seleccionadas · extractos en su idioma original",
    "reviewsAll": "Todas las reseñas en Google",
    "reviewsPrev": "Reseñas anteriores",
    "reviewsNext": "Reseñas siguientes",
    "reviewsStars": "5 de 5 estrellas",
    "reviewsCard": "Reseña",
    "reviewsOf": "de",
    "reviewsHint": "Desliza para leer más",
    "spokenLanguages": "Idiomas",
    "languageUk": "Ucraniano",
    "languageEn": "Inglés",
    "languageRu": "Ruso",
    "languageEs": "Español",
    "languagePl": "Polaco",
    "reviewExcerpt": "Extracto de la reseña",
    "chooseLanguage": "Idioma del sitio",
    "metaDescription": "Cortes de pelo para hombre, degradados, pelo largo y arreglo de barba en Sant Gervasi, Barcelona. Conoce a los barberos de Character y reserva online.",
    "careKicker": "Productos",
    "careTitle": "Trabajamos<br>con Bullfrog.",
    "careIntro": "Nos gusta la marca italiana Bullfrog, por eso es la única que usamos. Echa un vistazo a lo que tenemos en las estanterías: para pelo, barba y piel.",
    "careLink": "Nuestros productos",
    "careFoot": "Bullfrog, Milán",
    "catalogTitle": "Bullfrog en Character",
    "catalogIntro": "Todo lo que usamos en el trabajo. Lee sobre cada producto y elige algo para casa.",
    "catalogAll": "Todo",
    "catalogHair": "Cabello y peinado",
    "catalogBeard": "Barba y afeitado",
    "catalogSkin": "Rostro",
    "catalogBody": "Cuerpo",
    "catalogFragrance": "Fragancias",
    "catalogSets": "Sets",
    "catalogSearch": "Buscar un producto",
    "catalogCount": "productos",
    "catalogMore": "Ver más",
    "catalogEmpty": "No hay productos que coincidan con tu búsqueda.",
    "catalogSource": "Detalles en Bullfrog",
    "catalogAvailability": "¿No sabes cuál elegir? Pregunta a tu barbero: te recomendará uno y te enseñará a usarlo.",
    "catalogLoading": "Abriendo la colección…",
    "catalogError": "No se ha podido cargar la colección. Inténtalo de nuevo.",
    "catalogRetry": "Reintentar",
    "catalogClose": "Cerrar colección",
    "catalogReset": "Borrar filtros",
    "reviewTranslated": "Fragmento traducido",
    "showOriginal": "Ver original",
    "showTranslation": "Ver traducción",
    "reviewsCurated": "Reseñas de Google",
    "careProduct0": "Bálsamo multiusos que suaviza la barba e hidrata la piel, con el aroma amaderado y aromático del Agnostico original.",
    "careProduct1": "Cera mate de fijación firme para aportar textura, separación y definición. Se aplica sobre cabello seco.",
    "careProduct2": "Spray de sal para dar volumen, textura mate y ondas naturales. Se aplica sobre cabello húmedo antes de secarlo.",
    "galleryPrev": "Fotografía anterior",
    "galleryNext": "Fotografía siguiente",
    "galleryOpen": "Ampliar fotografía",
    "galleryTitle": "Trabajos de Character",
    "heroThree": "El carácter permanece intacto.",
    "nikita": "Nick"
  },
  "uk": {
    "photoNote": "Тло, пеньюари й посадку адаптовано. Оригінали — за натисканням на фото.",
    "roomTitle": "Простір Character.",
    "viewPortfolio": "Переглянути роботи",
    "skip": "До вмісту",
    "services": "Послуги",
    "works": "Роботи",
    "team": "Майстри",
    "contact": "Контакти",
    "book": "Записатися",
    "bookVisit": "Записатися на візит",
    "heroOne": "Час минає.",
    "heroTwo": "Обставини змінюються.",
    "heroDescription": "Барбершоп у Sant Gervasi, Барселона. Стрижемо, робимо фейди й доводимо до ладу бороди — спокійно і без поспіху.",
    "explore": "Дивитися далі",
    "heroPhoto": "Увага. Майстерність. Character.",
    "servicesKicker": "Послуги",
    "servicesTitle": "Чоловічі стрижки.<br>Догляд за бородою.",
    "servicesIntro": "Класика, фейд чи довге волосся — підкажемо, що пасуватиме саме вам.",
    "pricesNote": "Ціни та вільний час видно одразу під час запису.",
    "haircut": "Чоловіча стрижка",
    "haircutText": "Консультація, миття голови, стрижка й укладання.",
    "beard": "Стрижка бороди",
    "beardText": "Стрижка, моделювання бороди, гоління та догляд із гарячим рушником.",
    "combo": "Стрижка та борода",
    "comboText": "Стрижка, моделювання бороди й гоління за один візит.",
    "choose": "Обрати",
    "worksKicker": "Наші роботи",
    "worksTitle": "Що ми робимо<br>щодня.",
    "moreWorks": "Більше в Instagram",
    "galleryHint": "Продовжуй прокручувати",
    "gallerySwipe": "Натисніть на фото, щоб відкрити більше",
    "teamKicker": "Команда",
    "teamTitle": "Знайомтеся,<br>це ми.",
    "teamIntro": "Нас четверо, і троє з нас говорять українською, тож пояснити, яку стрижку хочеться, буде просто. Обирайте майстра — або довіртеся будь-кому з нас.",
    "zhenya": "Євген",
    "anastasiia": "Анастасія",
    "vova": "Вова",
    "contactKicker": "Контакти",
    "contactTitle": "Чекаємо<br>на вас.",
    "address": "Адреса",
    "findUs": "Як нас знайти.",
    "directions": "Прокласти маршрут",
    "mapTitle": "Character Barbershop на Google Maps",
    "streetPending": "Точну адресу додамо перед запуском",
    "hours": "Години роботи",
    "hoursSchedule": "Пн · 12:00–20:00<br>Вт–Сб · 10:00–20:00<br>Нд · 10:00–18:00",
    "getInTouch": "Зв’язатися",
    "call": "Зателефонувати ↗",
    "callShort": "Дзвінок",
    "reduceMotion": "Менше анімацій",
    "backTop": "Нагору ↑",
    "messageInstagram": "Написати в Instagram",
    "bookTitle": "Твій наступний візит.",
    "bookDescription": "Обери майстра, послугу та зручний час у спільній формі запису Character.",
    "whatsappTitle": "Напиши нам.",
    "whatsappDescription": "Обговори свій візит у WhatsApp: +34 697 154 297.",
    "phoneTitle": "Завжди на зв’язку.",
    "phoneDescription": "Телефон Character: +34 697 154 297.",
    "selected": "Обрана послуга",
    "waMessage": "Вітаю! Хочу записатися до Character Barbershop. Підкажіть, будь ласка, який час вільний.",
    "close": "Закрити",
    "nav": "Основна навігація",
    "home": "Character Barbershop — головна",
    "portfolio0": "Текстура й об’єм",
    "portfolio1": "Класична форма",
    "portfolio2": "Природні кучері",
    "portfolio3": "М’які лінії",
    "portfolio4": "Довжина та рух",
    "portfolio5": "У деталях",
    "portfolio6": "Чітка форма",
    "moreServices": "Ще 6 послуг",
    "longHair": "Стрижка подовженого волосся",
    "longCombo": "Подовжена стрижка та борода",
    "fatherSon": "Батько + син до 10 років",
    "fatherSonText": "Лише у Вови — під час запису оберіть його.",
    "facial": "Догляд за обличчям Bullfrog",
    "camouflage": "Камуфляж волосся / бороди",
    "wax": "Воскова депіляція",
    "duration30": "30 хв",
    "duration60": "60 хв",
    "duration90": "90 хв",
    "duration120": "120 хв",
    "faqKicker": "Питання",
    "faqTitle": "Перед першим<br>візитом.",
    "faqIntro": "Зібрали те, про що нас питають найчастіше. Не знайшли відповіді — напишіть, відповімо.",
    "faqBookingQ": "Як записатися та обрати майстра?",
    "faqBookingA": "Натисніть «Записатися» — відкриється запис в Altegio. Там обираєте майстра (або «Будь-який спеціаліст»), послугу й зручний час.",
    "faqHaircutQ": "Що входить у чоловічу стрижку?",
    "faqHaircutA": "Робимо класичні чоловічі стрижки, skin fade, taper і подовжені форми. Візит включає консультацію, миття голови, стрижку, укладання та поради з догляду. На стрижку відведено 60 хвилин; для довгого волосся оберіть окрему послугу в Altegio.",
    "faqFamilyQ": "Чи можна прийти разом із сином?",
    "faqFamilyA": "Звісно, приходьте! Посадимо вас до двох майстрів одночасно, щоб нікому не довелося чекати. Напишіть у WhatsApp — домовимося.",
    "faqChoiceQ": "Ще не знаю, яку послугу обрати.",
    "faqChoiceA": "Напишіть нам у WhatsApp, яку довжину й що хочеться отримати, — можна надіслати фото стрижки, яка сподобалася. Говоримо українською, англійською, російською та іспанською, а Євген і Анастасія ще й польською.",
    "reviews": "Відгуки",
    "reviewsKicker": "Відгуки",
    "reviewsTitle": "Що про нас кажуть.",
    "reviewsIntro": "Нам дуже приємно читати такі слова. Ось кілька відгуків із Google.",
    "reviewsCount": "211 відгуків у Google",
    "reviewsChecked": "За даними Google станом на 9 листопада 2026",
    "reviewsSelection": "Вибрані відгуки · цитати мовою оригіналу",
    "reviewsAll": "Усі відгуки в Google",
    "reviewsPrev": "Попередні відгуки",
    "reviewsNext": "Наступні відгуки",
    "reviewsStars": "5 із 5 зірок",
    "reviewsCard": "Відгук",
    "reviewsOf": "із",
    "reviewsHint": "Гортайте, щоб прочитати ще",
    "spokenLanguages": "Мови спілкування",
    "languageUk": "Українська",
    "languageEn": "Англійська",
    "languageRu": "Російська",
    "languageEs": "Іспанська",
    "languagePl": "Польська",
    "reviewExcerpt": "Цитата з відгуку",
    "chooseLanguage": "Мова сайту",
    "metaDescription": "Чоловічі стрижки, фейд, довге волосся та оформлення бороди у Sant Gervasi, Барселона. Україномовні барбери Character. Онлайн-запис.",
    "careKicker": "Косметика",
    "careTitle": "Працюємо<br>з Bullfrog.",
    "careIntro": "Нам подобається італійська косметика Bullfrog, тому в роботі використовуємо лише її. Подивіться, що стоїть у нас на полицях, — для волосся, бороди та шкіри.",
    "careLink": "Наші засоби",
    "careFoot": "Bullfrog, Мілан",
    "catalogTitle": "Bullfrog у Character",
    "catalogIntro": "Усе, чим ми користуємося в роботі. Можна почитати про кожен засіб і вибрати щось для дому.",
    "catalogAll": "Усе",
    "catalogHair": "Волосся й укладка",
    "catalogBeard": "Борода й гоління",
    "catalogSkin": "Обличчя",
    "catalogBody": "Тіло",
    "catalogFragrance": "Аромати",
    "catalogSets": "Набори",
    "catalogSearch": "Знайти засіб",
    "catalogCount": "засобів",
    "catalogMore": "Показати ще",
    "catalogEmpty": "За вашим запитом нічого не знайдено.",
    "catalogSource": "Докладніше у Bullfrog",
    "catalogAvailability": "Не знаєте, що обрати? Запитайте майстра — підкаже й покаже, як користуватися.",
    "catalogLoading": "Відкриваємо колекцію…",
    "catalogError": "Не вдалося завантажити колекцію. Спробуйте ще раз.",
    "catalogRetry": "Спробувати ще",
    "catalogClose": "Закрити колекцію",
    "catalogReset": "Скинути фільтри",
    "reviewTranslated": "Переклад уривка відгуку",
    "showOriginal": "Показати оригінал",
    "showTranslation": "Показати переклад",
    "reviewsCurated": "Відгуки з Google",
    "careProduct0": "Багатофункціональний бальзам для м’якості бороди та зволоження шкіри з оригінальним деревно-ароматичним запахом Agnostico.",
    "careProduct1": "Матовий віск із сильною фіксацією для текстури й чіткого розділення пасом. Наноситься на сухе волосся.",
    "careProduct2": "Сольовий спрей для об’єму, матової текстури й природних хвиль. Наноситься на вологе волосся перед сушінням.",
    "galleryPrev": "Попередня фотографія",
    "galleryNext": "Наступна фотографія",
    "galleryOpen": "Збільшити фотографію",
    "galleryTitle": "Роботи Character",
    "heroThree": "Характер залишається незмінним.",
    "nikita": "Нік"
  }
};
const imageDescriptions = {
  "ru": [
    "Тёмные волосы и чётко оформленная борода в профиль",
    "Зачёсанные назад каштановые волосы в профиль",
    "Удлинённые кудри со стороны затылка",
    "Тёмные волосы и чётко оформленная борода в профиль",
    "Короткая стрижка с плавным фейдом",
    "Текстурированная тёмная стрижка с фейдом",
    "Кудрявые волосы и густая борода",
    "Удлинённая многослойная стрижка в профиль",
    "Визуализация бежево-шоколадного интерьера Character"
  ],
  "en": [
    "Dark hair and a defined beard in profile",
    "Swept brown hair in profile",
    "Long curls from the rear",
    "Dark hair and a defined beard in profile",
    "Short crop with a skin fade",
    "Textured dark crop with a fade",
    "Curly hair and a full beard",
    "Long, layered dark hair in profile",
    "A visualization of the beige and chocolate Character interior"
  ],
  "es": [
    "Cabello oscuro y barba definida de perfil",
    "Cabello castaño peinado hacia atrás, de perfil",
    "Rizos largos vistos desde atrás",
    "Cabello oscuro y barba definida de perfil",
    "Corte corto con degradado a piel",
    "Cabello oscuro texturizado con degradado",
    "Cabello rizado y barba completa",
    "Cabello oscuro largo a capas, de perfil",
    "Visualización del interior beige y chocolate de Character"
  ],
  "uk": [
    "Темне волосся й чітко оформлена борода у профіль",
    "Зачесане назад каштанове волосся у профіль",
    "Подовжені кучері з боку потилиці",
    "Темне волосся й чітко оформлена борода у профіль",
    "Коротка стрижка з плавним фейдом",
    "Текстурована темна стрижка з фейдом",
    "Кучеряве волосся й густа борода",
    "Подовжена багатошарова стрижка у профіль",
    "Візуалізація бежево-шоколадного інтер’єру Character"
  ]
};
const reviewData=[
  {
    "id": "maria",
    "author": "Мария Доценко",
    "quote": "Очень ценим её терпение, профессионализм и умение работать с детьми.",
    "rating": 5,
    "originalLanguage": "ru"
  },
  {
    "id": "martin",
    "author": "Martin Mehela",
    "quote": "Всё на высшем уровне: атмосфера, сервис и внимание к деталям. Мастер сразу понял, что я хочу, сделал стрижку идеально — даже лучше, чем ожидал.",
    "rating": 5,
    "originalLanguage": "ru"
  },
  {
    "id": "klinya",
    "author": "Klinya wo",
    "quote": "Отличный сервис, атмосфера, всегда предложат разные напитки. Пришел раз, и останешься навсегда.",
    "rating": 5,
    "originalLanguage": "ru"
  },
  {
    "id": "dmitrii",
    "author": "Dmitrii Gaidabrus",
    "quote": "Ребята знают что делают на 1000% очень рекомендую, считаю что они чуть ли не лидеры по уходу за волосами в Барне!",
    "rating": 5,
    "originalLanguage": "ru"
  },
  {
    "id": "lev",
    "author": "Lev Rubel",
    "quote": "Подстриг быстро, качественно и именно так, как я хотел. Отдельно приятно, что в такую жару Вова предложил что-нибудь попить — чувствуется внимание к клиентам",
    "rating": 5,
    "originalLanguage": "ru"
  },
  {
    "id": "lv",
    "author": "LV",
    "quote": "Она очень круто работает с формой и текстурой, сразу поняла запрос без лишних объяснений. Стригусь у неё регулярно, результат каждый раз идеальный.",
    "rating": 5,
    "originalLanguage": "ru"
  },
  {
    "id": "bogdan",
    "author": "bogdan kashin",
    "quote": "Барбер проконсультировал и подобрал стрижку по моему типу волос и форме головы. Очень уютно и приятно. Рекомендую!",
    "rating": 5,
    "originalLanguage": "ru"
  },
  {
    "id": "anastazja",
    "author": "Anastazja",
    "quote": "Атмосфера стильная и уютная, персонал приветливый и внимательный. Видно, что здесь заботятся о каждом клиенте и любят своё дело.",
    "rating": 5,
    "originalLanguage": "ru"
  },
  {
    "id": "mark",
    "author": "Caymanov Mark",
    "quote": "Максимальная внимательность к деталям и к самой стрижке - видно, что мастера реально заморачиваются за результат, а не работают «на поток».",
    "rating": 5,
    "originalLanguage": "ru"
  },
  {
    "id": "maksym",
    "author": "Maksym Dzhura",
    "quote": "Если вы в Барселоне ищите своего барбера , в этом месте вы его точно найдете. Настолько индивидуального подохода я еще не видел",
    "rating": 5,
    "originalLanguage": "ru"
  },
  {
    "id": "alexey",
    "author": "Alexey Begunov",
    "quote": "Советую приходить раньше чтобы насладиться очень вкусным кофе! Наконец то я нравлюсь себе когда смотрю в зеркало, спасибо Жене",
    "rating": 5,
    "originalLanguage": "ru"
  },
  {
    "id": "zotov",
    "author": "Дмитрий Зотов",
    "quote": "Здесь вас всегда встретят как друга, а подстригут как профи. Барбер Анастасия - абсолютный талант, благодаря которому ваша стрижка станет идеальной,",
    "rating": 5,
    "originalLanguage": "ru"
  },
  {
    "id": "vova",
    "author": "Vova Osip",
    "quote": "Женя топ барбер, отличная стрижка моих длинных волос, отзывчивый и приятный человек. Всем рекомендую🙌🏻",
    "rating": 5,
    "originalLanguage": "ru"
  },
  {
    "id": "igor",
    "author": "Igor",
    "quote": "Всем настоятельно рекомендую! Очень хорошо постригли и сделали даже новый стиль! Оч понравилось, внимание к деталям",
    "rating": 5,
    "originalLanguage": "ru"
  },
  {
    "id": "tim",
    "author": "ТИМ",
    "quote": "Отличный барбершоп, с приятной атмосферой, топовым сервисом и настоящими профессионалами. Лично меня стригла Анастасия, результат очень понравился",
    "rating": 5,
    "originalLanguage": "ru"
  },
  {
    "id": "andre",
    "author": "Andre Lopushanskyy",
    "quote": "Это был и есть самый лучший сервис в Барселоне что касательно стрижки волос, бороды!",
    "rating": 5,
    "originalLanguage": "ru"
  }
];
const reviewTranslations={"maria":{"en":"We really appreciate her patience, professionalism and ability to work with children.","es":"Valoramos mucho su paciencia, su profesionalidad y su habilidad para trabajar con niños.","uk":"Дуже цінуємо її терпіння, професіоналізм та вміння працювати з дітьми."},"martin":{"en":"Everything is first-class: the atmosphere, the service and the attention to detail. The barber immediately understood what I wanted and gave me a perfect haircut — even better than I expected.","es":"Todo es de primera: el ambiente, el servicio y la atención al detalle. El barbero entendió enseguida lo que quería y me hizo un corte perfecto, incluso mejor de lo que esperaba.","uk":"Усе на найвищому рівні: атмосфера, сервіс та увага до деталей. Майстер одразу зрозумів, чого я хочу, і зробив ідеальну стрижку — навіть кращу, ніж я очікував."},"klinya":{"en":"Great service and atmosphere, and they always offer a choice of drinks. Come once and you’ll keep coming back forever.","es":"Un servicio y un ambiente excelentes; siempre te ofrecen distintas bebidas. Vienes una vez y te quedas para siempre.","uk":"Чудовий сервіс, атмосфера, завжди запропонують різні напої. Прийдеш раз — і залишишся назавжди."},"dmitrii":{"en":"These guys know what they’re doing, 1000%. I highly recommend them — I think they’re among the leaders in hair care in Barcelona!","es":"¡Estos chicos saben lo que hacen al 1000%! Los recomiendo muchísimo; creo que están entre los mejores en cuidado del cabello en Barcelona.","uk":"Хлопці на 1000% знають, що роблять. Дуже рекомендую, вважаю, що вони чи не лідери з догляду за волоссям у Барселоні!"},"lev":{"en":"He cut my hair quickly, skilfully and exactly the way I wanted. It was especially nice that Vova offered me something to drink in such hot weather — you can feel the attention they give their clients.","es":"Me cortó el pelo rápido, con mucha calidad y exactamente como quería. Además, fue un detalle que Vova me ofreciera algo de beber con tanto calor: se nota la atención al cliente.","uk":"Підстриг швидко, якісно і саме так, як я хотів. Окремо приємно, що в таку спеку Вова запропонував щось випити — відчувається увага до клієнтів."},"lv":{"en":"She does an amazing job with shape and texture, and understood what I wanted straight away without any lengthy explanations. I get my hair cut by her regularly, and the result is perfect every time.","es":"Trabaja increíblemente bien la forma y la textura, y entendió enseguida lo que quería sin necesidad de muchas explicaciones. Me corto el pelo con ella habitualmente y el resultado es perfecto cada vez.","uk":"Вона дуже круто працює з формою та текстурою, одразу зрозуміла запит без зайвих пояснень. Стрижуся в неї регулярно, результат щоразу ідеальний."},"bogdan":{"en":"The barber advised me and chose a haircut to suit my hair type and head shape. Very cosy and welcoming. I recommend it!","es":"El barbero me asesoró y eligió un corte acorde con mi tipo de pelo y la forma de mi cabeza. Un lugar muy acogedor y agradable. ¡Lo recomiendo!","uk":"Барбер проконсультував і підібрав стрижку відповідно до мого типу волосся та форми голови. Дуже затишно й приємно. Рекомендую!"},"anastazja":{"en":"The atmosphere is stylish and cosy, and the staff are friendly and attentive. You can tell they care about every client and love what they do.","es":"El ambiente tiene estilo y es acogedor; el personal es amable y atento. Se nota que cuidan a cada cliente y que les encanta su trabajo.","uk":"Атмосфера стильна й затишна, персонал привітний та уважний. Видно, що тут дбають про кожного клієнта й люблять свою справу."},"mark":{"en":"Exceptional attention to detail and to the haircut itself — you can tell the barbers really care about the result rather than just rushing people through.","es":"Una atención máxima a los detalles y al propio corte: se nota que los barberos se preocupan de verdad por el resultado y no se limitan a atender a uno detrás de otro.","uk":"Максимальна увага до деталей і самої стрижки — видно, що майстри справді переймаються результатом, а не працюють «на потік»."},"maksym":{"en":"If you’re looking for your barber in Barcelona, you’ll definitely find them here. I’ve never seen such a personalised approach.","es":"Si buscas a tu barbero en Barcelona, aquí seguro que lo encontrarás. Nunca había visto una atención tan personalizada.","uk":"Якщо ви шукаєте свого барбера в Барселоні, тут ви його точно знайдете. Настільки індивідуального підходу я ще не бачив."},"alexey":{"en":"I recommend arriving early to enjoy the delicious coffee! I finally like what I see in the mirror. Thank you, Yevhen.","es":"¡Recomiendo llegar antes para disfrutar de un café delicioso! Por fin me gusta lo que veo en el espejo. Gracias, Yevhen.","uk":"Раджу приходити раніше, щоб насолодитися дуже смачною кавою! Нарешті я подобаюся собі, коли дивлюся в дзеркало. Дякую Євгену."},"zotov":{"en":"Here you’re always welcomed like a friend and given a professional haircut. Barber Anastasia is an absolute talent who will make your haircut perfect.","es":"Aquí siempre te reciben como a un amigo y te cortan el pelo como auténticos profesionales. La barbera Anastasia tiene un talento extraordinario que hará que tu corte quede perfecto.","uk":"Тут вас завжди зустрінуть як друга, а підстрижуть як професіонали. Барбер Анастасія — справжній талант, завдяки якому ваша стрижка стане ідеальною."},"vova":{"en":"Yevhen is a top barber. He gave my long hair an excellent cut, and he’s a helpful, lovely person. I recommend him to everyone 🙌🏻","es":"Yevhen es un barbero de primera: me hizo un corte excelente en mi pelo largo y es una persona atenta y agradable. Lo recomiendo a todo el mundo 🙌🏻","uk":"Євген — топовий барбер, чудово підстриг моє довге волосся, чуйна й приємна людина. Усім рекомендую 🙌🏻"},"igor":{"en":"I highly recommend them to everyone! They gave me a great haircut and even a new style! I really liked it, especially the attention to detail.","es":"¡Los recomiendo muchísimo a todo el mundo! ¡Me cortaron el pelo muy bien y hasta me dieron un nuevo estilo! Me gustó mucho, especialmente la atención al detalle.","uk":"Усім дуже рекомендую! Дуже добре підстригли й навіть створили новий стиль! Дуже сподобалося, особливо увага до деталей."},"tim":{"en":"A great barbershop with a lovely atmosphere, top service and true professionals. Anastasia cut my hair, and I really liked the result.","es":"Una barbería excelente, con un ambiente agradable, un servicio de primera y auténticos profesionales. A mí me cortó el pelo Anastasia y me gustó mucho el resultado.","uk":"Чудовий барбершоп із приємною атмосферою, топовим сервісом і справжніми професіоналами. Мене стригла Анастасія, результат дуже сподобався."},"andre":{"en":"This was and still is the very best service in Barcelona for haircuts and beard grooming!","es":"¡Ha sido y sigue siendo el mejor servicio de Barcelona para cortes de pelo y arreglo de barba!","uk":"Це був і залишається найкращий сервіс у Барселоні зі стрижки волосся та бороди!"}};
const root=document.documentElement;
const header=document.querySelector('.header');
const gallery=document.querySelector('.gallery-section');
const track=document.querySelector('.gallery-track');
const galleryWindow=document.querySelector('.gallery-window');
const galleryMeter=document.querySelector('.gallery-meter span');
const dialog=document.querySelector('#action-dialog');
const motionButton=document.querySelector('.motion-toggle');
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
const readStore=(key)=>{try{return localStorage.getItem(key);}catch{return null;}};
const writeStore=(key,value)=>{try{localStorage.setItem(key,value);}catch{}};
const requestedCode=new URLSearchParams(location.search).get('lang');
const requestedLanguage=requestedCode==='ua'?'uk':requestedCode;
// Each language has a crawlable HTML page. Explicit URLs always determine language.
const languageFromPath=()=>location.pathname.match(/^\/(es|uk|ru)(?:\/|$)/)?.[1]||'en';
const languagePath=code=>code==='en'?'/':'/'+code+'/';
let language=[requestedLanguage,languageFromPath(),'en'].find(code=>translations[code]);
const seoConfig=JSON.parse(document.getElementById('seo-config')?.textContent||'{}');
if(translations[requestedLanguage]){const url=new URL(location.href);url.pathname=languagePath(language);url.searchParams.delete('lang');history.replaceState(null,'',url);}
let userReduce=readStore('character-reduce-motion')==='true';
let reduced=false,ticking=false,totalScroll=1;
let dialogAction='',dialogService='';
function clamp(value,min=0,max=1){return Math.min(max,Math.max(min,value));}
function refreshLabels(){
  const copy=translations[language];root.lang=language;
  document.querySelector('.languages').setAttribute('aria-label',copy.chooseLanguage);
  document.querySelector('meta[name=description]').content=copy.metaDescription;
  document.querySelectorAll('[data-t]').forEach(element=>{const value=copy[element.dataset.t];if(value.includes('<br>'))element.innerHTML=value;else element.textContent=value;});
  document.querySelectorAll('[data-title-t]').forEach(element=>{element.title=copy[element.dataset.titleT];});
  document.querySelectorAll('[data-aria-t]').forEach(element=>element.setAttribute('aria-label',copy[element.dataset.ariaT]));
  document.querySelectorAll('a[data-lang]').forEach(link=>{if(link.dataset.lang===language)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current');link.href=languagePath(link.dataset.lang)+location.hash;});
  document.querySelector('.gallery-hint').textContent=copy.gallerySwipe;
  refreshPortfolioLabels();
  document.querySelector('.navigation').setAttribute('aria-label',copy.nav);
  document.querySelector('.brand').setAttribute('aria-label',copy.home);
  document.querySelectorAll('[data-staff-name]').forEach(image=>{image.alt=copy[image.dataset.staffName];});
  document.querySelectorAll('.hero-photo img,.gallery-card img,.interior img').forEach((image,index)=>{image.alt=imageDescriptions[language][index]||'';});
  document.querySelector('.dialog-close').setAttribute('aria-label',copy.close);
  document.querySelectorAll('[data-service]').forEach(button=>button.setAttribute('aria-label',copy.book+': '+copy[button.dataset.service]));
  refreshSeo();
  document.querySelectorAll('.review-card').forEach(card=>delete card.dataset.original);
  refreshReviews();
  document.dispatchEvent(new CustomEvent('character-language'));
  if(dialog.open)fillDialog(dialogAction,dialogService);
  requestAnimationFrame(measure);
}
function measure(){
  totalScroll=Math.max(1,document.documentElement.scrollHeight-innerHeight);
  updateScroll();updatePortfolioControls();
}
function updateScroll(){
  ticking=false;const y=window.scrollY;
  header.classList.toggle('is-scrolled',y>30);
  document.querySelector('.reading-progress').style.transform='scaleX('+clamp(y/totalScroll)+')';
}
function requestScroll(){if(!ticking){ticking=true;requestAnimationFrame(updateScroll);}}
function setupMotion(){
  reduced=motionPreference.matches||userReduce;
  root.classList.toggle('motion-enabled',!reduced);root.classList.toggle('motion-off',reduced);
  motionButton.setAttribute('aria-pressed',String(reduced));
  measure();
}
function fillDialog(action,service){
  const copy=translations[language];const key=action==='book'?'book':action==='whatsapp'?'whatsapp':'phone';
  document.querySelector('#dialog-title').textContent=copy[key+'Title'];document.querySelector('#dialog-description').textContent=copy[key+'Description'];
  const selected=document.querySelector('#dialog-service');selected.hidden=!service;selected.textContent=service?copy.selected+': '+copy[service]:'';
}
function performAction(button){
  const action=button.dataset.action;const service=button.dataset.service||'';
  if(action==='book'&&CONTACT.altegio){window.location.assign(CONTACT.altegio);return;}
  if(action==='whatsapp'&&CONTACT.whatsapp){window.location.assign('https://wa.me/'+CONTACT.whatsapp.replace(/\D/g,'')+'?text='+encodeURIComponent(translations[language].waMessage));return;}
  if(action==='phone'&&CONTACT.phone){window.location.assign('tel:'+CONTACT.phone.replace(/[^+\d]/g,''));return;}
  dialogAction=action;dialogService=service;fillDialog(action,service);dialog.showModal();
}
function refreshSeo(){
  const seo=seoConfig.languages?.[language];if(!seo)return;
  document.title=seo.title;
  document.querySelector('meta[name="description"]').content=seo.description;
  const canonical=seoConfig.origin+seo.path;
  document.querySelector('link[rel="canonical"]').href=canonical;
  const values={'og:title':seo.title,'og:description':seo.description,'og:url':canonical,'og:locale':seo.locale,'og:image:alt':imageDescriptions[language][8],'twitter:title':seo.title,'twitter:description':seo.description,'twitter:image:alt':imageDescriptions[language][8]};
  for(const [key,value] of Object.entries(values)){const meta=document.querySelector('meta[property="'+key+'"],meta[name="'+key+'"]');if(meta)meta.content=value;}
  const alternates=document.querySelectorAll('meta[property="og:locale:alternate"]');
  Object.entries(seoConfig.languages).filter(([code])=>code!==language).forEach(([,value],i)=>{if(alternates[i])alternates[i].content=value.locale;});
  const schemaElement=document.getElementById('business-schema');
  if(schemaElement){const schema=JSON.parse(schemaElement.textContent);const page=schema['@graph'].find(item=>item['@type']==='WebPage');if(page){Object.assign(page,{'@id':canonical+'#webpage',url:canonical,name:seo.title,description:seo.description,inLanguage:language});schemaElement.textContent=JSON.stringify(schema);}}
}
document.addEventListener('click',event=>{
  const link=event.target.closest('a[data-lang]');
  if(link){
    if(event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
    event.preventDefault();language=link.dataset.lang;writeStore('character-language',language);
    const url=new URL(location.href);url.pathname=languagePath(language);url.searchParams.delete('lang');history.pushState(null,'',url);refreshLabels();return;
  }
  const button=event.target.closest('button');if(button?.dataset.action)performAction(button);
});
window.addEventListener('popstate',()=>{language=languageFromPath();refreshLabels();});
window.addEventListener('hashchange',()=>{document.querySelectorAll('a[data-lang]').forEach(link=>link.href=languagePath(link.dataset.lang)+location.hash);});
dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();});
motionButton.addEventListener('click',()=>{userReduce=!userReduce;writeStore('character-reduce-motion',String(userReduce));setupMotion();});
document.querySelectorAll('details').forEach(element=>element.addEventListener('toggle',()=>requestAnimationFrame(measure)));
window.addEventListener('scroll',requestScroll,{passive:true});window.addEventListener('resize',measure,{passive:true});window.addEventListener('load',measure,{once:true});
motionPreference.addEventListener('change',setupMotion);
if('IntersectionObserver' in window){
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}}),{threshold:.06,rootMargin:'0px 0px -24px 0px'});
  document.querySelectorAll('[data-reveal]').forEach(element=>{if(element.getBoundingClientRect().top<innerHeight)element.classList.add('is-visible');else revealObserver.observe(element);});
  const navObserver=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){document.querySelectorAll('.navigation a').forEach(link=>link.setAttribute('aria-current',String(link.hash==='#'+entry.target.id)));}}},{rootMargin:'-20% 0px -45% 0px',threshold:0});
  document.querySelectorAll('main>section[id]').forEach(section=>navObserver.observe(section));
}else{document.querySelectorAll('[data-reveal]').forEach(element=>element.classList.add('is-visible'));}

// A locally curated pool: new order on each page load, no Google API request.
const reviewRail=document.querySelector('.review-rail');
const reviewPrev=document.querySelector('[data-review-prev]');
const reviewNext=document.querySelector('[data-review-next]');
let previousReviewIds=[];
try{previousReviewIds=JSON.parse(readStore('character-review-first')||'[]');if(!Array.isArray(previousReviewIds))previousReviewIds=[];}catch{}
function shuffleReviews(items){const result=[...items];for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;}
// Only excerpts that explicitly mention a barber qualify for the opening trio.
// A sole named review may repeat; never manufacture an endorsement for rotation.
const namedReviewIds={anastasia:['tim','zotov'],yevhen:['alexey','vova'],vova:['lev']};
const openingReviews=Object.values(namedReviewIds).map(ids=>{
 const pool=reviewData.filter(review=>ids.includes(review.id));
 const fresh=pool.filter(review=>!previousReviewIds.includes(review.id));
 return shuffleReviews(fresh.length?fresh:pool)[0];
}).filter(Boolean);
const usedReviews=new Set(openingReviews.map(review=>review.id));
const reviewOrder=[...shuffleReviews(openingReviews),...shuffleReviews(reviewData.filter(review=>!usedReviews.has(review.id)))];
writeStore('character-review-first',JSON.stringify(reviewOrder.slice(0,3).map(review=>review.id)));
reviewRail.replaceChildren(...reviewOrder.map(review=>{
 const card=document.createElement('article');card.className='review-card';card.dataset.reviewId=review.id;
 const top=document.createElement('div');top.className='review-card-top';
 const stars=document.createElement('span');stars.className='review-stars';stars.textContent='★★★★★';stars.setAttribute('role','img');
 const source=document.createElement('span');source.className='review-source';source.textContent='Google';
 top.append(stars,source);
 const quote=document.createElement('blockquote');quote.lang=review.originalLanguage;quote.textContent='«'+review.quote.replace(/,$/,'')+'»';
 const author=document.createElement('p');author.className='review-author';author.textContent=review.author;
 const excerpt=document.createElement('span');excerpt.className='review-excerpt';
 const toggle=document.createElement('button');toggle.type='button';toggle.className='review-original';
 toggle.addEventListener('click',()=>{card.dataset.original=card.dataset.original==='true'?'false':'true';refreshReviews();});
 const foot=document.createElement('div');foot.className='review-foot';foot.append(excerpt,toggle);
 card.append(top,quote,author,foot);return card;
}));
function refreshReviews(){
 const copy=translations[language];
 reviewPrev.setAttribute('aria-label',copy.reviewsPrev);reviewNext.setAttribute('aria-label',copy.reviewsNext);
 reviewRail.setAttribute('aria-label',copy.reviews);
 reviewRail.querySelectorAll('.review-card').forEach((card,index)=>{
  card.setAttribute('aria-label',copy.reviewsCard+' '+(index+1)+' '+copy.reviewsOf+' '+reviewData.length);
  card.querySelector('.review-stars').setAttribute('aria-label',copy.reviewsStars);
  const review=reviewData.find(item=>item.id===card.dataset.reviewId);
  const translated=language!==review.originalLanguage;
  const showOriginal=!translated||card.dataset.original==='true';
  const quote=card.querySelector('blockquote');
  quote.lang=showOriginal?review.originalLanguage:language;
  quote.textContent='«'+(showOriginal?review.quote.replace(/,$/,''):reviewTranslations[review.id][language])+'»';
  card.querySelector('.review-excerpt').textContent=showOriginal?copy.reviewExcerpt:copy.reviewTranslated;
  const toggle=card.querySelector('.review-original');toggle.hidden=!translated;
  toggle.textContent=showOriginal?copy.showTranslation:copy.showOriginal;
  toggle.setAttribute('aria-pressed',String(translated&&showOriginal));
 });
 requestAnimationFrame(updateReviewControls);
}
function updateReviewControls(){
 const max=Math.max(0,reviewRail.scrollWidth-reviewRail.clientWidth);
 reviewPrev.disabled=reviewRail.scrollLeft<2;reviewNext.disabled=reviewRail.scrollLeft>=max-2;
}
function moveReviews(direction){
 const step=reviewRail.firstElementChild.getBoundingClientRect().width+20;
 reviewRail.scrollBy({left:direction*step,behavior:reduced?'instant':'smooth'});
}
reviewPrev.addEventListener('click',()=>moveReviews(-1));reviewNext.addEventListener('click',()=>moveReviews(1));
reviewRail.addEventListener('keydown',event=>{if(event.target===reviewRail&&['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();moveReviews(event.key==='ArrowRight'?1:-1);}});
let reviewScrollPending=false;
reviewRail.addEventListener('scroll',()=>{if(!reviewScrollPending){reviewScrollPending=true;requestAnimationFrame(()=>{reviewScrollPending=false;updateReviewControls();});}},{passive:true});
window.addEventListener('resize',updateReviewControls,{passive:true});

// Native horizontal scrolling never consumes vertical wheel or touch movement.
const portfolioLinks=[...document.querySelectorAll('[data-portrait]')];
const portfolioDialog=document.querySelector('#portfolio-dialog');
const portfolioFull=portfolioDialog.querySelector('.portfolio-full');
const portfolioPrev=document.querySelector('[data-gallery-prev]');
const portfolioNext=document.querySelector('[data-gallery-next]');
let portraitIndex=0,portfolioScrollPending=false;
function refreshPortfolioLabels(){
  portfolioLinks.forEach((link,index)=>link.setAttribute('aria-label',translations[language].galleryOpen+': '+imageDescriptions[language][index+1]));
  if(portfolioDialog.open)portfolioFull.alt=imageDescriptions[language][portraitIndex+1];
}
function updatePortfolioControls(){
  const max=Math.max(0,galleryWindow.scrollWidth-galleryWindow.clientWidth);
  portfolioPrev.disabled=galleryWindow.scrollLeft<2;portfolioNext.disabled=galleryWindow.scrollLeft>=max-2;
  const progress=max?galleryWindow.scrollLeft/max:1;
  galleryMeter.style.transform='scaleX('+Math.max(.1,progress)+')';
}
function movePortfolio(direction){
  const step=portfolioLinks[1].offsetLeft-portfolioLinks[0].offsetLeft;
  galleryWindow.scrollBy({left:direction*step,behavior:reduced?'instant':'smooth'});
}
function showPortrait(index){
  portraitIndex=(index+portfolioLinks.length)%portfolioLinks.length;
  portfolioFull.src=portfolioLinks[portraitIndex].href;
  portfolioFull.alt=imageDescriptions[language][portraitIndex+1];
}
portfolioLinks.forEach((link,index)=>link.addEventListener('click',event=>{
  if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
  event.preventDefault();showPortrait(index);portfolioDialog.showModal();
}));
portfolioPrev.addEventListener('click',()=>movePortfolio(-1));portfolioNext.addEventListener('click',()=>movePortfolio(1));
galleryWindow.addEventListener('scroll',()=>{if(!portfolioScrollPending){portfolioScrollPending=true;requestAnimationFrame(()=>{portfolioScrollPending=false;updatePortfolioControls();});}},{passive:true});
galleryWindow.addEventListener('keydown',event=>{if(event.target===galleryWindow&&['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();movePortfolio(event.key==='ArrowRight'?1:-1);}});
portfolioDialog.querySelector('[data-portrait-prev]').addEventListener('click',()=>showPortrait(portraitIndex-1));
portfolioDialog.querySelector('[data-portrait-next]').addEventListener('click',()=>showPortrait(portraitIndex+1));
portfolioDialog.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();showPortrait(portraitIndex+(event.key==='ArrowRight'?1:-1));}});
portfolioDialog.addEventListener('click',event=>{if(event.target!==portfolioDialog)return;const box=portfolioDialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)portfolioDialog.close();});
let portraitTouch=null;
portfolioFull.addEventListener('touchstart',event=>{const t=event.touches[0];portraitTouch=event.touches.length===1?{x:t.clientX,y:t.clientY}:null;},{passive:true});
portfolioFull.addEventListener('touchend',event=>{if(!portraitTouch)return;const t=event.changedTouches[0],dx=t.clientX-portraitTouch.x,dy=t.clientY-portraitTouch.y;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.4)showPortrait(portraitIndex+(dx<0?1:-1));portraitTouch=null;},{passive:true});

root.classList.add('js');refreshLabels();setupMotion();
// Resolve incoming section links after fonts and the page have settled.
const initialHash=location.hash.slice(1);
let initialScrollCancelled=false;
['wheel','touchstart','pointerdown','keydown'].forEach(type=>window.addEventListener(type,()=>{initialScrollCancelled=true;},{once:true,passive:true}));
const pageReady=document.readyState==='complete'?Promise.resolve():new Promise(resolve=>window.addEventListener('load',resolve,{once:true}));
Promise.all([pageReady,document.fonts?document.fonts.ready:Promise.resolve()]).then(()=>{
 measure();
 if(initialHash&&!initialScrollCancelled)requestAnimationFrame(()=>document.getElementById(initialHash)?.scrollIntoView({behavior:'instant',block:'start'}));
});
