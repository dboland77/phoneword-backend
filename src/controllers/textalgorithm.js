//For a first implementation we can just store the mappings
// as a dictionary
const phoneDigitsToLetters = {
  0: "0",
  1: "1",
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

const addDigit = (array, options) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    
    let subSolution = array[i];
    for (let x = 0; x < options.length; x++) {
      let letter = options[x];
      newArray.push(subSolution.concat(letter));
    }
  }
  return newArray;
};

const telephoneWords = (digitString) => {
  if (!digitString || digitString == "") {
    return "Nothing entered";
  }

  let result = [""];

  for (let digit = 0; digit < digitString.length; digit++) {
    let thisDigit = digitString[digit];

    if (!parseInt(thisDigit) && parseInt(thisDigit) != 0) {
      return "Please only enter numbers!";
    }

    result = addDigit(result, phoneDigitsToLetters[thisDigit]);
  }

  return result;
};

export { telephoneWords };
