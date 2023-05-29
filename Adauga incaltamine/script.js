
const adaugaRetetaButton = document.getElementById('adaugaReteta');
adaugaRetetaButton.addEventListener('click', adaugaReteta);

function adaugaReteta() {
    const retetaInput = document.getElementById('retetaInput');
    const condimentInput = document.getElementById('condimentInput');
  
    const reteta = retetaInput.value;
    const condimente = condimentInput.value;
  
    if (reteta.trim() === '') {
      alert('Introduceți o retetă de pizza!');
      return;
    }
  
    const reteteContainer = document.getElementById('reteteContainer');
    const retetaElement = document.createElement('p');
    retetaElement.textContent = `Reteta: ${reteta} | Condimente: ${condimente}`;
    reteteContainer.appendChild(retetaElement);
  
    // Resetează valorile câmpurilor input
    retetaInput.value = '';
    condimentInput.value = '';
  }