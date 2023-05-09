const data = new Date();
const ora = data.getHours();
const mesaj = document.getElementById('mesaj');
console.log(ora);

if (ora < 10) {
  mesaj.innerHTML = 'Buna Dimineta';
} else if (ora >= 10 && ora < 18) {
  mesaj.innerHTML = 'Buna  Ziua ';
} else {
  mesaj.innerHTML = 'Buna Seara';
}
