import React, { Component } from 'react';
import { SOCIAL_NAV, SOCIAL_NAV_TYPE } from '../../../Types/social';

import './About.scss';

const CLASS = 'sv-About';

export default class About extends Component {
  renderSocialItem = () =>
    Object.keys(SOCIAL_NAV).map(key => {
      const item = SOCIAL_NAV_TYPE[key];
      const url =
        item.label === 'Mail' ? `mailto:${item.url_path}` : item.url_path;
      console.log(item.label, '>>>>nav');
      return (
        <div className={`${CLASS}-wrapper-left-social-holder-item`} key={key}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={item.icon} alt={item.label} />
          </a>
        </div>
      );
    });

  render() {
    return (
      <div className={CLASS}>
        <div className={`${CLASS}-wrapper`}>
          <div className={`${CLASS}-wrapper-left`}>
            <div className={`${CLASS}-wrapper-left-social-holder`}>
              {this.renderSocialItem()}
            </div>
            <div className={`${CLASS}-wrapper-left-attribution`}>
              Icons made by{' '}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>{' '}
              from{' '}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </div>
          <div className={`${CLASS}-wrapper-right`}>
            <p>
              Hi! My name is Dusan and I'm 25 years old. I was born in
              Smederevska Palanka but currently I'm living in Belgrade. I
              graduated on ICT College with degree of an electrical and computer
              engineer. I like to develop for web. If you wanna know more about
              me check my social accounts.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
