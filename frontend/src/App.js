import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/test/About';
import Footer from './components/test/Footer';
import Test from './components/test/Test';
import Landing from './components/landing/Landing';
function App() {

  return (
    <Router>
        <div className="container">
            <Route path='/' exact component={Landing}/>
            <Route path='/t' exact component={Test}/>
            <Route path='/tabout' component={About} />
        </div>
    </Router>
  );
}

export default App;
