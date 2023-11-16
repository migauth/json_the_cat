// Allows for inputing arguments through the comand line.
const arg = process.argv;
let argArr = arg.slice(2);

// Import request library
const request = require("request");

const urlData = argArr[0]



const info = request()