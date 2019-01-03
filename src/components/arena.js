
const path = require('path');
import Personajes from './personajes';
import  './arena.css';
import Elementos from './elementos';
class Arena extends Elementos{
    constructor(container,datos){
        super()
        this.arena = datos.arena
        this.container = container
        this.renderArena()
    }

    renderArena(){
            this.container.innerHTML = "";
            const $containerArena = this.elementCreate('div',{class: "arenas"});
            const $title = this.elementCreate('h1');$title.textContent = "Seleccione una Arena";
            $containerArena.appendChild($title);
            this.container.appendChild($containerArena);
            this.arena.map( arena =>{
                $containerArena.appendChild(this.createTemplate(this.arenaTemplate(arena)))
            })

           
            let $img = document.querySelectorAll('.battle-arena');
            $img.forEach(element => {
                element.addEventListener('load', (ev) =>{
                    ev.target.nextElementSibling.classList.add('load-icon-desactive')
                    ev.target.style.display='block';                    
                })

                element.addEventListener('click', this.arenaCheck.bind(this))
            });
            
    }

    arenaTemplate(arena){
        return(
            `
                <div class="arena">
                    <figure class="arena_battle" >
                        <img src="./src/assest/img/${arena.ruta}" style="display:none" class="battle-arena"  width="100%" height="100%" data-arena="${arena.id}" />
                        <div class="load-icon-active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                        </div>
                    </figure>
                    <p><strong>Nombre arena:</strong></p>
                    <p>${arena.nombre}</p>
                </div>
            `
            )
    }

    arenaCheck(ev){
        new Personajes(this.container, ev.target.dataset.arena)
    }
}
export default Arena;
