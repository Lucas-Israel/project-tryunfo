import React from 'react';
import PropTypes from 'prop-types';

class Trunfo extends React.Component {
  render() {
    const { trunfo } = this.props;
    return (
      <div
        data-testid={ trunfo ? 'trunfo-card' : '' }
        style={ { display: trunfo ? 'block' : 'none' } }
        className="trunfo"
      >
        Super Trunfo!
      </div>
    );
  }
}

Trunfo.propTypes = {
  trunfo: PropTypes.bool.isRequired,
};

export default Trunfo;
