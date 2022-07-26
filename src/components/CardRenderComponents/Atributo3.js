import React from 'react';
import PropTypes from 'prop-types';

class Atributo3 extends React.Component {
  render() {
    const { cardAttr3 } = this.props;
    return (
      <p key={ cardAttr3 } className="attr3">
        {cardAttr3}
      </p>
    );
  }
}

Atributo3.propTypes = {
  cardAttr3: PropTypes.string.isRequired,
};

export default Atributo3;
