import React from 'react';
import PropTypes from 'prop-types'
export {Linha}

class Linha extends React.Component {
  constructor(props){
      super(props);
      

  }

  render(){
    return (
    <article>
      <p><span>{this.props.nomeUsuario}</span> {this.props.texto}</p>
    </article>
  );
}
}

Linha.propTypes = {
    nomeUsuario: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
  }
export default Linha;