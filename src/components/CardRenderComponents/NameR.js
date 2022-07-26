import React from 'react';
import PropTypes from 'prop-types';

class NameR extends React.Component {
  render() {
    const { cardName } = this.props;
    return (
      <p key={ cardName } className="name">
        {cardName}
      </p>
    );
  }
}

NameR.propTypes = {
  cardName: PropTypes.string.isRequired,
};

export default NameR;
