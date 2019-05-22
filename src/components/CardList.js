import React from 'react';
import Card from './Card';

const CardList = ({ api_data }) => {
  const listPeople = api_data.map((user, i) => {
    return (
      <Card
        id = {i+=1}
        key={user.url}
        name={user.name}
        weight={user.mass}
        birth={user.birth_year}
        species={user.species}
      />
    )}
  )
  // console.log(api_data, "listpeople")

  // var names = [];

  // for(let i=0; i < api_data.length; i++) {
  //   names.push(api_data[i].name);
  // }

  // console.log(names)

  //Only managed to access the api_data from above code

  return (
    <div>
      {listPeople}
    </div>
  );
}

export default CardList;