import React, { Component } from "react";
import "./App.css";
import CharacterContainer from './Containers/CharacterContainer'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      casts: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:3001/characters')
      .then(resp => resp.json())
      .then(json => this.setState({ casts: json }));
  }
  render() {
    return (
      <div className="app">
        <div><CharacterContainer casts={this.state.casts} /></div>
      </div>
    );
  }
}

export default App;
