import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  render () {
    const {onSearch} = this.props
    return <div className="search-form">
      <input type="text"
      value={this.state.query}
      placeholder="Enter Location"
      onChange={({target})=>this.setState({query:target.value})}
      />
      <button className="btn-primary search-button" 
        onClick={()=>this.state.query && onSearch(this.state.query)}>Search</button>
    </div>
  }
}


export default Search