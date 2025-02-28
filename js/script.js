const ringButtons = document.querySelectorAll('.ring-button');
// console.log(ringButtons)
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
    productImage.src = '/images/' + color + '.png';
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


const quantityElement = document.querySelectorAll('.quantity-button');
for(let btn of quantityElement){
    // console.log(btn);
    btn.addEventListener('click', function(){
        // console.log('clicked')
    })
}