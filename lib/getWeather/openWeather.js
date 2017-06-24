const http = require('http')
const queryString = require('querystring')

const convertKelvin = require('../conversions/ktof')

const OPENWEATHER_HOST = 'api.openweathermap.org'
const OPENWEATHER_PATH = '/data/2.5/weather?'
const OPENWEATHER_APPID = process.env.OPENWEATHER_APPID

module.exports = (location) => {

  const query = {
    APPID: OPENWEATHER_APPID
  }

  if (!isNaN(Number(location))) {
    query.zip = location
  } else {
    query.q = location
  }

  console.log(query)

  // Promises should make orchestrating multiple APIs easier.
  return new Promise((resolve, reject) => {
    const qs = queryString.stringify(query)
    http.get({
      host: OPENWEATHER_HOST,
      path: OPENWEATHER_PATH + qs
    }, res => {
      let rawData = ''
      res.on('data', (chunk) => rawData += chunk)
      res.on('end', ()=> {
        const data = JSON.parse(rawData)
        const returned = {
          provider: "openweathermap",
          current: {
            temp: convertKelvin(data.main.temp),
            wind: data.wind.speed
          }
        }
        resolve(returned)
      })
    }).on('error', e=> reject(e))
  })
}