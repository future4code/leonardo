import React from 'react';
import './SmallCard.css'
import PropTypes from 'prop-types'

export function SmallCard(props) {
  return (
    <div className="SmallCard">
        <div className="img">
            <img src={props.imagem} alt=""/>
        </div>
        <div className="text-container">
            <div className="text">
                <h4>{props.text} </h4>
            </div>
            <div className="description">
                <p>{props.conteudo}</p>
            </div>
        </div>

    </div>
  )
}

SmallCard.propTypes = {
    imagem: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    conteudo: PropTypes.string.isRequired
  }