export let cart= JSON.parse(localStorage.getItem('cart')) 

if (!cart) {
    cart= [{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
},{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1
}];
}



function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

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

    saveToStorage();
    //calculating the cart total quantity
    // consideration of cart counting => let cartQuantity= cart.length;

}

//removing from cart using delete link

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem)=>{
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveToStorage();
}
