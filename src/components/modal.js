import Elementos from './elementos';
import Batalla from './batalla';
import Arena from './arena';
import './modal.css';

class Modal extends  Elementos {
    constructor(contenido,ganador,personajes,container,datos,arena){
        const {p1,p2} = personajes;
        super()
        this.container = container;
        this.datos = datos
        this.p1 = p1;
        this.p2 = p2;
        this.contenido = contenido;
        this.ganador = ganador;
        this.arena = arena;
        this.renderModal();
    }

    renderModal(){
        
        const $html = this.createTemplate(this.templateModal())
        this.container.appendChild($html)
        const $reiniciar  = document.getElementById('reiniciar');
        const $inicio  = document.getElementById('inicio');
        $reiniciar.addEventListener('click', this.reiniciar.bind(this)) 
        $inicio.addEventListener('click', this.iniciar.bind(this)) 
    }

    templateModal(){
        return(`   
        <div class="overlay">
            <div class="modal">
                <div class="content-modal">
                    <p>${this.contenido }</p>
                    <p>
                        <button id="reiniciar">Reiniciar</button>
                        <button id="inicio">Volver a escoger</button>
                    </p>
                </div>
            </div> 
        </div>                   
        `)
    }
    iniciar(){
        new Arena(this.container,this.datos)
    }
    reiniciar(){
      let storage = window.localStorage;
        let victorias = localStorage.getItem('victoria');
      
        if(this.ganador == 1)
        {
            localStorage.getItem('victoria') ? localStorage.setItem('victoria', (parseInt(victorias) + 1) ) : localStorage.setItem('victoria', 1)
        }
        new Batalla(this.p1,this.p2,this.container,this.datos,this.arena);

  
        
 
    }
}

export default Modal;