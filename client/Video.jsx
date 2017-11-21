import React from 'react';

const Video = props => (
  <div className="video-container">
    <iframe className="video" allowFullScreen src={props.url} />
  </div>
);

export default Video;
