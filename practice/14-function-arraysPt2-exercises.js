  //find word in array function
  function findIndex(array,word){
    for (let index = 0; index < array.length; index++) {
        if (array[index]===word) {
            return index;
        }
    }
    return -1;
   } 
   // tests
   console.log(findIndex(['green','red','blue','red'],'red'));
   console.log(findIndex(['green','red','blue','red'],'yellow'));

   //remove string egg if found in an array else return -1 in a function 
   // function is updated to remove the first 2 'egg' strings
   // also updated to use reverse methods.
   function removeEgg(foods){
    result=[];
    let i=0;
    const foods2=foods.slice();
    foods2.reverse();
    for (let index = 0; index < foods2.length; index++) {
        
        if(foods2[index]==='egg' && i<2){
            
            i++;
            continue;
            

        }
        else{
            result.push(foods2[index]);
        }
        
    } console.log(foods);
    
    return result.reverse();
   }

   console.log(removeEgg(['egg','apple','egg','egg','ham']));
   
