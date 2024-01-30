import db from "../db/database.ts";
import "./footer.css";

const { footer: footObj } = db;
const foot = document.querySelector("footer");
const interSec =  document.querySelector('.interesting');

class Footer {

  static supFooter() {
    const {secciones, datos_de_contacto: contact} = footObj;
    const [seccArt, contactArt] = Array(2).fill().map(el => document.createElement('article'));
    const objects = [secciones, contact];
    const arrElem = [seccArt, contactArt] 

    arrElem.map((elem, index) => {
        elem.innerHTML = 
        `
        <small>${['Secciones', 'Datos de contacto'][index]}</small>
        <ul>
        ${objects[index]
            .map(li => !!index ? (`<li>${li}</li>`) : (`<li><a href="${li.src}">${li.name}</a></li>`))
            .join('\n')
        }
        </ul>
        `
        interSec.appendChild(arrElem[index])
    })
  }

  static subFooter() {
    const { sub_footer: subf } = footObj;
    const subfootDiv = document.createElement('article');
    subfootDiv.className = 'subfoot'
    subfootDiv.appendChild(
      document
        .createElement("p")
        .appendChild(document.createTextNode(`${subf.join(" | ")}`))
    );
    foot.appendChild(subfootDiv);
  }
}

Footer.supFooter();
Footer.subFooter();
