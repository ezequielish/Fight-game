import data from '../data/data';
import './personajes.css';

const $personajes = document.createElement('div');
$personajes.setAttribute('class','personajes');
const $personajesItems = document.createElement('div');
$personajesItems.setAttribute('class','personjes-templates');
const $selectedTemplate = document.createElement('div');
$selectedTemplate.setAttribute('class','select-personaje')
const $itemsPersonaje = document.createElement('div');
$itemsPersonaje.setAttribute('class','items-personajes');


let p1 = false;
let p2 = false;
const personajes = ($container, arenaID) => {
    $container.innerHTML = "";
    $container.append($personajes)
    const arena = data.arena.filter(mapa =>{
       return  mapa.id.includes(arenaID)  
    })
  
    arena.map(arena =>{       
        const templateArena = arenatemplate(arena)
        const arenaHTML = createTemplate(templateArena);
        $personajes.append(arenaHTML);
    })
        const $title = document.createElement('h3');
        $title.textContent = "Selecciona un personaje";
        $personajesItems.append($title);
        $personajes.append($personajesItems)
    data.personajes.map(personaje =>{
        const templatePersonajes = personajesTemplate(personaje);
        const personajesHTML = createTemplate(templatePersonajes);
        $personajesItems.append($itemsPersonaje);
        $itemsPersonaje.append(personajesHTML);
        let $imgFace = $personajes.querySelector(`.p-face-${personaje.id}`);
        $imgFace.addEventListener('click', (ev)=>{
            selectedP(ev)
        })
    })
    const selectP = selectPersonaje(data.personajes.length);
    const selectPHtml = createTemplate(selectP);
    $selectedTemplate.append(selectPHtml);
    $personajes.append($selectedTemplate);

    const $buttonsSelect = $selectedTemplate.querySelectorAll('.button-select');
    buttonSelect($buttonsSelect)
  
}

function buttonSelect(btn){
    btn.forEach(i =>{
        i.addEventListener('click', (ev) =>{
            selectedP(ev)
        })
    })
}


const selectedP = (ev) =>{
    let $p1div = null;
    let $p2div = null;

    $p1div = $personajes.querySelector(".p-1");
    $p2div = $personajes.querySelector(".p-2");
    const $checkP1 = $p1div.querySelector('.photo-select-check');
    const $checkP2 = $p2div.querySelector('.photo-select-check');


   if(!p1){
  
       if(ev.target.tagName == "IMG") //definir si viene desde las imágenes o desde el button random
       {
            const $img = ev.target;
            $img.setAttribute('width','100px'); 
            $img.setAttribute('height','100px');            
            const clone  = $img.cloneNode();

            $checkP1.innerHTML = "";
            $checkP1.appendChild(clone);
            const $btnFijar = document.createElement('button');
            $btnFijar.textContent = "Fijar";
            const $btnFijarHtml = $btnFijar;
            $checkP1.append($btnFijarHtml)
            $btnFijar.addEventListener('click',selectCheckP)

       }
       else
       {

            const numLimit = ev.target.dataset.cant;
            const numRandom = Math.round( Math.random() * (numLimit - 1) + 1)
            const personaje = data.personajes.filter(personaje =>{
                return  personaje.id.includes(numRandom)  
             })
           personaje.forEach(p => {
                const img = `<img src="./src/assest/img/face/${p.image_face}" data-p="${p.id}" height="100px" width="100px" />`;
                const imgHtml = createTemplate(img);
                $checkP1.innerHTML = "";
                $checkP1.appendChild(imgHtml);
                const $btnFijar = document.createElement('button');
                $btnFijar.textContent = "Fijar";
                const $btnFijarHtml = $btnFijar;
                $checkP1.append($btnFijarHtml)
                $btnFijar.addEventListener('click',selectCheckP)
            })

       }

   }else{

    if(ev.target.tagName == "IMG") //definir si viene desde las imágenes o desde el button random
    {
       const $img = ev.target;
       $img.setAttribute('width','100px');
       $img.setAttribute('height','100px');   
       const clone  = $img.cloneNode();
       $checkP2.innerHTML = "";
       $checkP2.appendChild(clone);
       const $btnFijar = document.createElement('button');
        $btnFijar.textContent = "Fijar";
        const $btnFijarHtml = $btnFijar;
        $checkP2.append($btnFijarHtml)
        $btnFijar.addEventListener('click',selectCheckP)
    }
    else
    {
        const numLimit = ev.target.dataset.cant;
        const numRandom = Math.round( Math.random() * (numLimit - 1) + 1)
        const personaje = data.personajes.filter(personaje =>{
            return  personaje.id.includes(numRandom)  
         })
       personaje.forEach(p => {
            const img = `<img src="./src/assest/img/face/${p.image_face}" data-p="${p.id}" height="100px width="100px" />`;
            const imgHtml = createTemplate(img);

            $checkP2.innerHTML = "";
            $checkP2.appendChild(imgHtml);
            const $btnFijar = document.createElement('button');
            $btnFijar.textContent = "Fijar";
            const $btnFijarHtml = $btnFijar;
            $checkP2.append($btnFijarHtml)
            $btnFijar.addEventListener('click',selectCheckP)
        })

    }
      
   }
}
const selectCheckP = (ev) =>{
    ev.target.parentNode.previousElementSibling.disabled = true;
    ev.target.disabled = true;  
    if(p1){
        console.log('Esta listo!!!')
    }else{
       p1 = true; 
       document.getElementById('randon-2').disabled = false;
    }
    
}
const selectPersonaje = (cantP) =>{
    return(`
        <div class="select-personaje">
            <div class="p-1 personaje-selected">
            <p>Personaje 1</p>
                <button data-cant="${cantP}" id="randon-1" class="button-select">
                    random
                </button>
                <div class="photo-select-check">
                </div>
            </div>
            <div class="p-2 personaje-selected">
            <p>Personaje 2</p>
                <button data-cant="${cantP}" id="randon-2" class="button-select" disabled>
                    random
                </button>
                <div class="photo-select-check">
                </div>
            </div>
        </div>
    `)
}
function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }

const personajesTemplate = (personajes) =>{
    return(`
            <figure class="p-face-${personajes.id}">
                <span>${personajes.nombre}</span>
                <img src="./src/assest/img/face/${personajes.image_face}" width="100%" height="100%" data-p="${personajes.id}" />
            </figure>
    `)
}
const arenatemplate = (arena) =>{
    return (`
        <div class="arena-selected">
            <h2>${arena.nombre}</h2>
            <figure>
                <img src="./src/assest/img/${arena.ruta}" class="battle-arena"  width="100%" height="100%" data-arena="${arena.id}" />
            </figure>
        </div>
    `)
}
export default personajes;