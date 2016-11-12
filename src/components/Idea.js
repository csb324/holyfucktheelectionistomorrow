import React, { Component, PropTypes } from 'react';

export default class Idea extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleIncrementBy(number) {
    this.props.actions.incrementBy(number);
  }

  handleSetTopic(topic) {
    ga('send', 'event', 'SetTopic', topic);
    this.props.actions.setTopic(topic);
  }

  handleSetAction(action) {
    ga('send', 'event', 'SetAction', action);
    this.props.actions.setAction(action);
  }

  handleClickOut(url) {
    ga('send', 'event', 'ActionLink', 'click', url);
    window.open(url, '_blank').focus();
  }

  renderButton(button, index) {
    let onClick;
    const key = "button-" + index;
    const buttonClass = "idea-button " + (button.class || "");

    if (button.link) {
      onClick = () => {
        this.handleClickOut(button.link);
      }
    } else if (button.topic) {
      onClick = () => {
        this.handleSetTopic(button.topic);
      }
    } else if (button.action) {
      onClick = () => {
        this.handleSetAction(button.action);
      }
    } else if (button.stepsForward) {
      onClick = () => {
        this.handleIncrementBy(button.stepsForward);
      }
    }

    return (
      <a key={key} className={buttonClass} onClick={onClick}>{button.text}</a>
    )
  }

  renderButtons(props) {
    let { buttons, linkList } = props;

    if (linkList) {
      buttons = this.props.links;
    }

    const buttonElements = buttons.map((button, index) => {        
      return this.renderButton(button, index)
    })

    return (
      <div className="idea-buttons">
        {buttonElements}
      </div>
    );

  }


  render() {
    let { text } = this.props.idea;
    const { choices, links } = this.props;

    const pretext = this.props.idea.pretext || "YOU SHOULD...";

    if (!text && links.length > 0) {
      if (choices.action == "volunteer") {
        text = "VOLUNTEER WITH ONE OF THESE FUCKING ORGANIZATIONS";
      } else {
        text = "DONATE TO ONE OF THESE FUCKING ORGANIZATIONS";
      }
    }

    return (
      <div className="idea-container">
        <p className="idea-intro">{ pretext }</p>
        <div className="idea-text">{ text }</div>

        { this.renderButtons(this.props.idea) }

      </div>
    );
  }
}

Idea.propTypes = {
  // ideas: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
