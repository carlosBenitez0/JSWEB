// Ejercicio 1

/* let a = 10;
const b = "hola";
a = 10;

console.log(a + b); */
/* let texto = "Texto modificado";
const parrafo = document.getElementById("parrafo");

parrafo.innerText = texto;

const input = document.querySelector(".input");
const boton = document.getElementById("boton");
const div = document.getElementById("div");

function modificarTextoClick() {
  const inputValue = input.value;
  parrafo.innerText = inputValue;
}

boton.addEventListener("click", modificarTextoClick);

input.addEventListener("input", modificarTextoClick); */
//////////////////////////////////////////////////////////////////////////////////
// Ejercicio 2

//Solucionar el problema de cuando una de las variables es una cadena de texto y no un numero

/* let a = 10;
let b = "Hola";

if (a == 0 || b == 0) {
  console.log("Una de las variables es 0");
} else if (a < 0 || b < 0) {
  console.log("Una de la variables es negativa");

}else if(a == b){   
    console.log("a es igual a b");

} else {
  if (a > b) {
    console.log("a es mayor que b");
  } else {
    console.log("b es mayor que a");
  }
} */

/* const parrafo = document.getElementById("parrafo");
const input = document.querySelector(".input");
const boton = document.getElementById("boton");

function verificarEdad() {
  const edad = parseInt(input.value);
  if (edad >= 18) {
    parrafo.innerText = "Es mayor de edad";
  } else {
    parrafo.innerText = "Es menor de edad";
  }
}

boton.addEventListener("click", verificarEdad); */

//////////////////////////////////////////////////////////////////////////////////
/*
Ejercicio 3
Verificar si una persona puede comprar una computadora en base a la cantidad de dinero
que tiene.

-Motrar un mensaje en base a la cantidad de dinero necesaria

-Ingresar el valor de la persona

-Ingresar el valor de la computadora

-Verificar si la persona tiene el dinero suficiente para comprar la computadora

-Si tiene el dinero suficiente, tener una variable boolenana que diga si la persona puede comprar la computadora o no (true o false)

-Utilizar un operador ternario para asignarle un mensaje a una variable en base a 
el valor de la variable boleana

*/

/* //-Motrar un mensaje en base a la cantidad de dinero necesaria
const valorComputadora = 500.0;
console.log("La computadora que quiere comprar cuesta " + valorComputadora);

//-Ingresar el valor de la persona
const dineroDePersona = parseFloat(
  prompt("Ingrese la cantidad de dinero que tiene disponible: ")
);

//-Verificar si la persona tiene el dinero suficiente para comprar la computadora
//-Si tiene el dinero suficiente, tener una variable boolenana que diga si la persona puede comprar la computadora o no (true o false)
let puedeComprar = false;

if (dineroDePersona >= valorComputadora) {
  puedeComprar = true;
}

//-Utilizar un operador ternario para asignarle un mensaje a una variable en base al valor de la variable boleana
const mensaje = puedeComprar
  ? "Puede comprar la computadora"
  : "Dinero insuficiente";
console.log(mensaje); */

//-Motrar un mensaje en base a la cantidad de dinero necesaria

//-Ingresar el valor de la persona

//-Verificar si la persona tiene el dinero suficiente para comprar la computadora
//-Si tiene el dinero suficiente, tener una variable boolenana que diga si la persona puede comprar la computadora o no (true o false)

//-Utilizar un operador ternario para asignarle un mensaje a una variable en base al valor de la variable boleana
const input = document.getElementById("dineroDisponible");
const boton = document.getElementById("verificar");
const precio = document.getElementById("precio");
const precioComputadora = parseFloat(precio.innerText);
const mensajeParrafo = document.getElementById("mensaje");

const verificarSiAlcanza = (precioDeComputadora, dineroDisponible) => {
  if (dineroDisponible >= precioDeComputadora) {
    return true;
  } else {
    return false;
  }
};

const codigoEventos = () => {
  const inputValue = parseFloat(input.value);
  const puedeComprar = verificarSiAlcanza(precioComputadora, inputValue);

  const mensaje = puedeComprar
    ? "Puede comprar la computadora"
    : "Dinero insuficiente";
  mensajeParrafo.innerText = mensaje;
};

//funcion anonima
boton.addEventListener("click", () => {
  codigoEventos();
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    codigoEventos();
  }
});

//////////////////////////////////////////////////////////////////////////////////
// variables y constantes ✅
///////////////////////////////////////
// if✅
///////////////////////////////////////
// else if✅
///////////////////////////////////////
// else✅
///////////////////////////////////////
// ternary ✅
///////////////////////////////////////
// switch
///////////////////////////////////////
// function✅
///////////////////////////////////////
// return
///////////////////////////////////////
// default
///////////////////////////////////////
//!!!!!!!!!!!! for
///////////////////////////////////////
//!!!!!!!!!!!! while
///////////////////////////////////////
//!!!!!!!!!!!! foreach
///////////////////////////////////////
//!!!!!!!!!!!! map
///////////////////////////////////////
//!!!!!!!!!!!! filter
///////////////////////////////////////
// array
///////////////////////////////////////
// array methods
///////////////////////////////////////
// array destructuring
///////////////////////////////////////
// objects
