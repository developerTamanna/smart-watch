const ringButtons = document.querySelectorAll('.ring-button');
// console.log(ringButtons)
 let productImageBase = '/images/';
for(let i =0; i< ringButtons.length; i++){
    // console.log(ringButtons[i]);
    const ringBtn = ringButtons[i];
    // console.log(ringBtn);
    ringBtn.addEventListener('click', function(event){
        const color = event.target.id.replace('-color', "");
        // console.log(typeof event);
        // console.log(event.target);
        for(let j=0; j<ringButtons.length; j++){
            ringButtons[j].classList.remove('border-purple-600')
            ringButtons[j].classList.add('border-gray-300');
        }
        event.target.classList.add('border-purple-600');
        event.target.classList.remove('border-gray-300');

        
    const productImage = document.getElementById('product-image');
    // console.log(productImage);
    // productImage.src = "../images/teal.png"
    productImage.src = productImageBase + color + '.png';
    });



}


function selectWristSize(size){
//    console.log(size);
const sizes = ['S', 'M', 'L', 'XL'];
for(let i = 0; i<sizes.length; i++ ){
    const button = document.getElementById('size-' + sizes[i])
    // size-S, size-M, size-L, size-xl
    // console.log(button)
    const element = sizes[i];
    // console.log(element)
    if(size === element){
        // console.log('condition match')
        button.classList.add('border-purple-600');
    }
    else{
        button.classList.remove('border-purple-600')
    }
}
}


const  quantityButtons = document.querySelectorAll('.quantity-button');
for(let btn of  quantityButtons){
    // console.log(btn);

    btn.addEventListener('click', function(event){
        const amount = event.target.innerText === "+" ? 1 : -1;
        // console.log(amount)
        // console.log('clicked')
        const quantityElement =document.getElementById('quantity');
        // console.log(quantity)
        const currentQuantity = parseInt(quantityElement.innerText);
        // console.log(currentQuantity)
        const newQuantity = Math.max(0,currentQuantity+amount)
        // console.log(newQuantity)
        quantityElement.innerText = newQuantity;
    })
}



// add to card
let cartCount = 0;
let cartItems = [];
document.getElementById('add-to-cart').addEventListener('click', function(){
    // console.log('ad to card')
   
    
    const quantity = parseInt(document.getElementById('quantity').innerText);
    cartCount = cartCount + quantity;
    if(quantity > 0){
        const checkOutContainer = document.getElementById('checkout-container');
        // console.log(checkOutContainer);
        checkOutContainer.classList.remove('hidden');
        document.getElementById('cart-count').innerText = cartCount;
        
        const selectedColorBtn = document.querySelector('button.border-purple-600.w-6');
        // console.log(selectedColorButton)
        const selectColor = selectedColorBtn.id.split('-')[0];
        // console.log(selectColor);
        const selectSizeButtons = document.querySelector('button.border-purple-600:not(.w-6)');
        // console.log(selectSizeButtons)
        // console.log(selectSizeButtons.innerText)
        const selectSize = selectSizeButtons.innerText.split(' ')[0];
        // console.log(selectSize)
        const selectPrice = selectSizeButtons.innerText.split(' ')[1].split('$')[1];
        // console.log(selectPrice);
    
        cartItems.push({
            image: selectColor + '.png',
            title: "Classy modern smart watch",
            color: selectColor,
            size: selectSize,
            quantity: quantity, 
            price: quantity * parseInt(selectPrice)
        });
        console.log(cartItems);

    }
    else{
        alert('please select a quantity')
    }
  
})


// next cart modal

document.getElementById('checkout-btn').addEventListener('click', function(){
     
    const cartModal =document.getElementById('cart-modal');
     const cartContainer = document.getElementById('cart-items');
     for(let i =0 ; i<cartItems.length; i++){

        // console.log(cartItems[i]);
        const item = cartItems[i];
        const row = document.createElement('tr');
        row.classList.add('border-b');
        row.innerHTML= `
         <td class="py-2 px-4">
         <div class = 'flex items-center space-x-2'>
         <img class="h-12 w-12 object-cover rounded-md" src="${productImageBase}${item.image}" alt="">
         <span class="font-semibold">${item.title}</span>
         </div>
         </td>
         <td class="py-2 px-4">${item.color}</td>
         <td class="py-2 px-4">${item.size}</td>
         <td class="py-2 px-4">${item.quantity}</td>
         <td class="py-2 px-4">${item.price}</td>
         
        `
        cartContainer.appendChild(row);
     }
    cartModal.classList.remove('hidden')
})
