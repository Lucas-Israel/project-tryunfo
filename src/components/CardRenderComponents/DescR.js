import React from 'react';
import PropTypes from 'prop-types';

class DescR extends React.Component {
  render() {
    const { cardDescription } = this.props;
    return (
      <p key={ cardDescription } className="descrip">
        {cardDescription}
      </p>
    );
  }
}

DescR.propTypes = {
  cardDescription: PropTypes.string.isRequired,
};

export default DescR;
