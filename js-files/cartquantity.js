 export let cartquantity = JSON.parse(localStorage.getItem('cartquantity')) || 0;
 

 export function changingcartquantity(newvalue){
      cartquantity = newvalue;
      localStorage.setItem('cartquantity' , JSON.stringify(newvalue));
 }
 export function updatingcartquantity(){ document.querySelector('.cart-num')
     .textContent = cartquantity;
    }