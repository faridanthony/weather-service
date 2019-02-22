# Weather Service
A test project that retrieves the current time and temperature for a given location 

## Install dependencies:
`$ npm install`

## Running:
`$ node src/index.js`

## Notes:
You can alter the locations and the data the script returns by simply changing the values for **inputs[]** in **src/index.js**. 

The following will return the time and temperature for postal codes *33067* and *90001*:
#### Input:
```
const inputs = [
    {'name': 'Coral Springs', postalCode: 33067},
    {'name': 'Los Angeles', postalCode: 90001}
]
```

#### Output:
```
Location Name: Los Angeles
PostalCode: 90001
Current time: 3:49:00 PM.
Current Temprature: 51.1 °F

Location Name: Coral Springs
PostalCode: 33067
Current time: 6:49:00 PM.
Current Temprature: 79 °F
```

While this will return only the value for postal code *33067*:
#### Input:
```
const inputs = [
    {'name': 'Coral Springs', postalCode: 33067}
]
```

#### Output:
```
Location Name: Coral Springs
PostalCode: 33067
Current time: 6:49:00 PM.
Current Temprature: 79 °F
```
