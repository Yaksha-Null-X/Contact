# Innomine Web

Static personal website for `innomine.pw`, optimized for GitHub Pages.

This version keeps the visual identity strong: dark theme, red/cyan glow, shadows, fast hover animations, profile image, contact page, downloads page and a new wallpaper/image collection gallery.

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

Use it later for your full personal website.

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

Then replace:

```txt
https://simplex.chat/
#
https://github.com/Yaksha-Null-X
mailto:yourmail@example.com
```

---

### `/collections/`

Wallpaper and image gallery.

File:

```txt
collections/index.html
```

This is where you can publish your wallpapers, images, visual sets or curated artwork with detailed descriptions.

---

### `/downloads/`

Download area.

File:

```txt
downloads/index.html
```

Use this section for downloadable files such as PDFs, ZIP files, text files, keys, guides, releases or resources.

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

## Step 5: write a strong description

Good description example:

```txt
A dark cyberpunk skyline with saturated red accents, cold cyan reflections,
and a nocturnal atmosphere. Designed as a desktop wallpaper with strong contrast
and a cinematic visual mood.
```

Recommended metadata:

```txt
Type
Resolution
Palette
Mood
Format
Status
```

You can add or remove metadata rows.

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

Change these to modify the entire theme.

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
```

Performance is maintained because animations use:

```txt
transform
opacity
```

These are generally much smoother than animating:

```txt
width
height
top
left
margin
padding
```

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
HTML = structure
CSS = design and animation
JS = small interaction
```

Avoid adding heavy frameworks unless the site really needs them.
