const request = require('request')
const WeatherService = require('./weather-service')

const inputs = [
    {'name': 'Coral Springs', postalCode: '33067'},
    {'name': 'New York', postalCode: '10001'},
    {'name': 'Charleston', postalCode: '29403'},
    {'name': 'Los Angeles', postalCode: '90001'},
]

const weatherService = new WeatherService()

for (let input of inputs) {
  weatherService.getByZipCode(input.postalCode, function(error, result) {
    if (error) {
      console.log('Failed retrieving weather information for postal code ${input.postalCode}')
    } else {
      console.log(`Location Name: ${input.name || 'N/A'}\nPostalCode: ${input.postalCode}`)
      console.log(`Current time: ${result.time}.\nCurrent Temprature: ${result.temprature} \xB0F\n`)
    }
  })
}
