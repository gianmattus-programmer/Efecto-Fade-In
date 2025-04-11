## Efecto de Entrada Fade-In con JavaScript y CSS

Este proyecto implementa una animación de entrada suave para páginas web utilizando únicamente JavaScript y CSS, servida a través de jsDelivr. Integra este efecto en cualquier sitio web con una simple etiqueta `<script>`.

### ⚙️ ¿Cómo funciona el efecto?

1.  **Al inicio (antes de cargar la página):**
    El script aplica los siguientes estilos al `<body>` para ocultar el contenido visualmente y preparar la animación:

    ```javascript
    document.body.style.opacity = "0";            // Oculta el contenido
    document.body.style.transform = "scale(0.98)"; // Aplica un ligero "zoom hacia adentro"
    document.body.style.filter = "blur(5px)";     // Desenfoca el contenido
    ```

    Además, se define una transición suave para estas propiedades:

    ```javascript
    document.body.style.transition = "opacity 1s ease, transform 1s ease, filter 1s ease";
    ```

    Esto asegura que cualquier cambio en `opacity`, `transform`, y `filter` se anime gradualmente durante 1 segundo con una función de aceleración suave (`ease`).

2.  **Cuando todo el contenido ha cargado (`window.onload`):**
    Una vez que la página y sus recursos están completamente cargados, el script restaura los estilos del `<body>` a sus valores normales:

    ```javascript
    document.body.style.opacity = "1";
    document.body.style.transform = "scale(1)";
    document.body.style.filter = "blur(0)";
    ```

    Este cambio de estilos activa la animación definida previamente en la propiedad `transition`, resultando en un efecto de aparición gradual, enfoque y un sutil "zoom out".

    ➡️ **Resultado:** El contenido de la página aparece gradualmente, se enfoca y realiza un suave "zoom out".

### 🔗 ¿Cómo se conecta todo?

1.  El archivo `fade-in.js` que contiene la lógica del efecto está alojado en este repositorio de GitHub:
    [https://github.com/gianmattus-programmer/Efecto-Fade-In](https://github.com/gianmattus-programmer/Efecto-Fade-In)

2.  jsDelivr, una CDN gratuita y rápida, sirve este archivo como si estuviera en un servidor dedicado. Para utilizar el efecto en cualquier página web, simplemente incluye la siguiente etiqueta `<script>` en la sección `<head>` o justo antes de la etiqueta `</body>`:

    ```html
    <script src="https://cdn.jsdelivr.net/gh/gianmattus-programmer/Efecto-Fade-In/dist/fade-in.js"></script>
    ```

    Esta única línea de código es suficiente para aplicar el efecto de entrada a la página.

### 🧪 ¿Por qué funciona sin tener que copiar todo en el HTML?

El script JavaScript funciona de forma autónoma porque:

* Se ejecuta automáticamente tan pronto como el navegador lo descarga y analiza.
* Manipula directamente el elemento `<body>` de la página, aplicando los estilos y la transición necesarios.
* Utiliza las capacidades de animación CSS, que se activan mediante los cambios de estilo realizados por el JavaScript.

### 📦 Ventajas de este enfoque

* ✅ **Reutilizable:** El script se puede incluir en cualquier número de páginas web sin necesidad de copiar y pegar el código directamente en cada archivo HTML.
* ✅ **Modular:** La lógica del efecto está encapsulada en un archivo JavaScript separado, lo que mantiene el código HTML limpio y organizado.
* ✅ **Profesional (como una librería externa):** Al servir el script a través de jsDelivr, se integra al proyecto de manera similar a una librería externa, facilitando su gestión y uso.
* ✅ **No necesita instalar nada:** Los usuarios solo necesitan añadir una etiqueta `<script>` a su HTML, sin requerir instalaciones de dependencias o configuraciones complejas.
