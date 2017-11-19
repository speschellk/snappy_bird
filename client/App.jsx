import React, { Component } from 'react';
import Video from './Video';
import SnapButton from './SnapButton';
import { takeSnapshot } from '../nest_util/cameraUtilities';


class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Video url={'https://video.nest.com/embedded/live/VaM9CN'}/>
        <SnapButton onClick={takeSnapshot}/>
      </div>
    );
  }
};

export default App;
