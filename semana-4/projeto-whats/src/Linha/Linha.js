import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
export {Linha}

const Negrito = styled.span `
  font-weight: bold;
`

const LinhaDeTexto = styled.p `
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`

class Linha extends React.Component {
  constructor(props){
      super(props);
      

  }

  render(){
    return (
    
      <LinhaDeTexto><Negrito>{this.props.nomeUsuario}</Negrito>:  {this.props.texto}</LinhaDeTexto>
    
  );
}
}

Linha.propTypes = {
    nomeUsuario: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
  }
export default Linha;