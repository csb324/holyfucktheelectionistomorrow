import React, { Component, PropTypes } from 'react';

export default class Idea extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleIncrement() {
    this.props.actions.increment();
  }

  renderButtons(link, yes, no) {
    if (link) {
      return (
        <div className="idea-buttons">
          <a className="idea-button" href={link} target="_blank">{yes}</a>
          <a className="idea-button" onClick={() => { this.handleIncrement() }}>{no}</a>
        </div>
      )
    } else {
      return (
        <div className="idea-buttons">
          <a className="idea-button" href="#" target="_blank">FACEBOOK</a>
          <a className="idea-button" href="#" target="_blank">TWITTER</a>
        </div>
      )
    }

  }


  render() {
    const { text, link, buttonYes, buttonNo } = this.props.idea;
    return (
      <div className="idea-container">
        <p className="idea-intro">YOU SHOULD...</p>
        <div className="idea-text">{text}</div>

        { this.renderButtons(link, buttonYes, buttonNo) }

      </div>
    );
  }
}

Idea.propTypes = {
  // ideas: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
