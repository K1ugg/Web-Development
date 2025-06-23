import { addToCart } from '../data/cart.js';
import {products} from '../data/products.js';


export function updateCartQuantity() {
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




let addToCartButtonHTML = '';

products.forEach((product)=> {

addToCartButtonHTML += `
<button 
  class="purchase-button js-add-to-cart" 
  data-product-name="${product.name}">
  Add to Cart
</button>
`;

})
*/

const productContainer = document.querySelector('.js-product-detail');
const productName = productContainer.dataset.productName;
const product = getProduct(productName);

if (product) {
  // Handle "Buy Now" logic
  const buyNowButton = document.querySelector('.js-buy-now-button');
  buyNowButton.addEventListener('click', () => {
    addToCart(product.name);
    // Optional: updateCartQuantity(); if needed
    window.location.href = 'cart.html';
  });
}


/*
const productContainer = document.querySelector('.js-product-detail');
const productName = productContainer.dataset.productName;
const product = getProduct(productName);

if (product) {
document.querySelector('.js-add-to-cart-button').innerHTML = `
<button 
  class="purchase-button js-add-to-cart" 
  data-product-name="${product.name}">
  Add to Cart
</button>

`;


}
*/

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productName = button.dataset.productName;
            addToCart(productName);  

   
        button.textContent = 'Added';
        button.disabled = true;

            //updateCartQuantity();      
        });
    });