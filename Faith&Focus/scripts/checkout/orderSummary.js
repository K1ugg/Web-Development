import { cart, removeFromCart } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { paymentSummary } from './paymentSummary.js';

export function orderSummary() {

  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    const productName = cartItem.productName;

    const matchingProduct = getProduct(productName);
      //  if (!matchingProduct) return;  // skip undefined products

      cartSummaryHTML += `
    <div class="checkout-item">
    <div style= "width: 30%; height: auto;"><img src= "${matchingProduct.image}"></div>
   <div>
   <b>${matchingProduct.name}</b>
    <div>$${(matchingProduct.priceCents/100).toFixed(2)}</div>
    <div>
    Quantity: ${cartItem.quantity}
    <span class="delete-quantity-link js-delete-link" data-product-name="${matchingProduct.name}" style="cursor:pointer; margin-left:8px;">
          Remove
        </span>
        
        </div>
    </div>
    </div>
    `;
  });

//js-delete-link-${matchingProduct.name}
  
document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

 
  document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      
      const productName = link.dataset.productName;
     
      removeFromCart(productName);
      
      const container = document.querySelector(
        `.js-cart-item-container-${productName}`
      );
      container.remove();
      paymentSummary();
    });
  });
  
}

orderSummary();