import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
let API_KEY = 'AIzaSyDWyggnansHLTGGxq1-HE8mOJdaJqy4NXI';

class App extends Component {
	constructor(props) {
    super(props)

    this.states = {video: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
	    console.log(data)
	  });
	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
			);
	}
}


ReactDOM.render(<App />, document.querySelector('.container'));
