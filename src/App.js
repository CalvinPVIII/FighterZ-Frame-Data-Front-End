import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList'
import Character from './components/Character'
import TierList from './components/TierList'
import Info from './components/Info'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      characterList: [],
      selectedCharacter: [],
      tierList: [],
    };
  }



componentDidMount() {
  fetch('http://localhost:3001/characters')
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        characterList: result,
        selectedCharacter: result[25]
      });
    },
    (error) => {
      console.log(error);
      this.setState({
        isLoaded: true,
        error
      });
    }
  ).then(
    fetch('https://fighterz-frame-data-api.herokuapp.com/tiers')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          tierList: result,
        });
      },
      (error) => {
        console.log(error);
        this.setState({
          isLoaded: true,
          tierList: error
        });
      }
    )
  )
}

render(){
  const { error, isLoaded, items } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return(
      <div>

      <h1>Summoning Shenron</h1>
      <style jsx>{`
          .backgroundImg{
            opacity: 0.6;
            position: absolute;
            z-index: -1;
            width: 90%;
            height: 70%;
             transform: rotate(1deg);
             display: block;
             margin-left: 9vw;;
             margin-right: auto;
             margin-top: -5vh;
          }
          .characterImg:hover{
            width: 10%;

          }
            `}</style>
          </div>
        )
      } else {
        console.log(this.state.characterList)
        return (
          <div >
            <Switch>
              <Route exact path='/' render={()=><CharacterList characterList={this.state.characterList}/>} />
              {this.state.characterList.map((character)=>
                <Route path={`/${character.character.bio.name.split(" ").join("")}`} render={(props)=>
                  <Character
                    name = {character.character.bio.name}
                    moves = {character.character.moves}
                    assists = {character.character.assists}
                    supers = {character.character.supers}
                    combos = {character.character.combos}
                    pictures = {character.character.bio.pictures}
                  />}
                />
              )}
              <Route path='/character' render={()=><Character character={this.state.selectedCharacter} />} />
              <Route path="/tierlist" render={()=><TierList onCharacterSelect={this.handleSelectingCharacter} characterList={this.state.characterList} tierList={this.state.tierList} />} />
              <Route path='/info' component={Info}/>
            </Switch>
          </div>
        );
      }
    }
  }

  export default App;
