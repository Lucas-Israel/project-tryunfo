import React from 'react';
import PropTypes from 'prop-types';

class Atributo1 extends React.Component {
  render() {
    const { cardAttr1, onChange } = this.props;
    return (
      <div>
        <label htmlFor="number1">
          Atributo 1
          <br />
          <input
            data-testid="attr1-input"
            type="number"
            id="number1"
            value={ cardAttr1 }
            name="cardAttr1"
            onChange={ onChange }
          />
        </label>
        <hr />
      </div>
    );
  }
}

Atributo1.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Atributo1;
