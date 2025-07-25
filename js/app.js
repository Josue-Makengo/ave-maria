// pour la fermeture automatique du menu burger lorsque un lien est cliqué
document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('click').checked = false;
    });
  });

// pour la section FAQ
  document.querySelectorAll('.faq__question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      item.classList.toggle('open');
    });
  });

//   pour le fonctionnement du popup commander 
const orderBtn = document.getElementById('orderBtn');
  const orderModal = document.getElementById('orderModal');
  const cancelBtn = document.getElementById('cancelBtn');

  orderBtn.addEventListener('click', () => {
    orderModal.classList.add('show');
  });

  cancelBtn.addEventListener('click', () => {
    orderModal.classList.remove('show');
  });

  // Optional: close on Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      orderModal.classList.remove('show');
    }
  });

  // bouton flotante

const scrollBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


