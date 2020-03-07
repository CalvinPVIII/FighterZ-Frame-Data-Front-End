import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer'
import CharacterList from './components/CharacterList'
import Character from './components/Character'


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
      return <div>Loading...</div>;
      } else {
        return (
          <div >
            <Switch>
              <Route exact path='/' render={()=><CharacterList characterList={this.state.characterList} onCharacterSelect={this.handleSelectingCharacter} />} />
              <Route path='/character' render={()=><Character character={this.state.selectedCharacter} />} />
            </Switch>
          </div>
        );
      }
    }
  }

  export default App;
