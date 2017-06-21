const yahoo = require('./yahoo')

module.exports = (req, res, next) => {
  const {location} = req.params
  yahoo(location).then(data => {
    res.json(data)
  }).catch(next)
}