# Customization Guide

## Updating Business Information

Open `index.html` and update the following sections:

* Business name (`Clipse Grooming`)
* Phone number
* Email address
* Business address
* Business hours
* Social media links

---

## Changing Services and Pricing

Locate the `Services` section inside `index.html`.

Each service card follows this structure:

```html
<div class="service-card">
  <h3>Classic Cut</h3>
  <p>Clean lines and timeless styling tailored to your look.</p>
  <span>Starting at $35</span>
</div>
```

Simply replace the title, description, and price with your own services.

---

## Updating Team Members

Team members are located inside:

```text
assets/team/
```

Replace the images with your own files and update the names and descriptions inside the `Team` section of `index.html`.

Recommended image size:

* 800x1000 pixels
* Portrait orientation
* JPG or PNG format

---

## Replacing Gallery Images

Gallery images are stored in:

```text
assets/services/
```

Replace the existing files or update the image paths inside `index.html`.

Recommended image size:

* 1000x1000 pixels
* Square format
* Optimized for web usage

---

## Changing The Hero Background

The hero image is defined in `style.css`:

```css
.hero {
  background:
    linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.65)),
    url("./assets/backdrops/hero-background.jpeg");
}
```

Replace the image inside:

```text
assets/backdrops/
```

Recommended dimensions:

* 1920x1080 pixels
* Landscape orientation
* Optimized JPEG format

---

## Updating Colors

Color variables are located at the top of `style.css`.

Example:

```css
:root {
  --accent: #c9a66b;
  --accent-hover: #b89358;
}
```

Changing these values updates the appearance of the entire template.

---

## Updating Fonts

Fonts are loaded inside the `<head>` section of `index.html`.

Current fonts:

* Cinzel
* Inter

You may replace them with any Google Font combination.

---

## Connecting The Contact Form

The template uses Formspree for appointment requests.

Locate:

```html
action="https://formspree.io/f/your_endpoint"
```

Replace it with your own Formspree endpoint.

See `FORMSPREE-SETUP.md` for complete instructions.

---

## Deployment

The template can be deployed to:

* Netlify
* Vercel
* GitHub Pages
* Shared Hosting Providers
* VPS Servers

See `DEPLOYMENT.md` for full instructions.

---

## Need Help?

For questions or support regarding this template, contact:

RodriguezTech Studios
