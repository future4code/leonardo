import React from 'react';
import { Tarefa } from './Tarefa'
import './App.css';
import styled from 'styled-components'

const Main = styled.div `
box-sizing: border-box;
display: flex;
flex-flow: column nowrap;
flex: 1 0 auto;
place-content: space-between center;
align-items: center;
min-height: 100vh;
padding: 1.5em;
`

const CriarTarefa = styled.div `
  display:flex;
  align-itens: center;
  width: 400px;
  justify-content: space-between;
`

const TarefasParaFazer = styled.section `
  display:flex;
  flex-direction:column;
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listaTarefa: [],

    }
  }
  handleOnChangeTarefa = (event) => {
    this.setState({ nomeTarefa: event.target.value });
  };
  inserirTarefas = () => {
    
    let capturaTarefa = {
      nomeTarefa:this.state.nomeTarefa
    }
    const listaTarefaCopia = [ ...this.state.listaTarefa, capturaTarefa]
    this.setState({
      listaTarefa: listaTarefaCopia
    })
    console.log(capturaTarefa)
  }

  apagarTodasMensagens =() => {
    const zerarTarefas = []
    this.setState({
      listaTarefa: zerarTarefas
      })
  }
  
  render (){
    let exibirTarefas = this.state.listaTarefa.map((linha,index) =>{
      return <Tarefa
              key={index}
              nomeTarefa={linha.nomeTarefa}
              checkTarefa={linha.checkTarefa}
              apagarTarefa={linha.apagarTarefa}
              />
    })
    let exibirTarefasFeitas = this.state.listaTarefa.filter((linha) =>{
      return linha.nomeTarefa
    })
    

    return (
    <Main>
      <CriarTarefa>
        <div>Tarefas</div>
        <div><button onClick={this.inserirTarefas}>Criar Tarefa</button></div>
        <div><button onClick={this.apagarTodasMensagens}>Apagar Todas As Tarefas</button></div>
      </CriarTarefa>
      <TarefasParaFazer>
      {exibirTarefas}
      </TarefasParaFazer>
      {exibirTarefasFeitas}
    </Main>
  );
}
}

export default App;
