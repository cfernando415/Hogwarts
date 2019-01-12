import React from "react";

class CharacterCard extends React.Component {
  render() {
    return (
      <li>
        <img src={this.props.character.image1} alt={this.props.character.name}/><br/>
        Name: {this.props.character.name}<br/>
        House: {this.props.character.house}<br/>
      </li>
    );
  }
}

export default CharacterCard;
