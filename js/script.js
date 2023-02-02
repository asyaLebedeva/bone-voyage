const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

document.querySelectorAll('.tabs-ol__btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-ol__btn').forEach(function(btn) {
      btn.classList.remove('tabs-ol__btn--active')});
      e.currentTarget.classList.add('tabs-ol__btn--active');

      document.querySelectorAll('.tabs-item').forEach(function(tabsBtn) {
        tabsBtn.classList.remove('tabs-item--active')});

        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
      });
    });

    new Accordion('.accordion-list', {
      elementClass: 'accordion',
      panelClass: 'accordion-content',
      triggerClass: 'accordion-control',
      activeClass: 'accordion-active'
    });

const burger = document.querySelector('.burger')
const menu = document.querySelector('.nav')
const logo = document.querySelector('.header-img')
const navLink = document.querySelectorAll('.nav-link')

burger.addEventListener('click', function() {
  burger.classList.toggle('burger-active'),
  menu.classList.toggle('nav-active'),
  logo.classList.toggle('header-img-none');
})

  navLink.forEach(function(el) {
    el.addEventListener('click', function() {
      burger.classList.remove('burger-active')
      menu.classList.remove('nav-active')
      logo.classList.remove('header-img-none')
    })
  })

const searchBtn = document.querySelector('.btn-hd')  
const searchBox = document.querySelector('.hd-search') 
const searchInt = document.querySelector('.btn-search')  
      
    searchBtn.addEventListener('click', function() { 
      searchInt.classList.toggle('btn-search-active')
    })