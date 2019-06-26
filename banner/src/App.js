import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Banner from './components/Banner'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = '/' component = {Banner} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
