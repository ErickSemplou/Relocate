/* BURGER MENU */
// link in button
let menu = document.getElementById("nav__toggle");

// add all elements
let elements = document.querySelectorAll("#nav__toggle, #nav");

//status
let isActive = false;

// add event listener "click"
menu.addEventListener("click", function() {
  if (isActive) {
    elements.forEach(function(element) {
      element.classList.remove("active");
    });
    isActive = false;
  } else {
    elements.forEach(function(element) {
      element.classList.add("active");
    });
    isActive = true;
  }
});

// Додаємо обробник події для лінків в навігації
let navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function() {
    // При кліку на лінк приховуємо навігацію (якщо вона активна)
    if (isActive) {
      elements.forEach(function(element) {
        element.classList.remove("active");
      });
      isActive = false;
    }
  });
});




/* FIXED HEADER */
let initialBackgroundColor; // Змінна для зберігання початкового колору фону
let navigationIsFixed = false; // Змінна для відстеження фіксації навігації

// Функція для зміни фонового кольору навігації
function changeNavigationColor(color) {
  let navigation = document.querySelector('#nav');
  navigation.style.backgroundColor = color;
}

window.addEventListener('scroll', function() {
  let header = document.querySelector('.header');
  let scrollPosition = window.scrollY;
  let windowHeight = window.innerHeight;

  if (!initialBackgroundColor) {
    initialBackgroundColor = window.getComputedStyle(document.querySelector('#nav')).backgroundColor;
  }

  if (scrollPosition > windowHeight && !navigationIsFixed) {
    header.classList.add('fixed');
    if (window.innerWidth <= 866) {
      changeNavigationColor("#003531");
    }
    navigationIsFixed = true;
  } else if (scrollPosition <= windowHeight && navigationIsFixed) {
    header.classList.remove('fixed');
    if (window.innerWidth <= 866) {
      changeNavigationColor(initialBackgroundColor);
    }
    navigationIsFixed = false;
  }

  if (window.scrollY === 0) {
    if (window.innerWidth <= 866) {
      changeNavigationColor(initialBackgroundColor);
    }
  }
});

// Обробник подій для зміни розміру вікна
window.addEventListener('resize', function() {
  if (window.innerWidth > 866) {
    // Якщо екран став широким (більше 866px), відновити десктопний колір
    changeNavigationColor(initialBackgroundColor);
  } else if (navigationIsFixed) {
    // Якщо навігація фіксована на малому екрані, залишити змінений колір
    changeNavigationColor("#003531");
  }
});

document.addEventListener('DOMContentLoaded', function() {
  let header = document.querySelector('.header');
  let navToggle = document.querySelector('.nav__toggle');

  function checkHeaderFixed() {
    if (header.classList.contains('fixed')) {
      navToggle.style.marginRight = '0px';
    } else {
      navToggle.style.marginRight = '';
    }
  }

  checkHeaderFixed();

  window.addEventListener('scroll', checkHeaderFixed);
});



/* SCROLL NAVIGATION */

document.addEventListener('DOMContentLoaded', function() {
  // Висота фіксованого хедера
  let headerHeight = document.querySelector('.header').offsetHeight;

  // Обробник для посилань з атрибутом data-scroll
  let links = document.querySelectorAll('a[data-scroll]');
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      let targetId = link.getAttribute('data-scroll');
      let targetSection = document.querySelector(targetId);
      if (targetSection) {
        let targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;
        targetPosition -= 20; // Додавання відступу (20px, наприклад)
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  // Обробник для кнопки
  let scrollButton = document.getElementById('button');
  scrollButton.addEventListener('click', function() {
    let targetElement = document.getElementById('more');
    if (targetElement) {
      let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
      targetPosition -= 20; // Додавання відступу (20px, наприклад)
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  });

  // Обробник для логотипу
  let logo = document.getElementById('logo');
  logo.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});



/* HIDEN CARD */
document.addEventListener('DOMContentLoaded', function() {
  let destinationsCard = document.querySelector('.destinations__card');
  let cardItems = destinationsCard.querySelectorAll('.destinations__card-item');

  cardItems.forEach(function(cardItem) {
    cardItem.addEventListener('mouseover', function() {
      cardItems.forEach(function(item) {
        if (item !== cardItem) {
          item.classList.add('hidden');
        }
      });
    });

    cardItem.addEventListener('mouseout', function() {
      cardItems.forEach(function(item) {
        item.classList.remove('hidden');
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  let destinationsCard = document.querySelector('.destinations__card');
  let cardItems = destinationsCard.querySelectorAll('.destinations__card-item');

  cardItems.forEach(function(cardItem) {
    cardItem.addEventListener('touchstart', function() {
      cardItems.forEach(function(item) {
        if (item !== cardItem) {
          item.classList.add('hidden');
        }
      });
    });

    cardItem.addEventListener('touchend', function() {
      cardItems.forEach(function(item) {
        item.classList.remove('hidden');
      });
    });
  });
});

/* mobile */

document.addEventListener('DOMContentLoaded', function() {
  let destinationsCard = document.querySelector('.more__card');
  let cardItems = destinationsCard.querySelectorAll('.more__item');

  cardItems.forEach(function(cardItem) {
    cardItem.addEventListener('mouseover', function() {
      cardItems.forEach(function(item) {
        if (item !== cardItem) {
          item.classList.add('hidden');
        }
      });
    });

    cardItem.addEventListener('mouseout', function() {
      cardItems.forEach(function(item) {
        item.classList.remove('hidden');
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  let destinationsCard = document.querySelector('.more__card');
  let cardItems = destinationsCard.querySelectorAll('.more__item');

  cardItems.forEach(function(cardItem) {
    cardItem.addEventListener('touchstart', function() {
      cardItems.forEach(function(item) {
        if (item !== cardItem) {
          item.classList.add('hidden');
        }
      });
    });

    cardItem.addEventListener('touchend', function() {
      cardItems.forEach(function(item) {
        item.classList.remove('hidden');
      });
    });
  });
});













