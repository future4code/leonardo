import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import './App.css';

const LinhaTarefa = styled.article `
    margin-bottom: 10px;
`
export class Tarefa extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        tarefa: {
            nomeTarefa:'',
            checkTarefa:'',
            apagarTarefa:''
        }
    }
  }
  handleOnChangeTarefa = (event) => {
    this.setState({ nomeTarefa: event.target.value });
  };

  handleOnChangeCheck = (event) => {
    this.setState({ checkTarefa: event.target.checked });
  };
  render (){
  return (
    <LinhaTarefa>
        <input
            type="checkbox"
            checked={this.state.checkTarefa}
            onChange={this.handleOnChangeCheck} 
            />
        <input
            onChange={this.handleOnChangeTarefa} 
            value={this.state.nomeTarefa}
            type="text"/>
        <button onClick={this.props.apagarTarefa}>Apagar</button>
    </LinhaTarefa>
  );
}
}
Tarefa.propTypes = {
    checkTarefa: PropTypes.string.isRequired,
    nomeTarefa: PropTypes.string.isRequired,
    apagarTarefa: PropTypes.func.isRequired
  }
export default Tarefa;
