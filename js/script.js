var scores,roundScore,activePlayer;
scores=[0,0];
roundScore=0;
activePlayer=0;

// document.querySelector('#current-'+activePlayer).textContent=dice;
// var x=document.querySelector('#score-0').textContent;

document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';


document.querySelector('.btn-roll').addEventListener('click',function () {
    // 1.we need a random number:
    var dice=Math.floor(Math.random()*6)+1;
    // 2.Display the result
    var diceDOM=document.querySelector('.dice')
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png'

    // 3.Update the round score if the rolled dice was not a one
    if(dice !==1){
        // add score
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore

    }else{
        // Next player
        activePlayer===0?activePlayer=1 :activePlayer=0;
        roundScore=0;

        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')

        document.querySelector('.dice').style.display='none'
    }
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    // add current score to global scope
    scores[activePlayer]+=roundScore;

    // update the ui

    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer]
    // check if player won the game   
});