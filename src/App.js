import React from 'react';
import Card from './components/Card';
import CardRender from './components/CardRender';
import NameFilter from './components/Filters/NameFilter';
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
      cartas: [],
      hasTrunfo: false,
      filtro: [],
      bool: true,
    };
  }

  trunfoCheck = () => {
    const { cartas } = this.state;
    const value = cartas.map((element) => element.cardTrunfo === true).includes(true);
    this.setState({ hasTrunfo: value });
  }

  hndlDel = ({ target }) => {
    const { cartas } = this.state;
    const cartaId = target.parentNode.parentNode.id;
    const carta = Math.floor(document.getElementById(cartaId).id);
    this.setState({ cartas: cartas.filter((cart) => cart !== cartas[carta]) },
      () => { this.trunfoCheck(); });
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
      cardTrunfo: false,
    });
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    this.setState((before) => ({
      cartas: [...before.cartas, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
    }), () => { this.trunfoCheck(); });
  }

  nFilter = ({ target }) => {
    const { cartas } = this.state;
    const filtrado = cartas.filter((carta) => carta.cardName.includes(target.value));
    this.setState({
      filtro: filtrado,
      bool: target.value.length <= 0,
    });
  };

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
      hasTrunfo,
      cartas,
      filtro,
      bool,
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
            hasTrunfo={ hasTrunfo }
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
        <div className="issonaoacaba">
          <div className="filtersSection">
            Filtros
            <div className="filters">
              <NameFilter nFilter={ this.nFilter } />
            </div>
          </div>
        </div>
        <CardRender
          cartas={ filtro.length < 1 && bool ? cartas : filtro }
          hndlDel={ this.hndlDel }
        />
      </div>
    );
  }
}

export default App;
