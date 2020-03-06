import React from 'react';
import { Link } from 'react-router-dom';

class Character extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      characterList: []
    };
  }



  componentDidMount() {
    fetch('http://localhost:3001/characters')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          characterList: result
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
            <div>
              {this.state.characterList.map((character)=>
              <Link to={'/character'}>   <img src={character.character.bio.pictures[0]}/> </Link>
              )}
            </div>
          );
        }
      }
    }

    export default Character;
