import KEYPAD from "./constants/constants";

// This function takes the current array of results and
// the options for the next digit
// It iterates through each existing result and concatenates on
// each of the digit's letter options in turn and pushes to a
// new results array that is returned

const addDigit = (array, options) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const subSolution = array[i];
    for (let x = 0; x < options.length; x++) {
      const letter = options[x];
      newArray.push(subSolution.concat(letter));
    }
  }
  return newArray;
};

// This function parses the string passed to the API
// It calls addDigit for each character in the string
// with the associated string of characters

const telephoneWords = (digitString) => {
  if (!digitString || digitString == "") {
    return "Nothing entered";
  }

  let result = [""];

  for (let digit = 0; digit < digitString.length; digit++) {
    const thisDigit = digitString[digit];

    if (!parseInt(thisDigit) && parseInt(thisDigit) != 0) {
      return "Please only enter numbers!";
    }

    result = addDigit(result, KEYPAD[thisDigit]);
  }

  return result;
};

export { telephoneWords };
