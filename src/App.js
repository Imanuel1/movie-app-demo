import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActorsPage from './pages/ActorsPage/ActorsPage';
import { HashRouter, Route, Switch } from 'react-router-dom';


function App() {
  return(
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/">Hello Actors</Route>
            <Route exact path="/actors"><ActorsPage/></Route>
            <Route path="/"></Route>
          </Switch>
        </HashRouter>
     </div>
  )
}

export default App;