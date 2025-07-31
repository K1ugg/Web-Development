// Load the existing cart data from localStorage or initialize as null
export let cart = JSON.parse(localStorage.getItem('cart'));


if(!cart) {
    cart = [{
  productName: 'The Digital Planner',
  quantity: 2,
}, {
  productName: 'The Productivity Bundle',
  quantity: 1,
}];
}

// Save the current cart to localStorage
function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));

}

// Add an item to the cart or increase quantity if it already exists
export function addToCart(productName) {
    let matchingItem;

    // Search for a cart item that matches the given product name
    cart.forEach((cartItem) => {
        if(productName === cartItem.productName) {
            matchingItem = cartItem;
        }
    });

    // If item is found, increment quantity; otherwise, add a new item
    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
        productName: productName,
        quantity: 1
    });
    }

    // Save updated cart to localStorage
    saveToStorage();
}

// Remove an item from the cart based on product name
export function removeFromCart(productName) {
    const newCart = [];

    // Rebuild the cart excluding the item to remove
    cart.forEach((cartItem) => {
        if (cartItem.productName !== productName) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    saveToStorage();

}

// Clear all items from the cart
export function clearCart() {
  cart.splice(0, cart.length);
  saveToStorage();
}
