$(document).ready(function() {
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
//頁籤
        $('#tag1').click(function() {
            $('.tag-list > div').removeClass('-active');
            $(this).addClass('-active');
            $('.tab-list > div').removeClass('-on');
            $('.tab-1').addClass('-on');
        });
        $('#tag2').click(function() {
            $('.tag-list > div').removeClass('-active');
            $(this).addClass('-active');
            $('.tab-list > div').removeClass('-on');
            $('.tab-2').addClass('-on');
        });
  
        $('#tag3').click(function() {
            $('.tag-list > div').removeClass('-active');
            $(this).addClass('-active');
            $('.tab-list > div').removeClass('-on');
            $('.tab-3').addClass('-on');
        });
    });

