import React, { Component } from 'react';
import leftSide from '../../../Images/leftSide.png';
import rightSide from '../../../Images/rightSide.png';

import './Homepage.scss';

const CLASS = 'sv-Homepage';

export default class Homepage extends Component {
  render() {
    return (
      <div className={CLASS}>
        <div className={`${CLASS}-wrapper`}>
          <div className={`${CLASS}-wrapper-left`}>
            <img
              src={leftSide}
              className={`${CLASS}-wrapper-left-image`}
              alt="LeftSide"
            />
          </div>
          <div className={`${CLASS}-wrapper-right`}>
            <img
              src={rightSide}
              className={`${CLASS}-wrapper-right-image`}
              alt="RightSide"
            />
          </div>
        </div>
      </div>
    );
  }
}
