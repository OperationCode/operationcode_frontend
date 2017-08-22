import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';

class ScrollUpButton extends Component {
  render() {
    return (
      function replaceState(newState)
          {
            setState({myState: newState});
          }
      <div>
        <ScrollUpButton replaceState={newState} >
        </ScrollUpButton>
      </div>
    );
  }
}
export default withRouter(ScrollUpButton);
