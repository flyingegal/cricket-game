let computerChoice;
let scoreStr = localStorage.getItem('score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr){
    
score = scoreStr ? JSON.parse(scoreStr) :  {
    win: 0,
    loss: 0,
    Tie: 0,
    
};

 score.displayScore = function(){ return `SCORE : win: ${score.win}, loss: ${score.loss}, Tie: ${score.Tie}`;}

    showResult();
}
function generateComputerChoice() {
    //This will generate random number between 0 and 3
    let randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1) {
        return 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Ball';
    } else {
        return 'Stump'
    }
}
function getResult(userMove, computerMove) {
    if (userMove === 'Bat') {
        if (computerMove === 'Bat') {
            score.win++;
            return 'You Won ';

        }
        else if (computerMove === 'Bat') {
            score.Tie++;
            return 'Match is Tie';

        }
        else {
            score.loss++;
            return 'You loss computer win';
            
        };
    }
    else if (userMove === 'Ball') {
        if (computerMove === 'Ball') {
            score.Tie++;
            return 'Match is Tie';
            
        }
        else if (computerMove === 'Bat') {
            score.loss++;
            return 'You loss computer win ';
            
        }
        else {
            score.win++;
            return 'You Won ';

        };
    }
    else {
        if (computerMove === 'Ball') {
            score.loss++;
            return 'you loos computer win ';
            
        }
        else if (computerMove === 'Bat') {
            score.win++;
            return 'you win ';
            
        }
        else {
            score.Tie++;
            return 'Match is Tie';
            
        };
    }
}
function showResult(userMove, computerMove, resultMsg) {
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.user_move').innerText = userMove /*!== undefined*/ ?`You selected ${userMove}` : '';
    document.querySelector('.computer_move').innerText=
    computerMove /*!== undefined*/ ? `computerChoice is ${computerMove}` :'' ;
    document.querySelector('.result').innerText = /*resultMsg !== undefined ?*/ resultMsg || '';
    document.querySelector('.score').innerText = score.displayScore();
}
