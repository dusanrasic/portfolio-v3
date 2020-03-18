import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../../Views/Homepage/Homepage';
import About from '../../Views/About/About';
import Projects from '../../Views/Projects/Projects';
import Contact from '../../Views/Contact/Contact';
import NotFound from '../../Views/Error/NotFound';

const Main = () => (
  <main>
    <Switch>
      <Route path="/" component={Homepage} exact />
      <Route path="/about" render={props => <About {...props} />} exact />
      <Route path="/projects" render={props => <Projects {...props} />} exact />
      <Route path="/contact" render={props => <Contact {...props} />} exact />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;
