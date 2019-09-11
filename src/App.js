import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navigation'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'
import Notes from './components/Notes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <div className="container p-4">
        <Route exact path="/" component={Notes}/>
        <Route path="/edit/:id" component={CreateNote}/>
        <Route path="/create" component={CreateNote}/>
        <Route path="/user" component={CreateUser}/></div>
      </Router>
    </div>
  );
}

export default App;
