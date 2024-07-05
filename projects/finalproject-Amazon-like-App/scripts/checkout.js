import { cart, removeFromCart, checkoutCountItem, updateCheckoutQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";



checkoutCountItem();


let cartItemHTML='';
cart.forEach(cartItem =>{
    const productId= cartItem.productId;

    let matchingCartItem;

    products.forEach(product =>{
        if (product.id === productId) {
            matchingCartItem= product;
        }
    })
       cartItemHTML+= `
        <div class="cart-item-container 
            js-cart-item-container-${matchingCartItem.id}">
            <div class="delivery-date">
                Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
                <img class="product-image"
                src="${matchingCartItem.image}">

                <div class="cart-item-details">
                <div class="product-name">
                    ${matchingCartItem.name}
                </div>
                <div class="product-price">
                $${formatCurrency(matchingCartItem.priceCents)}
                </div>
                <div class="product-quantity">
                    <span>
                    Quantity: <span class="quantity-label quantity-${matchingCartItem.id} updateql">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link updateql link-primary js-update-link" data-update-link="${matchingCartItem.id}">
                    Update
                    </span>
                    
                        <select class="js-update-quantity-${matchingCartItem.id} update-quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        </select>
                    
                    <span class="save-quantity-link update-quantity link-primary" data-save-link="${matchingCartItem.id}">Save</span>
                    <span class="delete-quantity-link link-primary js-delete-link" data-delete-link="${matchingCartItem.id}">
                    Delete
                    </span>
                </div>
                </div>

                <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                <div class="delivery-option">
                    <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingCartItem.id}">
                    <div>
                    <div class="delivery-option-date">
                        Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                        FREE Shipping
                    </div>
                    </div>
                </div>
                <div class="delivery-option">
                    <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingCartItem.id}">
                    <div>
                    <div class="delivery-option-date">
                        Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                        $4.99 - Shipping
                    </div>
                    </div>
                </div>
                <div class="delivery-option">
                    <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingCartItem.id}">
                    <div>
                    <div class="delivery-option-date">
                        Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                        $9.99 - Shipping
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        `;
    
});


//displaying on the page
document.querySelector('.js-order-summary')
    .innerHTML= cartItemHTML;

//delete link 

document.querySelectorAll('.js-delete-link')
    .forEach(link => {
        link.addEventListener('click',()=>{
            const productId= link.dataset.deleteLink
            removeFromCart(productId);

            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.remove();
            
        })
    })

document.querySelectorAll('.js-update-link')
    .forEach((link)=>{
        link.addEventListener('click', ()=>{
            let productId = link.dataset.updateLink
            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.classList.add("is-editing-quantity"); 
            container.classList.add("is-updateql");  
            
        })
    })

document.querySelectorAll('.save-quantity-link')
    .forEach((saveLink)=>{
        saveLink.addEventListener('click', ()=>{
            let productId = saveLink.dataset.saveLink
            let newQuantity = Number(document.querySelector(`.js-update-quantity-${productId}`).value);
            document.querySelector(`.quantity-${productId}`).innerHTML= newQuantity
            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.classList.remove("is-editing-quantity"); 
            container.classList.remove("is-updateql"); 
            updateCheckoutQuantity(productId,newQuantity);
            
        })
    })
