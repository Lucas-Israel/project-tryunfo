import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="imagem">
          Image
          <br />
          <input id="imagem" type="text" data-testid="image-input" />
        </label>
        <hr />
      </div>
    );
  }
}

export default Image;
