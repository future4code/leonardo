import React from 'react';
// import Inserir from './Inserir/Inserir'
// import Exibir from './Exibir/Exibir'
import './App.css';
import {Linha} from './Linha/Linha'

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        listaMensagem: [
          {
          nomeUsuario:'',
          mensagem:''
          },
        ]
      }
    }
  

  onChangeUsuario = (event) => {
    this.setState({nomeUsuario: event.target.value})
  }

  onChangeMensagem = (event) => {
    this.setState({mensagem: event.target.value})
  }

  inserirMensagem = () => {
     
    let capturaMensagem = {
        nomeUsuario: this.state.nomeUsuario,
        mensagem: this.state.mensagem,
        
      }
      const listaMensagemCopia = [ ...this.state.listaMensagem, capturaMensagem]
      
      this.setState({
        listaMensagem: listaMensagemCopia,
        nomeUsuario:'',
        mensagem:''
      })
  }
  
    
  
  
  render(){
    const exibirMensagens = this.state.listaMensagem.map((linha,index) =>{
      return <Linha
              key={index}
              nomeUsuario={linha.nomeUsuario}
              texto={linha.mensagem}
              />
    })
    return (
    <section>
      {exibirMensagens}
      <input type="text" placeholder="usuario" value={this.state.nomeUsuario} onChange={this.onChangeUsuario}/>
      <input type="text" placeholder="Mensagem" value={this.state.mensagem} onChange={this.onChangeMensagem}/>
      <button onClick={this.inserirMensagem}>Enviar</button>
    </section>
  );
}
}
export default App;
