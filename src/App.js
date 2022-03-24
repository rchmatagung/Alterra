import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import AboutApp from './page/AboutApp';
import AboutAuthor from './page/AboutAuthor';
import Notfound from './page/NotFound';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About/About-App' component={AboutApp} />
          <Route path='/About/About-Author' component={AboutAuthor} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;