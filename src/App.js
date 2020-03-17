import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList'
import Character from './components/Character'
import TierList from './components/TierList'
import Info from './components/Info'
import Header from './components/Header'
import Navbar from './components/Navbar'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      characterList: [],
      selectedCharacter: []
    };
    this.handleSelectingCharacter = this.handleSelectingCharacter.bind(this)
  }



componentDidMount() {
  fetch('http://localhost:3001/characters')
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        isLoaded: true,
        characterList: result,
        selectedCharacter: result[0]
      });
    },
    (error) => {
      console.log(error);
      this.setState({
        isLoaded: true,
        error
      });
    }
  )
}

handleSelectingCharacter(id){
  let newCharacter;
  this.state.characterList.map(function(character){
    if (character.id === id) {
      newCharacter = character
    }
  })
this.setState({selectedCharacter: newCharacter});
}
render(){
  const { error, isLoaded, items } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return(
      <div>
      <img className="backgroundImg" src='https://www.onlygfx.com/wp-content/uploads/2018/03/grunge-spiral-8.png'/>
      <Header/>
      <Navbar/>
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
        return (
          <div >
            <Switch>
              <Route exact path='/' render={()=><CharacterList characterList={this.state.characterList} onCharacterSelect={this.handleSelectingCharacter} />} />
              <Route path='/character' render={()=><Character character={this.state.selectedCharacter} />} />
              <Route path="/tierlist" render={()=><TierList onCharacterSelect={this.handleSelectingCharacter} characterList={this.state.characterList} />} />
              <Route path='/info' component={Info}/>
            </Switch>
          </div>
        );
      }
    }
  }

  export default App;
