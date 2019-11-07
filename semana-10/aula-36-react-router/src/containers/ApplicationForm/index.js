import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { Button, TextField, MenuItem } from '@material-ui/core'
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
    this.props.candidateTrip(this.state)
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
            onClickLogin={this.props.goToLoginPage} />
        </Div1>
        <Div2>
          <CardStyled>
            <h2>Inscrever Viagem</h2>
            <Formstyled onSubmit={this.handleOnSubmit} >
              <p>Nome</p>
              <TextField
                type="text"
                name="name"
                value={this.state.nome}
                onChange={this.handleChange}
                required={true}
                inputProps={{ minLength: "3" }}
              />
              <p>Idade</p>
              <TextField
                type="number"
                name="age"
                value={this.state.idade}
                onChange={this.handleChange}
                required={true}
                inputProps={{ min: 18 }}
              />
              <p>Texto para aplicação</p>
              <TextField
                name="applicationText"
                type="text"
                inputProps={{ minLength: "30" }}
                value={this.state.applicationText}
                onChange={this.handleChange}
                required={true}
              />
              <p>Profissao</p>
              <TextField
                type="text"
                name="profession"
                required={true}
                inputProps={{ minLength: "10" }}
                value={this.state.profession}
                onChange={this.handleChange} />
              <p>Pais</p>
              <TextField
                type="text"
                select
                onChange={this.handleChange}
                value={this.state.country}
                required={true}
                name="country" >
                <MenuItem defaultValue="Brasil" name="Brasil"  >Brasil</MenuItem >
                <MenuItem value="França" name="França" >França</MenuItem >
                <MenuItem value="Canadá" name="Canadá" >Canadá</MenuItem >
                <MenuItem value="México" name="México" >México</MenuItem >
              </TextField>
              <p>Viagem</p>
              <TextField
                type="text"
                select
                name="trip"
                onChange={this.handleChange}
                required={true}
                value={this.state.trip}
                style={{ marginBottom: '15px' }}
                inputProps={{ required: true }}
              >
                {this.props.trips && this.props.trips.map((trip) => (
                  <MenuItem key={trip.name} name={trip.name} value={trip.id} >
                    {trip.name} - {trip.planet}
                  </MenuItem >
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