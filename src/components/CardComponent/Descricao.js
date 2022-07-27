import React from 'react';
import PropTypes from 'prop-types';

class Descricao extends React.Component {
  render() {
    const { descricao } = this.props;
    return (
      <div data-testid="description-card" className="descrip p">
        {descricao}
      </div>
    );
  }
}

Descricao.propTypes = {
  descricao: PropTypes.string.isRequired,
};

export default Descricao;
