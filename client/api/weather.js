
const WEATHER_PATH = '/weather/'

export default (query) => {
  return fetch(WEATHER_PATH + query).then(res=> {
    if (res.status >= 400) {
      throw res.statusText
    }
    return res.json()
  }).catch((error)=>{console.log(error)})
}