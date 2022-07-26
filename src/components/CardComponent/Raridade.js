import React from 'react';
import PropTypes from 'prop-types';

class Raridade extends React.Component {
  render() {
    const { raridade } = this.props;
    return (
      <p data-testid="rare-card" className="raridade">
        {raridade}
      </p>
    );
  }
}

Raridade.propTypes = {
  raridade: PropTypes.string.isRequired,
};

export default Raridade;
