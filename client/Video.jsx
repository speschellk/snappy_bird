import React from 'react';

const Video = (props) => (
  <iframe allowFullScreen src={props.url} frameBorder="0" width="1000" height="563"></iframe>
);

export default Video;
