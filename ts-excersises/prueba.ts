// para correr el codigo hay que hacer npx ts-node prueba.ts desde el mismo directorio

type Prueba = {
  id: number;
  nombre: string;
  activo: boolean;
};

async function pruebaAsincrona(): Promise<Prueba> {
  return {
    id: 1,
    nombre: "Ejemplo",
    activo: true,
  };
}

function pruebaNoAsincrona(): Prueba {
  return {
    id: 2,
    nombre: "Ejemplo No Asincrono",
    activo: false,
  };
}

(async () => {
  console.log(await pruebaAsincrona());
})();

console.log(pruebaNoAsincrona());

const prueba2: Prueba = pruebaNoAsincrona();
// Error: Type 'Promise<Prueba>' is not assignable to type 'Prueba'.

const constanteAsincrona: Promise<Prueba> = pruebaAsincrona();
console.log(constanteAsincrona); //deberia imprimir una promesa

const pruebaConstanteAsincrona: Promise<Prueba> = (async () => {
  return await pruebaAsincrona();
})();
console.log(pruebaConstanteAsincrona);
