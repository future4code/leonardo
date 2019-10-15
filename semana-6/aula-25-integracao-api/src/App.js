import React from 'react';
import Cadastro from './components/Cadastro/Cadastro';
import Exibiçao from './components/Exibicao/Exibicao';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      emailValue: "",
      tela:"",
    };
  }
  
  exibirTela2 = () => {
    const novaTela = 2
    this.setState({tela: novaTela })
    console.log(this.state.tela)
  }
  render(){
  return (
    
    <div className="App">
      <Cadastro exibirTela={this.exibirTela2}/>
      <Exibiçao/>
    </div>
  );
}
}

export default App;
