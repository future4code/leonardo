import React from 'react';
import './App.css';
import Props from 'prop-types'


class Etapa1 extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        telaInicial: 0,
      }
    }
  
    aoClicar = () => {
      const novaTela = 2
      this.setState({
        telaInicial: novaTela
      })
    }

    aoClicarFim = () => {
      const novaTela = 3
      this.setState({
        telaInicial: novaTela
      })
    }
  
    render() {
      let verifica
      if (this.state.telaInicial === 0 ){
        verifica = <Etapa1 aoClicar={this.aoClicar}/>
      }else if (this.state.telaInicial === 2 ){
        verifica = <Etapa2 aoClicar={this.aoClicarFim}/>
      }else if (this.state.telaInicial === 2){
        verifica = <Etapa3 aoClicar={this.aoClicarFim}/>
      }else {
        verifica = <EtapaFinal />
      }
      return (
        <div className="App">
          {verifica}
        </div>
      );
    }
  }

export default App;