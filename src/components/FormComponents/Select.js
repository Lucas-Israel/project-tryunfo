import React from 'react';

class Select extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="select">
          Raridade
          <br />
          <select id="select" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <hr />
      </div>
    );
  }
}

export default Select;
