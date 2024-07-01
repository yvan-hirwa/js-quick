export const cart=[]


//add to cart button
export function addToCart(productId) {
    let matchingItem;
    cart.forEach((cartItem)=>{
        if (productId===cartItem.productId) {
            matchingItem= cartItem;
        }
    });                                 // checking of the item exist in cart and adding on the quantity

    if (matchingItem) {
        matchingItem.quantity+=1;
    } else {
        cart.push({
        productId,
        quantity:1
    });
    }

    //calculating the cart total quantity
    // consideration of cart counting => let cartQuantity= cart.length;

}