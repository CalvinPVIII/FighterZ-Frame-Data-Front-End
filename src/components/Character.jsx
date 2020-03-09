import React from 'react';


function Character(props) {
  let accentColor = 'rgba(0, 0, 0,0)'
  if (props.character.character.bio.name === 'Android 21') {
    accentColor = 'rgba(224, 87, 255,.3)'
  }else if (props.character.character.bio.name === 'Android 16') {
    accentColor = 'rgba(0, 255, 94,.3)'
  }else if (props.character.character.bio.name === 'Android 17') {
    accentColor = 'rgba(0, 234, 255,.3)'
  }else if (props.character.character.bio.name === 'Android 18') {
    accentColor = 'rgba(59, 108, 255,.5)'
  }else if (props.character.character.bio.name === 'Bardock') {
    accentColor = 'rgba(0, 145, 126,.5)'
  }else if (props.character.character.bio.name === 'Beerus') {
    accentColor = 'rgba(160, 97, 255,.5)'
  }else if (props.character.character.bio.name === 'DBS Broly') {
    accentColor = 'rgba(59, 255, 85,.5)'
  }else if (props.character.character.bio.name === 'DBZ Broly') {
    accentColor = 'rgba(59, 255, 137,.4)'
  }else if (props.character.character.bio.name === 'Captain Ginyu') {
    accentColor = 'rgba(255, 59, 235,.3)'
  }else if (props.character.character.bio.name === 'Cell') {
    accentColor = 'rgba(59, 255, 147,.5)'
  }else if (props.character.character.bio.name === 'Cooler') {
    accentColor = 'rgba(104, 48, 255,.3)'
  }else if (props.character.character.bio.name === 'Frieza') {
    accentColor = 'rgba(160, 97, 255,.6)'
  }else if (props.character.character.bio.name === 'Gogeta') {
    accentColor = 'rgba(0, 81, 255,.5)'
  }else if (props.character.character.bio.name === 'Adult Gohan') {
    accentColor = 'rgba(43, 139, 255,.5)'
  }else if (props.character.character.bio.name === 'Teen Gohan') {
    accentColor = 'rgba(255, 38, 125,.3)'
  }else if (props.character.character.bio.name === 'Goku') {
    accentColor = 'rgba(255, 38, 125,.3)'
  }else if (props.character.character.bio.name === 'Super Saiyan Goku') {
    accentColor = 'rgba(255, 38, 175,.2)'
  }else if (props.character.character.bio.name === 'Super Saiyan Blue Goku') {
    accentColor = 'rgba(0, 213, 255,.5)'
  }else if (props.character.character.bio.name === 'GT Goku') {
    accentColor = 'rgba(0, 47, 255,.5)'
  }else if (props.character.character.bio.name === 'Super Saiyan Rosé Goku Black') {
    accentColor = 'rgba(25, 0, 255,.4)'
  }else if (props.character.character.bio.name === 'Gotenks') {
    accentColor = 'rgba(48, 105, 240,.5)'
  }else if (props.character.character.bio.name === 'Hit') {
    accentColor = 'rgba(48, 240, 211,.6)'
  }else if (props.character.character.bio.name === 'Janemba') {
    accentColor = 'rgba(90, 48, 240,.3)'
  }else if (props.character.character.bio.name === 'Jiren') {
    accentColor = 'rgba(242, 5, 5,.6)'
  }else if (props.character.character.bio.name === 'Kid Buu') {
    accentColor = 'rgba(166, 0, 212,.3)'
  }else if (props.character.character.bio.name === 'Kefla') {
    accentColor = 'rgba(250, 47, 47,.6)'
  }else if (props.character.character.bio.name === 'Krillin') {
    accentColor = 'rgba(252, 233, 83,.3)'
  }else if (props.character.character.bio.name === 'Majin Buu') {
    accentColor = 'rgba(166, 0, 212,.3)'
  }else if (props.character.character.bio.name === 'Nappa') {
    accentColor = 'rgba(217, 200, 72,.3)'
  }else if (props.character.character.bio.name === 'Piccolo') {
    accentColor = 'rgba(0, 38, 255,.4)'
  }else if (props.character.character.bio.name === 'Tien Shinhan') {
    accentColor = 'rgba(252, 233, 83,.3)'
  }else if (props.character.character.bio.name === 'Trunks') {
    accentColor = 'rgba(43, 139, 255,.5)'
  }else if (props.character.character.bio.name === 'Vegeta') {
    accentColor = 'rgba(3, 117, 255,.5)'
  }else if (props.character.character.bio.name === 'Super Saiyan Vegeta') {
    accentColor = 'rgba(3, 184, 255,.6)'
  }else if (props.character.character.bio.name === 'Super Saiyan Blue Vegeta') {
    accentColor = 'rgba(0, 213, 255,.5)'
  }else if (props.character.character.bio.name === 'Vegito') {
    accentColor = 'rgba(0, 170, 255,.6)'
  }else if (props.character.character.bio.name === 'Videl') {
    accentColor = 'rgba(72, 0, 255,.3)'
  }else if (props.character.character.bio.name === 'Yamcha') {
    accentColor = 'rgba(252, 233, 83,.3)'
  }else if (props.character.character.bio.name === 'Zamasu') {
    accentColor = 'rgba(166, 128, 255,.6)'
  }


const component = {
  backgroundColor: `${accentColor}`,
  height: '100%',
  width: '100%',
}


  console.log(props);
  return (
    <div >
      <div className='charProfile'>
        <h1 className="charName"> {props.character.character.bio.name}</h1>
        <img className="charImg"src={props.character.character.bio.pictures[3]}/>
      </div>
      <style jsx>{`
          .charProfile{

          }
          .charName {
            font-size: 800%;
            color: white;
            font-family: 'Neuton', serif;
            text-shadow: 3px 3px black
          }
          .charImg {
            float: right;
            margin-top: -20vh;
          }
            `}
      </style>
      <div className='characterComponent'>
        <div className='midPanel'>
          <h1 className="title">Moves</h1>
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
        background-color: #cc4c29;
        // border-top-left-radius: 60px;
        // border-top-right-radius: 60px
      }
      .movesCard {
        width: 33vw;
        border: 1px solid black;
        // border-radius: 60px;
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
      .movesData {
        background-color: ${accentColor};

      }
      `}</style>
    </div>
    <div className='rightPanel'>
        <h1 className="rightTitle">Assists</h1>
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
            background-color: #cc4c29;
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
          }
          .characterComponent {
            display: flex;
            flex-flow: column wrap;
            justify-content: space-between;
            height: 100vh
          }
          .leftPanel {
            max-width: 1228px;
            height: 100vh;
          }
          .assistRow {
            background-color: ${accentColor}

          }

          `}</style>

  </div>
    <h1 className="rightTitle">Supers</h1>
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
        background-color: #cc4c29;
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
          margin-right: 5%;
        }

        `}

  </style>
  <h1 className="title">BnB's</h1>
  <div className="combosCard">
    <div className='comboNotation'>
      {props.character.character.combos.map((combo)=>
        <div className='comboEntry'>
        <div className="comboRow">
          <div className="comboHeader">
          <h2> {combo['position']}</h2>
        </div>
          <h2 className='notation'> {combo['notation']}</h2>
          <div >
            <iframe className='video' src={combo['video']} frameborder="0"></iframe>
          </div>
        </div>
        </div>
      )}
    </div>
  </div>
  <style jsx>{`
    .video{
      height: 40vh;
      width: 40vw;
    }
    .comboEntry{
      margin-bottom: 1vh;
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
    }
    .combosCard {
      border: 1px solid black;
      width: 40vw;
      margin-left: -2vw

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
  </div>
</div>
    </div>
  );
}

export default Character;
