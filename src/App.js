import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import {HashLink as Link} from 'react-router-hash-link';
import Login from './components/Login'
import './App.css'
import './components/Header'
import Home from './components/Home'
import Details from './components/Details'
const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}>

          </Route>

          <Route path="/home" element={<Home />}>

          </Route>

          <Route path="/details/:id" element={<Details />}>
           
          </Route>


        </Routes>
      </Router>
    </div>
  )
}

export default App