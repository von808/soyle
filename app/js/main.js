const help = document.querySelector('.cards-lesson__help');
const play = document.querySelector('.cards-lesson__controls-play');
const autoPlay = document.querySelector('.cards-lesson__content-autoplay');
const random = document.querySelector('.cards-lesson__controls-random');

help.addEventListener('click', function (e) {
  help.classList.toggle('active');
});

play.addEventListener('click', function (e) {
  play.classList.toggle('active');
  autoPlay.classList.toggle('active');
});

random.addEventListener('click', function (e) {
  random.classList.toggle('active');
});