import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    //using react router
    <Router>
        <Switch>
          <Route path="/search">
              <SearchPage />
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
    </Router>
  
  );
}

export default App;
