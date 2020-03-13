import React from "react";
export class CounterErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (!!this.state.errorInfo) {
      return (
        <div className="error-notification">
          <p>An error occured in a counter.</p>
          <details>
            <summary>Click for more details</summary>
            <p>{!!this.state.error && this.state.error.toString()}</p>
            <p>{this.state.errorInfo.componentStack}</p>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
