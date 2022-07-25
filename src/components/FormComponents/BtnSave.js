import React from 'react';
import PropTypes from 'prop-types';

class BtnSave extends React.Component {
  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;
    return (
      <button
        type="submit"
        data-testid="save-button"
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
      >
        Save
      </button>
    );
  }
}

BtnSave.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default BtnSave;
