import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { Card, Button, TextField, MenuItem } from '@material-ui/core'
import { getTrips, candidateTrip } from '../../api'
import ButtonAppBar from '../../componentes/appBar'
import { DivStyled, Div1, Div2, CardStyled } from '../../style/theme'

const Formstyled = styled.form`
  display:grid;
`

class ApplicationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
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
    // this.props.candidateTrip(this.state)
  }

  componentDidMount() {
    this.props.getTrips()
  }
  
  render() {
    return (
      <DivStyled>
        <Div1>
          <ButtonAppBar
           onClickHome={this.props.goToHomePage}
           onClickApplicationTrip={this.props.goToApplicationForm}
           onClickLogin={this.props.goToLoginPage}/>
          </Div1>
        <Div2>
        <CardStyled>
          <h2>Application Page</h2>
          <Formstyled onSubmit={this.handleOnSubmit} >
            <p>Nome</p>
            <TextField
              type="text"
              name="name"
              value={this.state.nome}
              onChange={this.handleChange}
              required={true}
              // pattern="[a-zA-Z]{3,}"
              inputProps={{pattern:"[a-zA-Z]{3,}",
               title: "Digite um nome com um minimo de 3 caracteres"}}
               />
            <p>Idade</p>
            <TextField
              type="number"
              name="age"
              value={this.state.idade}
              onChange={this.handleChange}
              required={true}
              inputProps={{min:18}}
            />
            <p>Texto para aplicação</p>
            <input
              name="applicationText"
              type="text"
              pattern='[a-zA-Z\s\\.,2]{2,}'
              // multiline={true}
              // rows="4"
              // cols="33"
              value={this.state.applicationText}
              onChange={this.handleChange}
              required={true}
              //NAO CONSEGUI ATIVAR
              // inputProps={{pattern: '[a-zA-Z\s\\.2,]',
              //  title: "O texto deve conter no mínimo 30 palavras "}}
               />
            
            <p>Profissao</p>
            <TextField
              type="text"
              name="profession"
              required={true}
              // NAO CONSEGUI ATIVAR TB
              // inputProps={{pattern: '\s*\S+(?:\s+\S+){9,}\s*$',
              //  title: "O texto deve conter no mínimo 9 palavras "}}
              value={this.state.profession}
              onChange={this.handleChange} />
            <p>Pais</p>
            <TextField 
              select 
              onChange={this.handleChange}
              value={this.state.country}
              required={true}
              defaultValue="Brasil"
              name="country" >
                <MenuItem  defaultValue="Brasil" name="Brasil" value="Brasil" onChange={this.handleChange}>Brasil</MenuItem >
                <MenuItem  value="França" name="França" value="França" onChange={this.handleChange}>França</MenuItem >
                <MenuItem  value="Canadá" name="Canadá" value="Canadá" onChange={this.handleChange}>Canadá</MenuItem >
                <MenuItem  value="México" name="México" value="México" onChange={this.handleChange}>México</MenuItem >
            </TextField>
            <p>Viagem</p>
            <TextField 
              select
              name="trip"
              onChange={this.handleChange}
              required={true}
              value={this.state.trip} 
              style={{ marginBottom: '15px' }}
              inputProps={{required: true}}
              >
              {this.props.trips && this.props.trips.map((trip) => (
                <option  key={trip.name} name={trip.name} value={trip.id} >
                  {trip.name} - {trip.planet}
                </option >
              ))}
            </TextField>
            <Button variant="contained" color="primary" type='submit'>Enviar</Button>
          </Formstyled>
        </CardStyled>
      
      </Div2>
      </DivStyled>
    )
  }
}

ApplicationForm.propTypes = {

}

const mapStateToProps = (state) => ({
  trips: state.trips.trips
})

const mapDispatchToProps = dispatch => ({
  goToLoginPage: () => dispatch(push(routes.login)),
  goToApplicationForm: () => dispatch(push(routes.applicationForm)),
  getTrips: () => dispatch(getTrips()),
  candidateTrip: (trip) => dispatch(candidateTrip(trip)),
  goToHomePage: () => dispatch(push(routes.home))

});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm)