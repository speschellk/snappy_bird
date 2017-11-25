import React from 'react';
import Snapshot from './Snapshot';

const SnapPanel = props => {
  return (
    <div className="snapshot-panel">
      {props.pics.map(pic => <Snapshot key={pic.slice(4, 14)} filepath={pic} />)}
    </div>
  );
};

export default SnapPanel;
