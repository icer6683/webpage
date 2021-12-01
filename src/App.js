import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages';
import ContactMePage from './Pages/contactme';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contactme" component={ContactMePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
