# NOMBRE — Jarabe de yacón

Prototipo estático en español para una propuesta académica de producto derivado del yacón. Se construyó con HTML, CSS y JavaScript, sin dependencias ni pasos de compilación.

## Archivos principales

- `index.html`: estructura y contenido de la página.
- `css/styles.css`: identidad visual y diseño adaptable.
- `js/main.js`: menú móvil, fichas de producto y formulario de demostración.
- `assets/images/`: imágenes de referencia de los productos y la planta.
- `assets/video/yacon-fondo.mp4`: video de fondo de la portada.

## Alcance académico

NOMBRE es una marca conceptual. Presentaciones, contenidos, ingredientes, nutrición, conservación, precio, origen, proceso y disponibilidad requieren confirmación. Las imágenes son ilustrativas. El formulario no envía ni almacena datos: prepara un correo de demostración. No hay número de WhatsApp ni perfiles sociales configurados.

## Publicación en GitHub Pages

El sitio puede publicarse como archivos estáticos desde la raíz del repositorio. En GitHub, abre **Settings → Pages**, selecciona **Deploy from a branch**, elige la rama **main** y la carpeta **/(root)**. Cada actualización que se suba a esa rama se publicará automáticamente. La dirección será del tipo `https://USUARIO.github.io/REPOSITORIO/`.

## Editar el sitio

- Textos, títulos y enlaces: `index.html`.
- Colores, espacios y tipografía: `css/styles.css`.
- Menú y fichas interactivas: `js/main.js`.
- Cambia las imágenes dentro de `assets/images/` y conserva sus rutas o actualiza el `src` correspondiente en el HTML.
- Para cambiar el video, reemplaza `assets/video/yacon-fondo.mp4` o cambia la ruta del elemento `<source>`.

Puedes abrir `index.html` directamente en un navegador para una vista local. Para probar el video en todos los navegadores, sirve la carpeta con un servidor local estático.
