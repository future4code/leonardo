import React from 'react';
import Styled from 'styled-components'
import PropTypes from 'prop-types';
import axios from 'axios';

class Exibicao extends React.Component {
    constructor() {
        super();
        this.state = {
        usuariosCadastrados: [],
        };
      }
      componentDidMount() {
        this.getUsers();
      }
    
      
      getUsers = () => {
        const request = axios.get(
          "https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers",
          {
            headers: {
                "api-token": "b55e5b6257ecc2bf0920da958f84ebd0"
            }
          }
        );
    
        request
          .then(response => {
            console.log(response);
            this.setState({ usuariosCadastrados: response.data.result });
          })
          .catch(error => {
            console.log(error);
            this.setState({
              errorMessage:
                "Ocorreu um erro! Atualize a página para tentar novamente!"
            });
          });
      };
      
    render(){
        const listaUsuarios = this.state.usuariosCadastrados.map(
            cadaUsuario => {
            //   const funcaoIntermediaria = () => {
            //     this.getPlaylistMusics(cadaUsuario.name);
            //   };
              return <li >{cadaUsuario.name}</li>;
            }
          );
        
        return (
        <div>
        <p>Usuarios Cadastrados</p>
        {listaUsuarios}
        </div>
        );
    }
}
export default Exibicao;
