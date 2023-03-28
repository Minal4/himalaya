

$(document).ready(function () {
  $('.cage-carousel').owlCarousel({
    loop: true,
    singleItem: true,
    auto: true,
    nav: false,
    items: 1,
    margin: 100,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
        margin: 1000,
      },
    },
  });
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 100,
    auto: true,
    nav: false,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 2,
        nav: false,
      },
      1024: {
        items: 3,
        nav: false,
      },
    },
  });
});
const toggleBtn = document.querySelector('.icon-toggle');
const closeBtn = document.querySelector('.fa-times');
const nav = document.querySelector('.header__nav ul');

if (toggleBtn !== null) {
  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('toggle');
  });

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('toggle');
  });
}


tl1 = gsap.timeline({
});

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.coffee-section',
    scrub: 3,
    start: 'top center',
    toggleActions: "play none none reverse",
  },

})

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.drinks',
    duration: 2,
    toggleActions: "play none none reverse",
  },

})

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.services',
    toggleActions: "play none none reverse",
  },

})

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: 'footer',
    toggleActions: "play none none reverse",
  },

})

const windowWidth = 1024


if (window.innerWidth > windowWidth) {
  tl5.to('.sticky-image', 1, { position: 'sticky', top: 0 })
    .to('.sticky-image img', 1, { scale: 1.2 }, 0.2)
}



let listContent = document.querySelector('.drinks__content ul')
if (listContent !== null) {

  tl.fromTo('.bread', 1, { opacity: 0, x: '-50%' }, { opacity: 1, x: 0 })
    .fromTo('.beans', 1.8, { opacity: 0, x: '50%' }, { opacity: 1, x: 0 }, 0.4)
    .fromTo(listContent.children, 0.8, { opacity: 0, y: '-10%' }, { opacity: 1, y: '0', stagger: 0.2 }, 1.2)
}

const heroContent = document.querySelector('.hero__content')
if (heroContent !== null) {

  tl1.to('.one', 3, { x: '200%' })
    .to('.two', 3, { x: '200%' }, 0.2)
    .to('.three', 3, { x: '200%' }, 0.4)
    .fromTo('.hero', 3, { css: { backgroundSize: '100%' } }, { css: { backgroundSize: '105%' } }, 0.4)
    .fromTo(heroContent.children, 1, { y: '-50%', opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2 }, 1)
}

tl2.fromTo('.services__content', 1, { opacity: 0, y: '-50%' }, { opacity: 1, y: 0, stagger: 0.2 }, 0.5)

tl3.fromTo('.bean', 1, { opacity: 0, y: '-50%' }, { opacity: 1, y: 0, stagger: 0.2 }, 0.5)


let tlBanner = gsap.timeline({
})
tlBanner.from('.overlay', 0.6, { x: '-100%' }, 0.5)
  .to('.overlay', 0.5, { x: '100%' })
  .to('.banner__image', 1, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', scale: 1, opacity: 1, }, 0.8)
  .fromTo('.outline-text', 0.5, { y: '-50%', opacity: 0 }, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y: 0, opacity: 1 })
  .fromTo('.next-text', 1, { y: '-50%', opacity: 0 }, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y: 0, opacity: 1 })
  .fromTo('.content', 0.5, { y: '-50%', opacity: 0 }, { y: 0, opacity: 1 })