import React from 'react';
import PropTypes from 'prop-types';

class DescR extends React.Component {
  render() {
    const { cardDescription } = this.props;
    return (
      <div key={ cardDescription } className="descrip p">
        {cardDescription}
      </div>
    );
  }
}

DescR.propTypes = {
  cardDescription: PropTypes.string.isRequired,
};

export default DescR;
