import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Links = ({ pretext, text, links }) => (
  <div className="container">
    <p className="idea-intro">{pretext}</p>
    <div className="idea-text">{text}</div>
    <div className="idea-buttons">
      {links.map(({ href, label }, i) => (
        href.indexOf('http') > -1
          ? <a className="idea-button" href={href}>{label}</a>
          : <Link className="idea-button" to={href} key={`link-${i}`}>{label}</Link>
      ))}
    </div>
  </div>
);

Links.propTypes = {
  pretext: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};

export default Links;
