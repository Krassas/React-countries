import React, {Component} from 'react';
import'../CSS/App.css';
import Cardlist from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';


class App extends Component {
  constructor() {
    super()
    this.state = {
      countryData: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;languages;currencies;flag')
    .then(response => response.json())
    .then(data => this.setState({countryData: data}))
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const filteredCountries = this.state.countryData.filter(
      countryData => {
        return countryData.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      }
    )
    
    if (this.state.countryData.length === 0) {
      return <h1 id="loading">Loading</h1>
    } else {

      return (
        <div id="mainContent">
          <h1 id="mainTitle">Countries</h1>
          <div id="searchBox"><SearchBox searchChange={this.onSearchChange} id="searchBox"/></div>
          <Cardlist countryData={filteredCountries}/>
        </div>
      );

    }
  }
}

export default App;
