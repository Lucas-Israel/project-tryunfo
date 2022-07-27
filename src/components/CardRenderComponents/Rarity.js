import React from 'react';
import PropTypes from 'prop-types';

class Rarity extends React.Component {
  render() {
    const { cardRare } = this.props;
    return (
      <div key={ cardRare } className="raridade p">
        {cardRare}
      </div>
    );
  }
}

Rarity.propTypes = {
  cardRare: PropTypes.string.isRequired,
};

export default Rarity;
