import React, { useState, useEffect } from 'react';
import Header from './Header'
import Navbar from "./Navbar"
import {Link} from 'react-router-dom'

function TierList(props) {
  console.log(props);
  
  return (
    <div >
      <img className="backgroundImg" src='https://www.onlygfx.com/wp-content/uploads/2018/03/grunge-spiral-8.png'/>
      <Header/>
      <Navbar/>
      <div className='sTier'>
      <h1>S tier:</h1>
        {props.tierList[0].tiers.s.map((character)=>
          <Link to={'/character'} onClick={()=>{props.onCharacterSelect(character.id)}}>   <img className="characterImg" src={character.character.bio.pictures[0]}/> </Link>
        )}
      </div>
      <div className='aTier'>
      <h1>A tier:</h1>
        {props.tierList[0].tiers.a.map((character)=>
          <Link to={'/character'} onClick={()=>{props.onCharacterSelect(character.id)}}>   <img className="characterImg" src={character.character.bio.pictures[0]}/> </Link>
        )}
      </div>
      <div className='bTier'>
      <h1>B tier:</h1>
        {props.tierList[0].tiers.b.map((character)=>
          <Link to={'/character'} onClick={()=>{props.onCharacterSelect(character.id)}}>   <img className="characterImg" src={character.character.bio.pictures[0]}/> </Link>
        )}
      </div>
      <div className='cTier'>
      <h1>C tier:</h1>
        {props.tierList[0].tiers.c.map((character)=>
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
          `}</style>
      </div>
    );
  }


      export default TierList;
