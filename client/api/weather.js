
const WEATHER_PATH = '/weather/'

export default (query) => {
  return fetch(WEATHER_PATH + query).then(res=>
    res.json()
  )
}