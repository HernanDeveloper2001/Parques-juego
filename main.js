const botonJugar = document.querySelector(".botones-jugar");


const fichasRojas = document.querySelectorAll("[class^='mesa-roja-salida-pieza-'] ");

const fichasAzul = document.querySelectorAll("[class^='mesa-azul-salida-pieza-'] ");

const fichasVerde = document.querySelectorAll("[class^='mesa-verde-salida-pieza-'] ");

const fichasMorada = document.querySelectorAll("[class^='mesa-morada-salida-pieza-'] ");


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
  
})