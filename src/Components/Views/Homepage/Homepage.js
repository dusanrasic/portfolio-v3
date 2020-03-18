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
            {/* <img
              src={leftSide}
              className={`${CLASS}-wrapper-left-image`}
              alt="LeftSide"
            /> */}
            <div className={`${CLASS}-wrapper-left-top`}></div>
            <div className={`${CLASS}-wrapper-left-left`}></div>
            <div className={`${CLASS}-wrapper-left-bottom`}></div>
            <span className={`${CLASS}-wrapper-left-name`}>Dusan</span>
            <span className={`${CLASS}-wrapper-left-position`}>Web</span>
            <span className={`${CLASS}-wrapper-left-desc`}>Young</span>
          </div>
          <div className={`${CLASS}-wrapper-right`}>
            {/* <img
              src={rightSide}
              className={`${CLASS}-wrapper-right-image`}
              alt="RightSide"
            /> */}
            <div className={`${CLASS}-wrapper-right-top`}></div>
            <div className={`${CLASS}-wrapper-right-right`}></div>
            <div className={`${CLASS}-wrapper-right-bottom`}></div>
            <span className={`${CLASS}-wrapper-right-name`}>Rasic</span>
            <span className={`${CLASS}-wrapper-right-position`}>developer</span>
            <span className={`${CLASS}-wrapper-right-desc`}>
              and passionate developer
            </span>
          </div>
        </div>
      </div>
    );
  }
}
