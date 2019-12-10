import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import './App.css';
import Users from './components/users/Users';

class App extends Component{

  render () {
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
        <Users></Users>

        </div>
      </div>
    );
  }

}

export default App;
