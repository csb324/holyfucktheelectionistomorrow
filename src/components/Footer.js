import React, { Component } from 'react';

export default class Footer extends Component {
	constructor(props, context) {
    super(props, context);
  }

  handleRestart() {
    this.props.actions.restart();
  }

  render() {
    return (
      <footer>
      	<p className="start-over"><a href="#" onClick={() => { this.handleRestart() } }>Start over</a></p>

				<p className="credit">clara fucking beyer made this</p>

      </footer>
    );
  }
}
