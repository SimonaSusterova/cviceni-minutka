console.log('funguju!'); //zkouška
const budik = document.querySelector('.alarm');
const audio = document.querySelector('audio');
const tlacitko = document.querySelector('button');
const pocetSekund = Number(prompt('Zadejte počet sekund k odpočtu:'));
const zazvon = () => {
  budik.classList.add('alarm--ring');
  audio.play();
};
const odpocet = setTimeout(zazvon, pocetSekund * 1000);
tlacitko.addEventListener('click', () => {
  clearTimeout(odpocet);
});