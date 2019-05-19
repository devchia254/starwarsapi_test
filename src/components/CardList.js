import React from 'react';
import Card from './Card';

const CardList = ({ people }) => {
  const listPeople = people.map((user, i) => {
    return (
      <Card
        key={user.url}
        name={user.name}
        weight={user.mass}
        birth={user.birth_year}
        species={user.species}
      />
    )}
  )
  // console.log(listPeople.length)
  return (
    <div>
      {listPeople}
    </div>
  );
}

export default CardList;