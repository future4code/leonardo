import React from 'react';
import './ImageButton.css'
import PropTypes from 'prop-types'

export function ImageButton(props) {
  return (
    <div className="ImageButton">
        <div className="img">
            <img src={props.imagem} alt=""/>
        </div>
        <div className="text">
            <p>{props.text} </p>
        </div> 
    </div>
  )
}

ImageButton.propTypes = {
    imagem: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }