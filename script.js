// ===============================
// ACICU - INTERACTION SCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // NAVBAR SCROLL EFFECT
  // ===============================
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // ===============================
  // HAMBURGER MENU (MOBILE)
  // ===============================
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  // Close menu saat klik link (mobile UX)
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  // ===============================
  // SMOOTH SCROLL (lebih halus)
  // ===============================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // ===============================
  // ACTIVE NAV LINK (SCROLL SPY)
  // ===============================
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // ===============================
  // SCROLL ANIMATION (FADE-IN)
  // ===============================
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // biar animasi sekali aja
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
  });

  // ===============================
  // HERO CTA BUTTON (SCROLL KE MENU)
  // ===============================
  const heroButtons = document.querySelectorAll(".hero-cta a");

  heroButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const targetId = btn.getAttribute("href");

      if (targetId === "#menu") {
        e.preventDefault();
        document.querySelector("#menu").scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

});