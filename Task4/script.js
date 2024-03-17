$(document).ready(function() 
{
    let userScore = 0; 

    $('.choices button').click(function() 
    {
        let userChoice = $(this).attr('id');
        let computerChoice = getComputerChoice();
        $('#userChoice').text(userChoice);
        $('#computerChoice').text(computerChoice);
        $('#gameResult').text(determineWinner(userChoice, computerChoice));
        updateScore();
    });

    function getComputerChoice() 
    {
        const choices = ['rock', 'paper', 'scissors'];
        let randomIndex = Math.floor(Math.random() * 3); 
        return choices[randomIndex];
    }

    function determineWinner(user, computer) 
    {
        if (user === computer) 
        {
            return "It's a tie!";
        } 
        else if ((user === 'rock' && computer === 'scissors') || 
                   (user === 'paper' && computer === 'rock') || 
                   (user === 'scissors' && computer === 'paper')) {
            userScore++;
            return "You win!";
        } 
        else 
        {
            return "You lose!";
        }
    }

    function updateScore() 
    {
        $('#score').text(userScore);

    }
});
