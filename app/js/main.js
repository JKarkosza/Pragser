

const exploreBtn = document.getElementById('exploreBtn');

exploreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#left').scrollIntoView({
    behavior: 'smooth'
  });
})
