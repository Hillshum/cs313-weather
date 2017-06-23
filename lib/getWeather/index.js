const yahoo = require('./yahoo')
const openWeather = require('./openWeather')

module.exports = (req, res, next) => {
  const {location} = req.params
  const apis = [yahoo, openWeather]
  Promise.all(apis.map(api => api(location))).then(data => {
    res.json(data)
  }).catch(next)
}