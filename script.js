const array = [1, 2, 3, 4, 5];

// ciclo for, hacer.

// ciclo while

let numero = 10;
console.log(numero);

// formato del while:
// while (let x = 0, x < 10, x++) {}

while (numero > 0) {
  console.log(numero);
  numero--;
}

// ciclo do while

let numero2 = 2;

do {
  console.log("do while ", numero2);
  numero2++;
} while (numero2 < 10);

// estructuras de control

// Sentencias if y else, la base de las decisiones

const array2 = [1, 2, 3, 4, 6];

if (array2.includes(6)) {
  console.log("contiene 6");
} else if (array2.includes(5)) {
  console.log("contiene 5");
}

array2.includes(5)
  ? console.log("contine 5 de forma diferente")
  : console.log("nocontinee");

// switch case

const color = "verde";
// const color = "rojo";

switch (color) {
  case "rojo":
    console.log("el color es rojo");
    break;
  // el break es para que no siga evaluando los siguientes casos
  case "azul":
    console.log("el color es azul");
    break;
  default:
    console.log("no es ni rojo ni azul");
    break;
}

/////////////////////////###############################

// Matrices

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

matriz.map((fila) => {
  fila.includes(5) ? console.log("tiene un 5") : null;
});

//  reduce?
//  el reduce es para reducir un array a un solo valor
// reduce recibe una función y un valor inicial
// la función recibe dos parámetros, el acumulador y el valor actual
const suma = array.reduce((acumulador, valorActual) => {
  console.log("acumulador", acumulador);
  console.log("valorActual", valorActual);
  return acumulador + valorActual;
}, 0);
console.log(suma);

// some and every
