import React, { PropTypes } from 'react';
import Animate from 'rc-animate';

const App = ({ location, children }) => (
  <Animate component="div" transitionName="slide">
    <div key={location.pathname}>{children}</div>
  </Animate>
);

App.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default App;
