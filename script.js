// ======================
// ELEMENTS
// ======================

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

const revealElements = document.querySelectorAll(`
  .service-card,
  .team-card,
  .testimonial-card,
  .process-step,
  .gallery-item,
  .about-stat,
  .stat
`);

const contactForm = document.querySelector(".contact-form");
const submitButton = document.querySelector(
  ".contact-form button[type='submit']"
);

const footerYear = document.querySelector("#current-year");

const menuButton = document.querySelector("#hamburger");
const mobileNav = document.querySelector(".nav-links");

const themeToggle = document.querySelector("#themeToggle");

// ======================
// NAVBAR SCROLL EFFECT
// ======================

window.addEventListener("scroll", () => {
  navbar.classList.toggle(
    "scrolled",
    window.scrollY > 80
  );

  setActiveLink();
});

// ======================
// ACTIVE NAVIGATION LINK
// ======================

function setActiveLink() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// ======================
// SMOOTH SCROLLING
// ======================

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = document.querySelector(
      link.getAttribute("href")
    );

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    mobileNav.classList.remove("nav-open");
    menuButton.classList.remove("active");
  });
});

// ======================
// MOBILE MENU
// ======================

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    mobileNav.classList.toggle("nav-open");
    menuButton.classList.toggle("active");
  });
}

// ======================
// THEME TOGGLE
// ======================

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode")
        ? "dark"
        : "light"
    );
  });
}

// ======================
// REVEAL ON SCROLL
// ======================

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(element => {
  element.classList.add("hidden");
  observer.observe(element);
});

// ======================
// CONTACT FORM STATE
// ======================

if (contactForm && submitButton) {
  contactForm.addEventListener("submit", () => {
    submitButton.disabled = true;
    submitButton.textContent =
      "Sending Request...";
  });
}

// ======================
// FOOTER YEAR
// ======================

if (footerYear) {
  footerYear.textContent =
    new Date().getFullYear();
}