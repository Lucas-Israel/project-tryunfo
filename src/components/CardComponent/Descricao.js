import React from 'react';
import PropTypes from 'prop-types';

class Descricao extends React.Component {
  render() {
    const { descricao } = this.props;
    return (
      <p data-testid="description-card" className="descrip">
        {descricao}
      </p>
    );
  }
}

Descricao.propTypes = {
  descricao: PropTypes.string.isRequired,
};

export default Descricao;
