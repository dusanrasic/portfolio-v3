import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

import MainMenu from '../Wigets/MainMenu/MainMenu';
import Main from '../Wigets/Main/Main';

import './App.scss';

const CLASS = 'sv-App';

class App extends Component {
  static propTypes = {
    location: PropTypes.object,
  };

  static defaultProps = {
    location: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      currentLocation: '',
    };
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      console.log('Route change!', location.pathname);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        currentLocation: location.pathname,
      });
    }
  }

  render() {
    const { currentLocation } = this.state;
    return (
      <div className={CLASS}>
        <MainMenu />
        <Main currentLocation={currentLocation} />
      </div>
    );
  }
}

export default withRouter(props => <App {...props} />);
