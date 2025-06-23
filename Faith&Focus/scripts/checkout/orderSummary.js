import { cart, removeFromCart } from '../../data/cart.js';
import { products, getProduct } from '../../data/products.js';


export function orderSummary() {

  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    const productName = cartItem.productName;

    const matchingProduct = getProduct(productName);

    cartSummaryHTML += `
    <div style="margin: 10px;">
    <div style= "width: 30%;"><img src= "${matchingProduct.image}"></div>
    <div>${matchingProduct.name}</div>
    <div>$${(matchingProduct.priceCents/100).toFixed(2)}</div>
    <div>
    Quantity: <span> ${cartItem.quantity}</span>
    
        <span class="delete-quantity-link js-delete-link" data-product-name="${matchingProduct.name}">
          Remove
        </span>
    </div>
    </div>
    </br>`;
  })

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
    });
  });
}

orderSummary();