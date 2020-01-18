/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import SideNav from '../SideNav/SideNav';

import './MainMenu.scss';

const CLASS = 'sv-MainMenu';
export default class MainMenu extends Component {
  render() {
    return (
      <div className={CLASS}>
        <NavLink className={`${CLASS}-logo`} to="/home">
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
  }
}
