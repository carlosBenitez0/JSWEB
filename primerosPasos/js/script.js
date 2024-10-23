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
//////////////////////////////////////////////////////////////////////////////////
//-Utilizar un operador ternario para asignarle un mensaje a una variable en base al valor de la variable boleana
/* const input = document.getElementById("dineroDisponible");
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
}); */
//////////////////////////////////////////////////////////////////////////////////
/* const cantidad = document.getElementById("cantidad"); //<p></p>
const btn_aumentar = document.getElementById("btn-aumentar"); //<button></button>
const btn_disminuir = document.getElementById("btn-disminuir"); //<button></button>
const btn_ce = document.getElementById("btn-ce"); //<button></button>

btn_aumentar.addEventListener("click", () => {
  if (parseInt(cantidad.innerText) < 10) {
    //0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    cantidad.innerText = parseInt(cantidad.innerText) + 1;
  }
});

btn_disminuir.addEventListener("click", () => {
  if (parseInt(cantidad.innerText) > 0) {
    cantidad.innerText = parseInt(cantidad.innerText) - 1;
  }
});

btn_ce.addEventListener("click", () => {
  cantidad.innerText = 0;
}); */
//////////////////////////////////////////////////////////////////////////////////

//ejercicio 5
//obtener el valor de los inputs y mandarlos por parametros a la funcion "authentication"
//verificar si los 2 passwords son iguales y los 2 nombres tambien son iguales
//si son iguales retornar true, sino, false
//En base al retorno, mostrar welcome si es true o error si es false

//db
/* const userDB = "admin";
const passwordDB = "123";

const message = document.getElementById("message"); //<h1></h1>
const input_name = document.getElementById("name"); //<input></input>
const input_password = document.getElementById("password"); //<input></input>
const btn_login = document.getElementById("btn-login"); //<button></button>

const authentication = (nameUser, passwordUser) => {
  if (nameUser == userDB && passwordUser == passwordDB) {
    return true;
  } else {
    return false;
  }
};

//validaciones para el usuario
//El nombre de usuario que no lleve caracteres especiales
//El nombre de usuario que no lleve numeros
//El nombre de usuario debe tener al menos 3 caracteres
//El nombre de usuario debe tener maximo 10 caracteres

//validaciones para la contraseña
//Que tenga al menos 1 carcater especial
//Que tenga al menos 1 numero
//El nombre de usuario debe tener al menos 3 caracteres
//El nombre de usuario debe tener maximo 10 caracteres

const showMessage = (login) => {
  if (login) {
    message.innerText = "Welcome";
  } else {
    message.innerText = "Error";
  }
};

btn_login.addEventListener("click", () => {
  const nameUser = input_name.value;
  const passwordUser = input_password.value;

  const login = authentication(nameUser, passwordUser);
  showMessage(login);
}); */

//////////////////////////////////////////////////////////////////////////////////
//ejercicio 5.2
const userDB = "admin";
const passwordDB = "123";

const message = document.getElementById("message"); //<h1></h1>
const input_name = document.getElementById("name"); //<input></input>
const input_password = document.getElementById("password"); //<input></input>
const btn_login = document.getElementById("btn-login"); //<button></button>

const error_name = document.getElementById("error_name");

const authenticationUser = (nameUser) => {
  //validaciones para el usuario
  //El nombre de usuario que no lleve caracteres especiales(%$#) ✅
  //El nombre de usuario que no lleve numeros ✅
  //El nombre de usuario debe tener al menos 3 caracteres✅
  //El nombre de usuario debe tener maximo 10 caracteres✅
  error_name.innerText = "";
  let error = true;
  for (let i = 0; i < nameUser.length; i++) {
    if (nameUser[i] == "%" || nameUser[i] == "$" || nameUser[i] == "#") {
      error_name.innerText = "Error: no se permiten caracteres especiales(%$#)";
      error = false;
    } else if (
      nameUser[i] == "0" ||
      nameUser[i] == "1" ||
      nameUser[i] == "2" ||
      nameUser[i] == "3" ||
      nameUser[i] == "4" ||
      nameUser[i] == "5" ||
      nameUser[i] == "6" ||
      nameUser[i] == "7" ||
      nameUser[i] == "8" ||
      nameUser[i] == "9"
    ) {
      error_name.innerText = "Error: no se permiten numeros";
      error = false;
    } else if (nameUser.length < 3) {
      error_name.innerText =
        "Error: el nombre de usuario debe tener al menos 3 caracteres";
      error = false;
    } else if (nameUser.length > 10) {
      error_name.innerText =
        "Error: el nombre de usuario debe tener maximo 10 caracteres";
      error = false;
    }
  }

  return error;
};
//validaciones para la contraseña
//Que tenga al menos 1 caracter especial
//Que tenga al menos 1 numero
//El nombre de usuario debe tener al menos 3 caracteres
//El nombre de usuario debe tener maximo 10 caracteres

const authentication = (validateUser) => {
  if (validateUser == true) {
    message.innerText = "Welcome";
  } else {
    message.innerText = "Error";
  }
};

btn_login.addEventListener("click", () => {
  const nameUser = input_name.value;
  const validateUser = authenticationUser(nameUser);
  authentication(validateUser);
  // const passwordUser = input_password.value;

  // const login = authentication(nameUser, passwordUser);
  // message.innerText = login;
});
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
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
// return✅
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
