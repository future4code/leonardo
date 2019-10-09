import React from 'react';
import './App.css';
import Props from 'prop-types'

function Etapa1 (props){
  
  return (
    <div>
      <h3>ETAPA 1 - DADOS GERAIS</h3>
      <p>1. Qual o seu nome?</p>
      <input type="text" onChange={props.nomeEtapa1}/>
      <p>2. Qual a sua idade?</p>
      <input type="text" onChange={props.idadeEtapa1}/>
      <p>3. Qual a seu email?</p>
      <input type="text" onChange={props.emailEtapa1}/>
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
        <button onClick={props.aoClicarFim} >Enviar</button>
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
          <select >
            <option value="Curso técnico"> Curso técnico </option>
            <option value="Curso de Inglês"> Curso de Inglês </option>
            <option value="Não tenho curso complementar"> Não tenho curso complementar </option>
          </select>
          <button onClick={props.aoClicarFim} >Enviar</button>
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
        if (!this.verificaNome()){
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
    }
      verificaNome = () => {
        if(!this.state.nome){
          alert("Informar o nome")
          return true
        }
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
    
      aoClicarFim = () => {
        const novaTela = 4
        this.setState({
          telaInicial: novaTela
        })
        console.log("ta usando")
        console.log(this.state.telaInicial  )
        
      }

      onChangeNome = (event) => {
        this.setState({nome: event.target.value})
        console.log(this.state.nome)
      }
      render() {
        let verifica


        if (this.state.telaInicial === 0){
          verifica = <Etapa1 aoClicar={this.aoClicar} aoSelecionarEnsino={this.funcaoVerificaEnsino} nomeEtapa1={this.onChangeNome} value={this.state.nome}/>
        }else if (this.state.telaInicial === 2  ){
          verifica = <Etapa2 aoClicarFim={this.aoClicarFim}/>
        }else if (this.state.telaInicial === 3  ){
          verifica = <Etapa3 aoClicarFim={this.aoClicarFim}/>
        }else if (this.state.telaInicial === 4 ){
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