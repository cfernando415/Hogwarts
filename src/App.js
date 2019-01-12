import React, { Component } from "react";
import "./App.css";
import CharacterContainer from './Containers/CharacterContainer';
import Nav from './Components/Nav';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      casts: [],
      qResults: [],
      q: ""
    }

    this.searchHandler = this.searchHandler.bind(this);
  }

  componentDidMount(){
    fetch('http://localhost:3001/characters')
      .then(resp => resp.json())
      .then(json => this.setState({ casts: json, qResults: json }));
  }

  render() {
    return (
      <div className="app">
        <div className="topNav"><Nav q={this.state.q} searchHandler={this.searchHandler} /></div>
        <div><CharacterContainer casts={this.state.qResults} /></div>
      </div>
    );
  }

  searchHandler(q){
    const qResults = this.state.casts.filter(a => a.name.toLowerCase().includes(q.toLowerCase()));
    this.setState({ qResults: qResults, q: q });
  }
}

export default App;
