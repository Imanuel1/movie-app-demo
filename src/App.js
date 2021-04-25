import React, { useState ,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActorsPage from './pages/ActorsPage/ActorsPage';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CustomNav from './components/CustomNav/CustomNav';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return(
      <div className="App">
        <HashRouter>
        <CustomNav/>
          <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path="/actors"><ActorsPage/></Route>
            <Route exact path="/movies"><MoviesPage/></Route>
            <Route path="/"><NotFoundPage/></Route>
          </Switch>
        </HashRouter>
     </div>
  )
}

export default App;