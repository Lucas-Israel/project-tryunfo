import React from 'react';
import PropTypes from 'prop-types';

class Trunfado extends React.Component {
  render() {
    const { trunfou } = this.props;
    return (
      <p style={ { display: !trunfou ? 'none' : 'flex' } }>
        Você já tem um Super Trunfo em seu baralho
      </p>
    );
  }
}

Trunfado.propTypes = {
  trunfou: PropTypes.bool.isRequired,
};

export default Trunfado;
