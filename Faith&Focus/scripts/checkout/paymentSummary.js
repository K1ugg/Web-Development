import { cart, clearCart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";

export function paymentSummary() {

  let productPriceCents = 0;
  let cartQuantity = 0;

cart.forEach((cartItem) => {
  const product = getProduct(cartItem.productName);
 /*  if (!product) {
      console.warn(`No product found for ‘${cartItem.productName}’, skipping.`); 
      return; 
    }*/
  productPriceCents += product.priceCents * cartItem.quantity;
  cartQuantity += cartItem.quantity;
});

const taxCents = productPriceCents * 0.1;
const total = productPriceCents + taxCents;

const paymentSummaryHTML = `

<div>
                <h1>Are You Ready to Unlock Your Best Self?</h1>
<h3 style="margin: 20px;">Order Summary</h3>

<div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
  <span>Items (${cartQuantity})</span>
  <span>$${(productPriceCents/ 100).toFixed(2)}</span>
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
  <span>Estimated Tax</span>
  <span> $${(taxCents/ 100).toFixed(2)}</span>
</div>

<div style="display: flex; justify-content: space-between; font-weight: bold; border-top: 1px solid #ccc; padding-top: 10px;">
  <span>Order Total</span>
  <span> $${(total/ 100).toFixed(2)}</span>
</div>

 <p>Enter your email address to receive your copy:</p>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>
              <br />
              <a href="action_page.html">
                <button class="buy-now js-get-now">Get My Planner Now</button>
              </a>
`;

document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

const getNowBtn = document.querySelector('.js-get-now');
getNowBtn.addEventListener('click', () => {
  clearCart();
});

}

/*


*/