import React, { Component } from 'react'
import UpdateForm from '../Components/UpdateForm'

class Resident extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgClicked: false,
            houseClicked: false
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.clickHandler2 = this.clickHandler2.bind(this);
    }
    render(){
        return (
            <li>
                <img src={this.props.character.image2} onClick={this.clickHandler} alt={this.props.character.name} /><br/>
                {this.state.imgClicked ? <div>Name: {this.props.character.name}<br/>House: <a href="#" onClick={this.clickHandler2}>{this.props.character.house}</a><br/>Role: {this.props.character.role}<br/>Age: {this.props.character.age} </div>: null }
                {this.state.houseClicked ? <UpdateForm character={this.props.character} updateHandler={this.props.updateHandler} /> : null}
            </li>
        )
    }
    clickHandler(){
        this.setState({ imgClicked: !this.state.imgClicked })
    }

    clickHandler2(){
        this.setState({ houseClicked: !this.state.houseClicked })
    }
} 

export default Resident;