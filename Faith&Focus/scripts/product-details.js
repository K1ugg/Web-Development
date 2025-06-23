import { addToCart } from '../data/cart.js';
import {products} from '../data/products.js';


/*document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productName = button.dataset.productName;
            addToCart(productName);        
        });
    });

*/
    

document.querySelector('.js-add-to-cart-button').innerHTML = 
`<button 
  class="js-add-to-cart-button" 
  data-product-name="${product.name}">
  Add to Cart
</button>
`;
