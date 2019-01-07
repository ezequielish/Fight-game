
import iniciarBatalla from './batalla';
import Elementos from './elementos';
import './personajes.css';
import './loading.css';


class Personajes extends Elementos{
    constructor(container,arenaID,datos){
        super()
        this.arena = arenaID
        this.datos = datos
        this.jugadores = 2;
        this.container = container
        this.count = []
        this.renderPersonajes()
        
    }

  
    renderPersonajes(){
      
        this.container.innerHTML = "";
        // La arena que se Selecciono
        const $personajesContainer = this.elementCreate('div',{class:'container-personajes'});
        this.container.appendChild($personajesContainer)
        
        const $arena = this.createTemplate(this.templateArena(this.arenaID()))
        $personajesContainer.appendChild($arena)
        const $victorias = this.elementCreate('div', {style:"position:absolute; top:0; right:0; width:100px; height:auto;" })
        if(!localStorage){
            $victorias.textContent= "Victorias : 0";
        }else{
            $victorias.textContent= `Victorias : ${localStorage.getItem('victoria')}`;
        }
        $personajesContainer.appendChild($victorias)
        const arenaImg = document.querySelector('.arena-img');
        arenaImg.addEventListener('load', (ev)  =>{
            ev.target.nextElementSibling.classList.add('load-icon-desactive')
            ev.target.style.display='block';   
        })


        // Lista de personajes
        this.listarPersonaje($personajesContainer)
        
        // Selección de personajes
        this.seleccionPersonajeImg()

    }
    
    templateContainerPersonajes(p){
        return(`
            <div class="SelectP">
                <p>Selecciona personaje</p>
                <p>Jugador ${p}</p>
                
            </div>
        `)
    }
    personajesItems(){
        const personajes = this.datos.personajes.map(personaje =>{
                 let itemP = this.templatePersonajes(personaje)
                 return this.createTemplate(itemP)
            })

        return personajes;
    }
    selectedPersonaje(img, parentN){
        //Seleccionamos la imagén y creamos un templare con ella borramos el los hijos del padre luego colocamos la img seleccionada.
        let $templateSelected = null;
        if(img.target){
            $templateSelected = this.createTemplate(this.templateSelected(img.target)) //img
        }else{
            $templateSelected = this.createTemplate(this.templateSelected(img)) //random
        }
      
        if(parentN){
           parentN.innerHTML = "";
           parentN.appendChild($templateSelected)
           this.count.push(img.target)
              //quitar el personaje seleccionado
            this.quitar()
            if(this.count.length >= 2){
                const parent = document.querySelector('.container-selectP');
                const empezar = this.elementCreate('div',{id:"empezar"},{style:'position:absolute; display:flex; justify-content:center; width: 100%;'});
                empezar.innerHTML = `<button class="btn-empezar">Empezar pelea</button>`;
                parent.appendChild(empezar)
                const btnEmpezar = document.querySelector('.btn-empezar');
                btnEmpezar.addEventListener('click', this.startFight.bind(this))
            }
        }

    }
    quitar(){
       
        const $quitar = document.querySelectorAll('.quitar');
        
     
        $quitar.forEach(element =>{
            element.addEventListener('click', (ev) =>{
                document.getElementById('empezar').remove()
                const $selectP =  ev.target.parentNode.parentNode.parentNode;
                ev.target.parentNode.parentNode.remove()
                this.renderListPersonajes($selectP)
                this.seleccionPersonajeImg()
                this.count.pop()
            })
        })
          
    }
    seleccionPersonajeImg(){
        const $img = document.querySelectorAll('.items-personajes img');
        $img.forEach(element =>{
            element.addEventListener('click', (ev)=>{
                this.selectedPersonaje(ev,ev.target.parentNode.parentNode)
            })
        })
    }
    startFight(){
        const id = document.querySelectorAll('.p-selected img');
            let ids = []
            id.forEach(id =>{
                ids.push(id.dataset.p)
            })
            const arena = this.arenaID();
            new iniciarBatalla(ids[0],ids[1],this.container,this.datos,arena.ruta);
    }
    templateSelected(img){
        return(`
            <div class="p-selected">
                <img src=${img.src} width="100%" height="100%" data-p=${img.dataset.p} />
                <button class="quitar">quitar</button>
            </div>
        `)
    }
    listarPersonaje(personajesContainer){
        const $itemsPersonajes = this.elementCreate('div', {class: "container-selectP"}) 
        for(let i = 1;  i <= this.jugadores; i++){
            const $selectTemplate = this.createTemplate(this.templateContainerPersonajes(i))
            personajesContainer.appendChild($itemsPersonajes);
            $itemsPersonajes.appendChild($selectTemplate);
        }

        const $SelectP = $itemsPersonajes.querySelectorAll('.SelectP');
        $SelectP.forEach(element => {
                this.renderListPersonajes(element)
        });
        this.random()
    }
    random(){
        const btn = document.querySelectorAll('.r-btn');
        btn.forEach( element =>{
            element.addEventListener('click', (ev)=>{
                let parent = ev.target.parentNode.parentNode;
                let max = parent.querySelectorAll('.items-personajes').length - 1;
                const random = Math.round( Math.random() * (max - 0) + 1);
                const img = parent.querySelectorAll('.items-personajes')[random - 1]
                console.log(img.children[0].taeget)
                this.selectedPersonaje(img.children[0],parent)
                
            })

        })
    }
    renderListPersonajes(element){
        //Listar el div que solo muestra los personajes pasando como parámetro el div padre
        const $itemsSelectP = this.elementCreate('div', {class: "items-selectP"}) 
        const $btnR = this.elementCreate('div',{class:'btn-random'},{style:'grid-column:1 / span 2; width:100%'}); 
        $btnR.innerHTML = "<button class= 'r-btn'>random</button>";
        $itemsSelectP.appendChild($btnR)
        element.appendChild($itemsSelectP)
            this.personajesItems().map(p =>{
            $itemsSelectP.appendChild(p)
        })
    }

    arenaID(){
        const { arena } = this.datos 
        let arenaID = arena.filter(arena =>{
               return arena.id.includes(this.arena);
        })
        return arenaID[0]
        
    }

    templatePersonajes(personaje){
        return(`
            
                <div class="items-personajes">
                    <img src="./src/assest/img/face/${personaje.image_face}" data-p="${personaje.id}" width="40%" height="100%" class='item-p'  />
                </div>
        `)
    }

    templateArena(arena){
        
        return(`
            <div class="arena-check">
                <figure>
                <caption>Arena: ${arena.nombre}</caption>
                    <img src="./src/assest/img/${arena.ruta}" style="display:none" class="arena-img" width="100%" height="100%" />
                    <div class="load-icon-active">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                    </div>
                </figure>
              
            </div>
        
        `)
    }
}

export default Personajes;
