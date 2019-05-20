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
    const { name, weight } = this.props;

    return (
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <h3> Name: { name }</h3>
        <h4> Species: { this.state.species }</h4>
        <h4> Weight: { weight }</h4>
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





// export default class Card extends React.Component {
//   state = { species: '' };
//   componentDidMount() {
//     fetch(this.props.species[0])
//       .then(response => response.json())
//       .then(json => this.setState({ species: json.name }));
//   }
//   render() {
//     return (
//       <div className="Card">
//         <h3>Name: {this.props.name}</h3>
//         <h4 style={{ fontStyle: 'italic', color: 'red' }}>
//           The species.name value should be shown below... not the url
//         </h4>
//         <h4>Species: {this.state.species}</h4>
//       </div>
//     );
//   }
// }


// const Card = ({ key, name, weight, birth, species }) => {
//   return (
//     <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
//       <img alt='robots' src={`https://robohash.org/${weight}?size=200x200`} />
//       <div>
//         <p>{key}</p>
//         <h2>{name}</h2>
//         <p>Weight: {weight} kgs</p>
//         <p>D.O.B.: {birth}</p>
//         <p>species: {species}</p>
//       </div>
//     </div>
//   );
// }

// export default Card;
