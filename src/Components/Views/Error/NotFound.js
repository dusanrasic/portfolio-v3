import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './NotFound.scss';

const CLASS = 'sv-NotFound';

export default class NotFound extends Component {
  render() {
    return (
      <div className={CLASS}>
        <div className={`${CLASS}-code`}>
          <span>404</span>
        </div>
        <div className={`${CLASS}-description`}>
          <span>Page not found</span>
        </div>
        <NavLink className={`${CLASS}-action`} to="/">
          <span>go back</span>
        </NavLink>
      </div>
    );
  }
}
