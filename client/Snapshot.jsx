import React, { Component } from 'react';

class Snapshot extends Component {
  state = { expanded: false };

  handleClick = () => {
    console.log('clicked', this.state.expanded)
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <div className={this.state.expanded ? "snapshot-container expanded" : "snapshot-container"}>
        <img
          onClick={this.handleClick}
          src={this.props.filepath}
          alt="Hummingbird"
        />
      </div>
    );
  }
}

export default Snapshot;
