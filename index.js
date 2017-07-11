const express = require('express');

const getWeather = require('./lib/getWeather');
const app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));


app.get("/weather/:location", getWeather)

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


app.use((err, req, res, next) => {
  console.log(err)
  res.status(500)
  res.json({error: "Something happened"})
})

