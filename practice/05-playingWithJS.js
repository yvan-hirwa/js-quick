const basketball={
    name:'basketball',
    price: 2095
};
basketball.price+=500;
basketball['delivery-time']='3 days';
console.log(basketball);
const apple={
    name:'Mac book',
    price:1200
};
const lenovo={
    name:'Mac book',
    price:1200
};
function comparePrice(product1,product2){
    min=0
    if (product1>product2) {
        min=product2
    } else {
        min=product1
    }
    return min
}
console.log( comparePrice(lenovo.price,apple.price));

function isSameProduct(product1,product2){
    const names= product1.name===product2.name;
    const prices= product1.price===product2.price;

    return names && prices;
}
console.log(isSameProduct(apple,lenovo));

const str='HELLO ';
const count=3;
console.log(str.repeat(count));
console.log(str.toLowerCase());