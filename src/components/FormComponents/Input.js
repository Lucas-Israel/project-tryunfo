import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="input">
          Nome
          <br />
          <input id="input" type="text" data-testid="name-input" />
        </label>
        <hr />
      </div>
    );
  }
}

export default Input;
