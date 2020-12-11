import { FILE } from "dns";
import fs from "fs";
import {FILENAME} from "./constants/constants.js";

//read in the dictionary as a filestream as this is faster

let data = "";

const readStream = fs.createReadStream(FILENAME, "utf8");

readStream
  .on("data", function (chunk) {
    data += chunk;
  })
  .on("end", function () {
    console.log(data);
  });
