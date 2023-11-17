// Import request library
const request = require("request");

const fetchBreedDescription = function(breedName, callback) {

  const urlData = `https://api.thecatapi.com/v1/breeds/search?q=${encodeURIComponent(breedName)}`;

  request(urlData, (error, response, body) => {
    if (error) {
      return callback(error, null); // Pass any request errors to the callback
    }

    let data;
    try {
      data = JSON.parse(body); // Try parsing the JSON body
    } catch (e) {
      return callback(e, null); // Handle errors due to invalid JSON
    }

    if (data.length === 0) {
      callback(new Error('Breed does not exist'), null); // Handle the scenario where the breed is not found
    } else {
      callback(null, data[0].description); // Successfully return the breed description
    }
  });
};

module.exports = { fetchBreedDescription };

