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
      <img className="backgroundImg" src='https://cdn.pixabay.com/photo/2013/07/13/11/47/curly-158671_960_720.png'/>
      <Header/>
      <Navbar/>
      <div style={characterList}>
      {props.characterList.map((character)=>
        <Link to={'/character'} onClick={()=>{props.onCharacterSelect(character.id)}}>   <img src={character.character.bio.pictures[0]}/> </Link>
      )}
      </div>
      <style jsx>{`
          .backgroundImg{
            opacity: 0.6;
            position: absolute;
            z-index: -1;
            width: 80%;
            height: 70%;
             transform: scaleX(-1);
             transform: rotate(180deg);
             display: block;
             margin-left: 20vw;;
             margin-right: auto;

          }
            `}</style>
    </div>
  );

}

export default CharacterList;
