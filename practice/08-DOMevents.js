/*<input type="text" placeholder="Enter your Name" onkeydown="enterKey(event.key);">
 <button onclick="displayName();">Submit</button>
 <p class="js-name"></p>
 <script>*/
    function displayName(){
        const name= document.querySelector('input').value;
        const paragraph= document.querySelector('.js-name');
        paragraph.innerHTML= `Your name is: ${name}`;
    }

    function enterKey(event){
        if (event==='Enter') {
            displayName();
        }
    }