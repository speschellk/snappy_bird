import React from 'react';

const Snapshot = props => {
  return (
    <div className="snapshot-container">
      <img src={props.filepath} alt="Hummingbird" height="100" width="200" />
    </div>
  );
};

export default Snapshot;
