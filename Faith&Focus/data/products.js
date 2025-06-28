export function getProduct(productName) {
    let matchingProduct;

    products.forEach((product) => {
      if(product.name === productName) {
        matchingProduct = product;
      }
    });

    return matchingProduct;
}
   

export const products = [{
    image: 'img/Digital-Planner-cover-on-ipad.jpg',
    name: 'The Digital Planner',
    priceCents: 2099,
    page: 'planner.html'
}, {
    image: 'img/weekly-planner-on-ipad.png',
    name: 'The Productivity Bundle',
    priceCents: 999,
    page: 'bundle.html'
}];
