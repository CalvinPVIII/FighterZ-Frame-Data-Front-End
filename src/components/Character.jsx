import React, {useState, useEffect} from 'react';
import nimbus from "../images/nimbus.gif"
import {Link} from 'react-router-dom'
import ReactAnime from 'react-animejs'
import ParticleEffectButton from 'react-particle-effect-button'

function Character(props) {

  const [animationState, setAnimationState] = useState(true)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [selectedMove, setSelectedMove] = useState('')
  const [moreMoveInfoVisibility, setMoreMoveInfoVisibility] = useState(false)

  function onTitleClick(card){
    let element = document.getElementsByClassName(card)
    if (card === 'combosCard'){
      if (!element[0].classList.value.split(' ').includes('openCard') && !element[1].classList.value.split(' ').includes('openCard') ){
        element[0].classList.remove('closedCard')
        element[0].classList.add('openCard')
        element[1].classList.remove('closedCard')
        element[1].classList.add('openCard')
      }else{
        element[0].classList.add('closedCard')
        element[0].classList.remove('openCard')
        element[1].classList.add('closedCard')
        element[1].classList.remove('openCard')
      }
    }
    if (!element[0].classList.value.split(' ').includes('openCard')){
      element[0].classList.remove('closedCard')
      element[0].classList.add('openCard')
    }else{
      element[0].classList.add('closedCard')
      element[0].classList.remove('openCard')
    }

    
  }

  function onMoveClick(move){
    let moveArray = Object.entries(move)
    setSelectedMove(moveArray)
    setMoreMoveInfoVisibility(true)
    let page = document.getElementsByClassName('clickableCards')[0]
    page.classList.add("hidden")

  }

  function onExpandedMoveClose(){
    setMoreMoveInfoVisibility(false)
    let page = document.getElementsByClassName('clickableCards')[0]
    page.classList.remove("hidden")
  }

  function onVideoClick(index){
    let video = document.getElementById(index)

    if (!video.classList.value.split(' ').includes('videoTransitionOpen')) {
      video.classList.add('videoTransitionOpen')
      video.classList.remove('videoTransitionClose');
      let textDiv = document.getElementById(index + ' div')
      let previousText = document.getElementById(index + ' text')
      let p = document.createElement('p');
      p.setAttribute('id', `${index}` + ' text')
      let newText = document.createTextNode("Click to hide")
      p.appendChild(newText)
      textDiv.replaceChild(p, previousText)
    }else {
      video.classList.remove('videoTransitionOpen');
      video.classList.add('videoTransitionClose')
      let textDiv = document.getElementById(index + ' div')
      let previousText = document.getElementById(index + ' text')
      let p = document.createElement('p');
      p.setAttribute('id', `${index}` + ' text')
      let newText = document.createTextNode("Click to expand")
      p.appendChild(newText)
      textDiv.replaceChild(p, previousText)
    }
  }

  let accentColor = 'rgba(0, 0, 0,0)';

  let characterImgDiv = (
    <div className="charImg"> 
      <img id="charImg" src={props.pictures[3]}/>
    </div>
  )

  if (props.name === 'Android 21') {
    accentColor = '#A63AB0'
  }else if (props.name === 'Android 16') {
    accentColor = '#387763'
  }else if (props.name === 'Android 17') {
    accentColor = '#438388'
  }else if (props.name === 'Android 18') {
    accentColor = '#4B79CC'
  }else if (props.name === 'Bardock') {
    accentColor = '#436577'
  }else if (props.name === 'Beerus') {
    accentColor = '#7669B4'
  }else if (props.name === 'DBS Broly') {
    accentColor = '#2F7928'
  }else if (props.name === 'DBZ Broly') {
    accentColor = '#1A795A'
  }else if (props.name === 'Captain Ginyu') {
    accentColor = '#D45890'
  }else if (props.name === 'Cell') {
    accentColor = '#5BA574'
  }else if (props.name === 'Cooler') {
    accentColor = '#4A5EA3'
  }else if (props.name === 'Frieza') {
    accentColor = '#B180E2'
  }else if (props.name === 'Gogeta') {
    accentColor = '#324486'
  }else if (props.name === 'Adult Gohan') {
    accentColor = '#5B768E'
  }else if (props.name === 'Teen Gohan') {
    accentColor = '#C15669'
  }else if (props.name === 'Goku') {
    accentColor = '#B14F5B'
  }else if (props.name === 'Super Saiyan Goku') {
    accentColor = '#C97891'
  }else if (props.name === 'Super Saiyan Blue Goku') {
    accentColor = '#7BCBE6'
  }else if (props.name === 'GT Goku') {
    accentColor = '#7379C3'
  }else if (props.name === 'Super Saiyan Rosé Goku Black') {
    accentColor = '#826BC8'
  }else if (props.name === 'Gotenks') {
    accentColor = '#355795'
  }else if (props.name === 'Hit') {
    accentColor = '#91D3DC'
  }else if (props.name === 'Janemba') {
    accentColor = '#7B5CA8'
    characterImgDiv = (
      <div className="charImg">
          <ParticleEffectButton
            hidden={animationState}
            color='#f24'
            type='rectangle'
            direction="right"
            size={10}
            particlesAmountCoefficient={10}
            speed={5}
            oscillationCoefficient={100}
          >
          <img id="charImg" src={props.pictures[3]}/>
          </ParticleEffectButton>
        </div>
    )
    setTimeout(function(){setAnimationState(false)}, 1000)
  }else if (props.name === 'Jiren') {
    accentColor = '#E2252A'
  }else if (props.name === 'Kid Buu') {
    accentColor = '#BD6ABE'
  }else if (props.name === 'Kefla') {
    accentColor = '#C24344'
  }else if (props.name === 'Krillin') {
    accentColor = '#FBFBCA'
  }else if (props.name === 'Majin Buu') {
    accentColor = '#A14A9C'
  }else if (props.name === 'Nappa') {
    accentColor = '#8D4B10'
  }else if (props.name === 'Piccolo') {
    accentColor = '#37378D'
  }else if (props.name === 'Tien Shinhan') {
    accentColor = '#E5F09B'
  }else if (props.name === 'Trunks') {
    accentColor = '#A5BDFF'
  }else if (props.name === 'Vegeta') {
    accentColor = '#6F73C2'
  }else if (props.name === 'Super Saiyan Vegeta') {
    accentColor = '#6DA9DF'
  }else if (props.name === 'Super Saiyan Blue Vegeta') {
    accentColor = '#7BCBE6'
  }else if (props.name === 'Vegito') {
    accentColor = '#6C8CD4'
  }else if (props.name === 'Videl') {
    accentColor = '#A13C9F'
  }else if (props.name === 'Yamcha') {
    accentColor = '#DFDE9A'
  }else if (props.name === 'Zamasu') {
    accentColor = '#8F74BA'
  }



  let moreMovePanel
  if (moreMoveInfoVisibility && selectedMove){
     moreMovePanel = (
      <>
        <div className="selectedMoveCard">
          <div className="selectedMoveCardHeader" onClick={()=> onExpandedMoveClose()}>
            <p className='placeHolder'></p>
            <p className="expandedInfoTitle">Expanded Info</p> 
            <p className="expandedInfoClose">Close</p>
            
          </div>
          {selectedMove.map((move)=>
            <div className="selectedMoveRow">{move[0]}: {move[1]}</div>
          )}
        </div>
        <style jsx>{`
          .selectedMoveCard{
            display: flex;
            flex-flow: column wrap;
            width: 25vw;
            justifY-content: flex-end;
            border: 1px solid black;
            background-color: white;
          }
          .selectedMoveCardInfo{
            
          }
          .selectedMoveCardHeader{
            display: flex;
            flex-direction; row;
            justify-content: space-between;
            border-bottom: 1px solid black;
            background-color: ${accentColor};
            font-weight: bold;
            font-size: 2vh;
            height: 5vh;
          }
          .selectedMoveRow{
            text-align: center;
            border-bottom: 1px solid black;
            font-size: 16px
          }

          .expandedInfoTitle{
            padding-left: 2vw;
          }
          
          .expandedInfoClose{
            padding-right: 1vw;
          }

          .expandedInfoClose:hover{
            cursor: pointer;

          }
        `}</style>
      </>
    
    )
 
  }

  return (
    <div className="characterWrap">

      <div className='charProfile'>
        {characterImgDiv}
      </div>
      <style jsx>{`
          .charProfile {
            
          }
          .charName {
            font-size: 800%;
            color: white;
            font-family: 'Neuton', serif;
            text-shadow: 3px 3px black;
          }
          .charImg {
            float: left;
            
            
            z-index: -1; 
           
            position: relative;
          
          }
          `}
        </style>
        <div className="pageContent">
        <div className="charName">
          <h4>{props.name}</h4>
        </div>
        <div className="moreMoveInfo">
          {moreMovePanel}
        </div>
        <div className = 'clickableCards'>
          <h2 className='titles'  onClick={() => onTitleClick("movesCard")}>Moves</h2>
          <div className="movesCard closedCard" >
              <div className="movesHeader">
                <h1> Move</h1>
                <h1> Startup</h1>
                <h1> Advantage</h1>
                <h1> Guard</h1>
              </div>
              <div className="movesData">
                {props.moves.map((move, index=0)=>
                  <div className="tableRow" onClick={()=> onMoveClick(move)}>
                    <h2 className="moveRow"> {move['MOVE']}</h2>
                    <h2 className="startupRow"> {move['FIRST ACTIVE']}</h2>
                    <h2 className="advantageRow"> {move['ADVANTAGE']}</h2>
                    <h2 className="typeRow"> {move['GUARD']}</h2>
                  </div>
                )}
              </div>
            </div>
          <h2 className='titles' onClick={()=> onTitleClick('assistCard')}>Assists</h2>
          <div className='assistCard closedCard'>
                <div className='assistHeader'>
                  <h1 className="assistH2"> Type</h1>
                  <h1 className="assistH2"> Startup</h1>
                  <h1 className="assistH2"> Blockstun</h1>
                </div>
                <div className="assistData">
                  {props.assists.map((assist)=>
                    <div className="assistRow">
                      <h2 className='row'> {assist['TYPE']}</h2>
                      <h2 className='row'> {assist['STARTUP']}</h2>
                      <h2 className='row'> {assist['BLOCKSTUN']}</h2>
                    </div>
                  )}

                </div>
                </div>
          <h2 className='titles' onClick={()=> onTitleClick('supersCard')}>Supers</h2>
          <div className="supersCard closedCard">
                  <div className='supersHeader'>
                    <h1> Move</h1>
                    <h1> Startup</h1>
                    <h1> Advantage</h1>
                  </div>
                  <div className='supersData'>
                    {props.supers.map((move)=>
                      <div className="assistRow">
                        <h2 className='row'> {move['MOVE']}</h2>
                        <h2 className='row'> {move['STARTUP']}</h2>
                        <h2 className='row'> {move['ADVANTAGE']}</h2>
                      </div>
                    )}
                  </div>
                </div>
          <h2 className="titles" onClick={()=> onTitleClick('bnbsCard')}>BnB's</h2>
          <div className="bnbsCard closedCard">
                  {props.combos.map((combo, index)=>
                    <div className="combosCard" onClick={()=>onVideoClick(index)}>
                      <div className='comboNotation'>
                        <div className='comboEntry'>
                          <div className="comboRow">
                            <div className="comboHeader">
                              <h2> {combo['position'].charAt(0).toUpperCase() + combo['position'].slice(1)}</h2>
                            </div>
                            <h2 className='notation'> {combo['notation']}</h2>
                            <div >
                              <iframe className='video' src={combo['video']} frameborder="0" id={index}></iframe>
                              <div id={index + ' div'}>
                                <p id={index + ' text'}>Click to expand</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  </div>
        </div>
        </div>
        <style jsx>{`
        .pageContent{
          margin-left: 50vw;
          display: block;
          z-index: 1;
         }
        .clickableCards{
          display: flex;
          justify-content: flex-end;
          text-align: center;
          flex-flow: column;
          max-width: 300px;
        }

        .titles {
          border: 1px solid black;
          font-size: 30px;
          background-color: ${accentColor};
          width: 33vw;

        }
        .titles:hover {
          cursor: pointer;
        }
        .movesData:hover {
          cursor: pointer;
        }
        `}</style>







       
            
            
            <style jsx>{`
                
                .movesHeader {
                  display: flex;
                  justify-content: space-evenly;
                  border-bottom: 1px solid black;
                  background-color: ${accentColor};

                }
                .movesCard {
                  width: 33vw;
                  border: 1px solid black;
                  background-color: white;
                  box-shadow: 10px 10px;
                  min-width: 500px;
                  max-width: 33vw;
                }
                .openCard{

                }
                .moreMoveInfo{
                  

                }

                .closedCard{
                  display: none;
                }
                .moveRow {
                  width: 25%;

                }
                .startupRow {
                  width: 25%;

                }
                .advantageRow {
                  width: 25%;

                }
                .typeRow {
                  padding-left: .5vw;
                }
                .tableRow {
                  display: flex;
                  justify-content: space-around;
                  padding-left: 5%;
                  border-bottom: 1px solid black;


                }
                .movesData {
                  background-color:

                }
                `}</style>
                
            
              
                <style jsx>{`
                    .assistHeader {
                      display: flex;
                      justify-content: space-evenly;
                      background-color: ${accentColor};
                      border-bottom: 1px solid black;
                      
                    }
                    .row {
                      width: 33%;
                    }
                    .assistType{
                      border-left: 1px solid black;
                      border-right: 1px solid black;
                    }
                    .assistRow {
                      display: flex;
                      justify-content: space-around;
                      padding-left: 5%;
                      border-bottom: 1px solid black;
                    }
                    .assistCard {
                      width: 33vw;
                      border: 1px solid black;
                      margin-right: 5%;
                      background-color: white;
                      box-shadow: 10px 10px;
                      min-width: 500px;
                      max-width: 33vw;
                    }
                    
                    .leftPanel {
                      max-width: 1228px;
                      height: 100vh;
                    }
                    .assistRow {
                      background-color:

                    }

                    `}</style>
                <style jsx>{`
                    .supersHeader {
                      display: flex;
                      justify-content: space-evenly;
                      background-color: ${accentColor};
                      border-bottom: 1px solid black;
                    }
                    .supersRow {
                      display: flex;
                      justify-content: space-around;
                      padding-left: 5%;
                      border-bottom: 1px solid black;
                    }
                    .supersCard {
                      width: 33vw;
                      border: 1px solid black;
                      margin-right: 5%;
                      background-color: white;
                      box-shadow: 10px 10px;
                      min-width: 500px;
                      
                    }

                    `}

                  </style>
                  
                  <style jsx>{`
                      .video{
                        height: 0vh;
                        width: 0vw;
                      }
                      .comboEntry{
                        margin-bottom: 3vh
                      }
                      .notation {
                        padding: 1%;
                      }
                      .rightPanel {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        margin-left: 2vw;
                      }
                      .comboHeader {
                        border-top: 1px solid black;
                        border-bottom: 1px solid black;
                        text-align: center;
                        background-color: ${accentColor}

                      }
                      .combosCard {
                        border: 1px solid black;
                        width: 33vw;
                        box-shadow: 10px 10px;
                        background-color: white;
                        margin-bottom: 2vh;
                        min-width: 500px;
                        max-width: 40vw;
                      }

                      .combosCard:hover {
                        cursor: pointer;
                      }
                      .videoTransitionOpen{
                        width: 40vw;
                        height: 40vh;
                        animation: transition-open 2s 1;
                      }
                      .videoTransitionClose {
                        width: 0vw;
                        height: 0vh;
                        animation: transition-close 2s 1;
                      }

                      @keyframes transition-open {
                        0% { width: 0vw; height: 0vh; }
                        100% { width: 40vw; height 40vh; }
                      }

                      @keyframes transition-close {
                        0% { width: 40vw; height: 40vh; }
                        100% { width: 00vw; height 0vh; }
                      }

                      .comboRow {
                        text-align: center
                      }
                      .title{
                        text-align: center
                      }
                      .rightTitle {
                        text-align: center;
                        margin-right: 10vw;
                      }
                      `}</style>
                  <div className="homeButton">
                    <Link to='/'> <img src={nimbus} className="homeImg"/><p className='homeText'>Home</p></Link>
                  </div>
                  <style jsx>{`
                      .homeButton{
                        display: flex;
                        justify-content: center;
                        position: fixed;
                        bottom: 0;
                        right: 0;

                      }
                      .homeImg{
                        bottom: 0;
                        right: 0;
                        height: 14vh;
                        width: 7vw;
                        position: fixed;
                        z-index: -1;
                      }
                      .homeText, .homeText:visited{
                        color: white;

                        text-shadow: 3px 3px black;
                        position: relative;
                        z-index: 1;
                        margin-right: 2vw;
                        font-size: 3vh;
                      }
                      a{
                        text-decoration: none;
                      }
                      .hidden{
                        display: none;
                      }
                      `}</style>
                  </div>

                
              );
            }

            export default Character;
