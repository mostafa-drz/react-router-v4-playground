import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route  exact path="/" component={Home} />
          <Route  path="/teams" component={Teams} />
          <Route  path="/players" component={Players} />
          <Route render={({ match }) => (<div>Couldn't find {window.location.href}</div>)} />
        </Switch>
      </div>
     </BrowserRouter>
    );
  }
}

export default App;
