/**
 * 🌍 SISTEMA DE INTERNACIONALIZACIÓN (i18n)
 * Sistema simple y eficaz para traducciones ES/EN
 */

export type Language = 'es' | 'en';

export const translations: Record<Language, Record<string, string>> = {
  es: {
    /* Navigation */
    'nav.home': 'Inicio',
    'nav.films': 'Películas',
    'nav.about': 'Nosotras',
    'nav.news': 'Noticias',
    'nav.contact': 'Contacto',

    /* Hero */
    'hero.title': 'Verbena Films',
    'hero.subtitle': 'Producciones audiovisuales de excelencia',

    /* Films */
    'films.title': 'Nuestras Películas',
    'films.description':
      'Una selección de nuestros trabajos audiovisuales más destacados',
    'films.type': 'Tipo',
    'films.director': 'Directora',
    'films.year': 'Año',
    'films.country': 'País',
    'films.language': 'Idioma',
    'films.writer': 'Guionista y Directora',
    'films.producers': 'Productoras',
    'films.executiveProducer': 'Productora Ejecutiva',
    'films.production': 'Producción',
    'films.synopsis': 'Sinopsis',
    'films.awards': 'Premios y Festivales',
    'films.watch': 'Ver tráiler',

    /* Film Titles */
    'film.title.taranta': 'Taranta',
    'film.title.flores': 'Flores para una madre ausente',
    'film.title.audicion': 'Audición',
    'film.title.bienvenus': 'Bienvenus',
    'film.title.mivida': 'Mi vida al principio',
    'film.title.noche': 'En la noche caminamos solos',

    /* Films - Taranta */
    'film.taranta.year': 'En Rodaje',
    'film.taranta.type': 'Largometraje Documental',
    'film.taranta.language': 'Español',
    'film.taranta.synopsis':
      'Taranta es el retrato del mundo alrededor de la fábrica Santana en Linares que sigue a sus habitantes cuando la ciudad experimenta un insólito proceso de reindustrialización. La película acompaña a cuatro jóvenes —dos linarenses y dos ingenieros chinos— justo cuando la antigua fábrica Santana, símbolo de la ciudad, se reabre. En ese contexto, los protagonistas debaten entre quedarse y apostar por la nueva era industrial o marcharse, arrastrando con ellos el orgullo obrero, la memoria de decadencia y la desconfianza generacional.',

    /* Films - Flores */
    'film.flores.year': 'En Financiación',
    'film.flores.type': 'Largometraje Ficción',
    'film.flores.language': 'Español',
    'film.flores.synopsis':
      'ROMA (25) vive en Helsinki pero se ve obligada a volver a Albacete porque su madre ha desaparecido. Tras ocho años sin ver a su padre lo encuentra demacrado, pero tan amargado como siempre. Descubre que tiene cáncer terminal. La tensión entre ambos es evidente, pero encuentran un punto en común: el enfado contra su madre, que sigue sin aparecer. Cuando María vuelve, Roma descubre que su padre quiere poner fin a su enfermedad. La desaparición de María era la única manera de forzar el regreso de Roma para estar presente en esa despedida.',

    /* Films - Audición */
    'film.audicion.year': 'En Financiación',
    'film.audicion.type': 'Cortometraje Ficción',
    'film.audicion.language': 'Español',
    'film.audicion.synopsis':
      'El día de la audición más importante de su vida, Rita no tiene con quién dejar a su hija enferma.',

    /* Films - Bienvenus */
    'film.bienvenus.year': '2018',
    'film.bienvenus.type': 'Cortometraje Documental',
    'film.bienvenus.language': 'Español - Francés',
    'film.bienvenus.synopsis':
      'Bienvenus es la historia de Nuria, una estudiante de traducción de 24 años, y de Salif, Chiaka y Pape, migrantes forzados procedentes de África que viven temporalmente en Granada. A través de su relación con Nuria descubriremos su realidad en una ciudad y un país extraño para ellos, las dificultades que sufren: las normales por su propia situación y las ocasionadas por los diferentes códigos culturales entre su país y España. Pero también, y sobre todo, el cambio que supone en la vida de estas personas el que alguien de esta cultura, en este caso Nuria, se implique a nivel emocional con ellos, les ayude a integrarse y conseguir sus objetivos, y en el camino ir descubriendo que son ellos los que tienen muchas más cosas que enseñarnos a nosotros de las que podríamos imaginar.',

    /* Films - Mi vida al principio */
    'film.mivida.year': '2022',
    'film.mivida.type': 'Cortometraje Ficción',
    'film.mivida.language': 'Español',
    'film.mivida.synopsis':
      'Es Nochevieja en un pequeño pueblo de la sierra de Madrid, inhóspito y helado. ROMA tiene 9 años y su sitio favorito es el regazo de su padre, RODOLFO. Pero el ambiente está enrarecido después de que su madre haya decidido no pasar las fiestas con la familia paterna. Cuando ROMA se viste de chico para cantar en medio de la celebración familiar descubre la intolerancia de su padre. Nada volverá a ser como antes.',

    /* Films - En la noche caminamos solos */
    'film.noche.year': '2024',
    'film.noche.type': 'Cortometraje Ficción',
    'film.noche.language': 'Español',
    'film.noche.synopsis':
      'Un rider sin bicicleta y una mujer vampiro caminan por la noche, abandonando el trabajo y la ciudad en busca de la libertad. Mientras, en su casa, un escritor se devana los sesos por tratar de entender y dirigir a estos personajes que cada vez están más lejos de su autoridad.',

    /* News */
    'news.title': 'Noticias',
    'news.subtitle': 'Últimas actualizaciones, premios y proyectos',
    'news.featured': 'Destacados',
    'news.all': 'Todas las noticias',
    'news.category.award': 'Premio',
    'news.category.competition': 'Competencia',
    'news.category.team': 'Equipo',
    'news.category.general': 'Noticia',
    'news.readmore': 'Leer más →',

    /* About */
    'about.title': 'Nosotras',
    'about.intro.title': 'Productora de cine independiente',
    'about.intro.text':
      'Productora de cine independiente con cinco años de trayectoria. El proyecto nace para acompañar los proyectos de jóvenes talentos con especial atención a temas relacionados con la mujer. Nuestros trabajos han sido candidatos a Premios Goya y seleccionados en diversos festivales nacionales e internacionales.',
    'about.philosophy.title': 'Nuestra filosofía',
    'about.philosophy.text':
      'Trabajamos desde la cercanía y el respeto al creador y a la obra. Nuestra forma de trabajar es siempre en coproducción y abordando muy pocos proyectos para poder prestarles el cariño necesario.',
    'about.team.title': 'Equipo',
    'about.team.ana.name': 'Ana Puentes',
    'about.team.ana.role': 'CEO de Verbena Films',
    'about.team.ana.description':
      'Ana Puentes, CEO de Verbena Films presta también el servicio de script doctor y ha trabajado con empresas como Tandem Films, Garde, La Incubadora, Abycine, Another Way Film Festival, Africanauan...',

    /* Footer */
    'footer.location': 'Ubicación',
    'footer.navigation': 'Navegación',
    'footer.contact': 'Contacto',
    'footer.follow': 'Síguenos',
    'footer.legal': 'Aviso legal y Protección de Datos',
    'footer.cookies': 'Cookies',
    'footer.copyright': '© 2025 Verbena Films. Todos los derechos reservados.',

    /* General */
    'common.language': 'Idioma',
    'common.spanish': 'Español',
    'common.english': 'English',
    'common.loading': 'Cargando...',
    'common.error': 'Error al cargar',
  },
  en: {
    /* Navigation */
    'nav.home': 'Home',
    'nav.films': 'Films',
    'nav.about': 'About',
    'nav.news': 'News',
    'nav.contact': 'Contact',

    /* Hero */
    'hero.title': 'Verbena Films',
    'hero.subtitle': 'Outstanding audiovisual productions',

    /* Films */
    'films.title': 'Our Films',
    'films.description':
      'A selection of our most outstanding audiovisual works',
    'films.type': 'Type',
    'films.director': 'Director',
    'films.year': 'Year',
    'films.country': 'Country',
    'films.language': 'Language',
    'films.writer': 'Writer and Director',
    'films.producers': 'Producers',
    'films.executiveProducer': 'Executive Producer',
    'films.production': 'Production',
    'films.synopsis': 'Synopsis',
    'films.awards': 'Awards & Festivals',
    'films.watch': 'Watch Trailer',

    /* Film Titles */
    'film.title.taranta': 'Taranta',
    'film.title.flores': 'Flowers for an Absent Mother',
    'film.title.audicion': 'Audition',
    'film.title.bienvenus': 'Bienvenus',
    'film.title.mivida': 'My Life at the Beginning',
    'film.title.noche': 'In the Night We Walk Alone',

    /* Films - Taranta */
    'film.taranta.year': 'In Production',
    'film.taranta.type': 'Documentary Feature Film',
    'film.taranta.language': 'Spanish',
    'film.taranta.synopsis':
      'Taranta is a portrait of the world around the Santana factory in Linares that follows its inhabitants as the city experiences an unusual process of reindustrialization. The film accompanies four young people—two from Linares and two Chinese engineers—just as the old Santana factory, a symbol of the city, reopens. In this context, the protagonists debate between staying and betting on the new industrial era or leaving, carrying with them working-class pride, the memory of decline, and generational mistrust.',

    /* Films - Flores */
    'film.flores.year': 'In Financing',
    'film.flores.type': 'Fiction Feature Film',
    'film.flores.language': 'Spanish',
    'film.flores.synopsis':
      "ROMA (25) lives in Helsinki but is forced to return to Albacete because her mother has disappeared. After eight years without seeing her father, she finds him emaciated but as bitter as ever. She discovers he has terminal cancer. The tension between them is evident, but they find common ground: anger towards her mother, who still hasn't appeared. When María returns, Roma discovers that her father wants to end his illness. María's disappearance was the only way to force Roma's return to be present at that farewell.",

    /* Films - Audición */
    'film.audicion.year': 'In Financing',
    'film.audicion.type': 'Fiction Short Film',
    'film.audicion.language': 'Spanish',
    'film.audicion.synopsis':
      'On the day of the most important audition of her life, Rita has no one to leave her sick daughter with.',

    /* Films - Bienvenus */
    'film.bienvenus.year': '2018',
    'film.bienvenus.type': 'Documentary Short Film',
    'film.bienvenus.language': 'Spanish - French',
    'film.bienvenus.synopsis':
      'Bienvenus is the story of Nuria, a 24-year-old translation student, and Salif, Chiaka, and Pape, forced migrants from Africa living temporarily in Granada. Through their relationship with Nuria, we will discover their reality in a city and country strange to them, the difficulties they face: the normal ones due to their situation and those caused by the different cultural codes between their country and Spain. But also, and above all, the change that occurs in the lives of these people when someone from this culture, in this case Nuria, becomes emotionally involved with them, helps them integrate and achieve their goals, and along the way discovers that they have many more things to teach us than we could imagine.',

    /* Films - Mi vida al principio */
    'film.mivida.year': '2022',
    'film.mivida.type': 'Fiction Short Film',
    'film.mivida.language': 'Spanish',
    'film.mivida.synopsis':
      "It's New Year's Eve in a small town in the Madrid mountains, inhospitable and frozen. ROMA is 9 years old and her favorite place is her father RODOLFO's lap. But the atmosphere is tense after her mother decided not to spend the holidays with the paternal family. When ROMA dresses as a boy to sing in the middle of the family celebration, she discovers her father's intolerance. Nothing will ever be the same again.",

    /* Films - En la noche caminamos solos */
    'film.noche.year': '2024',
    'film.noche.type': 'Fiction Short Film',
    'film.noche.language': 'Spanish',
    'film.noche.synopsis':
      'A delivery rider without a bicycle and a vampire woman walk through the night, leaving work and the city in search of freedom. Meanwhile, at home, a writer racks his brain trying to understand and direct these characters who are increasingly beyond his authority.',

    /* News */
    'news.title': 'News',
    'news.subtitle': 'Latest updates, awards and projects',
    'news.featured': 'Featured',
    'news.all': 'All news',
    'news.category.award': 'Award',
    'news.category.competition': 'Competition',
    'news.category.team': 'Team',
    'news.category.general': 'News',
    'news.readmore': 'Read more →',

    /* About */
    'about.title': 'About Us',
    'about.intro.title': 'Independent film production company',
    'about.intro.text':
      "Independent film production company with five years of experience. The project was born to support young talents' projects with special attention to women-related topics. Our works have been nominated for Goya Awards and selected in various national and international festivals.",
    'about.philosophy.title': 'Our philosophy',
    'about.philosophy.text':
      'We work with closeness and respect for the creator and the work. Our way of working is always in co-production and tackling very few projects so we can give them the necessary care.',
    'about.team.title': 'Team',
    'about.team.ana.name': 'Ana Puentes',
    'about.team.ana.role': 'CEO of Verbena Films',
    'about.team.ana.description':
      'Ana Puentes, CEO of Verbena Films, also provides script doctor services and has worked with companies such as Tandem Films, Garde, La Incubadora, Abycine, Another Way Film Festival, Africanauan...',

    /* Footer */
    'footer.location': 'Location',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow',
    'footer.legal': 'Legal Notice & Data Protection',
    'footer.cookies': 'Cookies',
    'footer.copyright': '© 2025 Verbena Films. All rights reserved.',

    /* General */
    'common.language': 'Language',
    'common.spanish': 'Español',
    'common.english': 'English',
    'common.loading': 'Loading...',
    'common.error': 'Error loading content',
  },
};

/**
 * Obtiene la traducción para una clave específica
 */
export function t(key: string, lang: Language = 'es'): string {
  return translations[lang]?.[key] || translations['es']?.[key] || key;
}

/**
 * Obtiene el idioma guardado en localStorage (DEFAULT: español)
 */
export function getLanguage(): Language {
  if (typeof window === 'undefined') return 'es';

  try {
    const stored = localStorage.getItem('verbena-lang');
    if (stored && (stored === 'es' || stored === 'en')) {
      return stored as Language;
    }

    // DEFAULT: Español
    const defaultLang: Language = 'es';
    localStorage.setItem('verbena-lang', defaultLang);
    return defaultLang;
  } catch {
    return 'es';
  }
}

/**
 * Guarda el idioma seleccionado y recarga la página
 */
export function setLanguage(lang: Language): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem('verbena-lang', lang);
    window.location.reload();
  } catch (error) {
    console.error('Error setting language:', error);
  }
}
