// Function to find and return a product from the products array based on the product name
export function getProduct(productName) {
    let matchingProduct;

    // Loop through each product and check if the name matches the given productName
    products.forEach((product) => {
      if(product.name === productName) {
        matchingProduct = product;
      }
    });

    // Return the matching product object if found
    return matchingProduct;
}

// Array of available products in the shop
export const products = [{
    image: 'img/Digital-Planner-cover-on-ipad.jpg',   // Path to product image
    name: 'The Digital Planner',                      // Name of the product
    priceCents: 2099,                                 // Price in cents ($20.99)
    page: 'planner.html'                               // Link to the product's page
}, {
    image: 'img/weekly-planner-on-ipad.png',
    name: 'The Productivity Bundle',
    priceCents: 999,                                    // Price in cents ($9.99)
    page: 'bundle.html'
}];
