import React, { PropTypes } from 'react';
import Animate from 'rc-animate';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/Actions';

import Idea from '../components/Idea';
import Footer from '../components/Footer';


/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
const App = ({ counter, actions, ideas, choices, links }) => {
  const currentIdea = ideas[counter];

  let currentLinks = [];

  if (choices.topic && choices.action) {
    currentLinks = links[choices.topic][choices.action];

    currentLinks.push({
      text: 'FUCK YEAH. NOW WHAT?',
      stepsForward: 1,
      class: 'idea-button--accent'
    });
  }

  return (
    <div className="main-app-container">
      <div className="main-app-nav">
        <h1 className="background-dark">HOLY</h1>
        <h1 className="background-dark">FUCK.</h1>
        <h1 className="background-red">NOW WHAT?</h1>
        <p>That piece of shit known as Donald Trump won the election. But that doesn't mean it's
          fucking over</p>
      </div>
      {/* notice that we then pass those unpacked props into the Counter component */}
      <div className="ideas-container">
        <Animate transitionName="slide">
          <Idea
            key={`key-${counter}`}
            idea={currentIdea}
            actions={actions}
            links={currentLinks}
            choices={choices}
          />
        </Animate>
      </div>
      <Footer actions={actions} />
    </div>
  );
};

App.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  ideas: PropTypes.array.isRequired,
  links: PropTypes.object.isRequired,
  choices: PropTypes.object.isRequired
};


/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    counter: state.counter,
    ideas: state.ideas,
    choices: state.choices,
    links: state.links
  };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'Actions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
