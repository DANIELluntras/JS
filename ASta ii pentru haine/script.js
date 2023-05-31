// const cartIcon = document.querySelector("#cart-icon");
// const cart = document.querySelector(".cart");

// cartIcon.addEventListener("click", () => {
//     cart.classList.add("show"); // Adaugă clasa CSS "show" pentru a afișa coșul de cumpărături
//   });

const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#close-cart");
//open Cart
cartIcon.addEventListener("click", () => {
  cart.classList.add("active");

});

//Close Cart
closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

//cart Working js
document.addEventListener("DOMContentLoaded", function () {
  const removeCartButtons = document.getElementsByClassName("cart-remove");
  for (let i = 0; i < removeCartButtons.length; i++) {
    const button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  //quantity changes
  const quantityInputs = document.getElementsByClassName("cart-quantity");
  for (let i = 0; i < quantityInputs.length; i++) {
    const input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  const addCart = document.getElementsByClassName('add-cart')
  for (let i = 0; i < addCart.length; i++){
    const button  = addCart[i]
    button.addEventListener("click" , addCartCliked );
  }
//buy button work


document.getElementsByClassName('btn-buy')[0].addEventListener('click' , buyButtonClicked);


});

function buyButtonClicked(){
  alert('your order is placed');
  var cartContent = document.getElementsByClassName('cart-content')[0]
  while(cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal();
}






//Remove Item From Cart
function removeCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

//quantity changed
function quantityChanged(event) {
  const input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}
// add to cart
function addCartCliked(event){
  var button = event.target
  const shopProducts= button.parentElement
  const title = shopProducts.getElementsByClassName('product-title')[0].innerHTML;
  const price = shopProducts.getElementsByClassName('price')[0].innerHTML;
  const productImg = shopProducts.getElementsByClassName('product-img')[0].src;
  addProductToCart(title,price,productImg);
  updateTotal()
}
function addProductToCart(title, price, productImg) {
  const cartItems = document.getElementsByClassName("cart-content")[0];
  const cartItemsNames = cartItems.getElementsByClassName("cart-product-title");

  for (let i = 0; i < cartItemsNames.length; i++) {
    if(cartItemsNames[i].innerHTML == title){
    alert("You have already added this item to the cart");
    return;
    }
  }

  const cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");

  const cartBoxContent = `
    <img src="${productImg}" alt="img" class="cart-img">
    <div class="detail-box">
      <div class="cart-product-title">${title}</div>
      <div class="cart-price">${price}</div>
      <input type="number" value="1" class="cart-quantity">
    </div>
    <i class='bx bxs-trash-alt cart-remove'></i>
  `;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);

  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);

  updateTotal();
}


function updateTotal() {
  const cartContent = document.getElementsByClassName("cart-content")[0];
  const cartBoxes = cartContent.getElementsByClassName("cart-box");
  let total = 0;
  for (let i = 0; i < cartBoxes.length; i++) {
    const cartBox = cartBoxes[i];
    const priceElement = cartBox.getElementsByClassName("cart-price")[0];
    const quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    const price = parseFloat(priceElement.innerHTML.replace("$", ""));
    const quantity = parseInt(quantityElement.value);
   
    if (!isNaN(price) && !isNaN(quantity)) {

      total += price * quantity;
total = Math.round(total * 100 ) / 100
    }
    
  }

  document.getElementsByClassName("total-price")[0].innerHTML = `$ ${total} `;

}


