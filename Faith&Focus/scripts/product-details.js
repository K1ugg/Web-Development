import { addToCart } from '../data/cart.js';
import {products} from '../data/products.js';


function updateCartQuantity() {
    let cartQuantity = 0;
    
    cart.forEach((item) => {
        cartQuantity += item.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}
/*
document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productName = button.dataset.productName;
            addToCart(productName);  
            updateCartQuantity();      
        });
    });


    

document.querySelector('.js-add-to-cart-button').innerHTML = 
`<button 
  class="js-add-to-cart-button" 
  data-product-name="${product.name}">
  Add to Cart
</button>
`;
*/

//FIX FUNC
function added() {
    const buttonElement = document.querySelector('.js-add-to-cart-button');

    if (buttonElement.innerText === 'Add to Cart') {
        buttonElement.textContent = 'Added';
} else {
    buttonElement.innerHTML = 'Add to Cart';
}
}

document.querySelector('.js-add-to-cart-button').innerHTML = `
<button onclick = "added();"
  class="purchase-button js-add-to-cart" 
  data-product-name="${products.name}">
  Add to Cart
</button>
`;

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productName = button.dataset.products.name;
            addToCart(productName);  
            //updateCartQuantity();      
        });
    });