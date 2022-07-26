import React from 'react';
import PropTypes from 'prop-types';
import Name from './CardComponent/Name';
import Imagem from './CardComponent/Imagem';
import Descricao from './CardComponent/Descricao';
import Atributo1 from './CardComponent/Atributo1';
import Atributo2 from './CardComponent/Atributo2';
import Atributo3 from './CardComponent/Atributo3';
import Raridade from './CardComponent/Raridade';
import Trunfo from './CardComponent/Trunfo';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="card">
        <Name name={ cardName } />
        <Raridade raridade={ cardRare } />
        <Imagem img={ cardImage } alt={ cardName } />
        <Descricao descricao={ cardDescription } />
        <Atributo1 attr={ cardAttr1 } />
        <Atributo2 attr={ cardAttr2 } />
        <Atributo3 attr={ cardAttr3 } />
        <Trunfo trunfo={ cardTrunfo } />
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
