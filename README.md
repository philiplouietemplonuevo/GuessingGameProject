# Number Guessing Game

A simple command-line number guessing game built with Node.js. In this game, players will guess a randomly generated number within a specified range and have a limited number of attempts to find the correct answer.

## Features

- **Customizable Range**: Players can set the minimum and maximum values for the random number generation, making each game customizable and challenging.
- **Attempt Limits**: Players define the number of guesses allowed, adding strategic depth to the game.
- **Immediate Feedback**: After each guess, the game informs the player if the guess is too high, too low, or correct.
- **Replayability**: Due to the customizable nature of the game, players can enjoy different experiences each time they play.

## Prerequisites

Before you run the game, ensure you have Node.js installed on your machine. This game requires Node.js to execute the JavaScript code. You can download and install Node.js from [nodejs.org](https://nodejs.org/).

## Installation

No additional installation is required for this game, as it uses only the `readline` module, which is included with Node.js.

## Running the Game

1. Open a terminal or command prompt.
2. Navigate to the directory containing the game's script.
3. Run the script with Node.js:
   ```
   node guessingGame.js
   ```
  Replace guessingGame.js with the actual name of the script file if it's different.
4. Follow the on-screen prompts to play the game:

  - First, enter the maximum number of attempts you think you'll need to guess the number.
  - Next, enter the minimum and maximum numbers to define the range of the possible secret number.
  - Finally, start guessing the number based on the feedback provided after each attempt.
    
## How to Play
  - The game starts by asking you to set the number of attempts.
  - Then, you will define the range by entering a minimum and maximum number.
  - The game will generate a secret number within this range, and you will try to guess it.
  - After each guess, you'll get feedback: "Too high!", "Too low!", or "Correct!".
  - Use the feedback to adjust your next guess.
  - The game ends when you guess correctly or run out of attempts.

## Contributing
Feel free to fork this repository if you have ideas on how to improve the game or wish to add new features. Pull requests for improvements are welcome.

## License
This project is open-source and available under the MIT License.
