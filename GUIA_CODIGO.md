# GUIA_CODIGO.md

Guía en español para entender cómo está hecha esta web.

---

## 1. Qué contiene esta versión

Esta versión tiene:

```txt
Home
Contact
Collections
Downloads
```

Y conserva:

```txt
animaciones
sombras
glow rojo
glow cyan
hover con barras diagonales
tarjetas animadas
avatar flotante
galería tipo cards
Home cinematográfico
modal de lectura Lethal Crimson
secuencia Reveal
```

La optimización no se hizo eliminando efectos, sino usando técnicas más eficientes.

---

## 2. Archivos principales

La estructura importante es:

```txt
index.html
assets/site.css
assets/site.js
```

No uses archivos antiguos como:

```txt
style.css
script.js
```

La versión actual trabaja con:

```txt
assets/site.css
assets/site.js
```

---

## 3. Regla principal de rendimiento

Las animaciones rápidas y fluidas deben usar principalmente:

```css
transform
opacity
```

Por eso verás cosas como:

```css
transform: translate3d(0, -5px, 0);
```

Esto suele ser más fluido que animar:

```css
top
left
width
height
margin
padding
```

En la animación **Reveal** puede haber cambios de tamaño o distribución del contenedor, pero la mayor parte del efecto visual debe apoyarse en transiciones suaves, opacidad y transformaciones.

---

## 4. Estructura HTML general

Cada página usa:

```html
<header></header>
<main></main>
<footer></footer>
```

### Header

Contiene la marca y la navegación:

```html
<header class="site-header">
```

La navegación está en:

```html
<nav class="main-nav">
```

### Main

Contiene el contenido específico de cada página.

En el Home, el contenido principal está dentro de:

```html
<section class="home-hero">
```

### Footer

Contiene enlaces secundarios y créditos.

---

## 5. Cómo funciona el Home

Archivo:

```txt
index.html
```

El Home muestra:

```txt
fondo con imagen de portada
nombre YAKSHA
vista corta del texto
botón Expand
botón Reveal
```

La idea es que el texto completo no quede pegado permanentemente en la página principal.

El Home se mantiene más limpio y visual.

---

## 6. Botón Expand

El botón **Expand** abre la lectura completa de **Lethal Crimson**.

En HTML se identifica por un atributo parecido a:

```html
data-open-lethal
```

La ventana de lectura está en:

```html
<section class="lethal-modal">
```

El texto completo está en:

```html
<div class="lethal-modal-text">
```

El cierre del modal se maneja con botones que usan un atributo parecido a:

```html
data-close-lethal
```

---

## 7. Firma del texto

Al final de la lectura se incluye una firma:

```txt
by Yaksha
```

Normalmente debe ir al final del bloque de lectura, alineada hacia la derecha.

Sirve como cierre visual y autoral del manifiesto.

---

## 8. Botón Reveal

El botón **Reveal** activa la escena cinematográfica del Home.

No abre una página nueva.
No abre un modal.
No toma pantalla completa real.

Lo que hace es transformar temporalmente el contenedor principal del Home.

Durante la animación:

```txt
1. Se bloquea el scroll.
2. Header y footer se ocultan o se apartan suavemente.
3. Los elementos internos del hero desaparecen con fade out.
4. El contenedor se agranda dentro del espacio disponible del body.
5. El fondo se aprecia más.
6. Aparecen frases cortas sobre una franja sutil.
7. La escena espera unos segundos.
8. Todo vuelve suavemente al estado normal.
```

---

## 9. Frases de la secuencia Reveal

La escena usa frases breves como:

```txt
¿Lo ves?
ES...
Es a lo que yo llamo
Lethal Crimson
```

Estas frases deben editarse en:

```txt
assets/site.js
```

Busca la parte donde se define o cambia el texto de la escena Reveal.

---

## 10. Franja del texto Reveal

La animación no debe oscurecer toda la pantalla.

Solo debe aparecer una franja o renglón detrás del texto para mejorar la lectura.

Ese estilo se controla en:

```txt
assets/site.css
```

Busca clases relacionadas con:

```txt
reveal
cinematic
caption
line
stage
```

El objetivo visual es:

```txt
texto claro
fondo visible
atenuación horizontal sutil
sin cubrir toda la página
```

---

## 11. Header y footer durante Reveal

Durante Reveal, el header y el footer pueden ocultarse temporalmente.

La intención no es capturar toda la ventana, sino permitir que el contenedor crezca de forma proporcional.

El comportamiento correcto es:

```txt
header se aparta suavemente
footer se aparta suavemente
hero se expande dentro del body
al terminar, todo vuelve a su sitio
```

Esto evita que la animación se vea torcida o descentrada.

---

## 12. Fondo del Home

El fondo del hero usa la imagen:

```txt
assets/images/cover-banner.webp
assets/images/cover-banner.jpg
```

En HTML se carga con:

```html
<picture>
  <source srcset="assets/images/cover-banner.webp" type="image/webp" />
  <img src="assets/images/cover-banner.jpg" alt="Night skyline cover" />
</picture>
```

Para que el fondo rellene el contenedor, en CSS debe mantenerse una regla similar a:

