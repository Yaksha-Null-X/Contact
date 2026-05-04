# Innomine Web

Static personal website for `innomine.pw`, optimized for GitHub Pages.

This version keeps the visual identity strong: dark theme, red/cyan glow, cinematic cover image, hover animations, profile/contact sections, downloads area, collections gallery, and a custom Home experience built around **Lethal Crimson**.

---

## Final routes

```txt
https://innomine.pw/
https://innomine.pw/contact/
https://innomine.pw/collections/
https://innomine.pw/downloads/
```

---

## Project structure

```txt
/
├── index.html
├── CNAME
├── .nojekyll
├── README.md
├── GUIA_CODIGO.md
├── contact/
│   └── index.html
├── collections/
│   └── index.html
├── downloads/
│   └── index.html
└── assets/
    ├── site.css
    ├── site.js
    ├── images/
    │   ├── profile-main.jpg
    │   ├── profile-main.webp
    │   ├── cover-banner.jpg
    │   └── cover-banner.webp
    ├── collections/
    │   └── put-your-wallpapers-here
    └── downloads/
        └── put-your-download-files-here
```

---

## What each section is for

### `/`

Main personal page.

File:

```txt
index.html
```

The Home contains the main visual identity of the site:

```txt
YAKSHA
Lethal Crimson intro
Expand button
Reveal button
cinematic hero animation
```

### Home interaction

The Home has two main buttons:

```txt
Expand
Reveal
```

#### Expand

Opens the full **Lethal Crimson** reading panel.

The full text is not left permanently exposed on the Home. The Home keeps a shorter preview, and the complete text appears inside a controlled modal-style reading container.

#### Reveal

Starts the cinematic hero sequence.

During this sequence:

```txt
1. The page scroll is temporarily locked.
2. Header and footer are softly pushed/hidden.
3. The hero content fades out.
4. The hero container expands inside the body area.
5. The background image becomes more present.
6. Short text phrases appear over a subtle horizontal band.
7. The scene returns smoothly to the normal Home state.
```

The Reveal sequence is intentionally not a true fullscreen takeover. It remains part of the page layout and avoids hiding the browser cursor or replacing the whole window.

---

### `/contact/`

Contact hub.

File:

```txt
contact/index.html
```

Edit this file to change:

```txt
SimpleX Chat
Federated Network
GitHub Profile
Contact Email
```

Search inside the file for:

```html
<div class="links-grid">
```

Then replace the corresponding links.

---

### `/collections/`

Wallpaper and image gallery.

File:

```txt
collections/index.html
```

This is where you can publish wallpapers, images, visual sets or curated artwork with detailed descriptions.

---

### `/downloads/`

Download area.

File:

```txt
downloads/index.html
```

Use this section for downloadable files such as PDFs, ZIP files, text files, keys, guides, releases or resources.

---

# How to edit the Home text

Open:

```txt
index.html
```

The short Home preview is inside the Home hero section. Look for the paragraph with:

```html
class="lc-home-preview"
```

The full reading text is inside the Lethal modal. Look for:

```html
class="lethal-modal-text"
```

At the end of the full reading section there is a signature area:

```txt
by Yaksha
```

Use that area for the author signature or final credit.

---

# How to edit the Reveal sequence

The Reveal sequence is controlled by:

```txt
assets/site.js
assets/site.css
```

In JavaScript, look for the Reveal-related logic. It controls the order of the scene phrases and timing.

The current narrative sequence is:

```txt
¿Lo ves?
ES...
Es a lo que yo llamo
Lethal Crimson
```

To change the words, edit only the phrase text in `assets/site.js`.

To change visual behavior, edit the related classes in `assets/site.css`.

---

# How to add wallpapers or images to Collections

## Step 1: put the image file here

```txt
assets/collections/
```

Example:

```txt
assets/collections/red-city-wallpaper.jpg
assets/collections/dark-samurai.webp
assets/collections/cyber-night.png
```

Recommended formats:

```txt
.webp  → best for performance
.jpg   → good for photos/wallpapers
.png   → use only when transparency or sharp graphics are needed
```

Recommended size:

```txt
1920px wide maximum for wallpapers
1200px wide maximum for gallery previews
```

Avoid uploading huge 4K or 8K files directly unless you really need them. Heavy images slow the page.

---

## Step 2: open this file

```txt
collections/index.html
```

Find:

```html
<div class="gallery-grid">
```

