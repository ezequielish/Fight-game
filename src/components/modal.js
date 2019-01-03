import Elementos from './elementos';
import Batalla from './batalla';
import './modal.css';
const $container = document.querySelector('.container');
class Modal extends  Elementos {
    constructor(contenido,ganador,personajes){
        const {p1,p2} = personajes;
        super()
        this.p1 = p1;
        this.p2 = p2;
        this.contenido = contenido;
        this.ganador = ganador;
        this.renderModal();
    }

    renderModal(){
        
        const $html = this.createTemplate(this.templateModal())
        $container.appendChild($html)
        const $reiniciar  = document.getElementById('reiniciar');
      
        $reiniciar.addEventListener('click', this.reiniciar.bind(this)) 
    }

    templateModal(){
        return(`   
        <div class="overlay">
            <div class="modal">
                <div class="close">
                    <button>[X]</button>
                </div>
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

    reiniciar(){
      let storage = window.localStorage;
        let victorias = localStorage.getItem('victoria');
      
        if(this.ganador == 1)
        {
            localStorage.getItem('victoria') ? localStorage.setItem('victoria', (parseInt(victorias) + 1) ) : localStorage.setItem('victoria', 1)
        }
        new Batalla(this.p1,this.p2);

  
        
 
    }
}

export default Modal;