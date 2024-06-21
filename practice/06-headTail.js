/* DOM Elements use html!

<button class="js-head" onclick="headTails('Heads');">Heads</button>
<button class="js-tails" onclick="headTails('Tails');">Tails</button>
<p class="js-result"></p>*/


    function headTails(ht){
    document.querySelector('.js-result').innerHTML=`You chose: ${ht}`;
    }
   