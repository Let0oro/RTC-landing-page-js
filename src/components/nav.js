import db from '../db/database.ts';
import './nav.css';

const { nav: navObj } = db;

const titles = Object.keys(navObj);

class navVar {
    static addTitle(name, className, src, obj, elem) {
        const container = document.createElement('li'); 
        let title;
        if (!!src) {
            title = document.createElement('a');
            container.appendChild(title);
            title.href = String(src);
        } else {
            title = document.createElement('span');
            container.appendChild(title);
            title.setAttribute('alt-menu', 'true');
            this.addCollapse(container, obj);
        };
        title.className = className;
        name = String(name)[0].toUpperCase() + String(name).substring(1);
        title.appendChild(document.createTextNode(name));
        elem.firstElementChild.appendChild(container);
    }

    static addCollapse(container, obj) {
        const menu = document.createElement('div');
        menu.className = 'expand-tit';
        const parts = Object.keys(obj);
        for (let i = 0; i < parts.length; i++){
            let name = !!!isNaN(Number(parts[i])) ? obj[parts[i]].name : parts[i];
            const partElem = document.createElement('div');
            partElem.className = 'expand-menu-part';
            const subObj = obj[name];
            name = String(name).replaceAll('_', ' ').toUpperCase();
            if (!!!isNaN(parts[i])) {
                name = String(name).toLowerCase();
                partElem.appendChild(document.createElement('p').appendChild(document.createTextNode(name)));
            } else {
                partElem.appendChild(document.createElement('h2').appendChild(document.createTextNode(name)));
                this.addSubmenus(partElem, subObj);
            }
            menu.appendChild(partElem);
        }

        container.appendChild(menu);
    }

    static addSubmenus(menuContainer, obj) {
        const subElem = document.createElement('div');
        subElem.className = 'expand-submenu';
        for (let i = 0; i < obj.length; i++) {
            let child = document.createElement('p')
            if (typeof obj[i] !== 'string') {
                const {imgSrc, name} = obj[i];
                const imgEl = document.createElement('img');
                // imgEl.alt = name.toLowerCase().split(' ').join('-')+'-logo';
                imgEl.alt = '...';
                imgEl.src = imgSrc;
                child.appendChild(document.createElement('div').appendChild(imgEl)); 
                child.appendChild(document.createTextNode(name)); 
            } else {
                child.appendChild(document.createTextNode(obj[i])); 
            }
            subElem.appendChild(child);

        }
        menuContainer.appendChild(subElem);
    }
}

for (let i = 0; i < titles.length+2; i++){
    if (!!!titles[i]){
        if (i == titles.length){
            const menu = document.createElement('li');
            const inp = document.createElement('input');
            inp.type = 'checkbox';
            inp.id = 'burguer';
            inp.style.position = 'absolute';
            inp.style.appearance = 'none';
            inp.style.height = '2rem';
            inp.style.width = '2rem';
            inp.style.backgroundColor = '#fff';
            inp.style.backgroundColor = '#fff0';
            menu.className = 'burguer';
            menu.appendChild(document.createTextNode('|||'));
            menu.appendChild(inp);
            menu.style.fontSize = '1rem';
            menu.style.transform = 'rotate(90deg)';
            document.querySelector('nav').firstElementChild.appendChild(menu);
        } else {
            const lupa = document.createElement('li');
            lupa.className = 'lupa';
            lupa.appendChild(document.createTextNode("🔍"));
            lupa.style.filter = 'sepia(1) brightness(.4) invert(.2)';
            lupa.style.fontSize = '1.2rem';
            lupa.addEventListener('click', () => {
                const sty = document.querySelector('#search_nav').style;
                const original = 'rotateX(0deg) translateY(0rem)';
                sty.transform = (sty.transform == original 
                    ? 'rotateX(90deg) translateY(-1.5rem)' : original);
            })
            document.querySelector('nav').firstElementChild.appendChild(lupa);
            
        }
    } else {

        const name = titles[i], 
        className = titles[i].substring(0, 3) + '-title',
        src = navObj[titles[i]].src == null ? null : navObj[titles[i]].src,
        obj = navObj[titles[i]];
        
        const navElem = document.querySelector('nav');
        const navAside = document.querySelector('aside');
        
        navVar.addTitle(name, className, src, obj, navElem)
        navVar.addTitle(name, className, src, obj, navAside)
    }
}

document.querySelector('.close_aside').addEventListener('click', () => {
    document.querySelector('#burguer').checked = false;
})