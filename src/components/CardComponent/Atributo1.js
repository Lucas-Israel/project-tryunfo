import React from 'react';
import PropTypes from 'prop-types';

class Atributo1 extends React.Component {
  render() {
    const { attr } = this.props;
    return (
      <div data-testid="attr1-card" className="attr1 p">
        <div className="attrs">
          <div className="attrT">Speed</div>
          <div className="attrA">{attr}</div>
        </div>
      </div>
    );
  }
}

Atributo1.propTypes = {
  attr: PropTypes.string.isRequired,
};

export default Atributo1;
