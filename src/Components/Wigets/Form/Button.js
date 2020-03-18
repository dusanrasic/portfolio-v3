import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './Button.scss';

const CLASS = 'sv-Button';

export default class Button extends Component {
  static propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    label: 'label',
    onClick: () => {},
  };

  onClick = () => {
    const { onClick } = this.props;

    return this.onClick && onClick();
  };

  render() {
    const { label } = this.props;
    return (
      <button className={CLASS} type="button" onClick={this.onClick}>
        <span>{label}</span>
      </button>
    );
  }
}
