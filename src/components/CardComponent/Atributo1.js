import React from 'react';
import PropTypes from 'prop-types';

class Atributo1 extends React.Component {
  render() {
    const { attr } = this.props;
    return (
      <p data-testid="attr1-card" className="attr1">
        {attr}
      </p>
    );
  }
}

Atributo1.propTypes = {
  attr: PropTypes.string.isRequired,
};

export default Atributo1;
