import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { cardName, oninputChange } = this.props;
    return (
      <div>
        <label htmlFor="input">
          Nome
          <br />
          <input
            id="input"
            type="text"
            data-testid="name-input"
            name="cardName"
            value={ cardName }
            onChange={ oninputChange }
          />
        </label>
        <hr />
      </div>
    );
  }
}

Input.propTypes = {
  cardName: PropTypes.string.isRequired,
  oninputChange: PropTypes.func.isRequired,
};

export default Input;
