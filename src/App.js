import React, { Component } from "react";
import "./App.css";
import CharacterContainer from './Containers/CharacterContainer';
import Nav from './Components/Nav';
import CreateWizard from './Components/CreateForm';
import HouseContainer from './Containers/HouseContainer';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      casts: [],
      houses: [],
      qResults: [],
      q: "",
      newCast: [],
      updateWizard: {}
    }

    this.searchHandler = this.searchHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }

  componentDidMount(){
    fetch('http://localhost:3001/characters')
      .then(resp => resp.json())
      .then(json => this.setState({ casts: json, qResults: json }));
    
    fetch('http://localhost:3001/houses')
      .then(resp => resp.json())
      .then(json => this.setState({ houses: json }));
  }

  componentDidUpdate(prevProps, prevState){
      if(prevState.newCast !== this.state.newCast){
        fetch('http://localhost:3001/characters/', { 
          method: 'POST',
          headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
          body: JSON.stringify(this.state.newCast)
        })
      }

      if(prevState.updateWizard !== this.state.updateWizard){
        fetch(`http://localhost:3001/characters/${this.state.updateWizard.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ house: this.state.updateWizard.house })
        });
      }
  }

  render() {
    return (
      <div className="app">
        <CreateWizard submitHandler={this.submitHandler} />
        <Nav q={this.state.q} searchHandler={this.searchHandler} />
        <CharacterContainer casts={this.state.qResults} updateHandler={this.updateHandler}/>
        <HouseContainer houses={this.state.houses} casts={this.state.casts} updateHandler={this.updateHandler} />
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

  updateHandler(character, house){
    const wizard = this.state.casts.find(a => a.id === character.id);
    wizard.house = house;
    let newCasts = this.state.casts.filter(a => a.id !== wizard.id);
    newCasts.push(wizard);
    newCasts = newCasts.sort((a, b) => a.id > b.id ? 1 : -1);
    this.setState({ casts: newCasts, qResults: newCasts, updateWizard: wizard });
  }
}

export default App;
