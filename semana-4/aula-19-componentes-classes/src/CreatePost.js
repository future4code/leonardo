import React from 'react';
import './Post.css'
import PropTypes from 'prop-types'
export {CreatePost}


class CreatePost extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        
      }
    
    }
    
    onChangeNome = (event) => {
        this.setState({nomePost: event.target.value})
    }
    onChangeFotoPerfil = (event) => {
        this.setState({fotoPerfil: event.target.value})
    }
    onChangeImagemPost = (event) => {
        this.setState({imagemPost: event.target.value})
    }
    
    
    render(){
        
        
    return (
    <div className="novoPost">
        <p>Digite o seu nome</p>
        <input type="text" value={this.nomePost} onChange={this.onChangeNome}/>
        <p>Insira a foto do seu perfil</p>
        <input type="text" value={this.state.fotoPerfil} onChange={this.onChangeFotoPerfil}/>
        <p>Insira sua foto</p>
        <input type="text" value={this.state.imagemPost} onChange={this.onChangeImagemPost}/>
        <div>
        <button onClick={this.props.inserirNovoPost}>Enviar</button>
        </div>
    </div>
    
  );
}
}

CreatePost.propTypes = {
    inserirNovoPost: PropTypes.func.isRequired
  }
