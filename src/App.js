import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './components/Form';
import List from './components/List';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        firstName: '',
        lastName: '',
        age: ''
      },
      ppl: []
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.savePerson = this.savePerson.bind(this);
  }

  changeHandler(e) {
    let person = this.state.person;
    person[e.target.name] = e.target.value;
    this.setState({person});
  }

  savePerson() {
    let ppl = this.state.ppl;
    ppl.push(Object.assign({}, this.state.person));
    this.setState({ppl}, function() {
      this.clearForm();
    });
  }

  clearForm() {
    let person = this.state.person;
    Object.keys(person).forEach(key => {
      person[key] = ''
    })
    this.setState({person});
  }

  render() {
    return (
      <div className="App">
        <Form save={this.savePerson} changeHandler={this.changeHandler} person={this.state.person} />
        <br />
        <List ppl={this.state.ppl} />
      </div>
    );
  }
}

export default App;
