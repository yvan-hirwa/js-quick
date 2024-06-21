/* Added a random move to make it more interesting. 

<button class="js-head" onclick="headTails('Heads');">Heads</button>
<button class="js-tails" onclick="headTails('Tails');">Tails</button>
<p class="js-result"></p>*/


    function headTails(ht){
    let move=Math.random() > 0.5 ? 'Heads':'Tails';
    document.querySelector('.js-result').innerHTML=`You chose: ${ht}`;
    
    document.querySelector('.js-result').innerHTML +=`<br> Computer move is: ${move}`
    }
   