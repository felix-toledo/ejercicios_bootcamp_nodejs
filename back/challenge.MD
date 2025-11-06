### 1\. Challenge: TypeScript y POO

**La consigna:**

"Necesitamos modelar una parte de nuestro e-commerce. Queremos un sistema para manejar el inventario de productos.

1.  Definí una `interface` llamada `Producto` que tenga: `id` (numérico), `nombre` (string) y `precio` (numérico).
2.  Creá una clase llamada `GestorInventario`.
3.  La clase debe tener un arreglo privado (`private`) de `Producto`s.
4.  Implementá tres métodos públicos:
    - `agregarProducto(producto: Producto): void`
    - `buscarProductoPorId(id: number): Producto | undefined`
    - `listarProductos(): Producto[]`"

---

**Qué se espera que resuelvas (y cómo):**

Acá buscan ver si entendés **tipado**, **interfaces** y **encapsulamiento**

---

### 2\. Challenge: Express.js (API REST)

**La consigna:**

"Perfecto. Ahora, tomá ese `GestorInventario` y exponelo a través de una API REST usando Express. Queremos tres endpoints:

1.  `GET /productos`: Debe devolver la lista completa de productos.
2.  `GET /productos/:id`: Debe devolver el producto con ese ID (usa `req.params`).
3.  `POST /productos`: Debe permitir agregar un nuevo producto (recibí los datos por `req.body`)."

---

**Qué se espera que resuelvas (y cómo):**

Quieren ver si sabés levantar un server, definir rutas, usar los métodos HTTP correctos y manejar los objetos `req` y `res` (como vimos en la Clase 6 [cite: 873, 948, 955]).

---

### 3\. El "Parate" sobre NestJS

Acá hacemos una pausa. En la entrevista te preguntarían: "Bien, manejás Express. ¿Y NestJS?".

**Lo que tenés que saber (y que conecta todo):**

- **Express es la base:** Es minimalista. Te da el manejo de rutas y _middlewares_ (como `express.json()`), pero la arquitectura la ponés vos.
- **NestJS es un _Framework_ sobre la base:** NestJS usa Express por debajo (por defecto), pero te obliga a usar una arquitectura mucho más robusta y escalable, muy basada en la POO de TypeScript y patrones como la Inyección de Dependencias.

**¿Cómo se vería el ejercicio anterior en NestJS?** (Conceptualmente)

1.  La clase `GestorInventario` se convertiría en un **Servicio** (`@Injectable()`).
2.  Las rutas (`app.get`, `app.post`) se manejarían en un **Controlador** (`@Controller('productos')`).
3.  La `interface Producto` quizás sería una `class` (DTO) para validaciones automáticas.

NestJS toma los conceptos de POO (Clase 4) y los aplica de forma estricta para organizar el backend, usando Express (Clase 6) como motor.
