import React from 'react';
import Cadastro from './components/Cadastro/Cadastro';
import Exibicao from './components/Exibicao/Exibicao';
import styled from 'styled-components';
import './App.css';

const AppWrapper = styled.div `
  display:flex;
  justify-content:center;
  vertical-align:middle;
`

const ButtonWrapper = styled.div `
  display:flex;
  justify-content:center;
`

const Button = styled.button`
  width: 200px;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      emailValue: "",
      view:false,
      buttonText: "Exibir Usuários"
    };
  }
  
  onChangeView = () => {
    if (!this.state.view){
      this.setState({
        view:true,
        buttonText:"Voltar"
      })
    }else{
      this.setState({
        view:false,
        buttonText:"Exibir Usuários"
      })
      }
    }

  render(){
    return (
      <div>
      <AppWrapper>
        {this.state.view ? <Exibicao onShowLogin={this.onChangeView} /> 
        : <Cadastro onShowUsers={this.onChangeView} />}
      </AppWrapper>
      <ButtonWrapper><Button onClick={this.onChangeView} > { this.state.buttonText} </Button></ButtonWrapper>
      </div>
    );
  }
}

export default App;
