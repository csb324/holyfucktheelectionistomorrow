import React, { Component, PropTypes } from 'react';

export default class Idea extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleIncrement() {
    this.props.actions.increment();
  }

  handleSetTopic(topic) {
    this.props.actions.setTopic(topic);    
  }

  handleSetAction(action) {
    this.props.actions.setAction(action);
  }

  renderButtons(props) {
    const { link, buttonYes, buttonNo, isVotedQuestion, buttons, linkList } = props;

    console.log(props);

    if (link) {
      return (
        <div className="idea-buttons">
          <a key="buttonYes" className="idea-button" href={link} target="_blank">{buttonYes}</a>
          <a key="buttonNo" className="idea-button" onClick={() => { this.handleIncrement() }}>{buttonNo}</a>
        </div>
      )
    } else if (buttons) {
      const buttonElements = buttons.map((button, index) => {
        let onClick;

        if (button.topic) {
          onClick = () => {
            this.handleSetTopic(button.topic);
          }
        } else if (button.action) {
          onClick = () => {
            this.handleSetAction(button.action);
          }
        } else {
          return;
        }

        const key = "button-" + index;
        return (
          <a key={key} className="idea-button" onClick={onClick}>{button.text}</a>
        )
      })

      return (
        <div className="idea-buttons">
          {buttonElements}
        </div>
      );

    } else if (linkList) {

      const links = this.props.links;
      console.log(this.props);
      
      const buttonElements = links.map((button, index) => {
        const key = "button-" + index;
        return (
          <a key={key} className="idea-button" target="_blank" href={button.link}>{button.text}</a>
        )
      })

      return (
        <div className="idea-buttons">
          {buttonElements}
        </div>
      );

    } else {
      return (
        <div className="idea-buttons">
          <a key="shareFB" className="idea-button" href="https://www.facebook.com/sharer/sharer.php?u=http%3A//www.holyfucktheelection.com/" target="_blank">FACEBOOK</a>
          <a key="shareTW" className="idea-button" href="https://twitter.com/intent/tweet?text=HOLY%20FUCK%20THE%20ELECTION%20IS%20TODAY%20&url=http%3A//www.holyfucktheelection.com/&hashtags=imwithher" target="_blank">TWITTER</a>
        </div>
      )
    }

  }


  render() {
    let { text } = this.props.idea;
    const { choices, links } = this.props;

    const pretext = this.props.idea.pretext || "YOU SHOULD...";

    if (!text && links.length > 0) {
      if (choices.action == "volunteer") {
        text = "YOU SHOULD VOLUNTEER WITH ONE OF THESE FUCKING ORGANIZATIONS";
      } else {
        text = "YOU SHOULD DONATE TO ONE OF THESE FUCKING ORGANIZATIONS";
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
