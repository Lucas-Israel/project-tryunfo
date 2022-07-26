import React from 'react';
import PropTypes from 'prop-types';

class Atributo1 extends React.Component {
  render() {
    const { cardAttr1 } = this.props;
    return (
      <p key={ cardAttr1 } className="attr1">
        {cardAttr1}
      </p>
    );
  }
}

Atributo1.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
};

export default Atributo1;
