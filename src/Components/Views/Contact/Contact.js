import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './Contact.scss';
import Form from '../../Wigets/Form/Form';

const CLASS = 'sv-Contact';

export default class Contact extends Component {
  static propTypes = {
    location: PropTypes.object,
  };

  static defaultProps = {
    location: {},
  };

  constructor(props) {
    super(props);
    console.log(props, '>>>>const');

    this.state = {
      activeClass: '',
    };
  }

  componentDidMount() {
    const { location } = this.props;
    if (location.pathname === '/contact') {
      requestAnimationFrame(() => {
        this.setState({
          activeClass: 'sv-Contact-Active',
        });
      });
    }
  }

  componentWillUnmount() {
    requestAnimationFrame(() => {
      this.setState({
        activeClass: CLASS,
      });
    });
  }

  render() {
    const { activeClass } = this.state;
    return (
      <div className={activeClass}>
        <div className={`${CLASS}-wrapper`}>
          <div className={`${CLASS}-wrapper-left`}>
            <h1>Get In Touch</h1>
            <p>
              I'm here for you, and im wearing my thinking cap. But first feel
              free to fill the form.
            </p>
          </div>
          <div className={`${CLASS}-wrapper-right`}>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}
