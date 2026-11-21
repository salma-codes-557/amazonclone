//localStorage.removeItem('cartquantity');
//localStorage.removeItem('shipping')
//document.querySelectorAll('input[type = "radio"]').forEach(radio =>{
//    localStorage.removeItem(radio.name)
//})//each has different name value thats why
// we need to loop through all

  function getingdate(dayslater){
    const date = new Date();
    date.setDate(date.getDate() + dayslater);
    return date.toLocaleDateString('en-US' , {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    });
}

import {cartquantity , changingcartquantity , cart } from "./cart.js";
//updatingcartquantity();
let carts = JSON.parse(localStorage.getItem('cart')) || 0;

function htmlgenerationforcart(){ 
    let itemhtml = '';
carts.forEach(item => {
    itemhtml += 
    `
     <div class="first-container">
    
        <div class="date">Delivery date: Not selected</div>
        <div class="details">
            <img class="image" src=${item.image}>
            <div class="info">
                <div class="name">${item.name}</div>
                <div class="price"> $${item.price}</div>
                <div class="quantity">
                    <div class="name-of-quantity">quantity:</div>
                    <div class="num-of-quantity">${item.quantity}</div>
                    <button class="update">Update</button>
                    <button class="delete" data-id = ${item.id}>Delete</button>
                </div>
                
            </div>
        </div>
        <div class="delivery">
            <div class="delivery-heading">Choose a deliery option:</div>
            <div class="s1">
                <input type="radio" data-date="${getingdate(1)}"  data-price= ${0} name=${item.id} value="1">
                <div class="date-shipping">
                    <div class="date-of-shipping">${getingdate(1)}</div>
                    <div class="ship">${item.shippingcost.onedaylater}</div>
                </div>
            </div>
            <div class="s1">
                 <input type="radio" data-date="${getingdate(5)}" data-price = ${item.shippingcost.fivedayslater} name=${item.id} value="2"
                 >
                 <div class="date-shipping">
                    <div class="date-of-shipping">${getingdate(5)}</div>
                    <div class="ship">$${((item.shippingcost.fivedayslater)/100).toFixed(2)}</div>
                </div>
            </div>
            <div class="s1">
                 <input type="radio" data-date="${getingdate(9)}"  data-price = ${item.shippingcost.ninedayslater} name=${item.id} value="3">
                 <div class="date-shipping">
                    <div class="date-of-shipping">${getingdate(9)}</div>
                    <div class="ship">$${((item.shippingcost.ninedayslater)/100).toFixed(2)}</div>
                </div>
            </div>
        </div>
    </div>
    `
//incase we dont add quotes to data attribute it will 
// skip everything right after the first space
})
document.querySelector('.js-div')
    .innerHTML = itemhtml;
 }
htmlgenerationforcart();

document.querySelector('.js-div')
.addEventListener('click' , (e) => {
    const btn = e.target.closest('.delete');
    if(!btn) return;
     
   const firstcontainer  = btn.closest('.first-container')
    findingquantity(firstcontainer);
    const delivery = firstcontainer.querySelector('.delivery')
    delivery.querySelectorAll('input[type = "radio"]')
    .forEach(radio => {
        if(localStorage.getItem(radio.name) === radio.value){
          //  console.log('found');
            localStorage.removeItem(radio.name);
    }
})
        // localStorage.removeItem(radio.name)
         const id = btn.dataset.id;
             carts = carts.filter(item => String(item.id) !== id );

    localStorage.setItem('cart' , JSON.stringify(carts));
   // findingquantity(firstcontainer);
   // updatingcartquantity();
    htmlgenerationforcart();
    alreadyselectedradios();

    shippingtotal();
})
/*
 htmlgenerationforcart();
  
 let deletebtn = document.querySelectorAll('.delete')
 console.log(deletebtn);
 deletebtn.forEach( btn => {
    btn.addEventListener('click' , (dets) =>{
        console.log(dets);
    let id = button.dataset.id;
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart' , JSON.stringify(cart));
    
    }) 
 });*/
 

    function alreadyselectedradios(){
    document.querySelectorAll('input[type = "radio"]').forEach(radio =>{
      if(localStorage.getItem(radio.name) === radio.value){
        radio.checked = true;
        updatedate(radio);
       // updatetotalbeforetax(price , shippingcost);
       // shippingtotal();
      }   
});
}
alreadyselectedradios();

   // document.querySelector('.items')
    // .textContent = '$' + (price/100).toFixed(2);

function shippingtotal(){
  //let shippingcost = JSON.parse(localStorage.getItem('shippingcost')) || 0;
    let shippingcost = 0;
document.querySelectorAll('input[type = "radio"]:checked').forEach(radio =>{
      // localStorage.setItem(radio.name , radio.value );
       updatedate(radio);
      
       shippingcost += Number(radio.dataset.price);
})
localStorage.setItem('shippingcost' , JSON.stringify(shippingcost));
document.querySelector('.shipping').innerHTML = `$${((shippingcost)/100).toFixed(2)}`;
updatetotalbeforetax(shippingcost);

}

function savingradios (){
    document.querySelectorAll('input[type = "radio"]:checked').forEach(radio =>{
       localStorage.setItem(radio.name , radio.value );
    })
}

document.querySelectorAll('input[type = "radio"]').forEach(radio =>{
      radio.addEventListener('change' , () => {
    shippingtotal();
    savingradios();
})



});
shippingtotal();

function updatedate(radio){
    const box = radio.closest('.first-container')
    .querySelector('.date').textContent = `Delivery date: ${radio.dataset.date}`;
   // console.log(radio.dataset.date);
}



function updatetotalbeforetax( shipping){
         let totalprice = 0;
    carts.forEach(item => {
        const price = item.price;
        const quantity = item.quantity;
        totalprice += price * quantity;
    })
    document.querySelector('.items')
    .innerHTML = `$${(totalprice)/100}`;

     let totalbeforetax = totalprice + shipping;
     let tax =Math.round(totalbeforetax*0.1);
     let total = (totalbeforetax + tax);
    document.querySelector('.before-tax')
    .innerHTML = `$${(totalbeforetax)/100}`;
      document.querySelector('.tax')
    .innerHTML = `$${tax/100}`;
     document.querySelector('.totalprice')
    .innerHTML = `$${total/100}`;
   document.querySelector('.itemquantity')
.textContent = cartquantity ; 

}


function findingquantity(container){
    let quantityele  = container.querySelector('.num-of-quantity')
    let quantity = quantityele.innerHTML;
    //console.log(quantity)
    changingcartquantity(cartquantity - quantity);
    localStorage.setItem('cartquantity' , JSON.stringify(cartquantity));

}