```css
.home-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

`object-fit: cover` permite que la imagen cubra todo el contenedor sin dejar bordes vacíos.

---

## 13. Cómo funciona Collections

Archivo:

```txt
collections/index.html
```

La galería está dentro de:

```html
<div class="gallery-grid">
```

Cada tarjeta tiene:

```html
<article class="gallery-card">
```

La imagen está en:

```html
<a class="gallery-media">
```

El texto está en:

```html
<div class="gallery-body">
```

---

## 14. Cómo agregar una imagen a Collections

Primero sube tu imagen a:

```txt
assets/collections/
```

Luego agregas una tarjeta en:

```txt
collections/index.html
```

Ejemplo:

```html
<article class="gallery-card">
  <a href="../assets/collections/wallpaper.jpg" target="_blank" rel="noopener noreferrer" class="gallery-media">
    <img src="../assets/collections/wallpaper.jpg" alt="Descripción de la imagen" loading="lazy" decoding="async" />
  </a>

  <div class="gallery-body">
    <span class="gallery-kicker">Wallpaper</span>
    <h3>Título de la imagen</h3>
    <p>
      Descripción detallada: colores, estilo, ambiente, resolución,
      historia visual o uso recomendado.
    </p>

    <dl class="gallery-meta">
      <div>
        <dt>Type</dt>
        <dd>Wallpaper</dd>
      </div>
      <div>
        <dt>Palette</dt>
        <dd>Dark / Red / Cyan</dd>
      </div>
      <div>
        <dt>Resolution</dt>
        <dd>1920x1080</dd>
      </div>
    </dl>
  </div>
</article>
```

---

## 15. Cómo funciona la animación de las tarjetas

La tarjeta tiene transición:

```css
.gallery-card {
  transition:
    transform 170ms var(--ease-snap),
    border-color 170ms ease,
    box-shadow 170ms ease;
}
```

Cuando pasas el mouse:

```css
.gallery-card:hover {
  transform: translate3d(0, -6px, 0) scale(1.006);
}
```

Eso hace que la tarjeta se levante suavemente.

---

## 16. Cómo funciona el zoom de imagen en galería

```css
.gallery-card:hover .gallery-media img {
  transform: scale(1.045);
}
```

La imagen crece un poco al pasar el mouse.

---

## 17. Cómo funciona el glow animado del panel

Algunos paneles usan:

```css
.panel::after
```

Y la animación:

```css
@keyframes panelGlowDrift {
  from {
    opacity: 0.54;
    transform: translate3d(-8px, -5px, 0);
  }
  to {
    opacity: 0.88;
    transform: translate3d(8px, 5px, 0);
  }
}
```

Esto crea un brillo suave y profesional.

---

## 18. Cómo funciona el hover rojo diagonal

El efecto usa:

```css
.link-card::before
```

Y se activa con:

```css
.link-card:hover::before {
  animation: slashSweep 520ms var(--ease-out) both;
}
```

La animación:

```css
@keyframes slashSweep {
  from {
    transform: translate3d(-120%, 0, 0) skewX(-24deg);
  }

  to {
    transform: translate3d(120%, 0, 0) skewX(-24deg);
  }
}
```

---

## 19. Cómo funciona el responsive

La galería cambia así:

```txt
Desktop: 3 columnas
Tablet: 2 columnas
Celular: 1 columna
```

CSS:

```css
@media (max-width: 920px) {
  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
```

El Home también usa medidas flexibles para que la escena Reveal no se rompa en pantallas pequeñas.

---

## 20. Por qué se usa `loading="lazy"`

En imágenes de galería:

```html
<img loading="lazy" decoding="async" />
```

Eso ayuda a que el navegador no cargue todas las imágenes inmediatamente.

Carga primero lo visible y luego el resto.

---

## 21. Cómo cambiar colores

Edita:

```txt
assets/site.css
```

Variables principales:

```css
--bg: #05080c;
--cyan: #68dff3;
--red: #ff2c5e;
--red-hot: #ff4c73;
```

---

## 22. Cómo cambiar velocidad de animaciones

Busca en:

```txt
assets/site.css
```

Variables o reglas relacionadas con duración:

```css
--motion-fast: 520ms;
--motion-medium: 680ms;
```

Menor valor = más rápido.

Ejemplo:

```css
--motion-fast: 420ms;
```

Mayor valor = más lento.

Para la secuencia Reveal, algunas pausas también pueden estar controladas desde:

```txt
assets/site.js
```

Ahí se ajustan esperas entre frases y duración general de la escena.

---

## 23. JavaScript

Archivo:

```txt
assets/site.js
```

Este archivo controla:

```txt
pequeñas reacciones de botones
doble clic en enlaces especiales si aplica
apertura y cierre del modal Lethal Crimson
bloqueo temporal de scroll durante Reveal
secuencia de frases de Reveal
restauración del Home al terminar la escena
```

No controla la galería ni carga datos dinámicos.

---

## 24. Regla para seguir aprendiendo

Cuando quieras cambiar contenido:

```txt
HTML
```

Cuando quieras cambiar estilo:

```txt
CSS
```

Cuando quieras cambiar interacción:

```txt
JS
```

Para el Home actual:

```txt
Texto corto del Home → index.html
Texto completo de lectura → index.html
Aspecto visual de Expand/Reveal → assets/site.css
Orden y tiempos de Reveal → assets/site.js
```
