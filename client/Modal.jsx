import React, { Component } from 'react';

class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop" onClick={this.props.onClose}>
        <div className="modal">
          <img className="modal-img" src={this.props.filepath} />
        </div>
      </div>
    );
  }
}

export default Modal;
