import React, { Component } from 'react';
// import '../containers/App.css';

class Card extends Component {
  
  constructor() {
    super()
    this.state = {
      species: ['Fetching species...'],
      // films: ['Loading films...']
    }
  }

  componentDidMount() {
    // SPECIES //
      fetch(this.props.species[0])
        .then(resp => resp.json())
        .then(json => this.setState({species: json.name}))
        .catch(() => this.setState({species: 'Species Unknown'}));

    // FILMS //

    // const filmsArray = [];

    // const fetchFilms = this.props.films.map((filmUrl, i) => fetch(filmUrl)
    //     .then(res => res.json())
    //     .then(data => {
    //       filmsArray.push(`0${data.episode_id} - ${data.title}`);
    //       filmsArray.sort();
    //     }));

    // Promise.all(fetchFilms)
    //     .then(promisesArray => { this.setState({films:filmsArray}) })
    //     .catch((err) => console.log('error: ', err))

  }




  render() {
    const { name, weight, id } = this.props;

    return (
      <div className='tc grow bg-washed-yellow br3 pa3 ma3 dib bw2 shadow-5' style={{boxShadow: '0 0 2px 1px #FFFDE7, 0 0 4px 2px #FFF59D, 0 0 8px 4px #FFEE58'}}>
        <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
        <h3> Name: { name }</h3>
        <h4> Species: { this.state.species }</h4>
        <h4> Weight: { weight }</h4>
        <h4> id: { id }</h4>
        {/* <div className='films-list'>Featured in:
            <ul>
              { this.state.films.map((film, i) => (
                <li key={i}>
                  { film }
                </li>
              ))}
            </ul>
        </div> */}
      </div>
    )
  }

}

export default Card;