Each wallpaper is represented by one card.

---

## Step 3: duplicate this card template

```html
<article class="gallery-card">
  <a href="../assets/collections/my-wallpaper.jpg" target="_blank" rel="noopener noreferrer" class="gallery-media">
    <img src="../assets/collections/my-wallpaper.jpg" alt="My wallpaper description" loading="lazy" decoding="async" />
  </a>

  <div class="gallery-body">
    <span class="gallery-kicker">Wallpaper</span>
    <h3>My Wallpaper Title</h3>
    <p>
      Detailed description of the image. Explain the mood, colors, visual style,
      intended use, composition, story or anything important.
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

## Step 4: change the file paths

Change this:

```txt
../assets/collections/my-wallpaper.jpg
```

to the real image name.

Example:

```txt
../assets/collections/red-city-wallpaper.jpg
```

Use the same path in:

```html
href=""
src=""
```

The `href` opens the image.
The `src` displays the preview inside the card.

---

# How to add downloadable files

## Step 1: put files here

```txt
assets/downloads/
```

Example:

```txt
assets/downloads/public-key.txt
assets/downloads/wallpaper-pack.zip
assets/downloads/readme.pdf
```

---

## Step 2: open this file

```txt
downloads/index.html
```

Add a link like this:

```html
<a href="../assets/downloads/wallpaper-pack.zip" download class="link-card">
  <span class="link-title">Wallpaper Pack</span>
  <span class="link-subtext">Download ZIP package</span>
</a>
```

If you want the browser to download the file, keep:

```html
download
```

If you want the browser to open it, remove:

```html
download
```

---

# Image optimization recommendations

For best performance:

```txt
Gallery images: 1200px wide or less
Wallpaper downloads: can be larger, but put them in downloads if very heavy
Cover image: 1600px to 1920px wide
Profile image: 400px to 600px wide
```

Recommended tools:

```txt
Squoosh
TinyPNG
ImageMagick
GIMP
Photoshop export for web
```

Best formats:

```txt
.webp for most images
.jpg for photos
.png only when needed
```

---

# CSS guide

All style is controlled here:

```txt
assets/site.css
```

Main color variables are at the top:

```css
:root {
  --bg: #05080c;
  --cyan: #68dff3;
  --red: #ff2c5e;
  --red-hot: #ff4c73;
}
```

Change these to modify the general theme.

---

# Animation and performance notes

This version keeps:

```txt
shadows
hover animations
diagonal red sweep
floating avatar
slow cover animation
gallery card animation
panel glow drift
Lethal Crimson reading modal
Reveal cinematic hero sequence
```

Performance is maintained because most animations use:

```txt
transform
opacity
filter, only where visually necessary
```

For smoother motion, avoid animating layout-heavy properties unless required:

```txt
width
height
top
left
margin
padding
```

The Reveal sequence may temporarily adjust layout classes, but the visual movement should remain smooth and controlled.

---

# Important responsive behavior

The site uses:

```css
clamp()
grid
media queries
```

This allows it to adapt to:

```txt
small phones
large phones
tablets
laptops
desktop monitors
```

Gallery layout:

```txt
Desktop: 3 columns
Tablet: 2 columns
Phone: 1 column
```

The Reveal sequence is designed to stay inside the page body and preserve visual proportion on different screens.

---

# Preview locally

Use VS Code extension:

```txt
Live Server
```

Preview:

```txt
http://127.0.0.1:5500/
http://127.0.0.1:5500/contact/
http://127.0.0.1:5500/collections/
http://127.0.0.1:5500/downloads/
```

---

# Upload to GitHub

Upload the unzipped content.

Root of repository must contain:

```txt
index.html
CNAME
.nojekyll
README.md
GUIA_CODIGO.md
contact/
collections/
downloads/
assets/
```

Do not upload old files:

```txt
wrangler.jsonc
style.css
script.js
```

The current project uses:

```txt
assets/site.css
assets/site.js
```

---

# GitHub Pages settings

Repository:

```txt
Settings → Pages
```

Use:

```txt
Source: Deploy from a branch
Branch: main
Folder: /root
Custom domain: innomine.pw
```

After DNS is verified, enable:

```txt
Enforce HTTPS
```

---

# Maintenance rule

Keep the project simple:

```txt
HTML = structure and content
CSS = design and animation
JS = interaction and scene timing
```

Avoid adding heavy frameworks unless the site really needs them.
