// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
        <NavBar/> 
        <Routes>
        <Route exact path="/general" element={<News key="general" category="general" country="in"/>} />
        <Route exact path="/" element={<News key="general" category="general" country="in"/>} />
        {/* <Route exact path="/newsapp" element={<News key="general" category="general"/>} /> */}
        <Route exact path="/sports" element={<News key="sports" category="sports" country="in"/>} />
        <Route exact path="/science" element={<News key="science" category="science" country="in"/>} />
        <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" country="in"/>} />
        <Route exact path="/business" element={<News key="business" category="business" country="in"/>} />
        {/* <Route exact path="/business" element={<News key="business" category="business"}> */}
        <Route exact path="/technology" element={<News key="technology" category="technology" country="in"/>} />
        <Route exact path="/health" element={<News key="health" category="health" country="in"/>} />
</Routes>
        </Router>
      </div>
    )
  }
}


