function Cart(localStoragekey){
    const cart= {
    cartItems: undefined,

    loadFromStorage(){
         this.cartItems = JSON.parse(localStorage.getItem(localStoragekey))

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
        localStorage.setItem(localStoragekey, JSON.stringify(this.cartItems));
    },

    addToCart(productId) {
    
    
        let matchingItem;
        this.cartItems.forEach((cartItem)=>{
            if (productId===cartItem.productId) {
                matchingItem= cartItem;
            }
        });                                 // checking of the item exist in cart and adding on the quantity
    
        if (matchingItem) {
            matchingItem.quantity+=1;
        } else {
            this.cartItems.push({
            productId,
            quantity:1,
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
        this.checkoutCountItem();
       // checkoutQuantityCount();
    },

    checkoutCountItem(){
        let itemCount= 0;
    
        itemCount = calculateCartQuantity(itemCount);
        
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
            
        },

        updateCheckoutQuantity(productId,newQuantity) {
            this.cartItems.forEach((cartItem)=>{
                if (cartItem.productId === productId) {
                    cartItem.quantity = newQuantity;
                }
            });
            this.saveToStorage();
            this.checkoutCountItem();
        },

        calculateCartQuantity(counter){
            this.cartItems.forEach((cartItem)=>{
                counter+=cartItem.quantity;
            })
            return counter;
        },

        updateDeliveryOption(productId, deliveryOptionId){
            let matchingItem;
            this.cartItems.forEach((cartItem)=>{
                if (productId===cartItem.productId) {
                    matchingItem= cartItem;
                }
            });
        
            matchingItem.deliveryOptionsId = deliveryOptionId;
            this.saveToStorage();
        }
};

return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();

businessCart.loadFromStorage();

console.log(cart)
console.log(businessCart)






