import React from 'react';
import PropTypes from 'prop-types';

class Atributo3 extends React.Component {
  render() {
    const { cardAttr3, onChange } = this.props;
    return (
      <div>
        <label htmlFor="number3">
          Atributo 3
          <br />
          <input
            type="number"
            id="number3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            name="cardAttr3"
            onChange={ onChange }
            max="90"
          />
        </label>
        <hr />
      </div>
    );
  }
}

Atributo3.propTypes = {
  cardAttr3: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Atributo3;
