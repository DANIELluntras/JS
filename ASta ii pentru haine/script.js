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
    console.log("clike")
  });

//Close Cart

  closeCart.addEventListener("click", () => {
    cart.classList.remove("active"); 
  });













