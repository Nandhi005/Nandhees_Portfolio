// Toggle icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
  };
}

// Scroll Section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      let activeLink = document.querySelector('header nav a[href*=' + id + ']');
      if (activeLink) activeLink.classList.add('active');
    }
  });

  // Sticky Navbar
  let header = document.querySelector('header');
  if (header) {
    header.classList.toggle('sticky', window.scrollY > 100);
  }

  // Remove toggle icon and navbar when scroll
  if (menuIcon && navbar) {
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
  }
};

// Scroll Reveal
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .title, .progress-bar', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed JS
if (document.querySelector('.multiple-text')) {
  const typed = new Typed('.multiple-text', {
    strings: ['DevOps Engineer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
  });
}

// Resume Download Button
const downloadBtn = document.getElementById("downloadBtn");
if (downloadBtn) {
  downloadBtn.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "NandheeswaranM.pdf"; // Change this path to your actual resume file
    link.download = "NandheeswaranM.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
