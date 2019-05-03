import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      world: ''
    }
  }
  // componentDidMount() {
  //   this.getContent();
  // }
  getContent() {
    fetch('/app')
      .then(ret => ret.json())
      .then(ret => this.setState({world: ret.OK}))
  }
  render() {
    return (
      <div className="App">
        {/* {this.state.world} */}
        <div className="message">
          W3id is under maintenance until May 10th to 11, please come back after.
        </div>
      </div>
    );
  }
}

export default App;
