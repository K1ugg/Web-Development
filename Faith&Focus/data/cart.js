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

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));

}


export function addToCart(productName) {
    let matchingItem;

        cart.forEach((cartItem) => {
            if(productName === cartItem.productName) {
                matchingItem = cartItem;
        }
    });

            if (matchingItem) {
                matchingItem.quantity += 1;
            } else {
                cart.push({
                productName: productName,
                quantity: 1
            });
            }

            saveToStorage();
}


export function removeFromCart(productName) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productName !== productName) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    saveToStorage();

}

export function clearCart() {
  cart.splice(0, cart.length);
  saveToStorage();
}
