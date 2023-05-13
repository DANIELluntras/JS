// const data = new Date();
// const ora = data.getHours();
// const mesaj = document.getElementById('mesaj');
// console.log(ora);

// if (ora < 10) {
//   mesaj.innerHTML = 'Buna Dimineta';
// } else if (ora >= 10 && ora < 18) {
//   mesaj.innerHTML = 'Buna  Ziua ';
// } else {
//   mesaj.innerHTML = 'Buna Seara';
// }

const button = document.getElementById("button");
const messageContainer = document.getElementById("paragraf");

let messageNumber = 1;

button.addEventListener("click", function() {
  
  const input = document.getElementById("input").value;


//  a  creat un div prin elementul .createElement
  const messageItem = document.createElement("div");
// in faza asta atribuie mesajul celor doua input si messageNumber (dar sa stiti ca aicia la textContent putei folosi si innerHtml)
  messageItem.textContent = `${messageNumber} - ${input}`;
// aicia creem clasa cu numele de message-item
  messageItem.classList.add("message-item"); // adăugarea clasei CSS
// aicia apelam prin messageContainer si messageIteam  metoda adauga ultimul element lui messageItem
  messageContainer.appendChild(messageItem);
// acesta este pentru a atribui o  valoare lui messageNumber
  messageNumber++;
  // iar asta este pentru a sterge de fiecare data ca noi apasam buttonul 
  document.getElementById("input").value = "";
});