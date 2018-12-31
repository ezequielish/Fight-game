
const path = require('path');
import Personajes from './personajes';
import  './arena.css';
const renderArena = ($container,arena) =>{
    const $divArenas = document.createElement('div');
    const $title = document.createElement('h1');
    $title.textContent = "Seleccione una Arena";
    $divArenas.append($title)
    $divArenas.setAttribute('class','arenas')
    $container.innerHTML = "";
    $container.append($divArenas)
     arena.map(item =>{
       let arenaTemplate = templateArena(item); 
       let htmlstring = createTemplate(arenaTemplate)
       $divArenas.append(htmlstring);

       let $figureImg = document.querySelector(`.arena-img-${item.id}`);
       const img = $figureImg.querySelector('img');
       img.addEventListener('load', (ev) => {
          ev.target.parentNode.childNodes[3].classList.add('load-icon-desactive')
       })

       $figureImg.addEventListener('click', (ev) => {
           const arenaID = ev.target.dataset.arena;
           Personajes($container,arenaID)
       })
   
    })  

}

const templateArena = (arena) =>{
    return(
        `
        <div class="arena">
        <figure class="arena_battle arena-img-${arena.id}" >
            <img src="./src/assest/img/${arena.ruta}" class="battle-arena"  width="100%" height="100%" data-arena="${arena.id}" />
            <div class="load-icon-active">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </div>
        </figure>
        <p><strong>Arena</strong></p>
        <p>${arena.nombre}</p>
        </div>
        `
    )
}


function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }


const imgHTML = (width,height,ruta,id) =>{
    const img = document.createElement('img');
    img.setAttribute('width', width);
    img.setAttribute('height',height);
    img.setAttribute('id',`imageArena_${id}`)
    img.setAttribute('src',`./src/assest/img/${ruta}`)
    return img
}
export default renderArena;