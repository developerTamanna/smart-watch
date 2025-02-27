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
    productImage.src = '../images/' + color + '.png';
    });



}