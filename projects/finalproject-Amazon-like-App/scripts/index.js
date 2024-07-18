import { addToCart, calculateCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";


//displaying products on the html document
updateCartQuantity();
let productHTML='';

products.forEach(product=>{
    productHTML += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src= ${product.image}>
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="${product.getStarsUrl()}">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                ${product.getPrice()}
            </div>

            <div class="product-quantity-container">
                <select class="js-selector-${product.id}">
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
            </div>

            ${product.extraInfoHTML()}

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id=${product.id}>
                Add to Cart
            </button>
            </div>
    `;
})
document.querySelector('.js-product-grid').innerHTML= productHTML;



 function updateCartQuantity() {
    let cartQuantity=0;
    cartQuantity = calculateCartQuantity(cartQuantity);//calculating the quantities in the cart using a loop
    if (cartQuantity===0) {
        document.querySelector('.js-cart-quantity')
            .innerHTML= '';
    } else {
        document.querySelector('.js-cart-quantity')
            .innerHTML= cartQuantity;
    }
    
    
   // return cartQuantity//tobe used in checkout count
}



//button add to cart events 
document.querySelectorAll('.js-add-to-cart')
    .forEach(button =>{
        button.addEventListener('click',()=>{
            const productId= button.dataset.productId; // getting the product ID from data- attribute in the html
            addToCart(productId);
            updateCartQuantity();
            
           
        });
    });
    

