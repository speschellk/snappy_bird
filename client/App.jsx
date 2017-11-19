import React, { Component } from 'react';
import Video from './Video';
import { takeSnapshot } from '../nest_util/cameraUtilities';


class App extends Component {
  state = {};

  render() {
    return (
      <Video url={'https://video.nest.com/embedded/live/VaM9CN'}/>
    );
  }
};

export default App;
