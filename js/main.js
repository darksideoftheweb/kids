
gsap.registerPlugin(ScrollTrigger)


document.addEventListener('mousemove', parallax)
function parallax(e) {
  document.querySelectorAll('._parallax').forEach(function (move) {
    let moving_value = move.getAttribute('data-value')
    let x = (e.clientX * moving_value) / 250
    let y = (e.clientY * moving_value) / 300
    move.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
  })
}

const burger = document.querySelector('.menu__burger')
const menu = document.querySelector('.menu__nav')
const menuLinks = document.querySelectorAll('.menu__link')


burger.addEventListener('click', function () {
  menu.classList.toggle('_active-menu')
  if (menu.classList.contains('_active-menu')) {
    for (i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', function () {
        menu.classList.remove('_active-menu')
        // menu.classList.toogle('_hide-menu')
      })
    }
  }
})


// if ((menuLinks.length > 0) && (menu.classList.contains('_active-menu'))) {
//   for (let i = 0; i < menuLinks.length; i++) {
//     menuLinks[i].addEventListener('click', function () {
//       // menu.classList.toggle('_active-menu')
//       menu.classList.toogle('_hide-menu')
//     })
//   }
// }

// const headerHeight = document.querySelector('.menu').offsetHeight;
const headerHeight = 50;

// Находим все ссылки на странице с якорем
const links = document.querySelectorAll('a[href^="#"]');

// Добавляем обработчик клика на каждую ссылку
links.forEach(link => {
  link.addEventListener('click', scrollToAnchor);
});

// Функция скролла к якорю
function scrollToAnchor(e) {
  e.preventDefault();
  console.log('ho')

  const targetId = this.getAttribute('href');
  const target = document.querySelector(targetId);

  if (target) {
    // Определяем расстояние от начала страницы до якоря
    const targetTop = target.getBoundingClientRect().top;

    // Скроллим страницу с учетом высоты шапки
    window.scrollTo({
      top: targetTop + window.pageYOffset - (headerHeight),
      behavior: 'smooth'
    });
  }
}









const headerFixed = document.querySelector('.menu');

const mediaMax641 = window.matchMedia('(max-width: 768px)');
const mediaMin641 = window.matchMedia('(mix-width: 768px)');


window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    headerFixed.style.top = '0px'
  }

  if (window.scrollY === 0) {
    headerFixed.style.top = '50px'
  }

  if (window.matchMedia("(mix-width: 900px)").matches) {
    window.addEventListener('scroll', function () {
      if (window.scrollY === 0) {
        headerFixed.style.top = '0px'
      }
    });
  }

});


document.querySelectorAll('.gallery__img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.gallery__popup').style.display = 'block'
    document.querySelector('.gallery__popup-img').src = image.getAttribute('src')
  }
})

document.querySelector('.gallery__popup-close').onclick = () => {
  document.querySelector('.gallery__popup').style.display = 'none'
}









// gsap.from('.top__social-items', {
//   y: -30,
//   opacity: 0,
//   duration: 0.6,
//   delay: 2.1,
// })


// gsap.from('.top__info-items', {
//   y: -30,
//   opacity: 0,
//   duration: 0.6,
//   delay: 2.1,
// })




// gsap.from('.menu__items', {
//   y: 30,
//   opacity: 0,
//   duration: 0.6,
//   delay: 1.8,
// })


// gsap.from('.intro__subtitle', {
//   y: 30,
//   opacity: 0,
//   duration: 0.6,
//   delay: 0.6,
// })


// gsap.from('.intro__title', {
//   y: 30,
//   opacity: 0,
//   duration: 0.6,
//   delay: 1.2,
// })

// gsap.fromTo('.intro__bg-img', {
//   x: 500,
//   opacity: 0,
// }, {
//   x: 0,
//   opacity: 1,
//   duration: 0.6,
//   delay: 1.5,
// })





// gsap.from('.about__title', {
//   scrollTrigger: {
//     trigger: '.about',
//     markers: true,
//     start: 'top 600px',
//     duration: 0.6,
//   },
//   y: 50,
// })

// gsap.from('.about__subtitle', {
//   scrollTrigger: {
//     trigger: '.about',
//     markers: true,
//     start: 'top center',
//     duration: 0.6,
//   },
//   y: 50,
// })


gsap.from('.about__title', {
  scrollTrigger: {
    trigger: '.about',
    // markers: true,
    start: 'top 85%',
    end: 'bottom bottom',
    duration: 0.6,
  },
  y: 50,
  opacity: 0,
})


gsap.from('.about__subtitle', {
  scrollTrigger: {
    trigger: '.about',
    // markers: true,
    start: 'top 75%',
    end: 'bottom bottom',
    duration: 0.6,
  },
  y: 50,
  opacity: 0,
  delay: 0.15,
})


