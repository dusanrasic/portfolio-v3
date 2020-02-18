import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './Input.scss';

const CLASS = 'sv-Input';

export default class Input extends Component {
  static propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    multi: PropTypes.bool,
  };

  static defaultProps = {
    type: 'text',
    label: 'label',
    placeholder: 'some text',
    multi: false,
  };

  render() {
    const { type, label, placeholder, multi } = this.props;
    return (
      <div className={CLASS}>
        {!multi ? (
          <label htmlFor="input" className={`${CLASS}-label`}>
            {label}
            <input
              type={type}
              className={`${CLASS}-label-input`}
              placeholder={placeholder}
            />
          </label>
        ) : (
          <label htmlFor="input" className={`${CLASS}-label`}>
            {label}
            <textarea
              placeholder={placeholder}
              className={`${CLASS}-label-area`}
            />
          </label>
        )}
      </div>
    );
  }
}
