import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import Navbar from "./Navbar"
function CharacterList(props){
const characterList={
  marginTop: '4vh',
}
  return (
    <div className="characterListWrap">
      <Header/>
      <Navbar/>
      <div style={characterList}>
      {props.characterList.map((character)=>
        <Link to={'/character'} onClick={()=>{props.onCharacterSelect(character.id)}}>   <img src={character.character.bio.pictures[0]}/> </Link>
      )}
      </div>
      <style jsx>{`
          .characterListWrap:before{
            content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    // top: -50%;
    // left: -50%;
    z-index: -1;

    -webkit-transform: rotate(160deg);
    -moz-transform: rotate(160deg);
    -ms-transform: rotate(160deg);
    -o-transform: rotate(160deg);
    transform: rotate(160deg);
            background-image: url('https://cdn.pixabay.com/photo/2013/07/13/11/47/curly-158671_960_720.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;

          }
            `}</style>
    </div>
  );

}

export default CharacterList;
