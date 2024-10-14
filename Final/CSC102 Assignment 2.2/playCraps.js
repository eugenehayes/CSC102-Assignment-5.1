//function plays the Craps game
function playCraps() {
        // generate two random numbers between 1 and 6 for the dice rolls
    let die1 = Math.floor(Math.random() * 6) + 1; // First roll
    let die2 = Math.floor(Math.random() * 6) + 1; // Second roll

        // calculate the sum of the two dice
    const sum = die1 + die2;

         // result message - outputs each number for the dice rolled
    let message = `You rolled: ${die1} and ${die2}<br>Total sum: ${sum}<br>`; // br used to seperate

        // outcome based on the sum and dice values
        // losing
    if (sum === 7 || sum === 11) {
        message += "CRAPS, You lose!"; // player loses
        //winning
    } else if (die1 === die2 && die1 % 2 === 0) {
        message += "You win!"; // player wins with doubles that are even
            
        //tie/push
    } else {
        message += "You pushed!"; // neither win nor lose
    }

    // output the result to the html
    document.getElementById("result").innerHTML = message; 

}

  
