import React from 'react';
import PropTypes from 'prop-types';
import SingleCard from './CardRenderComponents/SingleCard';

class CardRender extends React.Component {
  render() {
    const { cartas } = this.props;
    return (
      <div className="cardRender">
        {cartas.map((element) => (
          <div key={ element.cardName }>
            <SingleCard cartas={ element } />
          </div>
        ))}
      </div>
    );
  }
}

CardRender.propTypes = {
  cartas: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardRender;