gsap.from('.about__img--2', {
  scrollTrigger: {
    trigger: '.about',
    // markers: true,
    start: 'top center',
    end: 'bottom bottom',
    duration: 0.6,
  },
  scale: 0,
  duration: 1,
  y: 50,
  opacity: 0,

})


gsap.from('.about__desc', {
  scrollTrigger: {
    trigger: '.about',
    // markers: true,
    start: 'top 90%',
    end: 'bottom bottom',
    duration: 0.6,
  },
  scale: 0,
  duration: 1,
  x: 500,
})


gsap.from('.about__benefit-item--1', {
  scrollTrigger: {
    trigger: '.about',
    // markers: true,
    start: 'top 200px',
    end: 'bottom bottom',
    duration: 0.3,
  },
  scale: 0,
  duration: 0.5,
  x: 200,
})
gsap.from('.about__benefit-item--2', {
  scrollTrigger: {
    trigger: '.about',
    // markers: true,
    start: 'top 200px',
    end: 'bottom bottom',
    duration: 0.3,
  },
  scale: 0,
  duration: 0.5,
  x: 200,
  delay: 0.3,
})
gsap.from('.about__benefit-item--3', {
  scrollTrigger: {
    trigger: '.about',
    // markers: true,
    start: 'top 200px',
    end: 'bottom bottom',
    duration: 0.3,
  },
  scale: 0,
  duration: 0.5,
  x: 200,
  delay: 0.6,
})
gsap.from('.about__benefit-item--4', {
  scrollTrigger: {
    trigger: '.about',
    // markers: true,
    start: 'top 200px',
    end: 'bottom bottom',
    duration: 0.3,
  },
  scale: 0,
  duration: 0.5,
  x: 200,
  delay: 0.9,
})


gsap.from('.activity__title', {
  scrollTrigger: {
    trigger: '.activity',
    // markers: true,
    start: 'top 85%',
    end: 'bottom bottom',
    duration: 0.6,
  },
  y: 50,
  opacity: 0,
})


gsap.from('.activity__subtitle', {
  scrollTrigger: {
    trigger: '.activity',
    // markers: true,
    start: 'top 75%',
    end: 'bottom bottom',
    duration: 0.6,
  },
  y: 50,
  opacity: 0,
  delay: 0.15,
})


gsap.from('.activity__content-item--1', {
  scrollTrigger: {
    trigger: '.activity',
    // markers: true,
    start: 'top 50%',
    end: 'bottom bottom',
    duration: 0.6,
  },
  y: 100,
  duration: 0.6,
  opacity: 0,
  delay: 0.2,
})


gsap.from('.activity__content-item--2', {
  scrollTrigger: {
    trigger: '.activity',
    // markers: true,
    start: 'top 50%',
    end: 'bottom bottom',
    duration: 0.4,
  },
  y: 100,
  duration: 0.4,
  opacity: 0,
  delay: 0.4,
})

gsap.from('.activity__content-item--3', {
  scrollTrigger: {
    trigger: '.activity',
    // markers: true,
    start: 'top 50%',
    end: 'bottom bottom',
    duration: 0.4,
  },
  y: 100,
  duration: 0.4,
  opacity: 0,
  delay: 0.6,
})

gsap.from('.activity__content-item--4', {
  scrollTrigger: {
    trigger: '.activity',
    // markers: true,
    start: 'top 50%',
    end: 'bottom bottom',
    duration: 0.4,
  },
  y: 100,
  duration: 0.4,
  opacity: 0,
  delay: 0.2,
})

gsap.from('.activity__content-item--5', {
  scrollTrigger: {
    trigger: '.activity',
    // markers: true,
    start: 'top 50%',
    end: 'bottom bottom',
    duration: 0.4,
  },
  y: 100,
  duration: 0.4,
  opacity: 0,
  delay: 0.4,
})

gsap.from('.activity__content-item--6', {
  scrollTrigger: {
    trigger: '.activity',
    // markers: true,
    start: 'top 50%',
    end: 'bottom bottom',
    duration: 0.4,
  },
  y: 100,
  duration: 0.4,
  opacity: 0,
  delay: 0.6,
})


gsap.from('.policy__title', {
  scrollTrigger: {
    trigger: '.policy',
    // markers: true,
    start: 'top 85%',
    end: 'bottom bottom',
    duration: 0.6,
  },
  y: 50,
  opacity: 0,
})


gsap.from('.policy__subtitle', {
  scrollTrigger: {
    trigger: '.policy',
    // markers: true,
    start: 'top 75%',
    end: 'bottom bottom',
    duration: 0.6,
  },
  y: 50,
  opacity: 0,
  delay: 0.15,
})

