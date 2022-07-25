import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { cardImage, onChange } = this.props;
    return (
      <div>
        <label htmlFor="imagem">
          Image
          <br />
          <input
            id="imagem"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            name="cardImage"
            onChange={ onChange }
          />
        </label>
        <hr />
      </div>
    );
  }
}

Image.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Image;
