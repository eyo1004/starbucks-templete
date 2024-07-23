const searchEl = document.querySelector('header .search');
const searchInputEl = document.querySelector('header input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

// focus & blur
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  this.setAttribute('placeholder','통합검색');
});
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  this.setAttribute('placeholder','');
});

// footer year
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();