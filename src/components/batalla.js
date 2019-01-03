import Elementos from './elementos';
const $container = document.querySelector('.container');
import Personajes from './personajeclass';
import Modal from './modal';
import './batalla.css';
class Batalla extends Elementos{
    constructor(p1,p2){
        super()
         this.p1 = p1;
         this.p2 = p2;      
         this.turno = []           
         
         this.render()
    }
    
    render(){
        $container.innerHTML = "";
        this.batallaContainer = this.elementCreate('div',{class:"batallaContainer"},{style:"background-image:url('./src/assest/img/campo1.png');background-size:cover;width:100%;height:100%;"})
        this.dataP1 = new Personajes(this.p1);
        this.dataP2 = new Personajes(this.p2);
        $container.appendChild(this.batallaContainer);

        const $boxCharacter = this.createTemplate(this.templateBatalla());
        this.batallaContainer.appendChild($boxCharacter);
        const $atacar = $boxCharacter.querySelectorAll('.atacar');
        $atacar.forEach(btn =>{
            btn.addEventListener('click', this.atacar.bind(this))
        })
        
    }
  
 
    templateBatalla(){
        return(`
        <div class="box-character-container">
            <div class="box-character">
                <p>
                    ${this.dataP1.nombre}
                    <button class="atacar" data-button="1">Atacar</button>
                </p>
                <progress max=${this.dataP1.vida} value=${this.dataP1.vida} id="barraP1" class="good" ></progress>
                <figure>
                    <img src='./src/assest/img/${this.dataP1.image_pelea}' width="200px" height="250px"  />
                </figure>
                
            </div>

            <div class="box-character">                                
                <p>
                    <button class="atacar" data-button="2">Atacar</button>
                    ${this.dataP2.nombre}
                </p>
                <progress max=${this.dataP2.vida} value=${this.dataP2.vida} id="barraP2" class="good" ></progress>
                <figure>
                    <img src='./src/assest/img/${this.dataP2.image_pelea}' width="200px" height="250px"  />
                </figure>
                
            </div>
            </div>
        `)
    }
    
    atacar(ev){

        ev.target.disabled = true
        this.turno.push(ev.target)
        if(ev.target.dataset.button == 1){
            let barraEnemiga = document.getElementById('barraP2');
            this.turnoAtaque(ev,this.turno.length,barraEnemiga,this.dataP1.maxHit)
        } 

        if(ev.target.dataset.button == 2){
            let barraEnemiga = document.getElementById('barraP1');
            this.turnoAtaque(ev,this.turno.length,barraEnemiga,this.dataP2.maxHit)
        } 

    }
    turnoAtaque(btn,cant,barraEnemiga,golpe){
        if(cant > 1){
            let turnoArr = (this.turno.length - 2)
            let btnEnemigo = this.turno[turnoArr];
            btnEnemigo.disabled = false
        }
       
        let golpeR = Math.round( Math.random() * (golpe - 1) + 1 );
        barraEnemiga.value = (barraEnemiga.value - golpeR);
        if(barraEnemiga.value <= 30){
            barraEnemiga.classList.add('critical');
           if(barraEnemiga.value <= 0){
               this.finish(btn.target.dataset.button)
           }
        }
    }

    finish(personaje){
        if(personaje == 2){
            new Modal('Perdiste!!!',false,{p1:this.p1,p2:this.p2})
        }else{
            new Modal('Ganaste!!!',true,{p1:this.p1,p2:this.p2})
        }
    }
}

export default Batalla;