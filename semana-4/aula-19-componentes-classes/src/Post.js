import React from 'react';
import './Post.css'
import PropTypes from 'prop-types'
import imgLike from './images/favorite-white.svg'
import imgNotLike from './images/favorite.svg'
import imgComment from './images/comment_icon.svg'
export {Post}


class Post extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        imgemChange: false
      }
    
    }
    onShowAlternativeImage = () => {
      const mostraImagemAlternativaAtual = this.state.imgemChange
      const novoEstado = {
        imgemChange: !mostraImagemAlternativaAtual
      }
      this.setState(novoEstado)
      console.log(novoEstado)
    }
  
    render(){
        let linkImg = imgLike
        if(this.state.imgemChange){
          linkImg = imgNotLike
        }
    
  
  
    return (
    <div className="post-container">
        <div className="autor-content">
          <div className="img-autor">
            <img src={imagemAutor} alt=""/>
          </div>
          <div className="name-autor">
            <p>{props.autor}</p>
          </div>
        </div>
        <div className="img-content">
         <img src={props.imagem} alt=""/>
        </div>
        <div className="icons-content">
          <div className="like">
            <img src={props.imagemLike} onClick={this.onShowAlternativeImage} alt="" className="img-like"/>
          </div>
          <div className="comment">
            <img src={props.imagemComment}  alt="" className="img-comment"/>
          </div>
        </div>
    </div>
    
  );
}
}

Post.propTypes = {
    imagemAutor: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    imagemLike: PropTypes.string.isRequired,
    
    imagemComment: PropTypes.string.isRequired,
  }

  