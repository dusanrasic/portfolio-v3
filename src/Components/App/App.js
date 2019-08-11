import React from 'react';

import Homepage from '../Views/Homepage/Homepage';
import MainMenu from '../Wigets/MainMenu/MainMenu';
import SideMenu from '../Wigets/SideMenu/SideMenu';

import './App.scss';

const CLASS = 'sv-App';

function App() {
  return (
    <div className={CLASS}>
      <MainMenu />
      <SideMenu />
      <Homepage />
    </div>
  );
}

export default App;
