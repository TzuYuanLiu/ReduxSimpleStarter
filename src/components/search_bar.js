//exporting module
//classes --functional component / class base component
//state
import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {term: ''};
  }

	render() {
		return(
		<div className="search-bar">
		  <input
		  value={this.state.value}
		  onChange={event=>this.onInputChange(event.target.value)}/>
		</div>)
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term)
	}
}

export default SearchBar;