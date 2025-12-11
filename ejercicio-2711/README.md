**Objetivos obligatorios**

- Levantar una app con Next.js utilizando el bundle inicial del proyecto.
- Crear rutas agrupadas utilizando el App Router de Next.js.
- Implementar un layout global que se aplique a todas las rutas hijas del grupo.
- Utilizar el hook `useState()` para manejar el estado interno de los componentes.

🛒 **Consigna práctica**
Siguiendo los objetivos anteriores, deberán construir una mini aplicación de carrito de compras, con al menos:

**Componentes:**

- `ProductList`: lista de productos disponibles.
- `Cart`: componente que muestra los productos agregados al carrito.
- `ProductCard` (opcional): para renderizar cada producto individual.

**Funcionalidad requerida:**

- Al hacer clic en un botón del estilo “Añadir al carrito”, el carrito debe actualizar su estado usando `useState`.
- El componente `Cart` debe mostrar los productos agregados.

**Extras opcionales (para quienes quieran ir más allá):**

- Mostrar y actualizar la cantidad de cada producto agregado al carrito.
- Mostrar el total de productos del carrito.
- Calcular el total a pagar.

✅ **Criterios de finalización**
La consigna se considera completa cuando:

- La app corre correctamente con Next.js.
- Usan rutas agrupadas dentro de `/app`.
- Existe un layout compartido.
- El carrito cambia su estado de forma correcta y refleja los productos agregados.
