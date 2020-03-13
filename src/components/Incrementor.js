import React from "react";
import { PropTypes } from "prop-types";

const defaultLimit = 5;

export class Incrementor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  getErrorLimit = () => {
    return !!this.props.errorLimit ? this.props.errorLimit : defaultLimit;
  };

  updateCounter = value => {
    let counter = this.state.counter + value;
    this.setState({ counter });
  };

  render() {
    if (this.state.counter > this.getErrorLimit()) {
      throw new Error("Counter went past upper limit");
    } else if (this.state.counter < this.props.lowerLimit) {
      throw new Error("Counter went below lower limit");
    }

    const limit = this.getErrorLimit();

    return (
      <>
        <div>This counter has a limit of {limit}</div>
        <div className="incrementor">
          <button onClick={() => this.updateCounter(-1)}>Decrease</button>
          <div className="counter">{this.state.counter}</div>
          <button onClick={() => this.updateCounter(1)}>Increase</button>
        </div>
      </>
    );
  }
}

Incrementor.propTypes = {
  errorLimit: PropTypes.number
};
