import React from 'react';
import PropTypes from 'prop-types';

class Atributo3 extends React.Component {
  render() {
    const { attr } = this.props;
    return (
      <div data-testid="attr3-card" className="attr3 p">
        <div className="attrs">
          <div className="attrT">Defense</div>
          <div className="attrA">{attr}</div>
        </div>
      </div>
    );
  }
}

Atributo3.propTypes = {
  attr: PropTypes.string.isRequired,
};

export default Atributo3;
