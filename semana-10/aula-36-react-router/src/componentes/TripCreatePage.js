import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { routes } from '../containers/Router'
import { createTrip } from '../api'
import { DivStyled, Div1, Div2, CardStyled } from '../style/theme'
import ButtonAppBar from '../componentes/appBar';
import { Button, TextField, MenuItem } from '@material-ui/core'



const Formstyled = styled.form`
  display:grid;
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
      // this.props.createTrip(this.state)
  }


  render() {
    return (
      <DivStyled>
        <Div1>
        <ButtonAppBar
           onClickHome={this.props.goToHomePage}
           onClickApplicationTrip={this.props.goToApplicationForm}
           onClickLogin={this.props.goToLoginPage}
           bottonTripCreate={<Button color="inherit" onClick={this.props.onClickLogin}>Criar Viagem</Button>}
          />
        </Div1>
        <Div2>
          <CardStyled>
          <h2>Criar Viagem</h2>
          <Formstyled onSubmit={this.handleOnSubmit} >
            <p>Nome</p>
            <TextField
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              // required={true}
              // pattern="[a-zA-Z]{5,}"
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
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              min={new Date().toISOString().split("T")[0]}
              required={true} 
            />
            <p>Descrição</p>
            <TextField
              rows="5"
              cols="33"
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              required={true}
              // pattern="\s*\S+(?:\s+\S+){29,}\s*$"
              />
              
            <p>Duração em dias</p>
            <TextField
              type="number"
              name="durationInDays"
              onChange={this.handleChange}
              required={true}
              value={this.state.durationInDays}
              min="50" >

            </TextField>


            <Button variant="contained" color="primary" type='submit'>Enviar</Button>
          </Formstyled>
        </CardStyled>
        </Div2>
      </DivStyled>
    )
  }
}



const mapDispatchToProps = dispatch => ({
  createTrip: (trip) => dispatch(createTrip(trip)),
  goToLoginPage: () => dispatch(push(routes.login)),
  goToApplicationForm: () => dispatch(push(routes.applicationForm)),
  goToHomePage: () => dispatch(push(routes.home))
});

export default connect(null, mapDispatchToProps)(TripCreatePage)