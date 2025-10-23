## 3\. Ejercicios de Nivel Técnico

Aquí tienes algunos desafíos. Usa el _placeholder_ de API `https://jsonplaceholder.typicode.com` para datos ficticios.

Te proporciono el "qué". Tu trabajo es implementar el "cómo" en TypeScript.

### Ejercicio 1: Fetching y Tipado Básico

**Contexto:** Necesitamos obtener una lista de "posts" de un blog para mostrarlos.
**API:** `https://jsonplaceholder.typicode.com/posts`

**Tarea:**

1.  Define una `interface` llamada `Post` que modele la estructura de los datos de un post (fíjate en la respuesta de la API; al menos debe tener `userId`, `id`, `title`, `body`).
2.  Crea una función `async` llamada `fetchAllPosts` que:
    - No reciba argumentos.
    - Devuelva una `Promise<Post[]>`.
    - Haga `fetch` a la API.
    - Maneje errores de red (con `try...catch`).
    - Maneje errores HTTP (con `response.ok`). Si falla, debe devolver un array vacío `[]`.
3.  Llama a tu función y muestra en consola el título del _tercer_ post.

### Ejercicio 2: Múltiples Peticiones y Agregación de Datos

**Contexto:** Queremos mostrar un "perfil de usuario" que incluya tanto los datos del usuario como sus "tareas" (todos).
**APIs:**

- Usuario: `https://jsonplaceholder.typicode.com/users/1`
- Tareas: `https://jsonplaceholder.typicode.com/todos?userId=1`

**Tarea:**

1.  Define las interfaces `User` y `Todo`.
2.  Define una `interface` llamada `UserProfile` que contenga:
    - `user: User`
    - `todos: Todo[]`
3.  Crea una función `async` llamada `fetchUserProfile` que:
    - Reciba un `userId: number`.
    - Devuelva una `Promise<UserProfile | null>`.
    - **Desafío:** Debe ejecutar ambas peticiones (`fetch` de usuario y `fetch` de todos) **en paralelo**, no una después de la otra. (Pista: `Promise.all`).
    - Si _alguna_ de las dos peticiones falla, la función debe devolver `null`.
4.  Llama a la función y muestra el nombre del usuario y cuántas tareas (todos) tiene.

### Ejercicio 3: Manipulación de Datos Post-Fetch

**Contexto:** Necesitamos un reporte que nos diga cuántos álbumes tiene cada usuario.
**API:** `https://jsonplaceholder.typicode.com/albums`

**Tarea:**

1.  Define la `interface` `Album` (con al menos `userId` e `id`).
2.  Crea una función `async` `getAlbumCountPerUser` que:
    - Haga `fetch` de _todos_ los álbumes.
    - Procese el array resultante (usando métodos como `.reduce()`) para transformarlo en un objeto.
    - La función debe devolver una `Promise<Record<number, number>>`.
    - La _clave_ de este objeto será el `userId` (convertido a `string` o `number`) y el _valor_ será la cantidad de álbumes que posee.
    - Ejemplo de retorno esperado: `{ 1: 10, 2: 10, 3: 10, ... }`
3.  Llama a la función y muestra el objeto resultante en consola.

---
