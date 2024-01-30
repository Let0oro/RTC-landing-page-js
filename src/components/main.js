import db from "../db/database.ts";
import "./main.css";

const { body: bodyObj } = db;

class Body {
  static mainImage() {
    const firstChild = document.querySelector(".main_image");
    const { initialImg, secundaryImg, title, subtle, p1, p2 } = bodyObj;
    // Creación de las imagenes y el div contenedor
    const imgDiv = document.createElement("div");
    imgDiv.className = "main_image-back";
    const fImg = document.createElement("img");
    fImg.className = 'main_image-back__hand'
    fImg.src = initialImg;
    fImg.alt = "hand writing";
    const sImg = document.createElement("img");
    sImg.className = 'main_image-back__paper'
    sImg.src = secundaryImg;
    sImg.alt = "broken page";
    [fImg, sImg].forEach(i => imgDiv.appendChild(i));
    firstChild.appendChild(imgDiv);
    // Creación de div de títulos y párrafo
    const textDiv = document.createElement("div");
    textDiv.className = "main_image-text";
    // Creamos div interno para títulos
    const titleDiv = document.createElement("div");
    const h3 = document.createElement('h3')
    h3.appendChild(document.createTextNode(title))
    titleDiv.appendChild(h3);
    const p = document.createElement('p')
    p.appendChild(document.createTextNode(subtle))
    titleDiv.appendChild(p);
    textDiv.appendChild(titleDiv);
    // Creamos div interno para párrafos
    const pharafDiv = document.createElement("div");
    const phrP1 = document.createElement('p');
    phrP1.appendChild(document.createTextNode(p1))
    const phrP2 = document.createElement('p');
    phrP2.appendChild(document.createTextNode(p2))
    pharafDiv.appendChild(phrP1);
    pharafDiv.appendChild(phrP2);
    textDiv.appendChild(pharafDiv);
    // Añadimos todos los archivos al body
    firstChild.appendChild(textDiv);
  }

  static recommendedSections() {
    const recomSections = document.querySelector(".recommended_cards");
    const { secciones_recomendadas } = bodyObj;
    secciones_recomendadas.forEach(
      ({ img, title, subtle, back: { text, linkText, linkSrc } }) => {
        const scene = document.createElement("div");
        scene.className = "scene_card";
        scene.innerHTML = `
            <div class='scene_card--card'>
                <div class="card__face card__face--front">
                    <div class="card__face--img">
                        <img src='${img}' alt='${title.split(" ")[0]}'></img>
                    </div>
                    <h4>${title}</h4>
                    <p>${subtle}</p>
                </div>
                <div class="card__face card__face--back">
                    <div class='card_back--top'>
                        <div class='card_back--top-img'>    
                        <img src="${img}"></img>
                        </div>
                        <div class='card_back--top-text'>    
                            <h4>${title}</h4>
                            <p>${subtle}</p>
                        </div>
                    </div>
                    <div class="card_back--text">
                        ${text.map(v => `<p>${v}</p>`).join('\n')}
                        <a href='${linkSrc}'>${linkText}</a>  
                    </div>
                </div>
            </div>
        `;
        recomSections.appendChild(scene);
      }
    );
  }

  static courses() {
    const {
      appButtonImgSrc,
      appButtonSrc,
      appTitle,
      date,
      dateText,
      dateSrc,
      finalButton,
      newCourses,
    } = bodyObj.cursos;

    const courseSection = document.querySelector('.courses');
    courseSection.innerHTML = `
    <h2>Cursos</h2>
    <div class="courses_selection">
        <a href="${dateSrc}">${date} - ${dateText.trim()}</a>
        <div class='new_courses'>
            ${newCourses.map(({name, description}, i) => (
                `<p key="course-${i}"><span>${name.toUpperCase()}</span>: ${description}</p>`
            )).join('\n')}
        </div>
        <a>${finalButton}</a>
    </div>
    <div class="courses_app">
        <h3>${appTitle}</h3>
        <a href="${appButtonSrc}">
            <img src="${appButtonImgSrc}" alt="Google play Escritores.org"/>
        </a>
    </div>
    `
    
  }
}

Body.mainImage();
Body.recommendedSections();
Body.courses();
