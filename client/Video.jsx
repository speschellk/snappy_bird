import React from 'react';

const Video = (props) => (
  <iframe allowfullscreen webkitallowfullscreen mozallowfullscreen src={props.url}frameborder="0" width="1000" height="563"></iframe>
);

export default Video;
