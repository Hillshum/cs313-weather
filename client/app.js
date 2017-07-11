import './styles.scss'
import React from 'react'


import SearchForm from './components/searchForm'
import ResultItem from './components/results'

import weatherQuery from './api/weather'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.onSearch = this.onSearch.bind(this)
    this.state = {
      results: []
    }
  }

  onSearch(query) {
    weatherQuery(query).then(resp=>{
      if (Array.isArray(resp)) {
        this.setState({results: resp})
      }
      console.log(resp)
    })
  }

  render () {
    return <div className="app">
      <SearchForm onSearch={this.onSearch} />
      <div className="results-list">
        {this.state.results.map(result=>
          <ResultItem key={result.provider} result={result} />
        )}
      </div>
    </div>
  }
}

export default App