import React from 'react';
import PropTypes from 'prop-types';

class Atributo1 extends React.Component {
  render() {
    const { cardAttr1 } = this.props;
    return (
      <div key={ cardAttr1 } className="attr1 p">
        <div className="attrs">
          <div className="attrT">Speed</div>
          <div className="attrA">{cardAttr1}</div>
        </div>
      </div>
    );
  }
}

Atributo1.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
};

export default Atributo1;
