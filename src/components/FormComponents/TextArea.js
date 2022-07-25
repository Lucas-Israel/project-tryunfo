import React from 'react';

class TextArea extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="textarea">
          Descrição
          <br />
          <textarea id="textarea" data-testid="description-input" />
        </label>
        <hr />
      </div>
    );
  }
}

export default TextArea;
