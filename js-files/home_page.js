import {creatinghtmlforproducts  } from './products.js';
creatinghtmlforproducts();

import {cartquantity ,changingcartquantity ,  updatingcartquantity } from './cartquantity.js';
updatingcartquantity();

//let cart = JSON.parse(localStorage.getItem('cart')) || [];
//localStorage.removeItem('iprice');
//localStorage.removeItem('cart');
//localStorage.removeItem('cartquantity');
//let cartquantity = JSON.parse(localStorage.getItem('cartquantity')) || 0;

/*here i can create different functions for each task*/

//let price = Number(JSON.parse(localStorage.getItem('iprice')))|| 0;
const btn_cart = document.querySelectorAll('.add-to-cart')
//console.log(btn_cart);
.forEach(button => {
    button.addEventListener('click' , () => {
       // console.log(dets.target.dataset.id);
       // console.log(button.dataset.id);
      //  console.log(typeof dets);
      const productid = button.dataset.id;
     //console.log(productid);

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
                   // price += Number(((itemincartarray.price)));
                    changingcartquantity(cartquantity+1);
                  //  console.log(cartquantity);
                  //  console.log(typeof price);
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
                 
            });
           // price += Number(((matchingproduct.priceCents)));
                  changingcartquantity(cartquantity+1);
                    console.log(cartquantity);
           // console.log(typeof price);
             }


            
           
            
        }
        
        
      })
     //console.log(typeof price);
     //console.log(price);
     localStorage.setItem('cart' , JSON.stringify(cart));
     //localStorage.setItem('iprice' , JSON.stringify(price));
     localStorage.setItem('cartquantity' , JSON.stringify(cartquantity));
     document.querySelector('.cart-num')
     .textContent = cartquantity;
        
     
      

        
});

});


import {cart} from './cart.js'