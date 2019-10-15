import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';


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

    exibirUsuarios = () => {

    }

    addUser =() => {
        // url: "https://us-central1-spotif4.cloudfunctions.net/api/playlists/createPlaylist"
        // token: "00e30928fa107f4157583e5631d18f95"
        const data = {
          name: this.state.nameValue,
          email: this.state.emailValue
        }
      
        const request = axios.post('https://us-central1-future4-users.cloudfunctions.net/api/users/createUser', data, {
          headers: {
            "api-token": "b55e5b6257ecc2bf0920da958f84ebd0"
          }
        })
      
        request.then((response) => {
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
      }

      mudarTela = () => {
          this.props.exibirTela()
      }
    render(){
        
        console.log(this.state.nameValue)
        return (
        <div>
        <p>Nome</p>
        <input onChange={this.onChangeNameValue} value={this.state.nameValue} type="text"/>
        <p>E-mail</p>
        <input onChange={this.onChangeEmailValue} value={this.state.emailValue} type="text"/>
        <div><button onClick={this.addUser}>Enviar</button></div>
        <div><button onClick={this.mudarTela} >Exibir Usuarios</button></div>
        </div>
        );
    }
}
export default Cadastro;
