import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    // do all event handler binding in the constructor
  }

  render() {
    return (
      <div className="first-div">This is the App component and it's beautiful</div>
    );
  }
};

export default App;
