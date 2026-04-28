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
```

La optimización no se hizo eliminando efectos, sino usando técnicas más eficientes.

---

## 2. Regla principal de rendimiento

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

---

## 3. Estructura HTML

Cada página usa:

```html
<header></header>
<main></main>
<footer></footer>
```

### Header

Contiene la navegación:

```html
<nav class="main-nav">
```

### Main

Contiene el contenido específico de cada página.

### Footer

Contiene enlaces secundarios y créditos.

---

## 4. Cómo funciona Collections

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

## 5. Cómo agregar una imagen a Collections

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

## 6. Cómo funciona la animación de las tarjetas

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

## 7. Cómo funciona el zoom de imagen en galería

```css
.gallery-card:hover .gallery-media img {
  transform: scale(1.045);
}
```

La imagen crece un poco al pasar el mouse.

---

## 8. Cómo funciona el glow animado del panel

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

## 9. Cómo funciona el hover rojo diagonal

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

## 10. Cómo funciona el responsive

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

---

## 11. Por qué se usa `loading="lazy"`

En imágenes de galería:

```html
<img loading="lazy" decoding="async" />
```

Eso ayuda a que el navegador no cargue todas las imágenes inmediatamente.

Carga primero lo visible y luego el resto.

---

## 12. Cómo cambiar colores

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

## 13. Cómo cambiar velocidad de animaciones

Busca:

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

---

## 14. JavaScript

Archivo:

```txt
assets/site.js
```

Solo agrega una pequeña reacción al presionar botones y tarjetas.

No controla la galería ni carga datos dinámicos.

---

## 15. Regla para seguir aprendiendo

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
