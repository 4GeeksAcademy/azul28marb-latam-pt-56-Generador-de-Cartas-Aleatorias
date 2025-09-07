import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Función para generar carta aleatoria
function getRandomCard() {
  const palos = ['♥', '♠', '♣', '♦'];
  const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const palo = palos [Math.floor(Math.random() * palos.length)];
  const valor = valores[Math.floor(Math.random() * valores.length)];
    
  document.getElementById('top').textContent = palo;
  document.getElementById('valor').textContent = valor;
  document.getElementById('bottom').textContent = palo;
    
  document.getElementById('card').style.color = (palo === '♥' || palo === '♦') ? 'red' : 'black';
}

window.onload =()=> {
  //write your code here
  getRandomCard();
  // Botón opcional
  const newCardButton = document.getElementById("card-button")
  newCardButton.addEventListener("click", getRandomCard)
}
