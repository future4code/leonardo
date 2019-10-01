import React from 'react';
import PropTypes from 'prop-types'

export function PageSelection(props) {
  return (
    <section className="PageSelection">
        <h1>{props.titulo}</h1>
            {props.children}
        

    </section>
  )
}

PageSelection.propTypes = {
    titulo: PropTypes.string.isRequired,
  }