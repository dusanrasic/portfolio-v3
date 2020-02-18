import React, { Component } from 'react';

import './Contact.scss';
import Form from '../../Wigets/Form/Form';

const CLASS = 'sv-Contact';

export default class Contact extends Component {
  render() {
    return (
      <div className={CLASS}>
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
