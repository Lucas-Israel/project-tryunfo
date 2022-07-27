import React from 'react';
import PropTypes from 'prop-types';

class Atributo2 extends React.Component {
  render() {
    const { attr } = this.props;
    return (
      <div data-testid="attr2-card" className="attr2 p">
        <div className="attrs">
          <div className="attrT">Attack</div>
          <div className="attrA">{attr}</div>
        </div>
      </div>
    );
  }
}

Atributo2.propTypes = {
  attr: PropTypes.string.isRequired,
};

export default Atributo2;
