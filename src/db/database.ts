type imgAndName = { name: string; imgSrc?: string, src?: string };

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
    datos_de_contacto: {
      name: string;
      cif: string;
      email: string;
      web: string;
      copyright: string;
    };
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
        { name: "Ver todos", imgSrc: "string" },
        { name: "Novela", imgSrc: "string" },
        { name: "Cuento, relato, microrrelato...", imgSrc: "string" },
        { name: "Traducción, periodismo...", imgSrc: "string" },
        { name: "Poesía", imgSrc: "string" },
        { name: "Infantil y juvenil", imgSrc: "string" },
        { name: "Teatro, Guion, Cómic...", imgSrc: "string" },
        { name: "Para obras publicadas", imgSrc: "string" },
      ],
      concursos_literarios_II: [
        { name: "Para obras publicadas", imgSrc: "string" },
        { name: "Email @", imgSrc: "str" },
        { name: "Entrados hoy", imgSrc: "str" },
        { name: "Por país", imgSrc: "str" },
        { name: "Otros idiomas", imgSrc: "str" },
        { name: "Quejas, avisos", imgSrc: "str" },
        { name: "Información de utilidad", imgSrc: "str" },
        { name: "Resultados", imgSrc: "str" },
        { name: "Búsquedas", imgSrc: "str" },
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
        { name: "Información CursosInformación Cursos", imgSrc: "str" },
        {
          name: "Fechas de inicio cursosFechas de inicio cursos",
          imgSrc: "str",
        },
        { name: "ENTRADA cursosENTRADA cursos", imgSrc: "str" },
        { name: "PROFESORADOPROFESORADO", imgSrc: "str" },
        { name: "* INSCRIPCIONES* INSCRIPCIONES", imgSrc: "str" },
      ],
      oficios_de_la_edición: [
        { name: "Formación de Correctores", imgSrc: "srr" },
        { name: "Lectura Crítica", imgSrc: "srr" },
        { name: "Formación de Lectores", imgSrc: "srr" },
        { name: "Traducción Literaria", imgSrc: "srr" },
        { name: "Traducción Guion", imgSrc: "srr" },
      ],
      escritura_creativa_I: [
        { name: "Inicio a la Creación Literaria", imgSrc: "str" },
        { name: "Creación Narrativa", imgSrc: "str" },
        { name: "Cuento", imgSrc: "str" },
        { name: "Novela - Nivel Inicial", imgSrc: "str" },
        { name: "Novela - Nivel Avanzado", imgSrc: "str" },
        { name: "Novela Romántica", imgSrc: "str" },
        { name: "Poesía", imgSrc: "str" },
        { name: "Escribir Ensayo", imgSrc: "str" },
        { name: "Redacción y Estilo", imgSrc: "str" },
        { name: "Escritura Autobiográfica", imgSrc: "str" },
        { name: "Escritura Terapéutica", imgSrc: "str" },
      ],
      escritura_creativa_II: [
        { name: "Microrrelato", imgSrc: "str" },
        { name: "Narrativa Histórica", imgSrc: "str" },
        { name: "Construcción de la emoción", imgSrc: "str" },
        { name: "- Una imagen y mil palabras", imgSrc: "str" },
        { name: "Construcción del conflicto", imgSrc: "str" },
        { name: "- Relatos Policíacos", imgSrc: "str" },
      ],
    },
    servicios: [
      { name: "Informes de Lectura", imgSrc: "str" },
      { name: "Correcciones", imgSrc: "str" },
      { name: "Maquetación eBooks", imgSrc: "str" },
      { name: "Maquetación Papel", imgSrc: "str" },
    ],
    publicar: {name: 'publicar', src: 'https://www.escritores.org/publicar'},
    empleo: {name: 'empleo', src: 'https://www.escritores.org/ibuscas-empleo'},
    biografias: {name: 'biografías', src: 'https://www.escritores.org/biografias'},
    libros: {name: 'libros', src: 'https://www.escritores.org/libros/'},
  },
  body: {
    initialImg: "https://www.escritores.org/images/2019/11/27/header-home-escritores.jpg",
    secundaryImg: '../../assets/main_aid.svg',
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
            'Accede a la página de referencia, con la más completa información sobre convocatorias de Concursos Literarios. Semanalmente informamos de más de 100 convocatorias (España y Latinoamérica).',
          ],
          linkText: "Acceder",
          linkSrc: "https://www.escritores.org/concursos/concursos-1/concursos-literarios",
        },
      },
      {
        img: "https://www.escritores.org/images/2019/11/18/llib3544.jpg",
        title: "Cursos",
        subtle: "15/01/2024 - Inicio nuevas convocatorias",
        back: {
          text: [
            'OFICIOS DE LA EDICIÓN: correctores, lectores, traductores..',
            'CREACIÓN LITERARIA: novela, cuento, poesía, redacción...',
          ],
          linkText: "Más información",
          linkSrc: "https://www.escritores.org/curso/cursos-informacion/pagina-de-inicio-cursos",
        },
      },
      {
        img: "https://www.escritores.org/images/2019/09/25/eduardogaleano2.jpg",
        title: "Biografías",
        subtle: "Biografías de escritores",
        back: {
          text: ['Biografías de escritores'],
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
            'Recursos para escritores',
            'Agentes, editoriales, asociaciones, becas, orientación legal...',
          ],
          linkText: "Ir a la sección",
          linkSrc: "https://www.escritores.org/component/sppagebuilder/?view=page&id=65&Itemid=0",
        },
      },
      {
        img: "https://www.escritores.org/images/2019/11/15/761092.jpg",
        title: "Publicar",
        subtle: "¿Buscas publicar?",
        back: {
          text: ['Si deseas publicar, a poder ser con alguna repercusión, y no eres millonario o personaje mediático, te adjuntamos este informe que entendemos puede resultar de interés para ahorrarte tiempo, dinero y alguna desilusión.'],
          linkText: "Acceder",
          linkSrc: "https://www.escritores.org/publicar",
        },
      },
      {
        img: "https://www.escritores.org/images/2019/09/25/llib5341.jpg",
        title: "Libros",
        subtle: "Publicita tus libros y perfil personal",
        back: {
          text: ['Diariamente consultan nuestra página miles de personas. Publicita, sin coste alguno, tus libros y tu perfil personal.'],
          linkText: "Más información",
          linkSrc: "https://www.escritores.org/libros/",
        },
      },
    ],
    cursos: {
      date: '15/01/2024',
      dateText: "Inicio nuevas convocatorias",
      dateSrc: "https://www.escritores.org/curso/cursos-informacion/pagina-de-inicio-cursos",
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
    datos_de_contacto: {
      name: "Escritores.org",
      cif: "CIF:  B61195087",
      email: "Email: info@escritores.org",
      web: "Web: www.escritores.org",
      copyright: "© 1996 - 2023",
    },
  },
};

export default dbGlobal;