import React from "react";
import House from "../Components/House";

export default class HouseContainer extends React.Component {

  render() {
    return <ul className="houseContainer">{this.props.houses.map((house, i) => <House key={i} house={house} casts={this.props.casts} updateHandler={this.props.updateHandler} />)}</ul>;
  }
}
