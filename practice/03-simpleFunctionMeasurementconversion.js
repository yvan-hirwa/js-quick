/*simple function measurement conversion no use of return, just simple understanding of functions in console. */

function convertLength(length, from, to){
            
    if (from===to) {
        console.log('units can not be the same');
    }
    if (to==='km') {
        if (from==='miles') {
            console.log(`${length*1.6}Km`);
        }
        else{
            console.log(`${length*5280}Km`);
        }
    }
    else if (to==='miles'){
        if (from==='km') {
            console.log(`${length/1.6}Miles`);
        } else {
            console.log(`${length/5280}Miles`);
        }
    }
    else if (to==='ft'){
        if (from==='km') {
            console.log(`${length*3281}Km`);
        } else {
            console.log(`${length*5280}Km`);
        }
    }
    else{
        console.log(`Invalid unit: ${to}`);
    }
   
}
convertLength(32,'km','miles');