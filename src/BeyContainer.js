import React from "react";



class BeyContainer extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.props.beyObj}
      </div>
    );
  }
}

export default BeyContainer;
