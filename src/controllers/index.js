import fs from "fs";
import { KEYPAD, FILENAME } from "../constants/constants.js";
import Trie from "./trieclass.js";

let dictionary = "";
let myTrie = new Trie();
let words = [];

const loadDictionary = () => {
  console.log("initialising dictionary");

  const readStream = fs.createReadStream(FILENAME, "utf8");

  readStream
    .on("data", function (chunk) {
      dictionary += chunk;
    })
    .on("end", function () {
      words = dictionary.split(/\s+/g);

      for (let word of words) {
        myTrie.add(word);
      }

      console.log("dictionary loaded");
    })
    .on("error", function () {
      console.log("error loading dictionary");
    });
};

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

const phoneWords = (digitString) => {
  if (!digitString || digitString == "") {
    return "Nothing entered";
  }

  let results = [""];

  //first add the possble combinations
  for (let digit = 0; digit < digitString.length; digit++) {
    const thisDigit = digitString[digit];

    if (!parseInt(thisDigit) && parseInt(thisDigit) != 0) {
      return "Please only enter numbers!";
    }
    results = addDigit(results, KEYPAD[thisDigit].toLowerCase());
  }

  //then check against the dictionary which are valid
  results = checkDictionary(results);

  return results;
};

const checkDictionary = (words) => {
  let realWords = [];

  for (let w of words) {
    let test = myTrie.find(w);

    if (test !== null && test.isLeaf) {
      realWords.push(w);
    }
  }

  return realWords;
};

export { phoneWords, loadDictionary };
