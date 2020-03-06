import React from 'react';


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
                <img src={character.character.bio.pictures[0]}/>
              )}
            </div>
          );
        }
      }
    }

    export default Character;
