const burger = document.querySelector('.header-burger');
const headerNav = document.querySelector('.header-nav');
const item =  document.querySelectorAll('.questions-item');
let time;

burger.addEventListener('click', () => {
  clearTimeout(time);
  headerNav.classList.toggle('header__nav-active');

  time = setTimeout(() => {
    headerNav.classList.toggle('header__nav-active');
  }, 5000);

  if(!headerNav.classList.contains('header__nav-active')) {
    clearTimeout(time);
  };
});


item.forEach( function(i) {
  const li  = i.childNodes[1];
  const p = i.childNodes[3];
  li.addEventListener('click', () => {
    if(p.style.maxHeight) {
      p.style.maxHeight = null;
    }else{
      p.style.maxHeight = p.scrollHeight + 'px';
    };
  });
});


// swiper
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

//accordion
