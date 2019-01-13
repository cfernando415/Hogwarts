import React from "react";
import Residents from './Residents';

const House = props => {
  return (
    <div>
      <h1>{props.house}</h1>
      <Residents casts={props.casts} house={props.house} updateHandler={props.updateHandler} />
    </div>
    );
};

export default House;
