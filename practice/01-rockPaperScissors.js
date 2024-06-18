/* For html side:
create buttons one for 'ROCK' another for 'PAPER'
and last one for 'Scissors'.

pass an attribute of 'onclick'

call function 'gamePlay' and pass an argument according to the button name.

eg: <button onclick="gamePlay('rock')">Rock</button>

*/

function gamePlay(playerChoice){
    let computermove=computerMove();
    let decision= '';
    if (playerChoice==='rock' && computermove==='rock') {
        decision='It is a Tie';
    }
    else if(playerChoice==='rock' && computermove==='paper'){
        decision= 'You lost';
    }
    else if(playerChoice==='rock' && computermove==='scissors'){
        decision='You Won';
    }
    else if(playerChoice==='paper' && computermove==='rock'){
        decision='You Won';
    }
    else if(playerChoice==='paper' && computermove==='paper'){
        decision='It is a Tie';
    }
    else if(playerChoice==='paper' && computermove==='scissors'){
        decision='You Lost';
    }
    else if(playerChoice==='scissors' && computermove==='rock'){
        decision='You Lost';
    }
    else if(playerChoice==='scissors' && computermove==='paper'){
        decision='You Won';
    }
    else if(playerChoice==='scissors' && computermove==='scissors'){
        decision='It is a Tie';
    }
    else{
        decision = 'Not a choice'
    }
    alert(`You chose ${playerChoice}, computer chose ${computermove} and ${decision}`);

}

function computerMove(){
    let move='';
   let random= Math.random();
    if (random > 0.6) {
        move= 'scissors';
    }
    else if(random>0.3){
        move='rock';
    }
    else{
        move='paper';
    }
    return move;
}

