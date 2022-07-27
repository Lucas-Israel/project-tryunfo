import React from 'react';
import PropTypes from 'prop-types';

class Atributo2 extends React.Component {
  render() {
    const { cardAttr2 } = this.props;
    return (
      <div key={ cardAttr2 } className="attr2 p">
        <div className="attrs">
          <div className="attrT">Attack</div>
          <div className="attrA">{cardAttr2}</div>
        </div>
      </div>
    );
  }
}

Atributo2.propTypes = {
  cardAttr2: PropTypes.string.isRequired,
};

export default Atributo2;
