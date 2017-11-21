import React from 'react';

const Snapshot = props => {
  return (
    <span className="snapshot-container">
      <img src={props.filepath} alt="Hummingbird" height="100" width="200" />
    </span>
  );
};

export default Snapshot;
