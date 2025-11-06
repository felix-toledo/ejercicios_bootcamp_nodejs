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

// EJ 7: Generador de descripciones de perfil.

function generateADescriptionFromAProfessionalObject(profesional) {
  return `${profesional.nombre} es un ${
    profesional.oficio
  } con una calificación de ${
    profesional.calificacion
  } estrellas y ha realizado ${profesional.trabajosRealizados} trabajos. ${
    !profesional.perfilVerificado ? "Su perfil no está verificado." : ""
  }`;
}

console.log(
  profesionales.map((profesional) =>
    generateADescriptionFromAProfessionalObject(profesional)
  )
);

// EJ 8: Categorización de profesionales basado en trabajo.

function categorizeProfessionalsFromJobCount(professional) {
  switch (true) {
    case professional.trabajosRealizados >= 200:
      return "Leyenda";
    case professional.trabajosRealizados >= 100:
      return "Experimentado";
    case 50 > professional.trabajosRealizados < 100:
      return "Confiable";
    default:
      return "Nuevo Talento";
  }
}

profesionales.forEach((profesional) => {
  profesional.categoria = categorizeProfessionalsFromJobCount(profesional);
});

console.log(profesionales);
//---

// EJ 9: Lista única de especialidades

const todasLasEspecialidades = profesionales.flatMap(
  (profesional) => profesional.especialidades
);

const especialidadesUnicasSet = new Set(todasLasEspecialidades);

const especialidadesUnicasArray = [...especialidadesUnicasSet];

console.log("esp unicas", especialidadesUnicasArray);

const especialidadesUnicas = profesionales.reduce((acc, profesional) => {
  // La especialidad es un array dentro del objeto profesional, entonces queremos recorrerlo por cada profesional.
  profesional.especialidades.forEach((especialidad) => {
    if (!acc.includes(especialidad)) {
      acc.push(especialidad);
    }
  });
  return acc;
}, []);

console.log(especialidadesUnicas);

//  EJ 10: Ordenar profesionaels por calificacion y por costo hora

function ordenarProfesionalesPor(clave, profesionales, orden = "asc") {
  profesionales.sort((a, b) => {
    const valorA = a[clave];
    const valorB = b[clave];
    if (valorA < valorB) {
      return orden === "asc" ? -1 : 1;
    }
    if (valorA > valorB) {
      return orden === "asc" ? 1 : -1;
    }
    return 0;
  });
}

ordenarProfesionalesPor("calificacion", profesionales, "desc");
console.log("ordenados por calificacion", profesionales);

// EJ 12: Prueba reduce 1.

const trabajosCompletados = [
  { id: 101, profesional: "Juan Perez", monto: 5000 }, // Comisión: 500
  { id: 102, profesional: "Ana Gómez", monto: 8500 }, // Comisión: 850
  { id: 103, profesional: "Carlos Ruiz", monto: 3200 }, // Comisión: 320
  { id: 104, profesional: "Ana Gómez", monto: 12000 }, // Comisión: 1200
];

const COMISION_PERCENT = 0.1;

const comisionesTotales = trabajosCompletados.reduce((acumulador, trabajo) => {
  acumulador += trabajo.monto * COMISION_PERCENT;
  return acumulador;
}, 0);

console.log(comisionesTotales);

//  EJ 12 Prueba reduce 2.

const newProfesionales = [
  { id: "uuid-1", nombre: "Juan Perez", especialidad: "Plomería" },
  { id: "uuid-2", nombre: "Ana Gómez", especialidad: "Electricidad" },
  { id: "uuid-3", nombre: "Carlos Ruiz", especialidad: "Plomería" },
];

// me tiene que devolver por ej: uuid-1: {id: 'uuid-1', nombre: 'Juan Perez', especialidad: 'Plomería'}

const betterArrayProfesionales = newProfesionales.reduce((acc, profesional) => {
  acc[profesional.id] = profesional;
  return acc;
}, {});

console.log(betterArrayProfesionales);

// EJ 13. Aplanar y filtrar a la vez. Ver todos los servicios en estado pendientes.

const ordenesDeServicio = [
  // Orden 1
  {
    id: "orden-A",
    servicios: [
      { id: "item-A1", desc: "Cambiar cuerito canilla", estado: "Completado" },
      { id: "item-A2", desc: "Destapar cañería cocina", estado: "Pendiente" },
    ],
  },
  // Orden 2
  {
    id: "orden-B",
    servicios: [
      { id: "item-B1", desc: "Instalar tomacorriente", estado: "Completado" },
    ],
  },
  // Orden 3
  {
    id: "orden-C",
    servicios: [
      { id: "item-C1", desc: "Revisar tablero eléctrico", estado: "Pendiente" },
      { id: "item-C2", desc: "Colocar fotocélula", estado: "Pendiente" },
    ],
  },
];

const serviciosDelCliente = ordenesDeServicio.flatMap((orden) =>
  orden.servicios.filter((servicio) => servicio.estado === "Pendiente")
);

console.log("serviciosDelCliente", serviciosDelCliente);
