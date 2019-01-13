import React from "react";
import UpdateForm from '../Components/UpdateForm';

class CharacterCard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      clicked: false
    }
  }
  render() {
    return (
      <li>
        <img src={this.props.character.image1} alt={this.props.character.name}/><br/>
        Name: {this.props.character.name}<br/>
        House: <a href="#" onClick={this.clickHandler.bind(this)}>{this.props.character.house}</a><br/>
        {this.state.clicked ? <UpdateForm character={this.props.character} updateHandler={this.props.updateHandler} /> : null}
      </li>
    );
  }
  
  clickHandler(){
    this.setState({ clicked: !this.state.clicked });
  }
}

export default CharacterCard;
