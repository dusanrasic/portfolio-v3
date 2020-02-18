import React from 'react';

import Input from './Input';

import './Form.scss';

const CLASS = 'sv-Form';

const Form = () => (
  <div className={CLASS}>
    <Input type="text" label="Full name" placeholder='"John Doe"' />
    <Input type="text" label="E-mail" placeholder='"john@doe.com"' />
    <Input
      type="text"
      label="Message"
      placeholder='"John Doe wishes all the best!"'
      multi
    />
  </div>
);

export default Form;
