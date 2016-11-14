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
      	<p className="start-over"><button onClick={() => { this.handleRestart() } }>Start over</button></p>

				<p className="credit">clara fucking beyer started this. she's on <a href="https://github.com/csb324" target="_blank">github</a> and <a href="https://twitter.com/clarabellum" target="_blank">twitter</a></p>
        <p className="credit">many thanks to <a href="http://jezebel.com/a-list-of-pro-women-pro-immigrant-pro-earth-anti-big-1788752078">this article</a>, from which many of these links are taken. want to add something? submit a fucking <a href="https://github.com/csb324/holyfucktheelectionistomorrow" target="_blank">pull request</a></p>

      </footer>
    );
  }
}
