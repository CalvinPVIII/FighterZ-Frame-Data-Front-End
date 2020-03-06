import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import CharacterList from './components/CharacterList'
import Character from './components/Character'


function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' component={CharacterList}/>
          <Route path='/character' component={Character}/>
      </Switch>
    </div>
  );
}

export default App;
