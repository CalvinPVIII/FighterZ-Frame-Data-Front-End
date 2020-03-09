import React from 'react';


function Character(props) {
  let accentColor = 'rgba(0, 0, 0,0)'
  if (props.character.character.bio.name === 'Android 21') {
    accentColor = '#A63AB0'
  }else if (props.character.character.bio.name === 'Android 16') {
    accentColor = '#387763'
  }else if (props.character.character.bio.name === 'Android 17') {
    accentColor = '#438388'
  }else if (props.character.character.bio.name === 'Android 18') {
    accentColor = '#4B79CC'
  }else if (props.character.character.bio.name === 'Bardock') {
    accentColor = '#436577'
  }else if (props.character.character.bio.name === 'Beerus') {
    accentColor = '#7669B4'
  }else if (props.character.character.bio.name === 'DBS Broly') {
    accentColor = '#2F7928'
  }else if (props.character.character.bio.name === 'DBZ Broly') {
    accentColor = '#1A795A'
  }else if (props.character.character.bio.name === 'Captain Ginyu') {
    accentColor = '#D45890'
  }else if (props.character.character.bio.name === 'Cell') {
    accentColor = '#5BA574'
  }else if (props.character.character.bio.name === 'Cooler') {
    accentColor = '#4A5EA3'
  }else if (props.character.character.bio.name === 'Frieza') {
    accentColor = '#B180E2'
  }else if (props.character.character.bio.name === 'Gogeta') {
    accentColor = '#324486'
  }else if (props.character.character.bio.name === 'Adult Gohan') {
    accentColor = '#5B768E'
  }else if (props.character.character.bio.name === 'Teen Gohan') {
    accentColor = '#C15669'
  }else if (props.character.character.bio.name === 'Goku') {
    accentColor = '#B14F5B'
  }else if (props.character.character.bio.name === 'Super Saiyan Goku') {
    accentColor = '#C97891'
  }else if (props.character.character.bio.name === 'Super Saiyan Blue Goku') {
    accentColor = '#7BCBE6'
  }else if (props.character.character.bio.name === 'GT Goku') {
    accentColor = '#7379C3'
  }else if (props.character.character.bio.name === 'Super Saiyan Rosé Goku Black') {
    accentColor = '#826BC8'
  }else if (props.character.character.bio.name === 'Gotenks') {
    accentColor = '#355795'
  }else if (props.character.character.bio.name === 'Hit') {
    accentColor = '#91D3DC'
  }else if (props.character.character.bio.name === 'Janemba') {
    accentColor = '#7B5CA8'
  }else if (props.character.character.bio.name === 'Jiren') {
    accentColor = '#E2252A'
  }else if (props.character.character.bio.name === 'Kid Buu') {
    accentColor = '#BD6ABE'
  }else if (props.character.character.bio.name === 'Kefla') {
    accentColor = '#C24344'
  }else if (props.character.character.bio.name === 'Krillin') {
    accentColor = '#FBFBCA'
  }else if (props.character.character.bio.name === 'Majin Buu') {
    accentColor = '#A14A9C'
  }else if (props.character.character.bio.name === 'Nappa') {
    accentColor = '#8D4B10'
  }else if (props.character.character.bio.name === 'Piccolo') {
    accentColor = '#37378D'
  }else if (props.character.character.bio.name === 'Tien Shinhan') {
    accentColor = '#E5F09B'
  }else if (props.character.character.bio.name === 'Trunks') {
    accentColor = '#A5BDFF'
  }else if (props.character.character.bio.name === 'Vegeta') {
    accentColor = '#6F73C2'
  }else if (props.character.character.bio.name === 'Super Saiyan Vegeta') {
    accentColor = '#6DA9DF'
  }else if (props.character.character.bio.name === 'Super Saiyan Blue Vegeta') {
    accentColor = '#7BCBE6'
  }else if (props.character.character.bio.name === 'Vegito') {
    accentColor = '#6C8CD4'
  }else if (props.character.character.bio.name === 'Videl') {
    accentColor = '#A13C9F'
  }else if (props.character.character.bio.name === 'Yamcha') {
    accentColor = '#DFDE9A'
  }else if (props.character.character.bio.name === 'Zamasu') {
    accentColor = '#8F74BA'
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
            text-shadow: 3px 3px ${accentColor}
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
        border-bottom: 1px solid black;
        background-color: ${accentColor};

      }
      .movesCard {
        width: 33vw;
        border: 1px solid black;
        background-color: white;
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
        background-color:

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
            width: 30vw;
            border: 1px solid black;
            margin-right: 5%;
            background-color: white;
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
            background-color:

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
          width: 30vw;
          border: 1px solid black;
          margin-right: 5%;
          background-color: white;
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
          <h2> {combo['position'].charAt(0).toUpperCase() + combo['position'].slice(1)}</h2>
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
      background-color: ${accentColor}

    }
    .combosCard {
      border: 1px solid black;
      width: 40vw;

      background-color: white;

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
