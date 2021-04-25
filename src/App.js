import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActorsPage from './pages/ActorsPage/ActorsPage';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CustomNav from './components/CustomNav/CustomNav';


function App() {
  return(
      <div className="App">
        <CustomNav/>
        <HashRouter>
          <Switch>
            <Route exact path="/">Hello Actors</Route>
            <Route exact path="/actors"><ActorsPage/></Route>
            <Route path="/"><NotFoundPage/></Route>
          </Switch>
        </HashRouter>
     </div>
  )
}

export default App;