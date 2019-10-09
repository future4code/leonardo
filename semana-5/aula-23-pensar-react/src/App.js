import React from 'react';
import './App.css';
import { Cadastro } from './Cadastro'
import { Extrato } from './Extrato';

mostrarExtrato = () =>{
  
}

function App() {
  return (
    <div className="App">
      <Cadastro consultarExtratro={this.mostrarExtrato}/>
      <Extrato/>
    </div>
  );
}

export default App;
