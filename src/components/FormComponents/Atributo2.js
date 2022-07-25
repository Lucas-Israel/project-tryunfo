import React from 'react';

class Atributo2 extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="number">
          Atributo 2
          <br />
          <input type="number" id="number" data-testid="attr2-input" />
        </label>
        <hr />
      </div>
    );
  }
}

export default Atributo2;
