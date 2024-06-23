function minMax(array){
    let values={
        min:array[0],
        max:array[0]
    };
    if (array.length===0) {
       values.min=null;
        values.max=null;
    }
    for (let  index = 0; index < array.length; index++) {

        if (array[index]>values.max) {
            values.max=array[index];
        }
        if (array[index]< values.min) {
            values.min=array[index];
        }
        
    }
    return values;

}