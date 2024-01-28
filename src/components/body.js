import db from "../db/database.ts";
import "./body.css";

const { body: bodyObj } = db;

class Body {
  static mainImage() {
    const firstChild = document.querySelector(".main_image");
    const { initialImg, secundaryImg, title, subtle, p1, p2 } = bodyObj;
    // Creación de las imagenes y el div contenedor
    const imgDiv = document.createElement("div");
    imgDiv.className = "main_image-back";
    const fImg = document.createElement("img");
    fImg.src = initialImg;
    fImg.alt = "hand writing";
    const sImg = document.createElement("img");
    sImg.src = secundaryImg;
    sImg.alt = "broken page";
    imgDiv.appendChild(...[fImg, sImg]);
    firstChild.appendChild(imgDiv);
    // Creación de div de títulos y párrafo
    const textDiv = document.createElement("div");
    textDiv.className = "main_image-text";
    // Creamos div interno para títulos
    const titleDiv = document.createElement("div");
    titleDiv.appendChild(
      document.createElement("h3").appendChild(document.createTextNode(title))
    );
    titleDiv.appendChild(
      document.createElement("p").appendChild(document.createTextNode(subtle))
    );
    textDiv.appendChild(titleDiv);
    // Creamos div interno para párrafos
    const pharafDiv = document.createElement("div");
    pharafDiv.appendChild(
      document.createElement("p").appendChild(document.createTextNode(p1))
    );
    pharafDiv.appendChild(
      document.createElement("p").appendChild(document.createTextNode(p2))
    );
    textDiv.appendChild(pharafDiv);
    // Añadimos todos los archivos al body
    firstChild.appendChild(textDiv);
  }

  static recommendedSections() {
    const recomSections = document.querySelector(".recommended_sections");
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
                        <div card_back--top-text>    
                            <h4>${title}</h4>
                            <p>${subtle}</p>
                        </div>
                    </div>
                    <p>${text}</p>
                    <a href='${linkSrc}'>${linkText}</a>  
                </div>
            </div>
        `;
        recomSections.appendChild(scene);
      }
    );
  }
}

document.querySelector(".main_image");
Body.mainImage();
Body.recommendedSections();
