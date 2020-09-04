// test functies script
const functions = require("./functions.js");
const { TestScheduler } = require("jest");

//game starten woord kiezen
test("Checks chosen word", () => {
    testArray = ["test"];
    expect(functions.winningWord(testArray)).toEqual(["t", "e", "s", "t"]);
})

// letter check
test("checks letter in word", () => {
    testWord = ["t", "e", "s", "t"];
    testLetter = "t";
    expect(functions.letterInput(testWord, testLetter)).toEqual(true);
});

test("checks letter in word", () => {
    testWord = ["t", "e", "s", "t"];
    testLetter = "e";
    expect(functions.letterInput(testWord, testLetter)).toEqual(true);
});

// updaten pogingen
test("Checks wrong letter", () => {
    const wrongLetter = "f"
    const wordToTest = ["t", "e", "s", "t"]
    expect(functions.attempts(wrongLetter, wordToTest)).toEqual(false);
})

// uopdaten gekozen letters 
test("checks letter added to the array", () => {
    word = ["t", "e", "s", "t"];
    inputs = ["t", "e", "s", "d"];
    expect(functions.LetterGuess(word, inputs)).toEqual(["d"]);
})

//verliezen game pogingen
test("checks losging by attemds", () => {
    let tries = 5;
    expect(functions.Losing(tries)).toEqual(true);
})

test("checks losing by attemds", () => {
    let tries = 4;
    expect(functions.Losing(tries)).toEqual(false);
})

//winnen game
test("Checks winning game", () => {
    const word = ["t", "e", "s", "t"];
    const winningArray = ["t", "e", "s", "t"];
    expect(functions.Winning(word, winningArray)).toEqual(true);
})

test("Check win condition returns as false when word is not completed", () => {
    const word = ["t", "e", "s", "t"];
    const winningArray = ["t", "e", "t"];
    expect(functions.Winning(word, winningArray)).toEqual(false);
});