import {creatinghtmlforproducts  } from './products.js';
creatinghtmlforproducts();
import { cart , addtocart , updatingcartquantity } from './cart.js';

window.addEventListener('pageshow', (e) => {
    if (e.persisted) location.reload();
});

updatingcartquantity();

const btn_cart = document.querySelectorAll('.add-to-cart')
.forEach(button => {
    button.addEventListener('click' , () => {

      addtocart(button);
      
     localStorage.setItem('cart' , JSON.stringify(cart));
     updatingcartquantity();
    
  });
});


  const langBtn = document.querySelector(".lang-btn");
  const langDropdown = document.querySelector(".lang-dropdown");

  langBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    langDropdown.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (!langDropdown.contains(event.target)) {
      langDropdown.classList.remove("show");
    }
  });


  const langText = document.getElementById("langText");
const langRadios = document.querySelectorAll('input[name="lang"]');

langRadios.forEach(function (radio) {
  radio.addEventListener("change", function () {
    langText.textContent = radio.value;
    langDropdown.classList.remove("show");
  });
});