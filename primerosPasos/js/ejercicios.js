/* 
Imprimir números del 1 al 10: Escribe un programa que utilice un bucle para imprimir los números del 1 al 10 en la consola.

Suma de los primeros 100 números: Escribe un programa que sume todos los números del 1 al 100 utilizando un bucle y que imprima el resultado final.

Imprimir números pares del 1 al 20: Escribe un programa que use un bucle para imprimir solo los números pares entre 1 y 20.

Invertir un string: Escribe un programa que recorra un string utilizando un bucle y lo imprima al revés. El string puede ser cualquier palabra o frase.

Tablas de multiplicar: Escribe un programa que imprima la tabla de multiplicar del número 5 (desde 5 x 1 hasta 5 x 10) usando un bucle.

5. Contar vocales en una palabra: Escribe un programa que utilice un bucle para contar cuántas vocales (a, e, i, o, u) hay en un string dado y luego imprima el total de vocales. 
*/

/* Imprimir números del 1 al 10: Escribe un programa que utilice un bucle para imprimir los números del 1 al 10 en la consola. */

/* let numeros = [];
for (let i = 1; i <= 10; i++) {
  numeros.push(i);
}
console.log(numeros); */
/* const lista = document.getElementById("lista");

let control = 1;
while (control <= 10) {
  const li = document.createElement("li");
  li.innerText = control;
  lista.appendChild(li);
  control++;
} */

/* Suma de los primeros 100 números: Escribe un programa que sume todos los números del 1 al 100 utilizando un bucle y que imprima el resultado final. */

/* let suma = 0; //15

for (let i = 1; i < 101; i++) {
  //6
  suma += i;
  //0+1 = 1
  //1+2 = 3
  //3+3 = 6
  //6+4 = 10
  //10+5 = 15
}
console.log(suma);
 */

/* Imprimir números pares del 1 al 20: Escribe un programa que use un bucle para imprimir solo los números pares entre 1 y 20. */
//1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//2, 4, 6, 8, 10, 12, 14, 16, 18, 20

/* for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    //8/2 = 0
    console.log(i);
  }
} */

/* Invertir un string: Escribe un programa que recorra un string utilizando un bucle y lo imprima al revés. El string puede ser cualquier palabra o frase. */

/* const palabra = "Hola mundo"; //10
// 0123456789
let palabraAlReves = "";

//i = 9
for (let i = palabra.length - 1; i >= 0; i--) {
  //9,8,7,6,5,4,3,2,1,0, finalizando en -1
  //odn
  palabraAlReves += palabra[i];
} */

const input = document.querySelector(".input");
const h2 = document.querySelector(".h2");
const boton = document.querySelector(".boton");

const modificarTextoLogica = () => {
  const palabra = input.value;

  let palabraAlReves = "";

  for (let i = palabra.length - 1; i >= 0; i--) {
    palabraAlReves += palabra[i];
  }
  h2.innerText = palabraAlReves;
};

boton.addEventListener("click", () => {
  modificarTextoLogica();
});

input.addEventListener("input", () => {
  modificarTextoLogica();
});
