const btns = {
  explore: document.getElementById('exploreBtn'),
  mainMore: document.getElementById('findOutMore'),
  backTop: [...document.querySelectorAll('.arrowBtn')],
}

function smoothScroll(btn, dest) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(dest).scrollIntoView({
      behavior: 'smooth'
    });
  })
}

smoothScroll(btns.explore, '#peace');
smoothScroll(btns.mainMore, '#paradise');

btns.backTop.forEach(item => {
  smoothScroll(item, '#header')
});
