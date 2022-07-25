import React from 'react';

class Atributo3 extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="number">
          Atributo 3
          <br />
          <input type="number" id="number" data-testid="attr3-input" />
        </label>
        <hr />
      </div>
    );
  }
}

export default Atributo3;
