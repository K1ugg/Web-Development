import { cart, addToCart } from '../data/cart.js';
import {products, getProduct} from '../data/products.js';


export function updateCartQuantity() {
    let cartQuantity = 0;
    
    cart.forEach((item) => {
        cartQuantity += item.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}


const productContainer = document.querySelector('.js-product-detail');
const productName = productContainer.dataset.productName;
const product = getProduct(productName);

if (product) {
  const buyNowButton = document.querySelector('.js-buy-now-button');
  const addToCartButton = document.querySelector('.js-add-to-cart-button');


    addToCartButton.innerHTML = `
<button
  class="purchase-button js-add-to-cart" 
  data-product-name="${product.name}">
  Add to Cart
</button>
`;

const addToCartBtn = addToCartButton.querySelector('.js-add-to-cart');      


if (addToCartBtn) {

    addToCartBtn.addEventListener('click', () => {
      alert('Added to cart!');
      
      addToCart(product.name);
      updateCartQuantity();
    });

  }

if(buyNowButton){
  buyNowButton.addEventListener('click', () => {
    addToCart(product.name);
    updateCartQuantity();
  });
  }
     
}






/*document.querySelector('.js-add-to-cart-button').innerHTML = addToCartButtonHTML;


document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productName = button.dataset.productName;
            addToCart(productName);  
            updateCartQuantity();
   
        button.textContent = 'Added';
        button.disabled = true;
   
        });
    });




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


document.querySelectorAll('.js-add-to-cart')

    .forEach((button) => {
        button.addEventListener('click', () => {
            const productName = button.dataset.productName;
            addToCart(productName);  
            updateCartQuantity();
   
        button.textContent = 'Added';
        button.disabled = true;

            //();      
        });
    });
    */