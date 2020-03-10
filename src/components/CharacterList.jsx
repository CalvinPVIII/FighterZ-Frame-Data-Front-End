import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import Navbar from "./Navbar"
function CharacterList(props){

  return (
    <div>
      <Header/>
      <Navbar/>
      {props.characterList.map((character)=>
        <Link to={'/character'} onClick={()=>{props.onCharacterSelect(character.id)}}>   <img src={character.character.bio.pictures[0]}/> </Link>
      )}
    </div>
  );

}

export default CharacterList;
