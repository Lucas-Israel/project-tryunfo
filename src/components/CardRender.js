import React from 'react';
import PropTypes from 'prop-types';
import SingleCard from './CardRenderComponents/SingleCard';
import DelBtn from './CardRenderComponents/DelBtn';

class CardRender extends React.Component {
  render() {
    const { cartas, hndlDel } = this.props;
    return (
      <div className="cardRender">
        {cartas.map((element, index) => (
          <div key={ element.cardName + index } id={ index }>
            <SingleCard cartas={ element } />
            <DelBtn hndlDel={ hndlDel } />
          </div>
        ))}
      </div>
    );
  }
}

CardRender.propTypes = {
  cartas: PropTypes.arrayOf(PropTypes.object).isRequired,
  hndlDel: PropTypes.func.isRequired,
};

export default CardRender;
