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
        imagemChange: false,
        likeCont: 0,
        mostraInput: false,
        commentCont: 0
      }
    
    }
    onShowAlternativeImage = () => {
      const mostraImagemAlternativaAtual = this.state.imagemChange
      const mostraLikeAlternativoAtual = this.state.likeCont
      const novoEstado = {
        imagemChange: !mostraImagemAlternativaAtual,
        likeChange: !mostraLikeAlternativoAtual
      }
      this.setState(novoEstado)
    }

    onShowCommentInput = () => {
      
      const novoEstado = {
        mostraInput: true
      }
  
      this.setState(novoEstado)
    }
    
    commentCont = () => {
      let commentContAtual = this.state.commentCont

      const novoEstado = {
        commentCont: commentContAtual + 1,
        mostraInput: false
      }
      this.setState(novoEstado)
    }
    render(){
        let linkImg = imgLike
        let likeContChange = this.state.likeCont
        let commentCont = this.state.commentCont
        let inputComments
        if(this.state.imagemChange){
          linkImg = imgNotLike
          likeContChange = 1
        }
        
        if(this.state.mostraInput){
          inputComments =
           ( <div className="comment-input">
              <input type="text" placeholder="Digite seu comentario"/>
              <button onClick={this.commentCont}>Enviar</button>
            </div>)
        }
  
    return (
    <div className="post-container">
        <div className="autor-content">
          <div className="img-autor">
            <img src={this.props.imagemAutor} alt=""/>
          </div>
          <div className="name-autor">
            <p>{this.props.autor}</p>
          </div>
        </div>
        <div className="img-content">
         <img src={this.props.imagem} alt=""/>
        </div>
        <div className="icons-content">
          <div className="like">
            <img src={linkImg} onClick={this.onShowAlternativeImage} alt="" className="img-like"/>
            <p>{likeContChange}</p>
          </div>
          <div className="comment">
            <img src={imgComment} onClick={this.onShowCommentInput}  alt="" className="img-comment"/>
            <p>{commentCont}</p>
          </div>
        </div>
        {inputComments}
    </div>
    
  );
}
}

Post.propTypes = {
    imagemAutor: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
  }

  