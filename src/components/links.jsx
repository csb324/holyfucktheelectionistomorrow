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

const getLinkInternal = (href, label, analytics) => (
  <Link
    onClick={onClick(href, analytics)}
    className="idea-button"
    to={href}
    key={href}
  >
    {label}
  </Link>
  );

const getLinkExternal = (href, label) => (
  <a key={href} onClick={onClick(href)} className="idea-button" href={href}>{label}</a>
  );

const Links = ({ analytics = {}, pretext = '', text = '', links = [] }) => (
  <div className="container">
    <p className="idea-intro">{pretext}</p>
    <div className="idea-text">{text}</div>
    <div className="idea-buttons">
      {links.map(({ href, txt }) => {
        const words = txt.split(' ');
        const last = words.pop();
        const label = `${txt.join(' ')}\u00a0${last}`;

        return (
          href.indexOf('http') > -1
            ? getLinkExternal(href, label)
            : getLinkInternal(href, label, analytics)
        );
      }
      )}
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
