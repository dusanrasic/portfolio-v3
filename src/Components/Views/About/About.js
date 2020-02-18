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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
