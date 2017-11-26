import React, { Component } from 'react';

class Snapshot extends Component {
  render() {
    return (
      <div className="snapshot-container">
        <img
          onClick={() => this.props.toggleModal(this.props.filepath)}
          src={this.props.filepath}
          alt="Hummingbird"
        />
      </div>
    );
  }
}

export default Snapshot;
