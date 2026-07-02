# Formspree Setup Guide

The Clipse Grooming template includes a fully functional appointment request form powered by Formspree.

Formspree allows form submissions to be sent directly to your email without requiring a backend server or database.

---

## Step 1: Create a Formspree Account

Visit Formspree and create a free account.

The free plan is sufficient for most small businesses and local service providers.

---

## Step 2: Create a New Form

After logging in:

1. Click **New Form**
2. Give your form a name such as:

```
Clipse Grooming Appointments
```

3. Click **Create Form**

---

## Step 3: Copy Your Form Endpoint

Formspree will generate an endpoint similar to:

```text
https://formspree.io/f/xrbqzabc
```

Copy this URL.

---

## Step 4: Replace The Existing Endpoint

Open `index.html` and locate:

```html
<form
  class="contact-form"
  action="https://formspree.io/f/your_endpoint"
  method="POST">
```

Replace:

```text
your_endpoint
```

with your Formspree endpoint.

Example:

```html
<form
  class="contact-form"
  action="https://formspree.io/f/xrbqzabc"
  method="POST">
```

Save the file.

---

## Step 5: Test The Form

Open your website and submit a test appointment request.

You should receive an email notification within a few moments.

---

## Form Fields Included

The template already captures:

* Full Name
* Phone Number
* Email Address
* Requested Service
* Preferred Appointment Date
* Preferred Barber
* Additional Notes

No additional configuration is required.

---

## Spam Protection

The template includes a hidden honeypot field:

```html
<input
  type="text"
  name="_gotcha"
  style="display:none">
```

This helps reduce spam submissions automatically.

---

## Email Subject Line

Submissions arrive with the following email subject:

```text
New Appointment Request - Clipse Grooming
```

This value can be changed by editing:

```html
<input
  type="hidden"
  name="_subject"
  value="New Appointment Request - Clipse Grooming">
```

---

## Custom Thank You Page (Optional)

Formspree allows you to redirect users after successful submissions.

Example:

```html
<input
  type="hidden"
  name="_next"
  value="https://yourwebsite.com/thank-you.html">
```

This is optional but can improve the customer experience.

---

## Troubleshooting

### Form submits but no email arrives

* Verify your Formspree endpoint is correct.
* Check your spam folder.
* Confirm your email address inside Formspree.

### Receiving spam submissions

* Ensure the `_gotcha` field remains in the form.
* Enable additional spam filtering from the Formspree dashboard if necessary.

### Form not submitting

* Confirm the website is hosted online.
* Verify that the `action` attribute contains your correct Formspree endpoint.

---

## Additional Resources

For advanced features such as file uploads, redirects, integrations, and analytics, refer to the Formspree documentation.

---

Thank you for using Clipse Grooming by RodriguezTech Studios.
