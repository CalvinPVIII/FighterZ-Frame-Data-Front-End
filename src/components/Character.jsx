import React from 'react';


function Character(props) {
  console.log(props);
  return (
    <div >
      <img src={props.character.character.bio.pictures[3]}/>
    <h1> {props.character.character.bio.name}</h1>
    {props.character.character.moves.map((move)=>
      <div>
      <h1> {move['MOVE']}</h1>
      <h2>{move['FIRST ACTIVE']}</h2>
      <h2>{move['ADVANTAGE']}</h2>
      </div>
    )}
    {props.character.character.assists.map((assist)=>
      <div>
      <h1> {assist['TYPE']}</h1>
      <h2>{assist['STARTUP']}</h2>
      <h2>{assist['BLOCKSTUN']}</h2>
      </div>
    )}
    </div>
  );
}

export default Character;
