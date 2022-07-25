import React from 'react';
import PropTypes from 'prop-types';

class Atributo2 extends React.Component {
  render() {
    const { cardAttr2, onChange } = this.props;
    return (
      <div>
        <label htmlFor="number2">
          Atributo 2
          <br />
          <input
            type="number"
            id="number2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            name="cardAttr2"
            onChange={ onChange }
          />
        </label>
        <hr />
      </div>
    );
  }
}

Atributo2.propTypes = {
  cardAttr2: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Atributo2;
