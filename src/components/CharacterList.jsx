import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import Navbar from "./Navbar"
import Footer from './Footer'
function CharacterList(props){
const characterList={
  marginTop: '4vh',
}
const [characterHover, onHoverCharacter] = useState(props.characterList[0].character.bio.pictures[2])
  return (
    <div className="characterListWrap">
      <img className="backgroundImg" src='https://www.onlygfx.com/wp-content/uploads/2018/03/grunge-spiral-8.png'/>
      <Header/>
      <Navbar/>
      <div style={characterList}>
      {props.characterList.map((character)=>
        <Link to={'/character'} onClick={()=>{props.onCharacterSelect(character.id)}}>   <img className="characterImg" src={character.character.bio.pictures[0]}/> </Link>
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
          <Footer className="footer"/>
    </div>
  );

}

export default CharacterList;
