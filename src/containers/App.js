import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
// import { promised } from 'q';

class App extends Component {
  constructor() {
    super()
    this.state = {
      api_data: [], //empty array to retrieve a list from an API
      searchfield: ''
    }
  }

  componentDidMount() {

    const urlsArray = [];

    for(let i = 1; i < 10; i++) {
      urlsArray.push('https://swapi.co/api/people/?page=' + i.toString());
    }

    const charsData = [];

    const charsFetch = urlsArray.map(url => fetch(url)
        .then(res => res.json())
        .then(data => data.results.map(user => charsData.push(user)))
    );

    Promise.all(charsFetch)
      .then(results => this.setState({api_data: charsData}))
      .catch((err) => console.log('ERROR, please check', err))

    // const urls = [
    //   'https://swapi.co/api/people/?page=1',
    //   'https://swapi.co/api/people/?page=2',
    //   'https://swapi.co/api/people/?page=3',
    //   'https://swapi.co/api/people/?page=4',
    //   'https://swapi.co/api/people/?page=5',
    //   'https://swapi.co/api/people/?page=6',
    //   'https://swapi.co/api/people/?page=7',
    //   'https://swapi.co/api/people/?page=8',
    //   'https://swapi.co/api/people/?page=9'
    // ]

    // Promise.all(urls.map(async url => {
    //   const response = await fetch(url);
    //   const ppl = await response.json();
    //   var combineAllPeople = this.state.api_data;
    //   combineAllPeople.push(ppl.results);

    //   var sortedAllPeople = combineAllPeople
    //     .flat()
    //     .sort((a, b) => a.name.localeCompare(b.name));
      
    //   this.setState({api_data: sortedAllPeople})
    // }))
    //   .catch(error => console.log ('Error fetching people', error));

  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { api_data, searchfield } = this.state;
    const filteredData = api_data.filter(person =>{
      return person.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !api_data.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>STAR WARS</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList api_data={filteredData} />
          </Scroll>
        </div>
      );
  }
}

export default App;