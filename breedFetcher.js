// Allows for inputing arguments through the comand line.
const arg = process.argv;
let argArr = arg.slice(2);

// Import request library
const request = require("request");

// The breed argument in command line input
const breed = argArr[0];

// Api link for fetching cat data
let urlData = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;


try { // Check if valid URL
  request(urlData, (error, response, body) => {
    const data = JSON.parse(body);
    try { // Check if breed exists
      console.log(data[0].description);
    } catch (error) {
      console.log("Error: Breed not found!");
    }
  });
  
} catch (error) {
  console.log("Error: Invalid URL!");
}