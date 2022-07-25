import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { cardDescription, onChange } = this.props;
    return (
      <div>
        <label htmlFor="textarea">
          Descrição
          <br />
          <textarea
            id="textarea"
            data-testid="description-input"
            value={ cardDescription }
            name="cardDescription"
            onChange={ onChange }
          />
        </label>
        <hr />
      </div>
    );
  }
}

TextArea.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
