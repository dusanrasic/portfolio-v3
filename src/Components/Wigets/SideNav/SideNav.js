import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { SIDE_NAV_TYPE, SIDE_NAV_LABEL } from '../../../Types/sideNav';

import './SideNav.scss';

const CLASS = 'sv-SideNav';
export default class SideNav extends Component {
  renderMenu = () =>
    Object.keys(SIDE_NAV_TYPE).map(key => this.renderMenuItem(key));

  renderMenuItem = item => {
    const index = SIDE_NAV_TYPE[item];
    const name = SIDE_NAV_LABEL[index];

    return (
      <NavLink className={`${CLASS}-item`} key={index} to={`/${item}`}>
        <span className={`${CLASS}-item-indicator`} />
        <span className={`${CLASS}-item-index`}>{index}</span>
        <span className={`${CLASS}-item-name`}>{name}</span>
      </NavLink>
    );
  };

  render() {
    return <div className={CLASS}>{this.renderMenu()}</div>;
  }
}
