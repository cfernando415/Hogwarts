import React from "react";
import CharacterCard from '../Components/CharacterCard';

export default class CharacterContainer extends React.Component {
  
  render() {
    const casts = this.props.casts.map((character, i) => <CharacterCard key={i} character={character} />);
    
    return (
      <div>
        <h1>Characters</h1>
        <ul>{casts}</ul>
      </div>);
  }
}
