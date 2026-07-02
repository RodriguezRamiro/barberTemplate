# Deployment Guide

This template is a static HTML website and can be deployed to virtually any hosting provider.

Files required for deployment:

* index.html
* style.css
* script.js
* assets folder

---

# Option 1: Netlify (Recommended)

1. Create an account at Netlify.
2. Select **Add New Site**.
3. Drag and drop the entire project folder.
4. Wait for deployment to complete.
5. Your website will receive a live URL instantly.

Ideal for:

* Small businesses
* Client projects
* Freelancers
* Portfolio websites

---

# Option 2: Vercel

1. Create an account on Vercel.
2. Create a new project.
3. Upload the project folder.
4. Click Deploy.
5. Your site will be live within minutes.

Ideal for:

* Fast deployments
* Custom domains
* Modern hosting workflows

---

# Option 3: GitHub Pages

1. Create a GitHub repository.
2. Upload the project files.
3. Open Repository Settings.
4. Navigate to Pages.
5. Select the main branch.
6. Save changes.

GitHub will generate a public website URL.

Ideal for:

* Developers
* Version control
* Free hosting

---

# Option 4: Shared Hosting Providers

This template works with traditional hosting providers such as:

* cPanel hosting
* Shared hosting
* VPS hosting
* Dedicated servers

Upload the following files to your public web directory:

* index.html
* style.css
* script.js
* assets/

The exact directory may be named:

* public_html
* www
* htdocs

depending on your hosting provider.

---

# Custom Domain Setup

After deployment you may connect your own custom domain through your hosting provider.

Examples:

* yourbarbershop.com
* yourbusinessname.com
* yourbrand.co

Most hosting providers include step-by-step instructions for domain setup.

---

# Formspree Configuration

If using the appointment form:

1. Create a Formspree account.
2. Generate a new form endpoint.
3. Replace:

```html
action="https://formspree.io/f/your_endpoint"
```

with your Formspree URL.

See FORMSPREE-SETUP.md for additional instructions.

---

# Recommended Production Checklist

Before launching your website:

* Replace all placeholder images.
* Update the business name.
* Update contact information.
* Connect the appointment form.
* Test all links.
* Test the website on mobile devices.
* Verify social media links.
* Verify opening hours.

---

# Support

If you encounter issues during deployment or setup, please refer to the documentation included with this template.

Thank you for supporting RodriguezTech Studios.
