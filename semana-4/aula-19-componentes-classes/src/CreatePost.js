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
    inserirNovoPost = () => {
        console.log("fui clicado")
    }
    render(){
        
  
    return (
    <div className="novoPost">
        <p>Digite o seu nome</p>
        <input type="text" value={this.props.nomePost}/>
        <p>Insira a foto do seu perfil</p>
        <input type="text"/>
        <p>Insira sua foto</p>
        <input type="text"/>
        <div>
        <button onClick={this.props.inserirNovoPost}>Enviar</button>
        </div>
    </div>
    
  );
}
}

CreatePost.propTypes = {
    nomePost: PropTypes.string.isRequired,
    fotoPerfil: PropTypes.string.isRequired,
    imagemPost: PropTypes.string.isRequired,
    inserirNovoPost: PropTypes.func.isRequired
  }
