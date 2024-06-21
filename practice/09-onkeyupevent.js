/*<input type="text" placeholder="Type something..." onkeyup="displayKey(event.key)">
<p class="result"></p>*/


    function displayKey(event){
        let paragraph= document.querySelector('.result');
        event==='Backspace'? paragraph.innerHTML= paragraph.innerHTML.slice(0,-1):paragraph.innerHTML += event;
    }