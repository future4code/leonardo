import React from 'react';
import './App.css';
import Props from 'prop-types'

function Etapa1 (props){
  
  return (
    <div>
      <h3>ETAPA 1 - DADOS GERAIS</h3>
      <p>1. Qual o seu nome?</p>
      <input type="text"/>
      <p>2. Qual a sua idade?</p>
      <input type="text"/>
      <p>3. Qual a seu email?</p>
      <input type="text"/>
      <p>4. Qual a sua escolaridade?</p>
      <select onChange ={props.aoSelecionarEnsino}>
        <option value="Ensino Médio Incompleto"> Ensino Médio Incompleto </option>
        <option value="Ensino Médio Completo"> Ensino Médio Completo </option>
        <option value="Ensino Superior Incompleto"> Ensino Superior Incompleto </option>
        <option value="Ensino Superior Completo"> Ensino Superior Completo </option>
      </select>
      <button onClick={props.aoClicar}>Enviar</button>
    </div>
  )
  }

  function Etapa2 (props){
    return (
      <div>
        <h3>ETAPA 2 - INFORMAÇÕES ENSINO SUPERIOR</h3>
        <p>5. Qual o curso?</p>
        <input type="text"/>
        <p>6. Qual a unidade de ensino?</p>
        <input type="text"/>
        <button onClick={props.aoClicar} >Enviar</button>
      </div>
    )
    }

    function Etapa3 (props){
      return (
        <div>
          <h3>ETAPA 3 - INFORMAÇÕES GERAIS DO ENSINO</h3>
          <p>5. POR QUE VOCE NAO TERMINOU UM CURSO DE GRADUACAO?</p>
          <input type="text"/>
          <p>6. VOCE FEZ UM CURSO COMPLEMENTAR?</p>
          <input type="text"/>
          <button onClick={props.aoClicar} >Enviar</button>
        </div>
      )
      }

      function EtapaFinal (){
        return (
          <div>
            <h3>FIM DA PESQUISA</h3>
            <p>Muito Obrigado pela sua participação</p>
            
          </div>
        )
        }
  class App extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          telaInicial: 0,
          ensino: 'incompleto',
        }
      }
    
      aoClicar = () => {
        if(this.state.ensino ==="completo"){
          console.log(this.state.ensino)
          const novaTela = 2
        this.setState({
          telaInicial: novaTela
        })
      }else {
        const novaTela = 3
        this.setState({
          telaInicial: novaTela
        })
      }
      }

      aoClicarFim = () => {
        const novaTela = 4
        this.setState({
          telaInicial: novaTela
        })
      }



      funcaoVerificaEnsino = (event) => {
        let ensinoListado = event.target.value
        if (ensinoListado === "Ensino Médio Incompleto" || ensinoListado === "Ensino Médio Completo"){
        this.setState({
          ensino: "incompleto"
        })
      }else {
        this.setState({
          ensino: "completo"
        })
      }
        console.log(this.state.ensino)
      }
    
      render() {
        let verifica
        
        // if (this.state.telaInicial === 0 && this.state.ensino === ''){
        //   verifica = <Etapa1 aoClicar={this.aoClicar} aoSelecionarEnsino={this.funcaoVerificaEnsino}/>
        // }else if (this.state.telaInicial === 0  && this.state.ensino === "incompleto" ){
        //   verifica = <Etapa2 aoClicar={this.aoClicarFim}/>
        // }else if (this.state.telaInicial === 0  && this.state.ensino === "completo"){
        //   verifica = <Etapa2 aoClicar={this.aoClicarFim}/>
        // }else if (this.state.telaInicial === 3){
        //   verifica = <EtapaFinal />
        // }


        if (this.state.telaInicial === 0){
          verifica = <Etapa1 aoClicar={this.aoClicar} aoSelecionarEnsino={this.funcaoVerificaEnsino}/>
        }else if (this.state.telaInicial === 2  ){
          verifica = <Etapa2 aoClicar={this.aoClicarFim}/>
        }else if (this.state.telaInicial === 3  ){
          verifica = <Etapa2 aoClicar={this.aoClicarFim}/>
        }else if (this.state.telaInicial === 4){
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