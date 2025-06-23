import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';


let productsHTML = '';

products.forEach((product) => {
    
    productsHTML += `
    <div class="col span_6_of_12">
    <div class="product-container">
    <div class="product-image-container">
<img class="product-image" src="${product.image}">
    </div>
    <div style= "text-align: center">
    <div>${product.name}</div>

    <div class="product-price">$${(product.priceCents/100).toFixed(2)}</div>
    
   <a href= "${product.page}">
    <button class="button-view">View</button>
    </a>
    </div>
    </div>
</div>
`;
});

//console.log(productsHTML);

document.querySelector('.js-products-grid').innerHTML = productsHTML;


