import React from 'react';
import './App.css';
import {Linha} from './Linha/Linha'
import styled from 'styled-components'

const Container = styled.div `
  display:flex;
  justify-content:center;
  box-sizing: border-box;
  border:0;
  margin:0;
  padding:0;
`

const Tela = styled.div `
max-width: 600px;
height: 100vh;
display: flex;
flex-direction: column;
border-width: 1px;
border-style: solid;
border-color: black;
border-image: initial;
flex: 1 1 0%;
`
const EntradaMensagem = styled.section `
  flex-grow:0;
  margin-bottom: 20px;
`
const CaixaMensagem = styled.section `
display: flex;
flex-direction: column;
justify-content: flex-end;
flex: 1 1 0%;
padding: 20px;
   
`

const Usuario = styled.input `
width:20%;
`
const TextoDigitado = styled.input `
width: 60%;
`
const ButtonEnviar = styled.button `
  margin:0;
  border:0;
  padding:0;
  width:20%;
`
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
              texto={": " + linha.mensagem}
              />
    })
    return (
    <Container>
      <Tela>
        <CaixaMensagem>
          {exibirMensagens}
        </CaixaMensagem>
        <EntradaMensagem>
          <Usuario type="text" placeholder="usuario" value={this.state.nomeUsuario} onChange={this.onChangeUsuario}/>
          <TextoDigitado type="text" placeholder="Mensagem" value={this.state.mensagem} onChange={this.onChangeMensagem}/>
          <ButtonEnviar onClick={this.inserirMensagem}>Enviar</ButtonEnviar>
        </EntradaMensagem>
      </Tela>
    </Container>
  );
}
}
export default App;
