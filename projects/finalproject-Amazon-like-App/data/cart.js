export const cart=[]

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