import React, { Component } from 'react';

import { SIDE_MENU_TYPE, SIDE_MENU_LABEL } from '../../../Types/SideMenu';

import './SideMenu.scss';

const CLASS = 'sv-SideMenu';
export default class SideMenu extends Component {
  renderMenu = () =>
    Object.entries(SIDE_MENU_TYPE).map(([key, value]) =>
      this.renderMenuItem([key, value])
    );

  renderMenuItem = item => (
    <div className={`${CLASS}-menuItem`} key={item[0]}>
      <span>{item[1]}</span>
    </div>
  );

  render() {
    return <div className={CLASS}>{this.renderMenu()}</div>;
  }
}
