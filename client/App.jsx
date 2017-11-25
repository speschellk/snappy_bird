import React, { Component } from 'react';
import Video from './Video';
import SnapButton from './SnapButton';
import SnapPanel from './SnapPanel';
import axios from 'axios';

class App extends Component {
  state = {
    pics: []
  };

  handleSnapshot = () => {
    axios
      .get('/snapshot')
      .then(({data}) => {
        this.state.pics.push(data);
        this.setState({ pics: this.state.pics });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Video url={'https://video.nest.com/embedded/live/VaM9CN'} />
        <SnapPanel pics={this.state.pics} />
        <SnapButton handleSnap={this.handleSnapshot} />
      </div>
    );
  }
}

export default App;
