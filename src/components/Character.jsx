import React from 'react';


function Character(props) {
  console.log(props);
  return (
    <div>
      <h1> {props.character.character.bio.name}</h1>
      <div className='characterComponent'>
      <img className="characterImg"src={props.character.character.bio.pictures[3]}/>
      <div className="movesCard">
        <div className="movesHeader">
          <h1 className="movesH2"> Move</h1>
          <h1 className="movesH2"> Startup</h1>
          <h1 className="movesH2"> Advantage</h1>
        </div>
        <div className="movesData">
          {props.character.character.moves.map((move)=>
            <div className="tableRow">
              <h2 className="moveRow"> {move['MOVE']}</h2>
              <h2 className="startupRow"> {move['FIRST ACTIVE']}</h2>
              <h2 className="advantageRow"> {move['ADVANTAGE']}</h2>
            </div>
            )}
  </div>
  </div>
  <style jsx>{`
      .movesHeader {
        display: flex;
        justify-content: space-evenly;
        border-bottom: 1px solid blue;
      }
      .movesCard {
        width: 33vw;
        border: 1px solid black;
      }
      .moveRow {
        width: 30%;

      }
      .startupRow {
        width: 30%;

      }
      .advantageRow {
        width: 30%;

      }
      .characterImg {
        float: left;
      }
      .tableRow {
        display: flex;
        justify-content: space-around;
        padding-left: 5%;
        border-bottom: 1px solid black;


      }
      `}</style>
    <div className='assistCard'>
      <div className='assistHeader'>
        <h1 className="assistH2"> Type</h1>
        <h1 className="assistH2"> Startup</h1>
        <h1 className="assistH2"> Blockstun</h1>
      </div>
      <div className="assistData">
        <div className="assistType">
          {props.character.character.assists.map((assist)=>
            <h2> {assist['TYPE']}</h2>
          )}
        </div>
        <div className="assistStartup">
          {props.character.character.assists.map((assist)=>
            <h2> {assist['STARTUP']}</h2>
          )}
        </div>
      </div>
      <style jsx>{`
          .assistHeader {
            display: flex;
            justifyContent: space-evenly;
            background-color: white;
          }
          .assistH2 {
            padding-right: 1vw
          }
          .assistType{
            border-left: 1px solid black;
            border-right: 1px solid black;
          }
          .assistCard {
            width: 10%
          }
          .characterComponent {
            display: flex;
            flex-flow: row wrap
          }
          .characterImg {
            height: 100%;
            width: 25%
          }

          `}</style>

  </div>
</div>
    </div>
  );
}

export default Character;
