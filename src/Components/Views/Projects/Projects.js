import React, { Component } from 'react';
import { PROJECT_NAV_TYPE } from '../../../Types/projects';

import './Projects.scss';

const CLASS = 'sv-Projects';

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      activeProject: null,
      activeProjectTechnologies: false,
    };
  }

  renderSiteMenu = () =>
    Object.keys(PROJECT_NAV_TYPE).map(key => this.renderSite(key));

  renderSite = item => {
    const details = PROJECT_NAV_TYPE[item];
    const { type, label } = details;

    const { activeProject } = this.state;

    const activeProjectClass =
      activeProject && activeProject.type === type
        ? `${CLASS}-wrapper-left-holder-item-button-active`
        : `${CLASS}-wrapper-left-holder-item-button`;

    return (
      <div className={`${CLASS}-wrapper-left-holder-item`} key={type}>
        <input
          className={activeProjectClass}
          type="button"
          onClick={e => this.renderSiteDetails(e, details)}
          value={label}
        />
      </div>
    );
  };

  renderSiteDetails = (e, details) => {
    e.preventDefault();
    const { activeProject } = this.state;
    if (!activeProject || activeProject.type !== details.type) {
      this.setState({
        activeProject: details,
        activeProjectTechnologies: false,
      });
    }
  };

  renderSiteDetailsTechnoligy = () => {
    const { activeProject } = this.state;

    if (!activeProject) {
      return;
    }

    return Object.keys(activeProject.technology).map(key => (
      <div key={key}>
        <span className={`${CLASS}-wrapper-right-holder-item-technology-name`}>
          &lt;<span>{activeProject.technology[key]}</span>
          &frasl;&gt;
        </span>
      </div>
    ));
  };

  handleTechnologySwitch = (e, section) => {
    e.preventDefault();

    if (section === 'details') {
      this.setState({
        activeProjectTechnologies: false,
      });
    } else {
      this.setState({
        activeProjectTechnologies: true,
      });
    }
  };

  render() {
    const { activeProject, activeProjectTechnologies } = this.state;
    const activeTechnologyClass = activeProjectTechnologies
      ? `${CLASS}-wrapper-right-holder-switch-technology-active`
      : `${CLASS}-wrapper-right-holder-switch-technology`;
    const activeDetailsClass = !activeProjectTechnologies
      ? `${CLASS}-wrapper-right-holder-switch-technology-active`
      : `${CLASS}-wrapper-right-holder-switch-technology`;
    return (
      <div className={CLASS}>
        <div className={`${CLASS}-wrapper`}>
          <div className={`${CLASS}-wrapper-left`}>
            <div className={`${CLASS}-wrapper-left-holder`}>
              {this.renderSiteMenu()}
            </div>
          </div>
          <div className={`${CLASS}-wrapper-right`}>
            {activeProject ? (
              <div className={`${CLASS}-wrapper-right-holder`}>
                <div className={`${CLASS}-wrapper-right-holder-switch`}>
                  <span
                    className={activeDetailsClass}
                    onClick={e => this.handleTechnologySwitch(e, 'details')}
                    onKeyDown={e => this.handleTechnologySwitch(e, 'details')}
                    role="button"
                    tabIndex={0}
                  >
                    Details
                  </span>
                  <span
                    className={activeTechnologyClass}
                    onClick={e => this.handleTechnologySwitch(e, 'technology')}
                    onKeyDown={e =>
                      this.handleTechnologySwitch(e, 'technology')
                    }
                    role="button"
                    tabIndex={0}
                  >
                    Technologies
                  </span>
                </div>
                {!activeProjectTechnologies ? (
                  <div className={`${CLASS}-wrapper-right-holder-item-details`}>
                    <span
                      className={`${CLASS}-wrapper-right-holder-item-details-name`}
                    >
                      Name: <span>{activeProject.label}</span>
                    </span>
                    <span
                      className={`${CLASS}-wrapper-right-holder-item-details-path`}
                    >
                      URL:
                      <a
                        href={activeProject.url_path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {activeProject.url}
                      </a>
                    </span>
                  </div>
                ) : (
                  <div
                    className={`${CLASS}-wrapper-right-holder-item-technology`}
                  >
                    {this.renderSiteDetailsTechnoligy()}
                  </div>
                )}
              </div>
            ) : (
              <span>Please select the project.</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}
