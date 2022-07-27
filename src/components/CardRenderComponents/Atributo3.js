import React from 'react';
import PropTypes from 'prop-types';

class Atributo3 extends React.Component {
  render() {
    const { cardAttr3 } = this.props;
    return (
      <div key={ cardAttr3 } className="attr3 p">
        <div className="attrs">
          <div className="attrT">Defence</div>
          <div className="attrA">{cardAttr3}</div>
        </div>
      </div>
    );
  }
}

Atributo3.propTypes = {
  cardAttr3: PropTypes.string.isRequired,
};

export default Atributo3;
