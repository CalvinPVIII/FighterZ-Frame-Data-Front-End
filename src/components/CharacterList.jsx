import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import Navbar from "./Navbar"
import Footer from './Footer'


function CharacterList(props){
const [filteredCharacters, setFilteredCharactersList] = useState(props.characterList)
const [advancedSearchVisibile, setAdvancedSearchVisible] = useState(false)
const [moveFrameFilter, setMoveFrameFilter] = useState('')
const [selectedMoveFilter, setSelectedMoveFilter] = useState('5L')

function onMoveFilterSelect(e) {
  let newCharacterList = []
  setSelectedMoveFilter(e.target.value)
  let filter = e.target.value
  props.characterList.forEach((character)=>{
    character.character.moves.forEach((move)=>{
      if(move['MOVE'] === filter && moveFrameFilter === ''){
        newCharacterList.push(character)
      }else if(move['MOVE'] === filter && move['FIRST ACTIVE'] === moveFrameFilter + 'f'){
        newCharacterList.push(character)
      }
      
    })
  })
  setFilteredCharactersList(newCharacterList)
}

function onFrameFormChange(e){
  let newCharacterList = []
  setMoveFrameFilter(e.target.value)
  let filter = e.target.value
  if (filter === ""){
    newCharacterList = props.characterList
  }else{

    props.characterList.forEach((character)=>{
      character.character.moves.forEach((move)=>{
        if(move['MOVE'] === selectedMoveFilter && move['FIRST ACTIVE'] === filter + 'f'){
          newCharacterList.push(character)
        }
        
      })
    })
  }
  setFilteredCharactersList(newCharacterList)
} 


function onAdvancedSearchReset(){
  setFilteredCharactersList(props.characterList)
  setMoveFrameFilter("")
  setSelectedMoveFilter('5L')
}



let advancedSearchArea
if (advancedSearchVisibile === true){
  advancedSearchArea = (
    <>
    <p>Move</p>
    <select onChange={onMoveFilterSelect} value={selectedMoveFilter}>
      <option value='5L'>5L</option>
      <option value='5M'>5M</option>
      <option value='5H'>5H</option>
      <option value='2L'>2L</option>
      <option value='2M'>2M</option>
      <option value='2H'>2H</option>
      <option value='3H'>3H</option>
      
    </select>
    <p>Frames</p>
      <input type="number" value = {moveFrameFilter} onChange={onFrameFormChange}/>
      <p onClick={onAdvancedSearchReset}>Reset</p>
    </>
  )
}else{
  advancedSearchArea = (
    <>
    </>
    )

}

const characterList={
  marginTop: '4vh',
}


window.scrollTo(0, 0);
  return (
    <div className="characterListWrap">
      <img className="backgroundImg" src='https://www.onlygfx.com/wp-content/uploads/2018/03/grunge-spiral-8.png'/>
      <Header/>
      <Navbar/>
      <p className="advancedSearch" onClick={() => setAdvancedSearchVisible(advancedSearchVisibile => !advancedSearchVisibile)}>Advanced Search</p>
      {advancedSearchArea}
      <div style={characterList}>
      {filteredCharacters.map((character)=>
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
            position: fixed;
            margin-top: -43vh;
          }

          .advancedSearch{
            color: black;
            cursor: pointer;
            text-decoration: underline;
          }

            `}</style>
            
          <Footer className="footer"/>
    </div>
  );

}

export default CharacterList;