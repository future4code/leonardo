import React from 'react';
import './App.css';
​
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      valor1: '',
      valor2: '',
      valor3: '',
      mostraTitulo: false,
      mostraImagemAlternativa: false,
    }
  }
​
  onChangeValue1 = (event) => {
    const valorNovo = event.target.value;
    const novoEstado = {
      valor1: valorNovo,
    };
​
    this.setState(novoEstado);
  }
​
  onChangeValue2 = (event) => {
    const valorNovo = event.target.value;
    const novoEstado = {
      valor2: valorNovo,
    };
​
    this.setState(novoEstado);
  }
​
  onChangeValue3 = (event) => {
    const valorNovo = event.target.value;
    const novoEstado = {
      valor3: valorNovo,
    };
​
    this.setState(novoEstado);
  }
​
  onClickButtonTitulo = () => {
    const mostraTituloAtual = this.state.mostraTitulo;
​
    const novoEstado = {
      mostraTitulo: !mostraTituloAtual
    }
​
    this.setState(novoEstado)
  }
​
  onResetValues = () => {
    this.setState({
      valor1: '',
      valor2: '',
      valor3: '',
    })
  }
​
  onShowAlternativeImage = () => {
    const mostraImagemAlternativaAtual = this.state.mostraImagemAlternativa;
​
    const novoEstado = {
      mostraImagemAlternativa: !mostraImagemAlternativaAtual
    }
​
    this.setState(novoEstado)
  }
​
  render(){
    let titulo;
    let linkDaImagem = "https://picsum.photos/200/200";
​
    if(this.state.mostraTitulo === true){
      titulo = (<h1>Oi! Eu sou um título</h1>)
    }
​
    if(this.state.mostraImagemAlternativa === true) {
      linkDaImagem = "https://picsum.photos/500/300"
    }
​
    return (
      <div className="App">
        <button onClick={this.onResetValues}>Limpa Campos</button>
        <hr/>
        <input
          placeholder="Valor 1"
          type="text"
          onChange={this.onChangeValue1}
          value={this.state.valor1}
        />
        <input
          placeholder="Valor 2"
          type="text"
          onChange={this.onChangeValue2}
          value={this.state.valor2}
        />
        <input
          placeholder="Valor 3"
          type="text"
          onChange={this.onChangeValue3}
          value={this.state.valor3}
        />
        <hr/>
        <h1>{this.state.valor1}</h1>
        <h2>{this.state.valor2}</h2>
        <h3>{this.state.valor3}</h3>
        <hr/>
        <button onClick={this.onClickButtonTitulo}>Mostra Título</button>
        {titulo}
        <hr/>
        <input
          type="checkbox"
          checked={this.state.mostraImagemAlternativa}
          onChange={this.onShowAlternativeImage}
        />
        <img src={linkDaImagem} alt="img"/>
      </div>
    );
  }
}
​
export default App;
Recolher