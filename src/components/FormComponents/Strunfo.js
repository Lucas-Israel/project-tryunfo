import React from 'react';
import PropTypes from 'prop-types';

class Strunfo extends React.Component {
  render() {
    const { cardTrunfo, onChange } = this.props;
    return (
      <div>
        <label htmlFor="Strunfo">
          Super Trunfo
          <br />
          <input
            type="checkbox"
            id="Strunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            name="cardTrunfo"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Strunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Strunfo;
