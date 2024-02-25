new Swiper ('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  },
});


const badgeEl = document.querySelector('#to-top');

window.addEventListener('scroll', function() {
  if (window.scrollY < 300) {
    badgeEl.style.display = 'none';
  } else {
    badgeEl.style.display = 'block'
  }
});


const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function() {
  gsap.to(window, 0, {
    scrollTo: 0,
  });
});


document.querySelectorAll('.experience-box .boxes li', 'experience-box .boxes li img').forEach(item => {
  item.addEventListener('mouseover', () => {
    document.querySelector('.experience').style.height = '355px';
  });
  item.addEventListener('mouseout', () => {
    setTimeout(() => {
      document.querySelector('.experience').style.height = '301.23px';
    }, 300)
  })
})