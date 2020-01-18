import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from '../Views/Homepage/Homepage';
import MainMenu from '../Wigets/MainMenu/MainMenu';

import './App.scss';
import Projects from '../Views/Projects/Projects';
import Contact from '../Views/Contact/Contact';
import NotFound from '../Views/Error/NotFound';
import About from '../Views/About/About';

const CLASS = 'sv-App';

function App() {
  return (
    <BrowserRouter>
      <div className={CLASS}>
        <MainMenu />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/home" component={Homepage} exact />
          <Route path="/about" component={About} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/contact" component={Contact} exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
