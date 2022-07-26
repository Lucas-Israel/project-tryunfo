import React from 'react';
import PropTypes from 'prop-types';

class Rarity extends React.Component {
  render() {
    const { cardRare } = this.props;
    return (
      <p key={ cardRare } className="raridade">
        {cardRare}
      </p>
    );
  }
}

Rarity.propTypes = {
  cardRare: PropTypes.string.isRequired,
};

export default Rarity;
