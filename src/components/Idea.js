import React, { Component, PropTypes } from 'react';

export default class Idea extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleIncrement() {
    this.props.actions.increment();
  }

  handleVoted() {
    this.props.actions.alreadyVoted();
  }

  renderButtons(link, yes, no, isVotedQuestion) {
    if (isVotedQuestion) {
      return (
        <div className="idea-buttons">
          <a key="buttonIVoted" className="idea-button" onClick={() => { this.handleVoted() }}>{yes}</a>
          <a key="buttonIDidntVote" className="idea-button" onClick={() => { this.handleIncrement() }}>{no}</a>
        </div>
      )

    } else if (link) {
      return (
        <div className="idea-buttons">
          <a key="buttonYes" className="idea-button" href={link} target="_blank">{yes}</a>
          <a key="buttonNo" className="idea-button" onClick={() => { this.handleIncrement() }}>{no}</a>
        </div>
      )
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
    const { text, link, buttonYes, buttonNo, isVotedQuestion } = this.props.idea;
    const pretext = this.props.idea.pretext || "YOU SHOULD...";

    return (
      <div className="idea-container">
        <p className="idea-intro">{ pretext }</p>
        <div className="idea-text">{text}</div>

        { this.renderButtons(link, buttonYes, buttonNo, isVotedQuestion) }

      </div>
    );
  }
}

Idea.propTypes = {
  // ideas: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
