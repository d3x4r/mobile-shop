import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" render={() => <div>Home</div>} />
        <Route path="/phones" render={() => <div>Phones</div>} />
      </Switch>
    </>
  );
};

export default App;
