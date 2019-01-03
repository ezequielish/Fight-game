import data from '../data/data';
const { personajes } = data;
class Personje{
    constructor(idPersonaje){
        this.idPersonaje = idPersonaje;
        this.vida = 100;
        this.maxHit = 200;
        this.filtrarPersonaje()
    }

    filtrarPersonaje(){
        this.idPersonaje = personajes.filter(p =>{
            return p.id.includes(this.idPersonaje)
        })

        this.idPersonaje.map(p =>{
                this.nombre = p.nombre,
                this.image_face = p.image_face,
                this.image_pelea = p.image_pelea,
                this.id = p.id            
        })
    }
}

export default Personje;