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
  inserirTarefas = () => {
    
    let capturaTarefa = {}
    const listaTarefaCopia = [ ...this.state.listaTarefa, capturaTarefa]
    this.setState({
      listaTarefa: listaTarefaCopia
    })
    
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
              apagarTarefa={this.apagarTarefa}
              />
    })
    console.log(exibirTarefas)

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
    </Main>
  );
}
}

export default App;
