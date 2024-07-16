const cart= {
    cartItems: undefined,

    loadFromStorage(){
         this.cartItems = JSON.parse(localStorage.getItem('cart-oop'))

            if (!this.cartItems) {
            this.cartItems= [{
            productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionsId: '1'
        },{
            productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity:1,
            deliveryOptionsId: '2'
        }];
        }},
    
    saveToStorage() {
        localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
    },

    addToCart(productId) {
        let selector = Number(document.querySelector(`.js-selector-${productId}`).value);
    
        let matchingItem;
        this.cartItems.forEach((cartItem)=>{
            if (productId===cartItem.productId) {
                matchingItem= cartItem;
            }
        });                                 // checking of the item exist in cart and adding on the quantity
    
        if (matchingItem) {
            matchingItem.quantity+=selector;
        } else {
            cart.push({
            productId,
            quantity:selector,
            deliveryOptionsId: '1'
        });
        }
    
        this.saveToStorage();
    
    },

    removeFromCart(productId) {
        const newCart = [];
    
        this.cartItems.forEach((cartItem)=>{
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });
        cart = newCart;
        this.saveToStorage();
        checkoutCountItem();
       // checkoutQuantityCount();
    }
};








//add to cart button


//removing from cart using delete link



export function updateCheckoutQuantity(productId,newQuantity) {
    cart.forEach((cartItem)=>{
        if (cartItem.productId === productId) {
            cartItem.quantity = newQuantity;
        }
    });
    saveToStorage();
    checkoutCountItem();
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

export function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
    cart.forEach((cartItem)=>{
        if (productId===cartItem.productId) {
            matchingItem= cartItem;
        }
    });

    matchingItem.deliveryOptionsId = deliveryOptionId;
    saveToStorage();
}