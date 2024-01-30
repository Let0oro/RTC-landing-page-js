type imgAndName = { name: string; imgSrc?: string; src?: string };

interface DBGLOBAL {
  nav: {
    recursos: {
      recursos_para_escritores_I: Array<string>;
      recursos_para_escritores_II: Array<string>;
    };
    concursos: {
      concursos_literarios_I: Array<imgAndName>;
      concursos_literarios_II: Array<imgAndName>;
    };
    herramientas: {
      herramientas_promocion_I: Array<string>;
      herramientas_promocion_II: Array<string>;
    };
    cursos: {
      información: Array<imgAndName>;
      oficios_de_la_edición: Array<imgAndName>;
      escritura_creativa_I: Array<imgAndName>;
      escritura_creativa_II: Array<imgAndName>;
    };
    servicios: Array<imgAndName>;
    publicar: unknown;
    empleo: unknown;
    biografias: unknown;
    libros: unknown;
  };
  body: {
    initialImg: string;
    secundaryImg: string;
    title: string;
    subtle: string;
    p1: string;
    p2: string;
    secciones_recomendadas: Array<{
      img: string;
      title: string;
      subtle: string;
      back: {
        text: string[];
        linkText: string;
        linkSrc: string;
      };
    }>;
    cursos: {
      date: string;
      dateText: string;
      dateSrc: string;
      newCourses: Array<{
        name: string;
        description: string;
      }>;
      finalButton: string;
      appTitle: string;
      appButtonSrc: string;
      appButtonImgSrc: string;
    };
  };
  footer: {
    secciones: Array<{ name: string; src: string }>;
    datos_de_contacto: Array<string>;
    sub_footer: Array<string>
  };
}

