const request = require('postman-request');
const geoCode = require('./Utils/geoCode');
const forcast = require('./Utils/forcast')

// const url = 'http://api.weatherstack.com/current?access_key=652c5aab326e19761a34ea58a2c39e33&query=Delhi';
// request({ url: url, json: true }, (error, response) => {

//     // const parsedata= JSON.parse(response.body);
//     // const arrData = [parsedata];
//     console.log(`It is currently' ${response.body.current.temperature} degrees out but feels like ${response.body.current.feelslike}`);
// })

// const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/India.json?access_token=pk.eyJ1IjoicmFuZG9tdXNlcm5hbWUxMyIsImEiOiJjbDRwbDNtd2gwZnA3M2ptd3djM2d5MzZoIn0.IagWlb5zQXqt3b4r9Y7F-Q';

// request({ url: geoCodeURL, json: true }, (error, response) => {

//     if (error) {
//         console.log('Unable to connect to location services');
//     } else if (response.body.features.length===0){
//     console.log('Unable to find location search another location')
//     }
//     else{
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];
//         console.log(latitude, longitude);
//     }
// })

const address = process.argv[2];

if (!address) {
    console.log('Please provide an address')
} else {
    geoCode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }

        console.log('data', data)

        forcast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastData);
        })
    })

}


