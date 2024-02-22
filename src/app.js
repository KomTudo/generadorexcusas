/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

/*Variables excusas*/

window.onload = () => {
  document.querySelector("#mi-excusa").innerHTML = generarExcusa();
};

let generarExcusa = () => {
  let cuando = ["Cuando"];
  let quien = ["mi perro", "mi mejor amigo", "mi jefe", "mi novia"];
  let accion = ["se enfada", "canta", "siempre baila", "grita"];
  let que = ["en mi sofa", "en un tejado", "bajo el agua", "en un bar"];
  let cuando2 = ["por la noche", "por la tarde", "en verano", "en Navidad"];

  let cuandoIndex = Math.floor(Math.random() * cuando.length);
  let quienIndex = Math.floor(Math.random() * quien.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let queIndex = Math.floor(Math.random() * que.length);
  let cuando2Index = Math.floor(Math.random() * cuando2.length);

  return (
    cuando[cuandoIndex] +
    "  " +
    quien[quienIndex] +
    "  " +
    accion[accionIndex] +
    " " +
    que[queIndex] +
    " " +
    cuando2[cuando2Index]
  );
};
