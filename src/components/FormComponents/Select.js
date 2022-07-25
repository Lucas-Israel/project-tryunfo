import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { cardRare, onChange } = this.props;
    return (
      <div>
        <label htmlFor="select">
          Raridade
          <br />
          <select
            id="select"
            data-testid="rare-input"
            value={ cardRare }
            name="cardRare"
            onChange={ onChange }
          >
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

Select.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
