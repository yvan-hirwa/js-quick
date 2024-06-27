const multiply=(a,b)=> a*b
console.log(multiply(2,4));

function countPositive(nums) {
    let i=0
    nums.forEach(value => {
        if (value>0) {
            i++;
        }
    });
    return i;
}

console.log(countPositive([1,-3,5]))

function addNum(array,num){
   return array.map((value)=>{
        return value + num;
    })
}
console.log( addNum([1,2,3],2));

// removing first 2 occurence of egg by using filter method
function removeEgg(foods){
    let i=0
   return foods.filter((element)=>{ 
    if (element==='egg' && i<2) {
        i++;
        return false
    } else {
        return true;                
    }
    
   });
}

console.log(removeEgg(['egg','apple','egg','egg','ham']))

