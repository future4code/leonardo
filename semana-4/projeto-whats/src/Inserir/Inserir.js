import React from 'react';



class Inserir extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        nomeUsuario:'',
        mensagem:''
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
   
    console.log(capturaMensagem)
    
}
  
  render(){
    return (
    <section>
      <input type="text" placeholder="usuario" value={this.state.nomeUsuario} onChange={this.onChangeUsuario}/>
      <input type="text" placeholder="Mensagem" value={this.state.mensagem} onChange={this.onChangeMensagem}/>
      <button onClick={this.inserirMensagem}>Enviar</button>
    </section>
  );
}
}

export default Inserir;

