import React, { Component } from 'react'

class CreateWizard extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            age: "",
            house: "",
            role: "",
            image1: "",
            image2: ""
        };

        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    render(){
        return (
            <div className="form">
                <h2>Create Wizard</h2>
                <form onSubmit={this.submitHandler}>
                    <label>Name: </label><input name="name" type="text" onChange={(e) => this.changeHandler(e.target)} value={this.state.name} /><br/>
                    <label>Age: </label><input name="age" type="text" onChange={(e) => this.changeHandler(e.target)} value={this.state.age}  /><br/>
                    <label>House: </label><input name="house" type="text" onChange={(e) => this.changeHandler(e.target)} value={this.state.house}  /><br/>
                    <label>Role: </label><input name="role" type="text" onChange={(e) => this.changeHandler(e.target)} value={this.state.role}  /><br/>
                    <label>Image 1: </label><input name="image1" type="text" onChange={(e) => this.changeHandler(e.target)} value={this.state.image1}  /><br/>
                    <label>Image 2: </label><input name="image2" type="text" onChange={(e) => this.changeHandler(e.target)} value={this.state.image2}  /><br/>
                    <button>Abra ca dabra!</button>
                </form>
            </div>
        );
    }

    changeHandler(arg){
        switch (arg.name) {
            case "name":
                this.setState({ name: arg.value });
                break;
            case "age":
                this.setState({ age: arg.value });
                break;
            case "house":
                this.setState({ house: arg.value });
                break;
            case "role":
                this.setState({ role: arg.value });
                break;
            case "image1":
                this.setState({ image1: arg.value });
                break;
            case "image2":
                this.setState({ image2: arg.value });
                break;
            default:
        }
    }

    submitHandler(e){
        e.preventDefault();
        this.props.submitHandler(this.state)
        this.setState({ name: "", age: "", house: "", role: "", image1: "", image2: ""})
        e.target.reset();

    }
}

export default CreateWizard;