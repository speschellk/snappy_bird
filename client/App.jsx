import React, { Component } from 'react';
import Video from './Video';
import SnapButton from './SnapButton';
import SnapPanel from './SnapPanel';
import Modal from './Modal';
import axios from 'axios';

class App extends Component {
  state = {
    pics: [],
    selected: null,
    modalIsOpen: false
  };

  handleSnapshot = () => {
    axios
      .get('/snapshot')
      .then(({ data }) => {
        this.state.pics.push(data);
        this.setState({ pics: this.state.pics });
      })
      .catch(err => console.log(err));
  };

  toggleModal = target => {
    console.log('toggling modal', target);
    this.setState({
      selected: target,
      modalIsOpen: !this.state.modalIsOpen
    });
  };

  render() {
    return (
      <div>
        <Video
          url={'https://video.nest.com/embedded/live/VaM9CN'}
        />
        <SnapPanel pics={this.state.pics} toggleModal={this.toggleModal} />
        <SnapButton handleSnap={this.handleSnapshot} />
        <Modal
          show={this.state.modalIsOpen}
          onClose={this.toggleModal}
          filepath={this.state.selected}
        />
      </div>
    );
  }
}

export default App;
