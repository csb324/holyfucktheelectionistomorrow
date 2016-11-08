import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/CounterActions';
import Counter from '../components/Counter';
import Idea from '../components/Idea';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

import Footer from '../components/Footer';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export class App extends Component {
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const { counter, actions, ideas } = this.props;
    const currentIdea = ideas[counter];

    return (
      <div className="main-app-container">
        <div className="main-app-nav">
          <h1>HOLY</h1>
          <h1>FUCK</h1>
          <h1>THE</h1>
          <h1>ELECTION</h1>
          <h1>IS</h1>
          <h1 className="background-red">TODAY</h1>

          <p>You could check election news on twitter one more time, or you could actually fucking do something to help get Hillary Clinton elected.</p>
        </div>
        {/* notice that we then pass those unpacked props into the Counter component */}
        <div className="ideas-container">
          <ReactCSSTransitionGroup
            transitionName="slide"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000} >

            <Idea key={counter} idea={currentIdea} actions={actions} />
          </ReactCSSTransitionGroup>
        </div>
        <Footer actions={actions} />
      </div>
    );
  }
}

App.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  ideas: PropTypes.array.isRequired
};


/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    counter: state.counter,
    ideas: state.ideas
  };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
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
