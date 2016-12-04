import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const onClick = (href, analytics) => () => {
  if (analytics) {
    const { type, tag } = analytics;
    window.ga('send', 'event', type, tag);
  } else {
    window.ga('send', 'event', 'ActionLink', 'click', href);
  }
};

const Links = ({ analytics = {}, pretext = '', text = '', links = [] }) => (
  <div className="container">
    <p className="idea-intro">{pretext}</p>
    <div className="idea-text">{text}</div>
    <div className="idea-buttons">
      {links.map(({ href, label }, i) => (
        href.indexOf('http') > -1
          ? <a onClick={onClick(href)} className="idea-button" href={href}>{label}</a>
          : <Link onClick={onClick(href, analytics)} className="idea-button" to={href} key={`link-${i}`}>{label}</Link>
      ))}
    </div>
  </div>
);

Links.propTypes = {
  analytics: PropTypes.object,
  pretext: PropTypes.string,
  text: PropTypes.string,
  links: PropTypes.array
};

export default Links;
