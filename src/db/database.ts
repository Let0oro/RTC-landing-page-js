
type imgAndName = {name: string; imgSrc: string};

interface DBGLOBAL {
  header: {
    logo: {
      img: string;
      alt: string;
    };
    contact: {
      fcbImg: string;
      fcbAlt: string;
      twitImg: string;
      twitAlt: string;
      instaImg: string;
      instaAlt: string;
      rssImg: string;
      rssAlt: string;
    };
  };
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
      información: Array<string>;
      oficios_de_la_edición: Array<string>;
      escritura_creativa_I: Array<string>;
      escritura_creativa_II: Array<string>;
    };
    servicios: Array<string>;
    publicar: unknown;
    empleo: unknown;
    biografías: unknown;
    libros: unknown;
  };
  main: {
    initialImg: string;
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
      date: Date;
      dateText: string;
      newCourses: Array<
        {
          name: string;
          description: string;
        }
      >;
      finalButton: string;
      appTitle: string;
      appButtonSrc: string;
      appButtonImgSrc: string;
    };
  };
  footer: {
    secciones: Array<{name: string; src: string}>;
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
  header: {
    logo: {
      img: "https://www.escritores.org/images/logos/logo-escritoresorg-v1.png",
      alt: "escritores.org logo",
    },
    contact: {
      fcbImg: "https://www.svgrepo.com/show/3885/facebook.svg",
      fcbAlt: "facebook logo",
      twitImg: "https://www.svgrepo.com/show/513008/twitter-154.svg",
      twitAlt: "twitter logo",
      instaImg: "https://www.svgrepo.com/show/521711/instagram.svg",
      instaAlt: "instagram logo",
      rssImg: "https://www.svgrepo.com/show/532880/rss.svg",
      rssAlt: "rss logo",
    },
  },
  nav: {
    recursos: {
      recursos_para_escritores_I: [
        'Agentes Literarios',
        'Asociaciones de escritores',
        'Becas, ayudas públicas',
        'Bibliotecas digitales',
        'Diccionarios digitales',
        'Colaboraciones',
        'Bibliografía',
      ],
      recursos_para_escritores_II: [
        'Agentes Literarios',
        'Asociaciones de escritores',
        'Becas, ayudas públicas',
        'Bibliotecas digitales',
        'Diccionarios digitales',
        'Colaboraciones',
        'Bibliografía',
      ],
    },
    concursos: {
      concursos_literarios_I: [
        {name: 'string', imgSrc: 'string'}
      ],
      concursos_literarios_II: [],
    },
    herramientas: {
      herramientas_promocion_I: [],
      herramientas_promocion_II: [],
    },
    cursos: {
      información: [],
      oficios_de_la_edición: [],
      escritura_creativa_I: [],
      escritura_creativa_II: [],
    },
    servicios: [],
    publicar: "publicar",
    empleo: "empleo",
    biografías: "biografías",
    libros: "libros",
  },
  main: {
    initialImg: "",
    title: "",
    subtle: "",
    p1: "",
    p2: "",
    secciones_recomendadas: [
      {
        img: "",
        title: "",
        subtle: "",
        back: {
          text: [],
          linkText: "",
          linkSrc: "",
        },
      },
    ],
    cursos: {
      date: new Date("2024-01-15T00:00:00.000Z"),
      dateText: "Inicio nuevas convocatorias",
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
      { name: "Recursos", src: "https://www.escritores.org/recursos-para-escritores" },
      { name: "Herramientas", src: "https://www.escritores.org/herramientas-de-promocion/herramientas-de-promocion/promocion" },
      { name: "Cursos", src: "https://www.escritores.org/curso/cursos-informacion/pagina-de-inicio-cursos" },
      { name: "Editar", src: "https://www.escritores.org/publicar" },
      { name: "Empleo", src: "https://www.escritores.org/ibuscas-empleo" },
      { name: "Asesoría", src: "https://www.escritores.org/asesoria" },
      { name: "Biografías", src: "https://www.escritores.org/biografias" },
      { name: "Concursos", src: "https://www.escritores.org/concursos/concursos-1/concursos-literarios" },
      { name: "Libros", src: "https://www.escritores.org/libros/" },
    ],
    datos_de_contacto: {
      name: 'Escritores.org',
      cif: 'CIF:  B61195087',
      email: 'Email: info@escritores.org',
      web: 'Web: www.escritores.org',
      copyright: '© 1996 - 2023',
    },
  },
};
