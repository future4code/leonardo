import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Button = styled.button`
  width: 200px;
`

const MainWrapper = styled.div`
  width: 200px;
`

const Input = styled.input`
  width: 200px;
`
class Cadastro extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        nameValue: "",
        emailValue: "",
      };
    }

  onChangeNameValue = (event) => {
      this.setState({
          nameValue: event.target.value
      })
  }

  onChangeEmailValue = (event) => {
      this.setState({
          emailValue: event.target.value
      })
  }

  addUser =() => {

    const data = {
      name: this.state.nameValue,
      email: this.state.emailValue
    }
  
    const request = 
      axios.post('https://us-central1-future4-users.cloudfunctions.net/api/users/createUser',
      data, {
        headers: {
          "api-token": "b55e5b6257ecc2bf0920da958f84ebd0"
        }
      })
  
    request.then(() => {
      window.alert("Usuário cadastrado com sucesso")
    }).catch((error) => {
      window.alert(`Ocorreu um erro ao cadastrar o usuário. Erro : ${error}`)
    })
    this.setState({nameValue:"", emailValue:""})
  }

  render(){
      
    return (
    <MainWrapper>
    <p>Nome</p>
    <Input onChange={this.onChangeNameValue} value={this.state.nameValue} type="text"/>
    <p>E-mail</p>
    <Input onChange={this.onChangeEmailValue} value={this.state.emailValue} type="text"/>
    <div><Button onClick={this.addUser}>Enviar</Button></div>
    </MainWrapper>
    );
  }
}
export default Cadastro;
