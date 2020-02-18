import React from 'react';
import { NavLink } from 'react-router-dom';

import SideNav from '../SideNav/SideNav';

import './MainMenu.scss';

const CLASS = 'sv-MainMenu';
const MainMenu = () => (
  <div className={CLASS}>
    <NavLink className={`${CLASS}-logo`} to="/">
      <span className={`${CLASS}-logo-text`}>
        <span className={`${CLASS}-logo-text-fl`}>Dusan</span>
        <span className={`${CLASS}-logo-text-sl`}>Rasic</span>
      </span>
    </NavLink>
    <span className={`${CLASS}-nav`}>
      <SideNav />
    </span>
  </div>
);

export default MainMenu;
