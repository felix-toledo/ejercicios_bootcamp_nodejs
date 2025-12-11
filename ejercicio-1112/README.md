# CONSIGNA

# Introducción

Contexto:

En el taller anterior levantamos nuestra tienda con Next.js y manejamos el estado localmente. Hoy notaremos que pasar props manualmente por toda la aplicación ("Prop Drilling") es difícil de mantener y que los datos "harcodeados" no sirven en el mundo real.

**Objetivo de hoy:**

Transformar nuestra app estática en una aplicación dinámica y profesional conectada al mundo real.

---

## 📅 Agenda del Taller

1. **Actividad 1:** Conexión a API Externa (Adiós datos falsos).
2. **Actividad 2:** Creación del `CartContext` (Estado Global).
3. **Actividad 3:** Implementación de Custom Hooks (`useCart`).
4. **Desafíos:** Extras para niveles avanzados.

---

## 🧠 Conceptos Clave

### 1. `useEffect` (Efectos Secundarios)

React no solo renderiza UI. A veces necesitamos hacer cosas "fuera" del renderizado, como pedir datos a un servidor.

- **¿Cuándo se ejecuta?** Al montar el componente, al cambiar una dependencia o al desmontar.
- **Caso de uso hoy:** Traer los productos desde la API al cargar la página.

### 2. `useContext` (El "Teletransportador")

Evita pasar props de Abuelo -> Padre -> Hijo -> Nieto.

- **Provider:** Envuelve la app y "provee" los datos.
- **Consumer (useContext):** Cualquier componente hijo puede "pedir" los datos directamente, sin importar qué tan profundo esté.

### 3. Custom Hooks

Son funciones JavaScript que usan otros hooks de React. Nos permiten reutilizar lógica y mantener los componentes limpios.

- **Ejemplo:** `useCart()` nos dará acceso al carrito sin repetir código.

---

## 🛠️ Consigna Práctica

### Paso 1: Conexión con el Mundo Real 🌍

Vamos a eliminar el array de productos fijos y consumiremos una API real.

- **API a utilizar:** `https://fakestoreapi.com/products`
- **Herramienta:** `useEffect` + `fetch`.
- **Requisito:** Implementar un estado de `loading` (carga) para que el usuario sepa que los datos están llegando.

> ⚠️ Recordatorio Next.js: Para usar hooks, el componente debe tener 'use client' al inicio del archivo.

### Paso 2: Centralizando el Poder (Contexto) 📦

El estado del carrito (`cart`, `setCart`) debe salir de los componentes visuales y moverse a un contexto global.

- Crear carpeta `/context`.
- Crear `CartContext` y `CartProvider`.
- El `Provider` debe envolver a la aplicación (Ojo: Crear un componente wrapper para el Layout).

### Paso 3: Custom Hook `useCart` 🪝

Para consumir el contexto de forma profesional, crearemos nuestro propio hook.

```jsx
// Ejemplo conceptual
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
  return context;
};
```

---

## 🎯 Objetivo Visual

1. Al entrar, se ve "Cargando productos...".
2. Aparecen los productos reales (con fotos y precios de la API).
3. Al dar clic en "Agregar", el componente del Carrito se actualiza automáticamente, sin importar dónde esté ubicado.

---

## 🔥 Extras (Desafíos Avanzados)

¿Terminaste rápido? Intenta esto:

1. Refactorización useFetch:

   Crea un hook genérico useFetch(url) que maneje la lógica de petición, carga y errores, para dejar tus componentes ultra limpios.

2. Badge en Navbar:

   Agrega un ícono de carrito en la barra de navegación que muestre un número rojo con la cantidad total de productos. (Esto demuestra el poder del estado global).

3. Filtrado Dinámico:

   Agrega botones de categorías (Joyas, Ropa, Electrónica). Al hacer clic, debe volver a llamar a la API con la URL filtrada (ej: /products/category/jewelery).

---

## ✅ Criterios de Aceptación

Para dar el taller por finalizado:

- [ ] Los productos vienen de `fakestoreapi.com`.
- [ ] Hay feedback visual de carga (Loading...).
- [ ] El estado del carrito es global (Contexto).
- [ ] El código utiliza el hook `useCart`.
- [ ] La app no rompe al recargar.

---

## 💡 Tips de Supervivencia para Next.js

**Error común:** _"React Context is not available in Server Components"._

Solución:

El layout.tsx raíz es un Server Component. No puedes poner el Contexto directamente ahí.

1. Crea un componente `Providers.tsx` (con `'use client'`).
2. Pon el Contexto ahí.
3. Importa `Providers` en tu `layout.tsx` y envuelve el `{children}`.

---

**¿Listos? ¡A codear! 👨‍💻👩‍💻**
