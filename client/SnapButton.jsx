import React from 'react';

const SnapButton = props => {
  return (
    <div className="button-container">
      <button className="snap-button" onClick={props.handleSnap}>Put a bird on it!</button>
    </div>
  );
}

export default SnapButton;
