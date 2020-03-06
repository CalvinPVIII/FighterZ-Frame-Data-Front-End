import React from 'react';


function Character(props) {
  return (
    <div >
    <h1> {props.character.bio.name}</h1>
    </div>
  );
}

export default Character;
