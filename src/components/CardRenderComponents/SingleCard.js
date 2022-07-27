import React from 'react';
import PropTypes from 'prop-types';
import NameR from './NameR';
import Rarity from './Rarity';
import ImageR from './ImageR';
import Atributo1 from './Atributo1';
import Atributo2 from './Atributo2';
import Atributo3 from './Atributo3';
import DescR from './DescR';
import TrunfoR from './TrunfoR';

class SingleCard extends React.Component {
  render() {
    const { cartas } = this.props;
    const {
      cardName,
      cardRare,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = cartas;
    return (
      <div className="card cardIdentifier">
        <NameR cardName={ cardName } />
        <Rarity cardRare={ cardRare } />
        <ImageR cardName={ cardName } cardImage={ cardImage } />
        <DescR cardDescription={ cardDescription } />
        <Atributo1 cardAttr1={ cardAttr1 } />
        <Atributo2 cardAttr2={ cardAttr2 } />
        <Atributo3 cardAttr3={ cardAttr3 } />
        <TrunfoR cardTrunfo={ cardTrunfo } />
      </div>
    );
  }
}

SingleCard.propTypes = {
  cartas: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
  ).isRequired,
};

export default SingleCard;