gsap.from('.policy__content-box--1', {
  scrollTrigger: {
    trigger: '.policy',
    // markers: true,
    start: '10% 50%',
    end: 'bottom bottom',
    duration: 0.8,
  },
  x: -500,
  scale: 0,
  opacity: 0,
  // delay: 0.6,
})

gsap.from('.policy__content-box--2', {
  scrollTrigger: {
    trigger: '.policy',
    // markers: true,
    start: '25% 50%',
    end: 'bottom bottom',
    duration: 0.8,
  },
  x: 500,
  scale: 0,
  opacity: 0,
})
gsap.from('.policy__content-box--3', {
  scrollTrigger: {
    trigger: '.policy',
    // markers: true,
    start: '38% 50%',
    end: 'bottom bottom',
    duration: 0.8,
  },
  x: -500,
  scale: 0,
  opacity: 0,
})
gsap.from('.policy__content-box--4', {
  scrollTrigger: {
    trigger: '.policy',
    // markers: true,
    start: '56% 50%',
    end: 'bottom bottom',
    duration: 0.8,
  },
  x: 500,
  scale: 0,
  opacity: 0,
})
gsap.from('.policy__content-box--5', {
  scrollTrigger: {
    trigger: '.policy',
    // markers: true,
    start: '67% 50%',
    end: 'bottom bottom',
    duration: 0.8,
  },
  x: -500,
  scale: 0,
  opacity: 0,
})
gsap.from('.policy__content-box--6', {
  scrollTrigger: {
    trigger: '.policy',
    // markers: true,
    start: '82% 50%',
    end: 'bottom bottom',
    duration: 0.8,
  },
  x: 500,
  scale: 0,
  opacity: 0,
})

gsap.from('.team__title', {
  scrollTrigger: {
    trigger: '.team',
    // markers: true,
    start: 'top 85%',
    end: 'bottom bottom',
    duration: 0.6,
  },
  y: 50,
  opacity: 0,
})


gsap.from('.team__subtitle', {
  scrollTrigger: {
    trigger: '.team',
    // markers: true,
    start: 'top 75%',
    end: 'bottom bottom',
    duration: 0.6,
  },
  y: 50,
  opacity: 0,
  delay: 0.15,
})


gsap.from('.team__item', {
  scrollTrigger: {
    trigger: '.team',
    // markers: true,
    start: 'top 75%',
    end: 'bottom bottom',
    duration: 0.6,
  },
  scale: 0,
  y: 50,
  opacity: 0,
  delay: 0.8,
})

gsap.from('.gallery__title', {
  scrollTrigger: {
    trigger: '.gallery',
    // markers: true,
    start: 'top 85%',
    end: 'bottom bottom',
    duration: 0.6,
  },
  y: 50,
  opacity: 0,
})


gsap.from('.gallery__subtitle', {
  scrollTrigger: {
    trigger: '.gallery',
    // markers: true,
    start: 'top 75%',
    end: 'bottom bottom',
    duration: 0.6,
  },
  y: 50,
  opacity: 0,
  delay: 0.15,
})

gsap.from('.gallery__raw-one', {
  scrollTrigger: {
    trigger: '.gallery',
    // markers: true,
    start: 'top 75%',
    end: 'bottom bottom',
    duration: 1,
  },
  scale: 0.5,
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.8,
})

gsap.from('.gallery__raw-two', {
  scrollTrigger: {
    trigger: '.gallery',
    // markers: true,
    start: '18% 75%',
    end: 'bottom bottom',
    duration: 1,
  },
  scale: 0.5,
  y: 50,
  duration: 1,
  opacity: 0,
  delay: 0.8,
})
gsap.from('.gallery__raw-three', {
  scrollTrigger: {
    trigger: '.gallery',
    // markers: true,
    start: '35% 75%',
    end: 'bottom bottom',
    duration: 1,
  },
  scale: 0.5,
  y: 50,
  opacity: 0,
  delay: 0.8,
  duration: 1,
})
gsap.from('.gallery__raw-four', {
  scrollTrigger: {
    trigger: '.gallery',
    // markers: true,
    start: '50% 75%',
    end: 'bottom bottom',
    duration: 1,
  },
  scale: 0.5,
  y: 50,
  opacity: 0,
  delay: 0.8,
  duration: 1,
})

gsap.from('.news__title', {
  scrollTrigger: {
    trigger: '.news',
    // markers: true,
    start: 'top 85%',
    end: 'bottom bottom',
    duration: 0.6,
  },
  y: 50,
  opacity: 0,
})


gsap.from('.news__subtitle', {
  scrollTrigger: {
    trigger: '.news',
    // markers: true,
    start: 'top 75%',
    end: 'bottom bottom',
    duration: 0.6,
  },
  y: 50,
  opacity: 0,
  delay: 0.15,
})
