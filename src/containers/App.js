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
      people: [], //empty array to retrieve a list from an API
      searchfield: ''
    }
  }

  componentDidMount() {

    const urls = [
      'https://swapi.co/api/people/?page=1',
      'https://swapi.co/api/people/?page=2',
      'https://swapi.co/api/people/?page=3',
      'https://swapi.co/api/people/?page=4',
      'https://swapi.co/api/people/?page=5',
      'https://swapi.co/api/people/?page=6',
      'https://swapi.co/api/people/?page=7',
      'https://swapi.co/api/people/?page=8',
      'https://swapi.co/api/people/?page=9'
    ]

    // fetch('https://swapi.co/api/people/?page=1')
    //   .then(response=> response.json()) //converts to json format
    //   .then(people => {this.setState({ objects: people.results})})
    //   .catch('error'); 
      
    // try to loop through all urls instead of referring to 1 url i.e. people[i]
    
    // Promise.all(urls.map(url => {
    //   return fetch(url).then(response => response.json())
    // }))
    // .then(people => {
    //   this.setState({ people: people[2].results})
    // })
    // .catch('error'); 

    Promise.all(urls.map(async url => {
      const response = await fetch(url);
      const ppl = await response.json();
      var combineAllPeople = this.state.people;
      combineAllPeople.push(ppl.results);

      var sortedAllPeople = combineAllPeople
        .flat()
        .sort((a, b) => a.name.localeCompare(b.name));
      
      this.setState({people: sortedAllPeople})
    }))
      .catch(error => console.log ('Error fetching people', error));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { people, searchfield } = this.state;
    const filteredPeople = people.filter(person =>{
      return person.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !people.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>STAR WARS</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList people={filteredPeople} />
          </Scroll>
        </div>
      );
  }
}

export default App;