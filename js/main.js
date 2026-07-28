// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") links.classList.remove("open");
  });
}

// Lightbox for gallery images
const lightbox = document.getElementById("lightbox");
if (lightbox) {
  const lightboxImg = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  document.querySelectorAll(".gallery img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.dataset.full || img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("open");
    });
  });

  const close = () => lightbox.classList.remove("open");
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

// Set current year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
