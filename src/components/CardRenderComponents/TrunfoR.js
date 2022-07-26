import React from 'react';
import PropTypes from 'prop-types';

class TrunfoR extends React.Component {
  render() {
    const { cardTrunfo } = this.props;
    return (
      <div key={ cardTrunfo }>
        {cardTrunfo ? 'Super Trunfo!' : ''}
      </div>
    );
  }
}

TrunfoR.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
};

export default TrunfoR;
