import React from 'react';
import Snapshot from './Snapshot';

const SnapPanel = props => {
  console.log('props are:', props.pics)
  return (
    <div className="snap-panel">
      {props.pics.map(pic => <Snapshot className="snapshot" key={} img={pic} />)}
    </div>
  );
};

export default SnapPanel;
