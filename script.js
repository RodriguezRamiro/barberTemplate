// ======================
// ELEMENTS
// ======================

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");
const revealElements = document.querySelectorAll(
  ".service-card, .team-card, .testimonial-card, .process-step, .gallery-grid img"
);

const contactForm = document.querySelector(".contact-form");
const submitButton = document.querySelector(".contact-form button[type='submit']");
const footerYear = document.querySelector(".current-year");

// ======================
// NAVBAR SCROLL EFFECT
// ======================

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.style.background = "rgba(15,15,15,.95)";
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
  } else {
    navbar.style.background = "rgba(15,15,15,.8)";
    navbar.style.boxShadow = "none";
  }
});

// ======================
// ACTIVE NAVIGATION LINK
// ======================

function setActiveLink() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);

// ======================
// SMOOTH SCROLLING
// ======================

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

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
    submitButton.innerText = "Sending Request...";
  });
}

// ======================
// CURRENT YEAR
// ======================

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

// ======================
// MOBILE MENU SUPPORT
// ======================

const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".nav-links");

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
    menuButton.classList.toggle("active");
  });
}

// ======================
//  a RIPPLE EFFECT
// ======================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", function (e) {
    const circle = document.createElement("span");

    const diameter = Math.max(
      this.clientWidth,
      this.clientHeight
    );

    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;

    circle.style.left = `${
      e.clientX -
      this.getBoundingClientRect().left -
      radius
    }px`;

    circle.style.top = `${
      e.clientY -
      this.getBoundingClientRect().top -
      radius
    }px`;

    circle.classList.add("ripple");

    const existingRipple = this.querySelector(".ripple");

    if (existingRipple) {
      existingRipple.remove();
    }

    this.appendChild(circle);
  });
});
