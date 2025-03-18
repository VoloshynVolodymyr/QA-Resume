function btn_up() {
	window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var backToTopBtn = document.getElementById('backToTopBtn');

  if (scrollPosition > 300) { // Показуємо кнопку при прокрутці більше 300px
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

document.getElementById('backToTopBtn').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

}

export default btn_up;