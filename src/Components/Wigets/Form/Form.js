import React from 'react';

import Input from './Input';
import Button from './Button';

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
    <Button label="Submit" />
  </div>
);

export default Form;
