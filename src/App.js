import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Nuevo from './components/Nuevo'
import Editar from './components/Editar'
//Switch changes to Routes
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" exact render ={ props=>(<Login {...props} />)}></Route>
          <Route path="/dashboard" exact render ={ props=>(<Dashboard {...props} />)}/>
          <Route path="/nuevo" exact render ={ props=>(<Nuevo {...props} />)}/>
          <Route path="/editar/:id" exact render ={ props=>(<Editar {...props} />)}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
