import React from 'react';
import PropTypes from 'prop-types';

class ImageR extends React.Component {
  render() {
    const { cardName, cardImage } = this.props;
    return (
      <div className="img-container">
        <img key={ cardName } src={ cardImage } alt={ cardName } className="imagem" />
      </div>
    );
  }
}

ImageR.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
};

export default ImageR;
