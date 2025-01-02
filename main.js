const botonJugar = document.querySelector(".botones-jugar");


const fichasRojas = document.querySelectorAll("[class^='mesa-roja-salida-pieza-'] ");

const fichasAzul = document.querySelectorAll("[class^='mesa-azul-salida-pieza-'] ");

const fichasVerde = document.querySelectorAll("[class^='mesa-verde-salida-pieza-'] ");

const fichasMorada = document.querySelectorAll("[class^='mesa-morada-salida-pieza-'] ");


const botonTirarDado = document.querySelector(".botones-tirar-dado");


const dado = document.querySelector(".dado");

botonJugar.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();

  fichasRojas.forEach((item, i) => {
    item.style.display = "flex";
  })

  fichasAzul.forEach((item, i) => {
    item.style.display = "flex";
  })

  fichasVerde.forEach((item, i) => {
    item.style.display = "flex";
  })

  fichasMorada.forEach((item, i) => {
    item.style.display = "flex";
  })

  botonJugar.style.display = "none";
  botonTirarDado.style.display = "block";
  dado.style.display = "block";
});


// MOVIMIENTO DEL DADO

function tirarDado() {
  const dado = document.querySelector(".dado img");
  
  dado.setAttribute("src","./imgs/diceroll.gif");
  
  setTimeout(()=>{
    const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    
    dado.setAttribute("src", "./imgs/dice"+numeroAleatorio+".png");
    
  },1000)
  
}

botonTirarDado.addEventListener("click",tirarDado)


// 


