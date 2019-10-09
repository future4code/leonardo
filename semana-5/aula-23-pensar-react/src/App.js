import React from 'react';
import './App.css';
import { Cadastro } from './Cadastro'
import { Extrato } from './Extrato';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      listaDespesas:[],
      
    }
    
}


  
  render(){
    let telaExibida
    if (!this.state.telaInicial ? telaExibida = <Cadastro consultarExtrato={this.exibirExtrato} /> : telaExibida = <Extrato/> )
  
    return (
    <div className="App">
      <Cadastro consultarExtrato={this.exibirExtrato} />
      <Extrato/> 
    </div>
  )
}
}

export default App;
