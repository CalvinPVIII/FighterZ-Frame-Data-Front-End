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
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
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
    <ul>
     <h1> {this.state.characterList[1].character.bio.name} </h1>
    </ul>
  );
}
}
}

export default Character;
