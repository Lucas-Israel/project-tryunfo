import React from 'react';
import PropTypes from 'prop-types';

class Imagem extends React.Component {
  render() {
    const { img, alt } = this.props;
    return (
      <div className="img-container">
        <img
          className="imagem"
          src={ img }
          alt={ alt }
          data-testid="image-card"
        />
      </div>
    );
  }
}

Imagem.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Imagem;
