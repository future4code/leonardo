import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { Button, TextField, MenuItem, Snackbar, SnackbarContent } from '@material-ui/core'
import { getTrips, candidateTrip } from '../../api'
import ButtonAppBar from '../../componentes/appBar'
import { DivStyled, Div1, Div2, CardStyled } from '../../style/theme'
import { MySnackbarContentWrapper3 } from '../../componentes/snackbar3'
import {onCloseSnackBar} from '../../api/index'

const Formstyled = styled.form`
  display:grid;
`
class ApplicationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      country: 'Brasil',
      
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
    this.clearForm()
  }

  clearForm(){
    this.setState({
      name:"",
      age:"",
      profession:"",
      applicationText:""
    })
  }

  componentDidMount() {
    this.props.getTrips()
    if (this.props.trips && this.props.trips.length > 0) {
      this.setState({
        trip: this.props.trips[0].id,
        open: this.props.open
       
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.trips.length > 0 && prevProps.trips.length === 0) {
      this.setState({
        trip: this.props.trips[0].id,
        open: this.props.open,
        msg: this.props.msg,
        variant: this.props.variant
      })
    }
  }

  handleClose = () => {
    this.props.onCloseSnackBar()

  };

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
                value={this.state.name}
                onChange={this.handleChange}
                required={true}
                inputProps={{ minLength: "3" }}
              />
              <p>Idade</p>
              <TextField
                type="number"
                name="age"
                value={this.state.age}
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
                <MenuItem value="Brasil" name="Brasil"  >Brasil</MenuItem >
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
              
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.props.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper3
            onClose={this.handleClose}
            variant={this.props.variant}
            message={this.props.msg}
          />
        </Snackbar>
            </Formstyled>
           
          </CardStyled>
        </Div2>

      </DivStyled>
    )
  }
}

const mapStateToProps = (state) => ({
  trips: state.trips.trips,
  open: state.trips.open,
  msg: state.trips.msg,
  variant: state.trips.variant
})

const mapDispatchToProps = dispatch => ({
  goToLoginPage: () => dispatch(push(routes.login)),
  goToApplicationForm: () => dispatch(push(routes.applicationForm)),
  getTrips: () => dispatch(getTrips()),
  candidateTrip: (trip) => dispatch(candidateTrip(trip)),
  goToHomePage: () => dispatch(push(routes.home)),
  onCloseSnackBar: () => dispatch(onCloseSnackBar())

});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm)