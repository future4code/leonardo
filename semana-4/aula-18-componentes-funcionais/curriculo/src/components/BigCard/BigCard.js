import React from 'react';
import './BigCard.css'
import PropTypes from 'prop-types'

export function BigCard(props) {
  return (
    <div className="BigCard">
        <div className="img-person">
            <img src={props.imagem} alt=""/>
        </div>
        <div className="name-container">
            <div className="name">
                <h4>{props.nome}</h4>
            </div>
            <div className="description">
                <p>{props.descricao}</p>
            </div>
        </div>

    </div>
  )
}

BigCard.propTypes = {
    imagem: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired
  }