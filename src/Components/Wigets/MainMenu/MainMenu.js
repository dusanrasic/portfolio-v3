import React, { Component } from 'react';

import './MainMenu.scss';

const CLASS = 'sv-MainMenu';
export default class MainMenu extends Component {
  render() {
    return (
      <div className={CLASS}>
        <span className={`${CLASS}-logo`}></span>
        <div className={`${CLASS}-expandMenu`}>
          <span className={`${CLASS}-expandMenu-label`}>Menu</span>
          <div className={`${CLASS}-expandMenu-icon`} />
        </div>
      </div>
    );
  }
}
