import React from 'react';
import PropTypes from 'prop-types';
import Input from './FormComponents/Input';
import TextArea from './FormComponents/TextArea';
import Atributo1 from './FormComponents/Atributo1';
import Atributo2 from './FormComponents/Atributo2';
import Atributo3 from './FormComponents/Atributo3';
import Image from './FormComponents/Image';
import Select from './FormComponents/Select';
import Strunfo from './FormComponents/Strunfo';
import BtnSave from './FormComponents/BtnSave';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form">
        <div>
          <Input cardName={ cardName } oninputChange={ onInputChange } />
          <TextArea cardDescription={ cardDescription } onChange={ onInputChange } />
          <Atributo1 cardAttr1={ cardAttr1 } onChange={ onInputChange } />
          <Atributo2 cardAttr2={ cardAttr2 } onChange={ onInputChange } />
          <Atributo3 cardAttr3={ cardAttr3 } onChange={ onInputChange } />
          <Image cardImage={ cardImage } onChange={ onInputChange } />
          <Select cardRare={ cardRare } onChange={ onInputChange } />
          {hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : <Strunfo
            cardTrunfo={ cardTrunfo }
            onChange={ onInputChange }
          />}
          <hr />
          <BtnSave
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ onSaveButtonClick }
          />
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
