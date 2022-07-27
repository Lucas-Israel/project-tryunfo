import React from 'react';
import PropTypes from 'prop-types';

class NameR extends React.Component {
  render() {
    const { cardName } = this.props;
    return (
      <div key={ cardName } className="name p">
        {cardName}
      </div>
    );
  }
}

NameR.propTypes = {
  cardName: PropTypes.string.isRequired,
};

export default NameR;
