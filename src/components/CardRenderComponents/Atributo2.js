import React from 'react';
import PropTypes from 'prop-types';

class Atributo2 extends React.Component {
  render() {
    const { cardAttr2 } = this.props;
    return (
      <p key={ cardAttr2 } className="attr2">
        {cardAttr2}
      </p>
    );
  }
}

Atributo2.propTypes = {
  cardAttr2: PropTypes.string.isRequired,
};

export default Atributo2;
