// Import the orderSummary and paymentSummary functions from the checkout module
import { orderSummary } from "./checkout/orderSummary.js";
import { paymentSummary } from "./checkout/paymentSummary.js";

// Generate and display the user's current order summary in the cart
orderSummary();
// Generate and display the payment details or total summary section
paymentSummary();