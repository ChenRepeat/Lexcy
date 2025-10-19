//漢堡
const hamburger = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.navbar');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    if (navMenu.classList.contains('active')) {
      hamburger.classList.remove('fa-bars');
      hamburger.classList.add('fa-xmark');
    } else {
      hamburger.classList.remove('fa-xmark');
      hamburger.classList.add('fa-bars');
    }
      });
    } else {
      console.error('Hamburger or menu not found');
    }