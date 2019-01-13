import React from "react";

class UpdateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      house: this.props.character.house
    }

    this.changeHandler = this.changeHandler.bind(this);
  }
  render() {
    return (
      <div>
        <label htmlFor="house">Update House: </label>
        <select value={this.state.house} onChange={(e) => this.changeHandler(e.target.value)} name="house" id="house">
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="HufflePuff">HufflePuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
        </select>
        <button onClick={(e) => this.props.updateHandler(this.props.character, this.state.house)}>Update</button>
      </div>
    );
  }

  changeHandler(house){
    this.setState({ house })
  }
}

export default UpdateForm;
