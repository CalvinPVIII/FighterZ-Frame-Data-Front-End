import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
function CharacterList(props){

  return (
    <div>
      <Header/>
      {props.characterList.map((character)=>
        <Link to={'/character'} onClick={()=>{props.onCharacterSelect(character.id)}}>   <img src={character.character.bio.pictures[0]}/> </Link>
      )}
    </div>
  );

}

export default CharacterList;
