import React from 'react'

import './styles.scss'
class Result extends React.Component {

  render () {
    const {provider, current} = this.props.result
    const {temp, text, wind} = current
    return <div className="results-item">
      <div className="provider">{provider}</div>
      {temp && <div className="temp">Temp: {temp}</div>}
      {wind && <div className="wind">Wind: {wind}</div>}
      {text && <div className="text">Description: {text}</div>}
    </div>
  }
}

export default Result