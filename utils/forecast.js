const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    const url = 'https://api.darksky.net/forecast/8eae61ebb8e0779364946d78115d5728/' + encodeURIComponent(longitude) + ',' + encodeURIComponent(latitude)

    request({url:url, json:true}, (error, response)=>{
        if(error){
            callback('Unable to connect to weather services.', undefined)

        }else if(response.body.error){
            callback('Unable to find location:' + response.body.error, undefined)

        }else{
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% change of rain.')
        }
    })
}

module.exports = forecast