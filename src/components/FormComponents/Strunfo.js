import React from 'react';

class Strunfo extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="Strunfo">
          Super Trunfo
          <br />
          <input type="checkbox" id="Strunfo" data-testid="trunfo-input" />
        </label>
        <hr />
      </div>
    );
  }
}

export default Strunfo;
