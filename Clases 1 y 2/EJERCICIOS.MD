### **Contexto de Datos: Profesionales de APP**

Para todos los ejercicios, vamos a utilizar la siguiente lista de profesionales. Imagina que esta es la primera data que obtenemos de nuestra base de datos. Cópiala y pégala en la parte superior de tu archivo de práctica.

```javascript
const profesionales = [
  {
    id: 1,
    nombre: "Roberto Carlos",
    oficio: "Plomero",
    calificacion: 4.7,
    trabajosRealizados: 128,
    cobraPorHora: true,
    costoPorHora: 850.5,
    perfilVerificado: true,
    especialidades: ["instalaciones", "reparaciones", "fugas de gas"],
  },
  {
    id: 2,
    nombre: "Juana Molina",
    oficio: "Electricista",
    calificacion: 4.9,
    trabajosRealizados: 215,
    cobraPorHora: true,
    costoPorHora: 1100.0,
    perfilVerificado: true,
    especialidades: ["tableros", "instalaciones", "iluminación led"],
  },
  {
    id: 3,
    nombre: "Miguel Ángel",
    oficio: "Pintor",
    calificacion: 4.5,
    trabajosRealizados: 89,
    cobraPorHora: false,
    costoPorHora: null, // Cobra por proyecto
    perfilVerificado: true,
    especialidades: ["interiores", "exteriores", "revestimientos"],
  },
  {
    id: 4,
    nombre: "Laura Pausini",
    oficio: "Plomero",
    calificacion: 4.2,
    trabajosRealizados: 75,
    cobraPorHora: true,
    costoPorHora: 780.0,
    perfilVerificado: false,
    especialidades: ["destapaciones", "grifería"],
  },
  {
    id: 5,
    nombre: "Ricardo Arjona",
    oficio: "Gasista",
    calificacion: 3.8,
    trabajosRealizados: 55,
    cobraPorHora: true,
    costoPorHora: 950.0,
    perfilVerificado: true,
    especialidades: ["reparaciones", "inspecciones", "fugas de gas"],
  },
];
```

---

### **Ejercicios Prácticos**

Aquí tienes 10 desafíos para aplicar tus conocimientos. ¡Vamos a ello\!

#### **1. Filtrar para Encontrar Expertos**

Un cliente necesita un plomero. Tu tarea es crear una función que reciba el oficio como parámetro y devuelva un nuevo arreglo solo con los profesionales que coincidan.

- **Conceptos a aplicar:** Funciones, Arreglos de Objetos, `filter()`, Arrow Functions, Comparación Estricta (`===`).

#### **2. Mapeo de Datos para la Interfaz de Usuario**

Para mostrar una tarjeta de presentación de cada profesional en la app, no necesitamos todos sus datos. Crea una función que transforme el arreglo `profesionales` en uno nuevo donde cada objeto solo contenga `nombre`, `oficio` y `calificacion`.

- **Conceptos a aplicar:** `map()`, Creación de nuevos objetos, Arrow Functions.

#### **3. Encontrar un Profesional Específico**

Un cliente quiere ver el perfil completo de Juana Molina. Crea una función que busque y devuelva el objeto completo del profesional cuyo `nombre` coincida exactamente con el que se le pasa como parámetro.

- **Conceptos a aplicar:** `find()`, Acceso a propiedades de objetos, Comparación Estricta.

#### **4. Calculando el Costo Promedio por Hora**

El equipo de negocio de APP quiere saber el costo promedio por hora de los profesionales que sí cobran por hora. Debes calcular este promedio.

- **Pista:** Necesitarás primero filtrar a los que cobran por hora y luego combinar sus costos.
- **Conceptos a aplicar:** `filter()`, `reduce()` para sumarizar, Lógica matemática (suma y división), Acceso a propiedades.

#### **5. ¿Hay Alguien con Perfil Sin Verificar?**

Para la confianza de la plataforma, es crucial saber si existen profesionales pendientes de verificación. Escribe una función que revise el arreglo y devuelva `true` si al menos un profesional tiene la propiedad `perfilVerificado` en `false`.

- **Conceptos a aplicar:** `some()`, Valores Booleanos.

#### **6. Todos Nuestros Expertos de Élite**

APP quiere lanzar una campaña "Premium" solo con profesionales que tengan una calificación superior a 4.6. Primero, filtra a estos profesionales. Luego, usando un método de array, verifica si **todos** los de esa nueva lista tienen su perfil verificado.

- **Conceptos a aplicar:** `filter()`, `every()`, Operadores de comparación (`>`).

#### **7. Generador de Descripciones de Perfil**

Crea una función que tome un objeto de profesional y devuelva un string con una descripción, por ejemplo: "Roberto Carlos es un Plomero con una calificación de 4.7 y ha realizado 128 trabajos.". Si el perfil no está verificado, debe añadir al final: "(Perfil no verificado)".

- **Conceptos a aplicar:** Funciones, Acceso a propiedades (Dot Notation), Template Literals (o concatenación de strings), Estructura de control `if/else`.

#### **8. Sistema de Categorización de Profesionales**

Basado en la cantidad de trabajos realizados, necesitamos categorizar a los profesionales. Escribe una función que, dado un profesional, devuelva una de estas categorías:

- "Leyenda": Más de 200 trabajos.

- "Experimentado": Entre 100 y 200 trabajos.

- "Confiable": Entre 50 y 99 trabajos.

- "Nuevo Talento": Menos de 50 trabajos.

- **Conceptos a aplicar:** Funciones, `if/else if/else`, Operadores lógicos (`&&`) y de comparación (`>=`, `<`).

#### **9. Lista Única de Especialidades**

Para un filtro de búsqueda avanzado, APP necesita una lista de **todas las especialidades disponibles sin que se repitan**. Itera sobre todos los profesionales y genera un nuevo arreglo con cada especialidad una sola vez.

- **Pista:** Puedes usar `reduce()` para construir el nuevo arreglo, y dentro de la lógica, verificar si la especialidad ya fue incluida.
- **Conceptos a aplicar:** `reduce()` (uso avanzado), `for` o `forEach` anidado (para las especialidades de cada profesional), `includes()`, `push()`.

#### **10. Ordenar Profesionales por Calificación**

Si bien no vimos el método `sort()` explícitamente, su lógica es una excelente práctica de funciones y condicionales. Investiga cómo funciona `Array.prototype.sort()` y úsalo para crear una función que ordene a los profesionales de mayor a menor calificación.

- **Conceptos a aplicar:** Investigación de métodos de Array (`sort()`), Funciones como parámetros (callbacks), Lógica de comparación.

---
