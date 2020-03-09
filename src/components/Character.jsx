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
          <h1> Move</h1>
          <h1> Startup</h1>
          <h1> Advantage</h1>
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
        border-radius: 60px;
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
          {props.character.character.assists.map((assist)=>
            <div className="assistRow">
              <h2 className='row'> {assist['TYPE']}</h2>
              <h2 className='row'> {assist['STARTUP']}</h2>
              <h2 className='row'> {assist['BLOCKSTUN']}</h2>
            </div>
          )}

      </div>
      <style jsx>{`
          .assistHeader {
            display: flex;
            justify-content: space-evenly;
            background-color: white;
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
            width: 30vw;
            border: 1px solid black;
            margin-right: 5%;
            height: 10%
          }
          .characterComponent {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
          }
          .characterImg {
            height: 100%;
            width: 25%
          }

          `}</style>

  </div>
  <div className="supersCard">
    <div className='supersHeader'>
      <h1> Move</h1>
      <h1> Startup</h1>
      <h1> Advantage</h1>
    </div>
    <div className='supersData'>
      {props.character.character.supers.map((move)=>
        <div className="assistRow">
          <h2 className='row'> {move['MOVE']}</h2>
          <h2 className='row'> {move['STARTUP']}</h2>
          <h2 className='row'> {move['ADVANTAGE']}</h2>
        </div>
      )}
    </div>
  </div>
  <style jsx>{`
      .supersHeader {
        display: flex;
        justify-content: space-evenly;
        background-color: white;
      }
      .supersRow {
          display: flex;
          justify-content: space-around;
          padding-left: 5%;
          border-bottom: 1px solid black;
        }
        .supersCard {
          width: 30vw;
          border: 1px solid black;
          margin-left: 63.3vw;
          height: 10%;
          margin-top: -205vh;
        }
        `}

  </style>
  <div className="combosCard">
    <div className="combosHeader">
      <h1>Combo</h1>
    </div>
    <div className='comboNotation'>
      {props.character.character.combos.map((combo)=>
        <div className="comboRow">
          <h2 className='row'> {combo['position']}</h2>
          <h2 className='row'> {combo['notation']}</h2>
          <div>
            <iframe src={combo['video']} frameborder="0" width="100%" height="100%" allowfullscreen ></iframe>
          </div>
        </div>
      )}
    </div>
  </div>
</div>
    </div>
  );
}

export default Character;
