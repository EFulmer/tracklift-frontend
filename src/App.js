import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Workout from './components/Workout.jsx'
import Lift from './components/Lift.jsx'
import LiftSet from './components/LiftSet.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Tracklift Beta!</h2>
        </div>
        <Workout />
      </div>
    );
  }
}

export default App;
