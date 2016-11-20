import React, { PropTypes } from 'react';

const Footer = ({ actions }) => (
  <footer className="container">
    <p className="start-over">
      <button onClick={actions.restart}>Start over</button>
    </p>

    <p className="credit">clara fucking beyer started this. she's on
      <a href="https://github.com/csb324" target="_blank" rel="noopener noreferrer">github</a> and
      <a href="https://twitter.com/clarabellum" target="_blank" rel="noopener noreferrer">twitter</a>
    </p>

    <p className="credit">many thanks to
      <a href="http://jezebel.com/a-list-of-pro-women-pro-immigrant-pro-earth-anti-big-1788752078">
        this article</a>, from which many of these links are taken. want to add something? submit
        a fucking <a
          href="https://github.com/csb324/holyfucktheelectionistomorrow"
          target="_blank" rel="noopener noreferrer"
        >pull request</a>
    </p>
  </footer>
);

Footer.propTypes = {
  actions: PropTypes.object.isRequired
};

export default Footer;
