
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
    let selector = Number(document.querySelector('.js-selector').value);

    let matchingItem;
    cart.forEach((cartItem)=>{
        if (productId===cartItem.productId) {
            matchingItem= cartItem;
        }
    });                                 // checking of the item exist in cart and adding on the quantity

    if (matchingItem) {
        matchingItem.quantity+=selector;
    } else {
        cart.push({
        productId,
        quantity:selector
    });
    }

    saveToStorage();
    
    //checkoutQuantityCount();
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
    checkoutCountItem();
   // checkoutQuantityCount();
}


export function checkoutCountItem(){
    let itemCount=0;

    itemCount = calculateCartQuantity(itemCount);//function is calculating the quantities in the cart
    
    if (itemCount===0) {
        document.querySelector('.js-checkout-count')
            .innerHTML= 'Empty Cart'
    } else if(itemCount===1) {
        document.querySelector('.js-checkout-count')
            .innerHTML= `${itemCount} item`
    }
    else{
        document.querySelector('.js-checkout-count')
            .innerHTML= `${itemCount} items`
    }
        
    }

export function calculateCartQuantity(counter){
    cart.forEach((cartItem)=>{
        counter+=cartItem.quantity;
    })
    return counter;
}