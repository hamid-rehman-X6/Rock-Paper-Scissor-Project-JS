let userScore = 0;
let compScore = 0;
let drawScore = 0


let choices = document.querySelectorAll('.choice');
let msg = document.querySelector('#msg');
let userScoreID = document.querySelector('#user-score');
let compScoreID = document.querySelector('#comp-score');
let drawScoreID = document.querySelector('#draw-score');

const computerChoice = () => {
    let compCh = ['rock', 'paper', 'scissor'];
    const choiceINDEX = Math.floor(Math.random() * 3);
    return compCh[choiceINDEX]
}

const showWinner = (userWin, userChoice, choiceOfComp) => {
    if (userWin) {
        userScore++;
        userScoreID.innerHTML = userScore
        console.log('You win')
        msg.innerHTML = `You Win! Your ${userChoice} beats ${choiceOfComp}`
        msg.style.backgroundColor = 'green'
    } else {
        compScore++;
        compScoreID.innerHTML = compScore;
        console.log('You lose')
        msg.innerHTML = `You Lose! ${choiceOfComp} beats your ${userChoice}`
        msg.style.backgroundColor = 'red'
    }
}

const drawGame = () => {
    drawScore++;
    drawScoreID.innerHTML = drawScore
    console.log('Game Draw')
    msg.innerHTML = `It's a Draw! Play Again`
    msg.style.backgroundColor = '#25291C';
}

const playGame = (userChoice) => {
    // userChoice
    console.log('User choice = ', userChoice)
    // comp choice
    const choiceOfComp = computerChoice();
    console.log('Comp choice = ', choiceOfComp);

    // start game by comparing choices

    if (userChoice === choiceOfComp) {
        // GAME DRAW
        drawGame()
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            // comp choice left paper, scissor
            userWin = choiceOfComp === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            // rock , scissor
            userWin = choiceOfComp === 'scissor' ? false : true
        } else {
            // rock, paper
            userWin = choiceOfComp === 'rock' ? false : true
        }
        showWinner(userWin, userChoice, choiceOfComp);
    }

}
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})
