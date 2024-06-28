export const cart=[{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
},{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
}]

export function addToCart(productId){

    let matchingItem;
    //const quantityContainer= Number(document.querySelector('.js-quantity-container').value);
    cart.forEach((cartItem)=>{
        if (productId===cartItem.productId) {
            matchingItem= cartItem;
        }
    });                                 // checking of the item exist in cart and adding on the quantity

    if (matchingItem) {
        matchingItem.quantity++;
    } else {
        cart.push({
        productId,
        quantity: 1
    });
    }
    //console.log(document.querySelector('.js-quantity-container'));
    //calculating the cart total quantity
    // consideration of cart counting => let cartQuantity= cart.length;

}