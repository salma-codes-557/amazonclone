export let cart = JSON.parse(localStorage.getItem('cart')) || [];
import { products } from "./products.js";



 export function addtocart(button){

      const productid = button.dataset.id;

      products.forEach((product)=>{
        if(product.id === productid){
           const matchingproduct = product;
           let itemincartarray = false;
            cart.forEach((item) => {
                if(item.id === product.id)
                     itemincartarray = item;
           })
               if (itemincartarray){

                    itemincartarray.quantity++;

               }else{
                     cart.push({

                image: matchingproduct.image ,
                name: matchingproduct.name ,
                price: matchingproduct.priceCents,
                id : matchingproduct.id,
                quantity: 1,
                shippingcost: {
                    onedaylater: 'free shipping',
                    fivedayslater: 330,
                    ninedayslater: 990
                }
                 
            })
        
        }
 }
 })
}
/*
export let cartquantity =0;
export function updatingcartquantity(){
    cartquantity = JSON.parse(localStorage.getItem('cartquantiy')) || 0;
    cart = JSON.parse(localStorage.getItem('cart')) || 0;
    cart.forEach(item => { 
       cartquantity += item.quantity; 
       let reddiv = document.querySelector('.cart-num')
       reddiv.textContent = cartquantity;
       localStorage.setItem('cartquantity' , JSON.stringify(cartquantity));

    })
}*/
export let cartquantity = JSON.parse(localStorage.getItem('cartquantity')) ||0;
export function updatingcartquantity(){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartquantity = 0;
    cart.forEach(item => {
        cartquantity += item.quantity;
    });
    localStorage.setItem('cartquantity', JSON.stringify(cartquantity));

    const reqdiv = document.querySelector('.cart-num');
    if (reqdiv) reqdiv.textContent = cartquantity;
}

 export function changingcartquantity(newvalue){
      cartquantity = newvalue;
      localStorage.setItem('cartquantity' , JSON.stringify(newvalue));
 }




