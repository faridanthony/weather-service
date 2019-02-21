
const request = require('request');
const constants = require('./constants');

/**
 * Basic class for retrieving weather for a given postal code.
 */
module.exports = class WeatherService {
  constructor() {
  }

  /**
   * Retrieves weather data for a given postal code.
   * @param {string} postalCode - The postal code
   * @param {function} callback - The callback function
   */
  getByZipCode(postalCode, callback) {
    // postalCode is required
    if (!postalCode) {
      callback(Error ('Invaid value provided for [postalCode]'), null)
    }

    // Construct the URL
    const url = `${constants.API_URL}?key=${constants.API_KEY}&q=${postalCode}`

    // Send the request and handle response/error
    this.sendRequest(url, function(error, response, body) {

      // Handle error
      if (error) {
        console.log('Featch weather failed with error: ', error)
        return callback(error, null)
      } else {

        const temprature  =  body.current.temp_f
        const currentTime = new Date(body.location.localtime).toLocaleTimeString("en-US")

        return callback(null, {
          time: currentTime,
          temprature: temprature,
          postalCode: postalCode
        })
      }
    })
  }

  sendRequest(url, callback) {
    request(url, {json: true}, function(error, response, body) {
      return callback(error, response, body)
    })
  }
}
