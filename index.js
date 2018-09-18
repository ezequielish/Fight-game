const max = 50
const min = 10
const btnAtacarV = document.getElementById('btn-atacar-v')
const btnAtacarG = document.getElementById('btn-atacar-g')
/**Goku */
let ultiGolpeG = document.getElementById('spanUltiG')    
let vidaProgressG = document.getElementById('vidaProgressG') //Barra progreso Vida
let vidaSpanG = document.getElementById('spanVidaG') //Vida Span
let spanUltiG = document.getElementById('spanUltiG')
btnAtacarG.addEventListener('click',atacar)

/**Vegeta */
let ultiGolpe = document.getElementById('spanUltiV')    
let vidaProgressV = document.getElementById('vidaProgressV') //Barra progreso Vida
let vidaSpan = document.getElementById('spanVidaV') //Vida Span
let spanUltiV = document.getElementById('spanUltiV')
btnAtacarV.addEventListener('click',atacar)



class Vegeta{
    constructor(vida, ultgolpe, turno)
    {
        this.vida = vida
        this.ultgolpe = ultgolpe
        this.turno = turno
    }

    turnoVegeta()
    {
        vidaProgressV.value -= this.ultgolpe
        this.vida = vidaProgressV.value
        vidaSpan.innerHTML = vidaProgressV.value
        spanUltiV.innerHTML = this.ultgolpe 
        btnAtacarV.disabled =  this.turno
        btnAtacarG.disabled = !this.turno
        if(this.vida < 30)
        {
            vidaProgressV.className = 'vidaCritica'   
        }

        if(this.vida <= 0)
        {
            alert('Acabo el juego, ha ganado Goku')
            vidaProgressV.value = 100
            vidaProgressG.value = 100
            vidaSpan.innerHTML =  100
            spanUltiV.innerHTML = 0
            vidaSpanG.innerHTML =  100
            spanUltiG.innerHTML = 0
            btnAtacarV.disabled =  false
            btnAtacarG.disabled =  false
            vidaProgressV.className = 'barraVida'
            vidaProgressG.className = 'barraVida'
        }
    }
}

class Goku{
    constructor(vida, ultgolpe, turno)
    {
        this.vida = vida
        this.ultgolpe = ultgolpe
        this.turno = turno
    }

    turnoGoku()
    {
        vidaProgressG.value -= this.ultgolpe
        this.vida = vidaProgressG.value
        vidaSpanG.innerHTML = vidaProgressG.value
        spanUltiG.innerHTML = this.ultgolpe 
        btnAtacarG.disabled = this.turno
        btnAtacarV.disabled = !this.turno
        if(this.vida < 30)
        {
            vidaProgressG.className = 'vidaCritica'   
        }

        if(this.vida <= 0)
        {
            alert('Acabo el juego, ha ganado Vegeta')
            vidaProgressV.value = 100
            vidaProgressG.value = 100
            vidaSpan.innerHTML =  100
            spanUltiV.innerHTML = 0
            vidaSpanG.innerHTML =  100
            spanUltiG.innerHTML = 0
            btnAtacarV.disabled =  false
            btnAtacarG.disabled =  false
            vidaProgressG.className = 'barraVida'
            vidaProgressV.className = 'barraVida'
        }
    }

}
function atacar()
{
  if(this.value != 'vegeta')
  {
    let golpe = Math.round(Math.random() * (max - min) + min)
    let gokuGolpea = new Vegeta(vidaProgressV,golpe,false)
    gokuGolpea.turnoVegeta()
  }else{
    let golpe = Math.round(Math.random() * (max - min) + min)
    let vegetaGolpea = new Goku(vidaProgressG,golpe,false)
    vegetaGolpea.turnoGoku()
  }
 
}




