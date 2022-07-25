import React from 'react';

class Atributo1 extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="number">
          Atributo 1
          <br />
          <input type="number" id="number" data-testid="attr1-input" />
        </label>
        <hr />
      </div>
    );
  }
}

export default Atributo1;
