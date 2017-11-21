import React from 'react';
import Snapshot from './Snapshot';

const SnapPanel = props => {
  console.log('props are:', props.pics)
  return (
    <div className="snapshot-panel">
      {props.pics.map(pic => <Snapshot key={pic.slice(4, 14)} filepath={pic} />)}
    </div>
  );
};

export default SnapPanel;
