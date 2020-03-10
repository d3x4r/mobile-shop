import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Phones from '../pages/Phones';
import './App.css';

const routes = (
  <Switch>
    <Route path="/phones">
      <Phones />
    </Route>
    <Route path="/" render={() => <div>Home</div>} />
  </Switch>
);

const App = () => {
  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-3">SideBar</div>
          <div className="col-md-9">{routes}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
