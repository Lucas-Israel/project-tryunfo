import React from 'react';
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
  render() {
    return (
      <form>
        <div>
          <Input />
          <TextArea />
          <Atributo1 />
          <Atributo2 />
          <Atributo3 />
          <Image />
          <Select />
          <Strunfo />
          <BtnSave />
        </div>
      </form>
    );
  }
}

export default Form;
