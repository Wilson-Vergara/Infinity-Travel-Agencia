// Animación fade al hacer scroll
const faders = document.querySelectorAll('.fade');

const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Scroll al botón del hero
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Envío de formulario a correo
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Aquí usarás EmailJS (servicio gratuito)
  // Paso 1: crea una cuenta en https://www.emailjs.com/
  // Paso 2: crea un servicio y una plantilla de correo
  // Paso 3: copia tu userID, serviceID y templateID y reemplázalos abajo

  emailjs.send("serviceID", "templateID", {
    nombre: this.nombre.value,
    email: this.email.value,
    mensaje: this.mensaje.value
  }, "userID").then(() => {
    document.getElementById("mensaje-enviado").classList.remove("hidden");
    this.reset();
  });
});
