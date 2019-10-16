import React from 'react';
import styled from 'styled-components'
import axios from 'axios';

const UserElement = styled.div `
  display:flex;
  justify-content:space-between;
`

const DeleteUser = styled.div`
  color: red;
`

class Exibicao extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        usuariosCadastrados: [],
      };
    }

  componentDidMount() {
    this.getUsers();
  }
  
  getUsers = () => {
      axios.get(
      "https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers",
      {
        headers: {
            "api-token": "b55e5b6257ecc2bf0920da958f84ebd0"
        }
      })
    
    .then(response => {
      this.setState({ usuariosCadastrados: response.data.result });
    })

    .catch(error => {
      window.alert(`Ocorreu um erro: ${error} `)
    });
  };
    
  deleteUser = (usuario) => {
    if(window.confirm(`Tem certeza que deseja excluir o usuario ${usuario.name}?`)){
      axios.delete(
        `https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?id=${usuario.id}`,
        {
          headers: {
              "api-token": "b55e5b6257ecc2bf0920da958f84ebd0"
          }
        }
      )

      .then(r => {
        window.alert(`Usuário deletado com sucesso`)
        this.getUsers()
      })
      .catch(error => {
        window.alert(`Ocorreu um erro ao excluir o usuario ${usuario.name}. ${error} `)
      });
    };
  }

  render(){
    const listaUsuarios = this.state.usuariosCadastrados.map(
      cadaUsuario => {
        return <UserElement key={cadaUsuario.id}>
                  <div> {cadaUsuario.name} </div>
                  <button onClick={()=> {this.deleteUser(cadaUsuario)}}>
                      <DeleteUser> X </DeleteUser>
                  </button>
                </UserElement>;
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
