import fs from "fs";
import { KEYPAD, FILENAME } from "../constants/constants.js";
import Trie from "./trieclass.js";

//read in the dictionary as a filestream as this is faster

let data = "";
// let myTrie = new Trie();
// myTrie.add("ant");
// myTrie.add("ace");
// myTrie.print();

// This function takes the current array of results and
// the options for the next digit
// It iterates through each existing result and concatenates on
// each of the digit's letter options in turn and pushes to a
// new results array that is returned

// const addDigit = (array, options) => {
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const subSolution = array[i];
//     for (let x = 0; x < options.length; x++) {
//       const letter = options[x];
//       newArray.push(subSolution.concat(letter));
//     }
//   }
//   return newArray;
// };

const readStream = fs.createReadStream(FILENAME, "utf8");

readStream
  .on("data", function (chunk) {
    data += chunk;
  })
  .on("end", function () {
    console.log(data)
  });

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
