import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import Navbar from "./Navbar"
import Footer from './Footer'


function CharacterList(props){
const characterList={
  marginTop: '4vh',
}

let filteredCharacters = [];
props.characterList.forEach((character)=>{
  character.character.moves.forEach((move)=>{
    if(move['MOVE'] === '5L' && move['FIRST ACTIVE'] === '6f'){
      filteredCharacters.push(character)
    }

  })
})
window.scrollTo(0, 0);
  return (
    <div className="characterListWrap">
      <img className="backgroundImg" src='https://www.onlygfx.com/wp-content/uploads/2018/03/grunge-spiral-8.png'/>
      <Header/>
      <Navbar/>
      <div style={characterList}>
      {props.characterList.map((character)=>
        <Link to={`/${character.character.bio.name.split(" ").join("")}`}>   <img className="characterImg" src={character.character.bio.pictures[0]}/> </Link>
      )}
      </div>
      <style jsx>{`
          .backgroundImg{
            opacity: 0.6;
            position: absolute;
            z-index: -1;
            width: 90%;
            height: 70%;
             transform: rotate(1deg);
             display: block;
             margin-left: 8vw;;
             margin-top: -5vh;
          }
          .characterImg:hover{
            width: 9%;

          }



          .characterHoverImage{
            position: fixed;;
            margin-top: -43vh;
          }



            `}</style>
         {filteredCharacters.map((character)=>
             <p>{character.character.bio.name}</p>
          )}
          <Footer className="footer"/>
    </div>
  );

}

export default CharacterList;