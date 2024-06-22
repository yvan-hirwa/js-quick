//a function that adds one to each element of an array
function addOne(array){
    const arr2=[];
    let i=0;
while(i<array.length){
    arr2.push(array[i]+1);
    i++;
}
return arr2;
}
console.log(addOne([1,2,3]));

//a function that adds a provided number to each element of array
function addNum(array,num){
    const arr2=[];
    let i=0;
while(i<array.length){
    arr2.push(array[i]+num);
    i++;
}
return arr2;
}
console.log(addNum([1,2,3], 2));
//a function that adds array elements to corresponding elements from another array

 function addArrays(array,array2){
    const arr2=[];
    let i=0;
while(i<array.length){
    arr2.push(array[i]+array2[i]);
    i++;
}
return arr2;
}
console.log(addArrays([1,2,3], [4,5,6]));
// a function that counts all positive numbers in an array
function countpositive(nums){
    let positive=0;
    let i=0;

    while(i<nums.length){
        if(nums[i]>0){
            positive+=1;
            i++;
        }
    }
    return positive;
}
console.log(countpositive([-5,-6,7,8,5]));

//!this code uses much memory, comments some functions before running.