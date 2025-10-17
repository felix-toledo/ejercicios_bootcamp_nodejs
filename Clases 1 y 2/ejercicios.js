import { profesionales } from "./profesionales.js";

console.log(profesionales);
//---

//---

//---
// EJ 1: Buscar plomeros

function buscarPorOficio(oficio) {
  return profesionales.filter(
    (profesional) => profesional.oficio.toLowerCase() === oficio.toLowerCase()
  );
}
//---

//---

//---
// cliente necesita un plomero
console.log(buscarPorOficio("plomero"));

// EJ 2: Nuevo array solo con nombre (sin apellido, osea hasta el primer " "), oficio y clasificación.

const nuevoArray = profesionales.map((profesional) => {
  return {
    nombre: profesional.nombre.split(" ")[0],
    oficio: profesional.oficio,
    calificacion: profesional.calificacion,
  };
});

console.log(nuevoArray);
//---

//---

//---
// EJ 3: Encontrar por nombre

function buscarUnoSoloPorNombre(nom) {
  return profesionales.find(
    (profesional) => profesional.nombre.toLowerCase() === nom.toLowerCase()
  );
}

console.log(buscarUnoSoloPorNombre("Juana Molina"));
//---

//---

//---
// EJ 4: Calcular el costo promedio por hora.
const profesionalesQueCobranPorHora = profesionales.filter(
  (profesional) => profesional.cobraPorHora
);

console.log(
  profesionalesQueCobranPorHora.reduce(
    (acumulador, profesional, index, array) => {
      acumulador += profesional.costoPorHora;
      console.log("acumulador", acumulador);
      console.log("profesional.costoPorHora", profesional.costoPorHora);
      console.log("index", index);
      console.log("array.length", array.length);
      if (index === array.length - 1) {
        return acumulador / array.length;
      }
      return acumulador;
    },
    0
  )
);
//---

//---

//---
//  EJ 5: Hay alguien con perfil sin verificar?

const hayPerfilSinVerificar = profesionales.some(
  (profesional) => !profesional.perfilVerificado
);
console.log("hayPerfilSinVerificar", hayPerfilSinVerificar);

// QUIEN ES?

const quienNoTienePerfilVerificado = profesionales.filter(
  (profesional) => !profesional.perfilVerificado
);

console.log("quienNoTienePerfilVerificado", quienNoTienePerfilVerificado);
//---

//---

//---
// EJ 6: Todos nuestros expertos de élite, con 4.6 o mas

const expertosDeElite = profesionales.filter(
  (profesional) => profesional.calificacion >= 4.6
);

console.log("expertosDeElite", expertosDeElite);

// Que hace el every en este caso?

const todosSonExpertosDeElite = profesionales.every(
  (profesional) => profesional.calificacion >= 4.6
);
console.log("todosSonExpertosDeElite", todosSonExpertosDeElite);
// devuelve false porque no todos tienen calificación mayor o igual a 4.6

const todosTienenNombre = profesionales.every(
  (profesional) => profesional.nombre
);

console.log("todosTienenNombre", todosTienenNombre);
// devuelve true porque todos tienen nombre

//---

//---

//---
