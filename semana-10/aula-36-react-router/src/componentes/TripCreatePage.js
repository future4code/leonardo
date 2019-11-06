import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { routes } from '../containers/Router'
import { Card, Button } from '@material-ui/core'
import { getTrips } from '../api'

const AppWrapper = styled.div`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
`
const CardStyled = styled(Card)`
  width: 400px;
  display:flex;
  flex-direction:column;
`
const Formstyled = styled.form`
  display:grid;
`

const Inputstyled = styled.input`
  margin:5px 0;

`
class TripCreatePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planet:"Mercúrio"
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }


  render() {
    return (
      <AppWrapper>
        <CardStyled>
          <h1>Criar Viagem</h1>
          <Formstyled onSubmit={this.handleOnSubmit} >
            <h3>Nome</h3>
            <Inputstyled
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required={true}
              pattern="[a-zA-Z]{5,}"
              title="preencha algo valido" />
            <p>Planeta</p>
            <select 
              name="planet"
              onChange={this.handleChange}
              value={this.state.planet}
              required={true} 
              >
                <option value="Mercúrio" name="Mercúrio" >Mercúrio</option>
                <option value="Vênus" name="Vênus" >Vênus</option>
                <option value="Terra" name="Terra" >Terra</option>
                <option value="Marte" name="Marte" >Marte</option>
                <option value="Júpiter" name="Júpiter" >Júpiter</option>
                <option value="Saturno" name="Saturno" >Saturno</option>
                <option value="Urano" name="Urano" >Urano</option>
                <option value="Netuno" name="Netuno" >Netuno</option>
                
            </select>
            <p>Data</p>
            <Inputstyled
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              min={new Date().toISOString().split("T")[0]}
              required={true} 
            />
            <p>Descrição</p>
            <Inputstyled
              rows="5"
              cols="33"
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              pattern="\s*\S+(?:\s+\S+){4,}\s*$"/>
            <p>Duração em dias</p>
            <Inputstyled
              type="number"
              name="durationInDays"
              onChange={this.handleChange}
              value={this.state.durationInDays} >

            </Inputstyled>


            <Button type='submit'>Enviar</Button>
          </Formstyled>
          <Button onClick={this.props.goToLoginPage}>login</Button>
          <Button onClick={this.props.goToTripCreatePage}>Inscricao Viagem</Button>
        </CardStyled>
      </AppWrapper>
    )
  }
}


export default TripCreatePage;