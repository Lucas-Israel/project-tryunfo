import React from 'react';
import PropTypes from 'prop-types';

class Atributo2 extends React.Component {
  render() {
    const { attr } = this.props;
    return (
      <p data-testid="attr2-card" className="attr2">
        {attr}
      </p>
    );
  }
}

Atributo2.propTypes = {
  attr: PropTypes.string.isRequired,
};

export default Atributo2;
