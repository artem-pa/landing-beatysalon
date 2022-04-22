document.querySelector('.header__burger').addEventListener('click', e => {
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.header__nav').classList.toggle('active');
  document.querySelector('.header__bg').classList.toggle('active');
  document.body.classList.toggle('lock');
})

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 5) document.querySelector('.header').classList.add('shadow');
  else document.querySelector('.header').classList.remove('shadow');
})