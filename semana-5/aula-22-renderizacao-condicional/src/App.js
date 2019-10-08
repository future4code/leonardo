import React from 'react';
import './App.css';

function Etapa1 (props){
  
  return (
    <div className="App">
      <h3>ETAPA 1 - DADOS GERAIS</h3>
      <p>1. Qual o seu nome?</p>
      <input type="text"/>
      <p>2. Qual a sua idade?</p>
      <input type="text"/>
      <p>3. Qual a seu email?</p>
      <input type="text"/>
      <p>4. Qual a sua escolaridade?</p>
      <select>
        <option value="Ensino Médio Incompleto"> Ensino Médio Incompleto </option>
        <option value="Ensino Médio Completo"> Ensino Médio Completo </option>
        <option value="Ensino Superior Incompleto"> Ensino Superior Incompleto </option>
        <option value="Ensino Superior Completo"> Ensino Superior Completo </option>
      </select>
      <button onClick={this.aoClicar}>Enviar</button>
    </div>
  )
  }

  function Etapa2 (props){
    return (
      <div className="App">
        <h3>ETAPA 2 - INFORMAÇÕES ENSINO SUPERIOR</h3>
        <p>5. Qual o curso?</p>
        <input type="text"/>
        <p>2. Qual a unidade de ensino?</p>
        <input type="text"/>
        <button onClick={this.aoClicar} >Enviar</button>
      </div>
    )
    }
  class App extends React.Component {
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
    
      render() {
        let verifica
        if (this.state.telaInicial === 0){
          verifica = <Etapa1/>
        }else{
          verifica = <Etapa2/>
        }
        return (
          <div className="App">
            {verifica}
          </div>
        );
      }
    }

export default App;






// function MensagemParaUsuarioLogado(props) {
//   return(
//     <div>
//       <h1> Bem vindo de volta! </h1>
//       <button className="CustomBtn"> Feed </button>
//       <button className="CustomBtn"> Lista de Amigos </button>
//     </div>
//   ) ;
// }

// function MensagemParaLogar(props) {
//   return <h1> Por favor, logue-se! </h1>;
// }

// function Mensagem(props) {
//   if (props.estaLogado) {
//     return <MensagemParaUsuarioLogado />;
//   }
//   return <MensagemParaLogar />;
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       estaLogado: false,
//       mensagemDoBotao: "Login"
//     }
//   }

//   aoClicar = () => {
//     const novaMensagemDoBotao = this.state.estaLogado ? "Login" : "Sair"
//     this.setState({
//       mensagemDoBotao: novaMensagemDoBotao,
//       estaLogado: !this.state.estaLogado
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <Mensagem estaLogado={this.state.estaLogado}/>
//         <button className="CustomBtn" onClick = {this.aoClicar}>{ this.state.mensagemDoBotao }</button>
//       </div>
//     );
//   }
// }

// export default App;

