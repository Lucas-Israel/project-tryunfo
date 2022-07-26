import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  validacao = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const a = Math.floor(cardAttr1);
    const b = Math.floor(cardAttr2);
    const c = Math.floor(cardAttr3);
    const math = a + b + c;
    const d = 210;
    if (Object.values(this.state).includes('')
      || cardAttr1 > '90'
      || cardAttr1 < '0'
      || cardAttr2 > '90'
      || cardAttr2 < '0'
      || cardAttr3 > '90'
      || cardAttr3 < '0'
      || math > d
    ) {
      this.setState({ isSaveButtonDisabled: true });
    } else { this.setState({ isSaveButtonDisabled: false }); }
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    let { value } = target;
    if (name === 'cardTrunfo') value = target.checked;
    this.setState({ [name]: value }, () => { this.validacao(); });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
    });
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
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div className="avo">
        <h1 className="h1">Tryunfo</h1>
        <div className="pai">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
      </div>
    );
  }
}

export default App;
