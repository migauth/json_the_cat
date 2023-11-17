// // Allows for inputing arguments through the comand line.
// const arg = process.argv;
// let argArr = arg.slice(2);

// Import request library
const request = require("request");

// The breed argument in command line input
// const breedName = argArr[0];

// Api link for fetching cat data
// let urlData = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;


const fetchBreedDescription = function (breedName, callback) {
  const urlData = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  try { // Check if valid URL
    request(urlData, (error, response, body) => {
      const data = JSON.parse(body);
      try { // Check if breed exists
        callback(error, data[0].description);
      } catch (error) {
        callback("Breed does not exist!");
      }
    });
    
  } catch (error) {
    callback("Error: Invalid URL!");
  }

};

module.exports = { fetchBreedDescription };

