// JAVASCRIPT DE LA PÁGINA
// Este archivo controla interacciones; el contenido y la apariencia se editan en HTML y CSS.

// MENÚ MÓVIL: referencias a los controles del HTML para abrir y cerrar la navegación.
const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  siteNav.classList.toggle('is-open', !isOpen);
});

// CIERRE AUTOMÁTICO: al elegir una sección, vuelve a ocultar el menú móvil.
siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    siteNav.classList.remove('is-open');
  });
});

// FORMULARIO: valida los campos y prepara un correo; no envía ni guarda información.
// El borrador se dirige al correo que aparece en la sección de contacto.
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  // El asunto y el cuerpo se codifican para que puedan viajar dentro del enlace mailto:.
  const subject = encodeURIComponent(`NOMBRE — ${data.get('subject')}`);
  const body = encodeURIComponent(
    `Nombre: ${data.get('name')}\nCorreo: ${data.get('email')}\n\n${data.get('message')}`,
  );
  const mailto = `mailto:Yacomix@ejemplo.com?subject=${subject}&body=${body}`;

  status.replaceChildren(
    document.createTextNode('Si no se abrió tu aplicación de correo, '),
  );
  const fallbackLink = document.createElement('a');
  fallbackLink.href = mailto;
  fallbackLink.textContent = 'abre el borrador aquí';
  status.append(fallbackLink, document.createTextNode('.'));
  status.classList.remove('is-error');
  status.classList.add('is-success');
  // Abre el programa de correo del visitante con el mensaje ya preparado.
  window.location.href = mailto;
});

// FICHAS DE PRODUCTO: abre una ficha modal dentro de esta misma página.
const productCards = document.querySelectorAll('[data-product-card]');
const productDialog = document.querySelector('#product-dialog');
const dialogImage = document.querySelector('#product-dialog-image');
const dialogTitle = document.querySelector('#product-dialog-title');
const dialogIntro = document.querySelector('#product-dialog-intro');
const dialogWeight = document.querySelector('#product-dialog-weight');
const dialogUse = document.querySelector('#product-dialog-use');
const dialogContact = document.querySelector('#product-dialog-contact');
const closeDialogButton = document.querySelector('.product-dialog-close');
const productDetails = [
  {
    title: 'Jarabe de yacón · 250 g',
    image: '',
    weight: '250 g (según la imagen de referencia)',
    intro: 'Una presentación compacta de la propuesta de jarabe de yacón.',
    use: 'Formato sugerido para probarlo en preparaciones cotidianas; seguir las instrucciones del envase final.',
    alt: 'Imagen de referencia del jarabe de yacón de 250 gramos',
  },
  {
    title: 'Jarabe de yacón · 500 g',
    image: 'assets/images/sirope-yacon.jpeg',
    weight: '500 g (según la imagen de referencia)',
    intro: 'La presentación de mayor contenido de la línea conceptual de jarabe.',
    use: 'Formato sugerido para compartir; usos e indicaciones por confirmar con el fabricante.',
    alt: 'Imagen de referencia del jarabe de yacón de 500 gramos',
  },
  {
    title: 'Harina de yacón · 250 g',
    image: 'assets/images/Polvo-Yacon.jpeg',
    weight: '250 g (según la imagen de referencia)',
    intro: 'Una propuesta complementaria de harina de yacón para explorar la línea de productos.',
    use: 'Uso culinario por definir de acuerdo con las instrucciones del fabricante.',
    alt: 'Imagen de referencia de harina de yacón de 250 gramos',
  },
];

function openProductDialog(card) {
  const product = productDetails[Number(card.dataset.productCard)];
  if (!product) return;
  dialogTitle.textContent = product.title;
  dialogImage.closest('.product-dialog-image').hidden = !product.image;
  dialogImage.removeAttribute('src');
  if (product.image) dialogImage.src = product.image;
  dialogImage.alt = product.alt;
  dialogIntro.textContent = product.intro;
  dialogWeight.textContent = product.weight;
  dialogUse.textContent = product.use;
  productDialog.showModal();
  closeDialogButton.focus();
}

productCards.forEach((card) => {
  card.addEventListener('click', () => openProductDialog(card));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProductDialog(card);
    }
  });
});

closeDialogButton.addEventListener('click', () => productDialog.close());
productDialog.addEventListener('click', (event) => {
  if (event.target === productDialog) productDialog.close();
});
dialogContact.addEventListener('click', () => productDialog.close());
