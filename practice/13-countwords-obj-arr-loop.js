function countWords(words){
    let count={};
    for (let index = 0; index < words.length; index++) {
        if (count[words[index]]) {
            count[words[index]]++;
        }
        else{
            count[words[index]]=1;
        }
        
    }
    return count;
}