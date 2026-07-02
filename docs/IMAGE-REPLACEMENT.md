# Image Replacement Guide

Clipse Grooming was designed to make replacing images quick and straightforward.

All images used by the template are stored inside the `assets` directory.

Project structure:

assets/
├── backdrops/
├── services/
└── team/

---

# Hero Background Image

The hero background image is located at:

assets/backdrops/hero-background.jpeg

To replace it:

1. Add your new image to the `backdrops` folder.
2. Update the image path inside `style.css`.

Example:

```css
.hero {
  background:
    linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.65)),
    url("./assets/backdrops/your-image.jpg");
}
```

Recommended specifications:

* Resolution: 1920x1080 pixels
* Format: JPG or JPEG
* Orientation: Landscape
* File size: Under 500KB for best performance

---

# Team Images

Team photos are located in:

assets/team/

Default files:

* marcus-rivera.png
* daniel-brooks.png
* luis-martinez.png

To replace them:

1. Add your own images to the folder.
2. Update the image paths inside the Team section of `index.html`.

Example:

```html
<img src="./assets/team/john-smith.jpg" alt="John Smith">
```

Recommended specifications:

* Resolution: 800x1000 pixels
* Portrait orientation
* JPG or PNG format
* Similar framing for all team members

Professional headshots create the best visual results.

---

# Gallery Images

Gallery images are located in:

assets/services/

Default files:

* skinFade.png
* texturedCrop.png
* classicTaper.png
* beardSculpting.png
* modernFade.png
* premiumGrooming.png

To replace them:

1. Upload your new images to the folder.
2. Update the corresponding image paths inside `index.html`.

Example:

```html
<img src="./assets/services/burst-fade.jpg" alt="Burst Fade">
```

Recommended specifications:

* Resolution: 1000x1000 pixels
* Square aspect ratio
* JPG or WebP format
* Optimized for web performance

The template automatically crops gallery images for a consistent layout.

---

# Supported Image Formats

The template supports:

* JPG
* JPEG
* PNG
* WebP

WebP is recommended for the best performance and smallest file sizes.

---

# Image Optimization

Large image files can slow down your website.

Recommended tools:

* TinyPNG
* Squoosh
* ImageOptim

Aim to keep individual images below 500KB whenever possible.

---

# Maintaining Visual Consistency

For the best appearance:

* Use similar lighting across images.
* Use consistent image dimensions.
* Avoid mixing portrait and landscape images within the same section.
* Keep image styles consistent with your brand identity.

---

# Recommended Photography Style

Clipse Grooming was designed around:

* Luxury aesthetics
* Cinematic lighting
* Dark and moody environments
* Premium barbershop interiors
* Professional portraits
* High contrast imagery

This style complements the gold accents and premium visual identity of the template.

---

Thank you for using Clipse Grooming by RodriguezTech Studios.
