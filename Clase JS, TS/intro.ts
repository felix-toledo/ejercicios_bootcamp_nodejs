// Para declarar una variable
// let nombreVariable: tipoDato = valor;
let variable: string = "Hola Mundo";

// ########################################
// Para declarar una función
function saludar(nombre: string): string {
  return `Hola, ${nombre}`;
}

function despedirAUnNumero(numero: number): string {
  return `Adiós, ${numero}`;
}

// ########################################
// Tipos de datos básicos
let nuumero: number = 42;
let booleano: boolean = true;
let arreglo: number[] = [1, 2, 3, 4, 5];
let tupla: [string, number] = ["Edad", 30];
let anyTipo: any = "Puede ser cualquier cosa";
let nulo: null = null;
let indefinido: undefined = undefined;

//#############

// #######

// Declarar un objeto tipado en ts.

let persona: {
  nombre: string;
  edad: number;
};

persona = { nombre: "Felix", edad: 25 };

console.log(saludar(persona.nombre));

console.log(despedirAUnNumero(persona.edad));

// #IMPORTANT###############3

// there are two main ways to define object shapes in TypeScript:
// one is using interfaces and the other is using type aliases.

// Interfaces
// la estructura de un objeto, especificando propiedades que debe tener y sus tipos de datos

// Establecen expectativas sobre cómo se debe usar un objeto.

interface Jugador {
  nombre: string;
  posicion: string;
  numero: number;
}

interface Equipo {
  nombre: string;
  miembros: number;
  jugadores: Jugador[];
}

// Se agrega nuevas propiedades a la interfaz equipo, creando una nueva que podríamos usar por ejemplo si queremos datos mas completos de un equipo.
interface EquipoCompleto extends Equipo {
  entrenador: string;
  estadio: string;
  añoFundacion: number;
}

// Un tipo describe el tipo de datos ue puede contener una variable, funcion o parametro.

type ID = string | number;

// en el mismo caso del equipo, podemos usar tipo de esta forma
type EquipoType = {
  nombre: string;
  socios: number;
  logoUrl: string;
  lema: string;
};

type RequisitosDeArgentina = {
  cuit: number;
  socios: number;
  fundacion: number;
  pagoImpuestos: boolean;
};

type EquipoArgentino = EquipoType & RequisitosDeArgentina;

type RequisitosDeUruguay = {
  rif: string;
  socios: number;
  fundacion: number;
};

type EquipoArgentinoOUruguayo = EquipoType &
  (RequisitosDeArgentina | RequisitosDeUruguay);

// LEER https://www.typescriptlang.org/docs/handbook/2/objects.html
// https://gemini.google.com/gem/2e66b4cb7a31/befb98da0a64a4f7

// las INTERFACES SON PARA OBJETOS, LOS TIPOS SON PARA VARIABLES, FUNCIONES O PARAMETROS

// Try catch

try {
  // Código que puede lanzar una excepción
  let resultado = saludar("Mundo");
  console.log(resultado);
} catch (error) {
  // Manejo de la excepción
  console.error("Ocurrió un error:", error);
}

const riverPlate: EquipoArgentino = {
  nombre: "River Plate",
  socios: 150000,
  fundacion: 1901,
  pagoImpuestos: true,
  logoUrl: "https://example.com/logo.png",
  lema: "El Más Grande",
  cuit: 30678912345,
};
