let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
  
  updateScoreElement();
  
  /*
  if (!score) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }
  */
 let isAutoPlay =false;
 let intervalId;

 let ap=false;//reset button change for interactive
function autoPlay(){
    if (!isAutoPlay) {
    intervalId= setInterval(()=> {
        const playerMove= pickComputerMove();
        playGame(playerMove);
    }, 1000);
    isAutoPlay =true;
  }
  else {
    clearInterval(intervalId);
    isAutoPlay=false;
    }

    //interactivity

    if (ap===false) {
      document.querySelector('.auto-play-button') .innerHTML='Stop';
        ap=true;
      } else {
      document.querySelector('.auto-play-button').innerHTML='Auto Play';
      ap=false;
      }
 } 
  document.querySelector('.js-rock-button')
      .addEventListener('click', ()=>{
        playGame('rock');
      });

  document.querySelector('.js-paper-button')
      .addEventListener('click', ()=>{
        playGame('paper');
      });

  document.querySelector('.js-scissors-button')
      .addEventListener('click', ()=>{
        playGame('scissors');
      });
      
  document.querySelector('.reset-score-button')
      .addEventListener('click', ()=>{

        resetBtn();


     /**/
      });

  function resetBtn(){
    if (score.ties>0||score.losses>0||score.wins>0) {
       document.querySelector('.reset-confirmation').innerHTML=` Are you sure you want to reset ?
    <button class='reset'>Yes</button>
    <button class='reset'>Cancel</button>
    `;
    document.querySelector('.reset')
      .addEventListener('click',()=>{
        if (document.querySelector('.reset').innerHTML==='Yes') {
          score.wins = 0;
          score.losses = 0;
          score.ties = 0;
          localStorage.removeItem('score');
          updateScoreElement();
          document.querySelector('.reset-confirmation').innerHTML='';
        } else {
          document.querySelector('.reset-confirmation').innerHTML='';
        }
      })
    } else {
      document.querySelector('.reset-confirmation').innerHTML=` You need to Play first`;
      setTimeout(() => {
        document.querySelector('.reset-confirmation').innerHTML=``;
      }, 2000);
    }
   
  }


  document.querySelector('.auto-play-button')
      .addEventListener('click',()=>{

        autoPlay();
        
      })

// shortcuts for playing 

document.body.addEventListener('keydown',(event)=>{
  if (event.key==='r') {
    playGame('rock');
  } 
  else if(event.key==='p') {
    playGame('paper');
  }
  else if(event.key==='s'){
    playGame('scissors');
  }
  else if(event.key==='Backspace'){
    resetBtn();
  }
  else if(event.key==='a'){
    autoPlay();
  }
})


  
  function playGame(playerMove) {
    const computerMove = pickComputerMove();
  
    let result = '';
  
    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }
  
    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }
  
    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }
  
    localStorage.setItem('score', JSON.stringify(score));
  
    updateScoreElement();
  
    document.querySelector('.js-result').innerHTML = result;
  
    document.querySelector('.js-moves').innerHTML = `You
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`;
  }
  
  function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }
  
  function pickComputerMove() {
    const randomNumber = Math.random();
  
    let computerMove = '';
  
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }
  
    return computerMove;
  }