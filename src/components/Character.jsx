import React from 'react';


function Character(props) {
  console.log(props);
  return (
    <div >
    <h1> {props.character.character.bio.name}</h1>
    </div>
  );
}

export default Character;
