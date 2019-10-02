import React from 'react';
import './Post.css'
import PropTypes from 'prop-types'

export function Post(props) {
  return (
    <div className="post-container">
        <div className="autor-content">
          <div className="img-autor">
            <img src={props.imagemAutor} alt=""/>
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
            <img src={props.imagemLike} alt="" className="img-like"/>
          </div>
          <div className="comment">
            <img src={props.imagemComment}  alt="" className="img-comment"/>
          </div>
        </div>
    </div>
    
  )
}

Post.propTypes = {
    imagemAutor: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    imagemLike: PropTypes.string.isRequired,
    imagemComment: PropTypes.string.isRequired,
  }