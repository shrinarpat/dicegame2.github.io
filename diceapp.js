var score,roundScore,activePlayer,dice,gamePlaying;
var lastDice,secondLastDice = 0, winnerScore;

function init(){
    score = [0,0];
    roundScore = 0;
    //activePlayer = Math.floor(Math.random()*2);
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('#player-' + activePlayer).classList.add('active');

   /* alert(" Rule: 1. first Player with 100 Score will be the Winner, 2. if dice roll 1 then your current score is reduce to 0 and the control goes to next player, 3. using hold you can add your current score to main score and transfer the control to the next player");*/
    
}

init();



function toggleActiveClass(){
    document.getElementById('player-0').classList.toggle('active');
    document.getElementById('player-1').classList.toggle('active');
}


document.getElementById('roll-dice').addEventListener('click',function(){

    document.getElementById('winning-input').style.display = 'none';
   
    if(gamePlaying){

        dice = Math.floor(Math.random()*6)+1;
        
       document.getElementById('dice-image').src = 'image\\dice-' + dice + '.png';

        if(dice == 6 && lastDice == 6 && secondLastDice == 6){

        score[activePlayer] = 0;
        document.getElementById('global-score-' + activePlayer).textContent = score[activePlayer];

        roundScore = 0;
        document.getElementById('current-score-' + activePlayer).textContent = roundScore;  

        activePlayer == 0?activePlayer = 1:activePlayer = 0;

        toggleActiveClass();
        }

    

     else if(dice !== 1){
        roundScore += dice;
        document.getElementById('current-score-' + activePlayer).textContent = roundScore;  
         
    } else {
    
        roundScore = 0;
        document.getElementById('current-score-' + activePlayer).textContent = roundScore; 
        activePlayer == 0?activePlayer = 1:activePlayer = 0;

        toggleActiveClass();
    }
    }
    document.getElementById('id01').textContent = dice + ',' + secondLastDice + ',' + lastDice;
    lastDice = secondLastDice;
   
    secondLastDice = dice;
   
    
});


document.getElementById('hold').addEventListener('click',function(){
    score[activePlayer] += roundScore;

    winnerScore = parseInt(document.getElementById('winning-score').value);

    if(winnerScore){}else{winnerScore = 40;}

    if(score[activePlayer] >= winnerScore){
        document.getElementById('global-score-' + activePlayer).textContent = score[activePlayer];

        document.querySelector('#player-0').classList.remove('active');
        document.querySelector('#player-1').classList.remove('active');
        document.querySelector('#player-' + activePlayer).classList.add('winner');

        document.getElementById('player-'+activePlayer).innerHTML = '<i>Winner!! <span class="glyphicon glyphicon-hand-up"></span></i>';

        document.getElementById('dice-image').src = 'image\\default-dice.png';
        roundScore = 0;
        document.getElementById('current-score-' + activePlayer).textContent = roundScore;
         gamePlaying = false;
    }else {
    document.getElementById('global-score-' + activePlayer).textContent = score[activePlayer];
    roundScore = 0;
    document.getElementById('current-score-' + activePlayer).textContent = roundScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    
    toggleActiveClass();
    }

    document.getElementById('new-game').addEventListener('click',function(){
        score = [0,0];
        roundScore = 0;
        //activePlayer = 0;
        //activePlayer = Math.floor(Math.random()*2);
       // document.getElementById('id01').textContent = activePlayer;
        gamePlaying = true;

        document.getElementById('dice-image').src = 'image\\default-dice.png';

        dice = Math.floor(Math.random()*6)+1;

        document.getElementById('global-score-0').textContent = '0';
        document.getElementById('global-score-1').textContent = '0';
        document.getElementById('current-score-0').textContent = '0';
        document.getElementById('current-score-1').textContent = '0';
        document.getElementById('player-0').innerHTML = '<b><span class="glyphicon glyphicon-hand-right"></span> Player-1</b>';
        document.getElementById('player-1').innerHTML = '<b><span class="glyphicon glyphicon-hand-right"></span> Player-2</b>';
        
        document.querySelector('#player-0').classList.remove('winner');
        document.querySelector('#player-1').classList.remove('winner');
        
        document.querySelector('#player-0').classList.remove('active');
        document.querySelector('#player-1').classList.remove('active');
        activePlayer = Math.floor(Math.random()*2);
        document.querySelector('#player-' + activePlayer).classList.add('active');
    });
    
});