const dbGlobal: DBGLOBAL = {
  nav: {
    recursos: {
      recursos_para_escritores_I: [
        "Agentes Literarios",
        "Asociaciones de escritores",
        "Becas, ayudas públicas",
        "Bibliotecas digitales",
        "Diccionarios digitales",
        "Colaboraciones",
        "Bibliografía",
      ],
      recursos_para_escritores_II: [
        "Orientación legal (Contratos, registro, retribuciones)",
        "Revistas literarias",
        "Editoriales (contacto)",
        "Software para escritores",
        "Prensa (directorio)",
        "Artículos de interés",
      ],
    },
    concursos: {
      concursos_literarios_I: [
        { name: "Ver todos", imgSrc: "https://www.escritores.org/images/icones/accordion.png" },
        { name: "Novela", imgSrc: "https://www.escritores.org/images/icones/button-group.png" },
        { name: "Cuento, relato, microrrelato...", imgSrc: "https://www.escritores.org/images/icones/carousel.png" },
        { name: "Traducción, periodismo...", imgSrc: "https://www.escritores.org/images/icones/clip.png" },
        { name: "Poesía", imgSrc: "https://www.escritores.org/images/icones/button.png" },
        { name: "Infantil y juvenil", imgSrc: "https://www.escritores.org/images/icones/icons.png" },
        { name: "Teatro, Guion, Cómic...", imgSrc: "https://www.escritores.org/images/icones/copy.png" },
        { name: "Para obras publicadas", imgSrc: "https://www.escritores.org/images/icones/flipbox.png" },
      ],
      concursos_literarios_II: [
        { name: "Email @", imgSrc: "https://www.escritores.org/images/icones/ajax-contact.png" },
        { name: "Entrados hoy", imgSrc: "https://www.escritores.org/images/icones/countdown.png" },
        { name: "Por país", imgSrc: "https://www.escritores.org/images/icones/image.png" },
        { name: "Otros idiomas", imgSrc: "https://www.escritores.org/images/icones/image-lightbox.png" },
        { name: "Quejas, avisos", imgSrc: "https://www.escritores.org/images/icones/gallery.png" },
        { name: "Información de utilidad", imgSrc: "https://www.escritores.org/images/icones/cta.png" },
        { name: "Resultados", imgSrc: "https://www.escritores.org/images/icones/doc.png" },
        { name: "Búsquedas", imgSrc: "https://www.escritores.org/images/icones/gmap.png" },
      ],
    },
    herramientas: {
      herramientas_promocion_I: [
        "Promoción",
        "Espacio  libros",
        "Alta en buscadores",
        "Crear un blog",
        "Vídeos",
        "Otros espacios",
        "Los medios",
        "Directorio medios",
      ],
      herramientas_promocion_II: [
        "Conocer al autor",
        "- Vídeos (entrevistas)",
        "- Vídeos (lecturas, presentaciones)",
        "Inscripción de vídeos",
        "Redes sociales",
        "Concursos literarios",
        "Revistas literarias",
        "Distribución",
      ],
    },
    cursos: {
      información: [
        { name: "Búsquedas", imgSrc: "str" },
        { name: "Información Cursos", imgSrc: "https://www.escritores.org/images/icones/button.png" },
        {
          name: "Fechas de inicio cursos",
          imgSrc: "https://www.escritores.org/images/icones/animated-headlines.png",
        },
        { name: "ENTRADA cursos", imgSrc: "https://www.escritores.org/images/icones/button-group.png" },
        { name: "PROFESORADO", imgSrc: "https://www.escritores.org/images/icones/carousel.png" },
        { name: "* INSCRIPCIONES", imgSrc: "https://www.escritores.org/images/icones/gallery.png" },
      ],
      oficios_de_la_edición: [
        { name: "Formación de Correctores", imgSrc: "https://www.escritores.org/images/icones/icon4.png" },
        { name: "Lectura Crítica", imgSrc: "https://www.escritores.org/images/icones/icon3.png" },
        { name: "Formación de Lectores", imgSrc: "https://www.escritores.org/images/icones/icon6.png" },
        { name: "Traducción Literaria", imgSrc: "https://www.escritores.org/images/icones/flipbox.png" },
        { name: "Traducción Guion", imgSrc: "https://www.escritores.org/images/icones/gallery.png" },
      ],
      escritura_creativa_I: [
        { name: "Inicio a la Creación Literaria", imgSrc: "https://www.escritores.org/images/icones/image.png" },
        { name: "Creación Narrativa", imgSrc: "https://www.escritores.org/images/icones/image-lightbox.png" },
        { name: "Cuento", imgSrc: "https://www.escritores.org/images/icones/image-content.png" },
        { name: "Novela - Nivel Inicial", imgSrc: "https://www.escritores.org/images/icones/icons.png" },
        { name: "Novela - Nivel Avanzado", imgSrc: "https://www.escritores.org/images/icones/gmap.png" },
        { name: "Novela Romántica", imgSrc: "https://www.escritores.org/images/icones/icon-icon.png" },
        { name: "Poesía", imgSrc: "https://www.escritores.org/images/icones/gallery.png" },
        { name: "Escribir Ensayo", imgSrc: "https://www.escritores.org/images/icones/flipbox.png" },
        { name: "Redacción y Estilo", imgSrc: "https://www.escritores.org/images/icones/feature-box.png" },
        { name: "Escritura Autobiográfica", imgSrc: "https://www.escritores.org/images/icones/doc.png" },
        { name: "Escritura Terapéutica", imgSrc: "https://www.escritores.org/images/icones/copy.png" },
      ],
      escritura_creativa_II: [
        { name: "Microrrelato", imgSrc: "https://www.escritores.org/images/icones/icon5.png" },
        { name: "Narrativa Histórica", imgSrc: "https://www.escritores.org/images/icones/image-content.png" },
        { name: "Construcción de la emoción", imgSrc: "https://www.escritores.org/images/icones/accordion.png" },
        { name: "- Una imagen y mil palabras", imgSrc: "https://www.escritores.org/images/icones/image-lightbox.png" },
        { name: "Construcción del conflicto", imgSrc: "https://www.escritores.org/images/icones/accordion.png" },
        { name: "- Relatos Policíacos", imgSrc: "https://www.escritores.org/images/icones/icon4.png" },
      ],
    },
    servicios: [
      { name: "Informes de Lectura", imgSrc: "../../assets/album.png" },
      { name: "Correcciones", imgSrc: "../../assets/arco.png" },
      { name: "Maquetación eBooks", imgSrc: "../../assets/flecha.png" },
      { name: "Maquetación Papel", imgSrc: "../../assets/tira.png" },
    ],
    publicar: { name: "publicar", src: "https://www.escritores.org/publicar" },
    empleo: {
      name: "empleo",
      src: "https://www.escritores.org/ibuscas-empleo",
    },
    biografias: {
      name: "biografías",
      src: "https://www.escritores.org/biografias",
    },
    libros: { name: "libros", src: "https://www.escritores.org/libros/" },
  },
  body: {
    initialImg:
      "https://www.escritores.org/images/2019/11/27/header-home-escritores.jpg",
    secundaryImg: "../../assets/main_aid.svg",
    title: "Escritores.org",
    subtle: "Recursos para escritores",
    p1: "La página que necesitan todos los que se dedican a la creación literaria (I World)",
    p2: "No basta para convertirse en un as de la literatura, pero esta página puede ser un buen apoyo (El País)",
    secciones_recomendadas: [
      {
        img: "https://www.escritores.org/images/2019/11/18/2390-1.jpg",
        title: "Concursos Literarios",
        subtle: "Información - Bases completas",
        back: {
          text: [
            "Accede a la página de referencia, con la más completa información sobre convocatorias de Concursos Literarios. Semanalmente informamos de más de 100 convocatorias (España y Latinoamérica).",
          ],
          linkText: "Acceder",
          linkSrc:
            "https://www.escritores.org/concursos/concursos-1/concursos-literarios",
        },
      },
      {
        img: "https://www.escritores.org/images/2019/11/18/llib3544.jpg",
        title: "Cursos",
        subtle: "15/01/2024 - Inicio nuevas convocatorias",
        back: {
          text: [
            "OFICIOS DE LA EDICIÓN: correctores, lectores, traductores..",
            "CREACIÓN LITERARIA: novela, cuento, poesía, redacción...",
          ],
          linkText: "Más información",
          linkSrc:
            "https://www.escritores.org/curso/cursos-informacion/pagina-de-inicio-cursos",
        },
      },
      {
        img: "https://www.escritores.org/images/2019/09/25/eduardogaleano2.jpg",
        title: "Biografías",
        subtle: "Biografías de escritores",
        back: {
          text: ["Biografías de escritores"],
          linkText: "Ir a la sección",
          linkSrc: "https://www.escritores.org/biografias",
        },
      },
      {
        img: "https://www.escritores.org/images/2019/10/03/29809091.jpg",
        title: "Recursos",
        subtle: "Recursos para escritores",
        back: {
          text: [
            "Recursos para escritores",
            "Agentes, editoriales, asociaciones, becas, orientación legal...",
          ],
          linkText: "Ir a la sección",
          linkSrc:
            "https://www.escritores.org/component/sppagebuilder/?view=page&id=65&Itemid=0",
        },
      },
      {
        img: "https://www.escritores.org/images/2019/11/15/761092.jpg",
        title: "Publicar",
        subtle: "¿Buscas publicar?",
        back: {
          text: [
            "Si deseas publicar, a poder ser con alguna repercusión, y no eres millonario o personaje mediático, te adjuntamos este informe que entendemos puede resultar de interés para ahorrarte tiempo, dinero y alguna desilusión.",
          ],
          linkText: "Acceder",
          linkSrc: "https://www.escritores.org/publicar",
        },
      },
      {
        img: "https://www.escritores.org/images/2019/09/25/llib5341.jpg",
        title: "Libros",
        subtle: "Publicita tus libros y perfil personal",
        back: {
          text: [
            "Diariamente consultan nuestra página miles de personas. Publicita, sin coste alguno, tus libros y tu perfil personal.",
          ],
          linkText: "Más información",
          linkSrc: "https://www.escritores.org/libros/",
        },
      },
    ],
    cursos: {
      date: "15/01/2024",
      dateText: "Inicio nuevas convocatorias",
      dateSrc:
        "https://www.escritores.org/curso/cursos-informacion/pagina-de-inicio-cursos",
      newCourses: [
        {
          name: "OFICIOS DE LA EDICIÓN",
          description: "correctores, lectores, traductores...",
        },
        {
          name: "CREACIÓN LITERARIA",
          description: "novela, cuento, poesía, redacción...",
        },
      ],
      finalButton: "Más información",
      appTitle: "APP CONCURSOS LITERARIOS (nueva versión)",
      appButtonImgSrc: "https://www.escritores.org/images/googleplay.png",
      appButtonSrc:
        "https://www.escritores.org/recursos-para-escritores/concursos-literario/7737-apps-concursos-literarios",
    },
  },
  footer: {
    secciones: [
      { name: "Portada", src: "https://www.escritores.org/index.php" },
      {
        name: "Recursos",
        src: "https://www.escritores.org/recursos-para-escritores",
      },
      {
        name: "Herramientas",
        src: "https://www.escritores.org/herramientas-de-promocion/herramientas-de-promocion/promocion",
      },
      {
        name: "Cursos",
        src: "https://www.escritores.org/curso/cursos-informacion/pagina-de-inicio-cursos",
      },
      { name: "Editar", src: "https://www.escritores.org/publicar" },
      { name: "Empleo", src: "https://www.escritores.org/ibuscas-empleo" },
      { name: "Asesoría", src: "https://www.escritores.org/asesoria" },
      { name: "Biografías", src: "https://www.escritores.org/biografias" },
      {
        name: "Concursos",
        src: "https://www.escritores.org/concursos/concursos-1/concursos-literarios",
      },
      { name: "Libros", src: "https://www.escritores.org/libros/" },
    ],
    datos_de_contacto: [
      "Escritores.org",
      "CIF:  B61195087",
      "Email: info@escritores.org",
      "Web: www.escritores.org",
      "© 1996 - 2023",
    ],
    sub_footer: [
      "Boletín Informativo",
      "Propiedad Intelectual",
      '"Cookies"',
      "Privacidad",
      "Uso y Contratación",
    ],
  },
};

export default dbGlobal;
