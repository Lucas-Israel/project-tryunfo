import React from 'react';
import PropTypes from 'prop-types';

class Atributo3 extends React.Component {
  render() {
    const { attr } = this.props;
    return (
      <p data-testid="attr3-card" className="attr3">
        {attr}
      </p>
    );
  }
}

Atributo3.propTypes = {
  attr: PropTypes.string.isRequired,
};

export default Atributo3;
