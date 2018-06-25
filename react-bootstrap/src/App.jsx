import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import News from './components/Life';
import Navbar from './components/CustomNavbar';
import Game from "./components/TicTacToe";

class App extends Component {
  render() {
    return (
      <Router> 
        <div>
          <Navbar/>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/life' component={News} />
          <Route path='/tictactoe' component={Game}/>
        </div>
      </Router>
    );
  }
}

export default App;
