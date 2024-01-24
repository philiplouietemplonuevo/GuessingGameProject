const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numAttempts;
let secretNumber;

let checkGuess = (guess) => {
    if (guess > secretNumber) {
        console.log("Too high!");
        return false;
    } else if (guess < secretNumber) {
        console.log("Too low!");
        return false;
    } else {
        console.log("Correct!");
        return true;
    }
}

let askGuess = () => {
    rl.question("Enter a guess: ", (answer) => {
        if (answer.trim().length > 0) {
            const userGuess = +answer;
            if (checkGuess(userGuess)) {
                console.log("You win!");
                rl.close();
            } else {
                numAttempts--;
                if (numAttempts === 0) {
                    console.log("You are out of guesses!");
                    console.log("The game has ended!");
                    console.log("You Lose!");
                    rl.close();
                } else {
                    numAttempts === 1 ? console.log("You have 1 more guess remaining.") : console.log(`You have ${numAttempts} guesses remaining`);
                    askGuess();
                }
            }
        } else {
            console.log("You did not enter anything. Please enter a number.");
            askGuess();
        }
    });

};

let askRange = () => {
    rl.question("Enter a max number: ", (answer) => {
        const maxNum = +answer;
        rl.question("Enter a min number: ", (answer) => {
            const minNum = +answer;
            console.log(`I'm thinking of a number between ${minNum} and ${maxNum}...`);
            secretNumber = randomInRange(minNum, maxNum);
            askGuess(checkGuess);
        });
    });
};

let askLimit = () => {
    rl.question("In how many attempts can you guess the number? ", (answer) => {
        numAttempts = +answer;
        askRange();
    });
};


askLimit();
