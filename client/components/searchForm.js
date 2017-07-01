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
      onChange={({target})=>this.setState({query:target.value})}
      />
      <button className="btn-primary search-button" 
        onClick={()=>onSearch(this.state.query)}>Search</button>
    </div>
  }
}


export default Search