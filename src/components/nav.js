import db from '../db/database.ts';

const { nav: navObj } = db;

console.log();

const titles = Object.keys(navObj);

class navVar {
    static addTitle(name, className, src, obj) {
        const navElem = document.querySelector('nav');
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
            this.addCollapse(container, obj)
        };
        title.className = className;
        name = String(name)[0].toUpperCase() + String(name).substring(1);
        title.appendChild(document.createTextNode(name));
        navElem.firstElementChild.appendChild(container);
    }

    static addCollapse(container, obj) {
        const menu = document.createElement('div');
        menu.className = 'expand-tit';
        const parts = Object.keys(obj);
        for (let i = 0; i < parts.length; i++){
            let name = !!!isNaN(Number(parts[i])) ? obj[parts[i]].name : parts[i];
            const partElem = document.createElement('div');
            partElem.className = 'expand-menu-part';
            name = String(name).replaceAll('_', ' ').toUpperCase();
            partElem.appendChild(document.createElement('h2').appendChild(document.createTextNode(name)));
            menu.appendChild(partElem);
        }
        


        container.appendChild(menu);
    }
}

for (let i = 0; i < titles.length; i++){
    const name = titles[i], 
        className = titles[i].substring(0, 3) + '-title',
        src = navObj[titles[i]].src == null ? null : navObj[titles[i]].src,
        obj = navObj[titles[i]]
    
    navVar.addTitle(name, className, src, obj)
}