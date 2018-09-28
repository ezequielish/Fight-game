const max = 50
const min = 10
const btnReload = document.getElementById('reload')
btnReload.addEventListener('click', reiniciar)
const pantalla = document.getElementById("pantalla")
const empezar = document.getElementById("empezar")
const btnAtacarV = document.getElementById('btn-atacar-v')
const btnAtacarG = document.getElementById('btn-atacar-g')
/**Goku */
const barraVidaGoku = document.getElementById('barra_de_vida_goku') //Barra progreso Vida
const ultiGolpeGoku = document.getElementById('span_golpe_goku')  // span de último golpe
const vidaSpanGoku = document.getElementById('span_vida_goku') // span de vida de goku
const fotoG = document.getElementById('fotoG') // foto de Vegeta)
btnAtacarG.addEventListener('click',atacar)

/**Vegeta */
const barraVidaVegeta = document.getElementById('barra_de_vida_vegeta') //Barra progreso Vida
const ultiGolpeVegeta = document.getElementById('span_golpe_vegeta')  // span de último golpe
const vidaSpanVegeta = document.getElementById('span_vida_vegeta') // span de vida de vegeta
const fotoV = document.getElementById('fotoV') // foto de Vegeta)
/*--------------------------------------------------------------------------------- */
btnAtacarV.addEventListener('click',atacar)


empezar.addEventListener("click", bouttofEfect)

function bouttofEfect()
{
    pantalla.classList.add("animarPantalla")
    setTimeout(() => {
         this.style.display = "none"
    }, 200);
   
}

class Vegeta{
    constructor(vidaObj,golpe,turno)
    {
        this.vidaObj = vidaObj
        this.golpe = golpe
        this.turno = turno
        this.spanes = {
            vidaSpanVegeta,
            ultiGolpeVegeta
        }
        this.vidaInicial = this.spanes.vidaSpanVegeta.innerHTML
        this.darGolpe()
        this.round()
    }

    round()
    {
        btnAtacarG.disabled = true
        btnAtacarV.disabled = false
    }
    darGolpe()
    {
       
       this.vidaFinal = this.spanes.vidaSpanVegeta.innerHTML - this.golpe
       if(this.golpe > this.vidaInicial) this.vidaFinal = 0
       this.spanes.vidaSpanVegeta.innerHTML =  this.vidaFinal
       this.spanes.ultiGolpeVegeta.innerHTML = this.golpe
       if(parseInt(this.vidaFinal) <= 30) 
       {
           this.vidaObj.classList.add('vidaCritica')
       }
        
        if(parseInt(vidaSpanVegeta.innerHTML) <= 0)
        {
            setTimeout(() => {
               let confirmar =  confirm("Acabo el juego gano Goku")
               if(confirmar)
               {
                    this.reiniciar() 
               }
               else
               {
                btnAtacarV.disabled = true
                btnAtacarG.disabled = true
               }
            }, 2100);
            
        }

       this.animarBarra()
       this.animarFoto()
    }
    
    animarBarra()
     {
        this.vidaObj.animate(
            [{
                width: `${this.vidaInicial}%`
            },
            {
                width: `${this.vidaFinal}%`
            }],
            {
                duration: 2000,
                easing:'ease',
                fill: 'forwards'
            }
        )
    }

    animarFoto()
    {
        fotoV.classList.add("foto")
        setTimeout(() => { fotoV.classList.remove("foto") }, 1000);
    }   

    reiniciar()
        {
            this.vidaObj.animate(
                [{
                    width: '0%'
                },
                {
                    width: '100%',
                }],
                {
                    duration: 2000,
                    easing:'ease',
                    fill: 'forwards'
                }
            )
            barraVidaGoku.animate(
                [{
                    width: '0%'
                },
                {
                    width: '100%',
                }],
                {
                    duration: 2000,
                    easing:'ease',
                    fill: 'forwards'
                }
            )
            this.vidaObj.className = "barraVida"
            barraVidaGoku.className = "barraVida"
            this.spanes.vidaSpanVegeta.innerHTML =  100
            this.spanes.ultiGolpeVegeta.innerHTML = 0
            vidaSpanGoku.innerHTML =  100
            ultiGolpeGoku.innerHTML = 0
            btnAtacarV.disabled = false
            btnAtacarG.disabled = false
            
        }
    
}


class Goku{
    constructor(vidaObj,golpe,turno)
    {
        this.vidaObj = vidaObj
        this.golpe = golpe
        this.turno = turno
        this.spanes = {
            vidaSpanGoku,
            ultiGolpeGoku
        }
        this.vidaInicial = this.spanes.vidaSpanGoku.innerHTML
        this.darGolpe()
        this.round()
    }

    round()
    {
        btnAtacarV.disabled = true
        btnAtacarG.disabled = false
    }
    darGolpe()
    {
       this.vidaFinal = this.spanes.vidaSpanGoku.innerHTML - this.golpe
       if(this.golpe > this.vidaInicial) this.vidaFinal = 0
       this.spanes.vidaSpanGoku.innerHTML =  this.vidaFinal
       this.spanes.ultiGolpeGoku.innerHTML = this.golpe
       if(parseInt(this.vidaFinal) <= 30) 
       {
           this.vidaObj.classList.add('vidaCritica')
       }
       if(parseInt(vidaSpanGoku.innerHTML) <= 0)
       {
           setTimeout(() => {
              let confirmar =  confirm("Acabo el juego gano Vegeta")
              if(confirmar)
              {
                   this.reiniciar() 
              }
              else
              {
               btnAtacarV.disabled = true
               btnAtacarG.disabled = true
              }
           }, 2100);
           
       }
       this.animarBarra()
       this.animarFoto()
    }
    
    animarBarra()
     {
        this.vidaObj.animate(
            [{
                width: `${this.vidaInicial}%`
            },
            {
                width: `${this.vidaFinal}%`
            }],
            {
                duration: 2000,
                easing:'ease',
                fill: 'forwards'
            }
        )
    }

    animarFoto()
    {
        fotoG.classList.add("foto")
        setTimeout(() => { fotoG.classList.remove("foto") }, 1000);
    }   

    reiniciar()
    {
        this.vidaObj.animate(
            [{
                width: '0%'
            },
            {
                width: '100%',
            }],
            {
                duration: 2000,
                easing:'ease',
                fill: 'forwards'
            }
        )
        barraVidaVegeta.animate(
            [{
                width: '0%'
            },
            {
                width: '100%',
            }],
            {
                duration: 2000,
                easing:'ease',
                fill: 'forwards'
            }
        )
        this.vidaObj.className = "barraVida"
        barraVidaVegeta.className = "barraVida"
        this.spanes.vidaSpanGoku.innerHTML =  100
        this.spanes.ultiGolpeGoku.innerHTML = 0
        vidaSpanVegeta.innerHTML =  100
        ultiGolpeVegeta.innerHTML = 0
        btnAtacarV.disabled = false
        btnAtacarG.disabled = false
        
    }
}

function atacar()
{
  if(this.value != 'vegeta')
  {
    let golpe = Math.round(Math.random() * (max - min) + min)
    let gokuGolpea = new Vegeta(barraVidaVegeta,golpe,false)
  }else{
    let golpe = Math.round(Math.random() * (max - min) + min)
    let vegetaGolpea = new Goku(barraVidaGoku,golpe,false)

  }
 
}

function reiniciar()
{
    let rei = new Vegeta(barraVidaVegeta,0,false)
    rei.reiniciar()
}



