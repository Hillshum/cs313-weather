const YQL = require('yql');


module.exports = (location) => {
  const placeQ = new YQL(`select woeid  from geo.places where text ="${location}"`);


  // Promises should make orchestrating multiple APIs easier.
  return new Promise((resolve, reject) => {

    placeQ.exec((err, data) => {
      if (err) next(err)
      const {woeid} = data.query.results.place[0]

      console.log(woeid)

      const weatherQ = new YQL(`select * from weather.forecast where woeid = ${woeid}`)
      weatherQ.exec((err, data) => {
        if (err) reject(err)


        const results = data.query.results
        console.log(results)
        resolve({
          current: results.channel.item.condition
        })
      })
    })
  })
}