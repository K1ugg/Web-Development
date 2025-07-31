// Import cart and addToCart functions from cart module
import { cart, addToCart } from '../data/cart.js';
// Import products array and a utility to get product data by name
import {products, getProduct} from '../data/products.js';

// Updates the visual cart quantity display based on cart contents
export function updateCartQuantity() {
    let cartQuantity = 0;
    
    // Loop through each item in the cart and sum up the quantities
    cart.forEach((item) => {
        cartQuantity += item.quantity;
    });

    // Update the DOM to reflect current cart quantity
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

// Get the container element that holds product details information
const productContainer = document.querySelector('.js-product-detail');
// Extract product name from the dataset attribute
const productName = productContainer.dataset.productName;
// Fetch the product object using the name from dataset
const product = getProduct(productName);


if (product) {
  // Get references to 'Buy Now' and 'Add to Cart' buttons
  const buyNowButton = document.querySelector('.js-buy-now-button');
  const addToCartButton = document.querySelector('.js-add-to-cart-button');

// Inject 'Add to Cart' button into container using product name for data binding
    addToCartButton.innerHTML = `
<button
  class="purchase-button js-add-to-cart" 
  data-product-name="${product.name}">
  Add to Cart
</button>
`;

const addToCartBtn = addToCartButton.querySelector('.js-add-to-cart');      

// Add click handler to 'Add to Cart' button if it exists
if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      alert('Added to cart!');  // Simple confirmation alert
      addToCart(product.name);  // Add item to cart by name
      updateCartQuantity();     // update cart quantity
    });
  }

// Add event handler to 'Buy Now' button to add product to cart instantly
if(buyNowButton){
  buyNowButton.addEventListener('click', () => {
    addToCart(product.name);    // Add product to cart
    updateCartQuantity();       // Update cart quantity
  });
  }     
}
