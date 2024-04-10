const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header-container img", {
  duration: 1000,
});

ScrollReveal().reveal(".header-container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header-container p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header-btns", {
  ...scrollRevealOption,
  delay: 1500,
});

// about container
ScrollReveal().reveal(".about-image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".abou-content h3", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about-content .section-header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about-content .section-subheader", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about-content .about-grid", {
  ...scrollRevealOption,
  delay: 2000,
});

// contact container
ScrollReveal().reveal(".contact-image img", {
  ...scrollRevealOption,
  origin: "left",
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
});