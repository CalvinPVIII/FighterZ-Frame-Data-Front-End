import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
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

  handleSelectingCharacter(id){
    this.state.characterList.map(function(character){
      if (character.id === id) {
        this.setState({selectedCharacter: character});
      }
    }
  )
}


componentDidMount() {
  fetch('http://localhost:3001/characters')
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        isLoaded: true,
        characterList: result,
        selectedCharacter: result[0].character
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

render(){

  const { error, isLoaded, items } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
      } else {
        return (
          <div >
            <Header/>
            <Switch>
              <Route exact path='/' render={()=><CharacterList characterList={this.state.characterList} />} />
              <Route path='/character' render={()=><Character character={this.state.selectedCharacter} />} />
            </Switch>
          </div>
        );
      }
    }
  }

  export default App;
