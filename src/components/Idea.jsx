import React, { Component, PropTypes } from 'react';

export default class Idea extends Component {
  constructor() {
    super();

    this.handleIncrementBy = (number) => () => {
      this.props.actions.incrementBy(number);
    };

    this.handleSetTopic = (topic) => () => {
      window.ga('send', 'event', 'SetTopic', topic);
      this.props.actions.setTopic(topic);
    };

    this.handleSetAction = (action) => () => {
      window.ga('send', 'event', 'SetAction', action);
      this.props.actions.setAction(action);
    };

    this.handleClickOut = (url) => () => {
      window.ga('send', 'event', 'ActionLink', 'click', url);
      window.open(url, '_blank').focus();
    };
  }

  componentDidMount() {
    // Focus on header so we can tab through options
    document.querySelector('.idea-text').focus();
  }

  renderButton(button, index) {
    let onClick;
    const key = `button-${index}`;
    const buttonClass = `idea-button ${button.class || ''}`;

    if (button.link) {
      onClick = this.handleClickOut(button.link);
    } else if (button.topic) {
      onClick = this.handleSetTopic(button.topic);
    } else if (button.action) {
      onClick = this.handleSetAction(button.action);
    } else if (button.stepsForward) {
      onClick = this.handleIncrementBy(button.stepsForward);
    }

    return (
      <button key={key} className={buttonClass} onClick={onClick}>{button.text}</button>
    );
  }

  renderButtons(idea) {
    const buttons = idea.linkList ? this.props.links : idea.buttons;
    const buttonElements = buttons.map((button, index) => this.renderButton(button, index));

    return (
      <div className="idea-buttons">
        {buttonElements}
      </div>
    );
  }


  render() {
    let { text } = this.props.idea;
    const { choices, links } = this.props;

    const pretext = this.props.idea.pretext || 'YOU SHOULD...';

    if (!text && links.length > 0) {
      text = (choices.action === 'volunteer')
        ? 'VOLUNTEER WITH ONE OF THESE FUCKING ORGANIZATIONS'
        : 'DONATE TO ONE OF THESE FUCKING ORGANIZATIONS';
    }

    return (
      <div className="container">
        <p className="idea-intro">{ pretext }</p>
        <div className="idea-text" tabIndex="-1">{ text }</div>

        { this.renderButtons(this.props.idea) }

      </div>
    );
  }
}

Idea.propTypes = {
  links: PropTypes.array.isRequired,
  idea: PropTypes.object.isRequired,
  choices: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
