import React, { Component } from "react";
import "./App.css";
import CharacterContainer from './Containers/CharacterContainer';
import Nav from './Components/Nav';
import CreateWizard from './Components/CreateForm'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      casts: [],
      qResults: [],
      q: "",
      newCast: []
    }

    this.searchHandler = this.searchHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount(){
    fetch('http://localhost:3001/characters')
      .then(resp => resp.json())
      .then(json => this.setState({ casts: json, qResults: json }));
  }

  componentDidUpdate(prevProps, prevState){
      if(prevState.newCast !== this.state.newCast){
        fetch('http://localhost:3001/characters/', { 
          method: 'POST',
          headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
          body: JSON.stringify(this.state.newCast)
        })
      }
  }

  render() {
    return (
      <div className="app">
        <CreateWizard submitHandler={this.submitHandler} />
        <Nav q={this.state.q} searchHandler={this.searchHandler} />
        <CharacterContainer casts={this.state.qResults} />
      </div>
    );
  }

  searchHandler(q){
    const qResults = this.state.casts.filter(a => a.name.toLowerCase().includes(q.toLowerCase()));
    this.setState({ qResults: qResults, q: q });
  }

  submitHandler(newCast){
    let casts = this.state.casts;
    casts.push(newCast);
    this.setState({ casts, newCast })
  }
}

export default App;
