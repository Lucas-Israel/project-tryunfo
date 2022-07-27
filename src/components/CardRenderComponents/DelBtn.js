import React from 'react';
import PropTypes from 'prop-types';

class DelBtn extends React.Component {
  render() {
    const { hndlDel } = this.props;
    return (
      <div className="divDel">
        <button
          type="button"
          key={ hndlDel }
          className="btnDel"
          onClick={ hndlDel }
          data-testid="delete-button"
        >
          Excluir
        </button>
      </div>
    );
  }
}

DelBtn.propTypes = {
  hndlDel: PropTypes.func.isRequired,
};

export default DelBtn;
