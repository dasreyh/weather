const request = require('request')

const geocode = (location, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?access_token=pk.eyJ1IjoiZGFzcmV5aCIsImEiOiJjazQ3ZXBrN3cwOTl0M25vYzhubHFrY3Q4In0.SC2DpOut1nR2XAwwFJKJgg&limit=1'

    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('Unable to connect to location services.', undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find location, try another search.', undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode