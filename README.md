Weather-313


A weather app that pulls data from multiple different sources.
By aggregating that data, a better user perspective can be provided.

Written for BYU-Idaho CS-313
A barebones Node.js app using [Express 4](http://expressjs.com/).

## Data Layer

Most of the data will be provided by orchestrating third-party
weather APIs. I may allow for users to save a list of favorite locations.
If so, I think a noSQL database of some sort may be the best approach,
to allow the list of locations to be flexible an avoid any need
for normalization between users.

## Web Service Endponts

The primary endpoint will be `/weather/:location`, with the response being
a json object containing normalized results from multiple public weather APIs.
Some additional parameters may be included to allow for different types of forcast data.
If those different types diversify enough, this endpoint may be split out.

Other endpoints may include `/favorites`, returning the logged-in user's
saved locations.


## User Interface

A search input will be provided at the top of the screen. Saved locations
may be placed in the header, possibly in a dropdown along with other actions
like login/logout.

Below the search bar results will be shown, in a tabular format. That format
may very, depending on the type of weather info shown (overview vs. current vs. 10-day etc.).

AJAX calls will be used to call the endpoints described above, rendering that information. React or a similar tool will likely be used in building the UI.


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:hillshum/cs313-weather
$ cd cs313-weather
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
