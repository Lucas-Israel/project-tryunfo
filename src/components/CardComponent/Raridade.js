import React from 'react';
import PropTypes from 'prop-types';

class Raridade extends React.Component {
  render() {
    const { raridade } = this.props;
    return (
      <div data-testid="rare-card" className="raridade p">
        {raridade}
      </div>
    );
  }
}

Raridade.propTypes = {
  raridade: PropTypes.string.isRequired,
};

export default Raridade;
