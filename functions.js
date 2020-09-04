// functies 
let tries = 0;

const functions = {

    // starten game kiezen woord
    winningWord: (list) => {
        const index = Math.floor(Math.random() * list.length);

        return list[index].split("");
    },

    // checken of een letter voorkomt
    letterInput: (testWord, testLetter) => {
        let letterChosen = false;
        if (testWord.includes(testLetter)) {
            letterChosen = true;
        }
        return letterChosen;
    },

    // updaten pogingen
    attempts: (wrongLetter, WordToTest) => {
        const value = functions.letterInput(
            WordToTest,
            wrongLetter
        );
        if (value) {
            return;
        } else {
            tries++;
            return false;
        }
    },
    // updaten gekozen letters
    LetterGuess: (word, inputs) => {
        const wrongLetters = inputs.filter((letter) => {
            return !word.includes(letter);
        })
        return wrongLetters;
    },

    //verliezen pogingen
    Losing: (tries) => {
        if (tries === 5) {
            return true
        }
        else {
            return false
        }
    },

    //winnen game
    Winning: (word, inputs) => {
        let remaining = word.filter((letter) => {
            return !inputs.includes(letter);
        })
        if (remaining.length === 0) {
            return true;
        } else {
            return false;
        }
    }

}

module.exports = functions;
