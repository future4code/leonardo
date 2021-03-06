import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { createTrip } from '../../api'
import { DivStyled, Div1, Div2, CardStyled, Formstyled } from '../../style/theme'
import ButtonAppBar from '../../componentes/appBar';
import { Button, TextField, MenuItem, Snackbar, IconButton, SnackbarContent } from '@material-ui/core'
import styled from 'styled-components'

import IconButton2 from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {onCloseSnackBar} from '../../api/index'
import { green } from '@material-ui/core/colors'
import { MySnackbarContentWrapper3 } from '../../componentes/snackbar3'

const DivButtons = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
`
 
class TripCreatePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token");
    if (!token) {
      this.props.goToLoginPage();
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    
    event.preventDefault();
    
    this.props.createTrip(this.state)
    this.resetform()
  }

  handleClose = () => {
    console.log('foi no fechar o snack')
    this.props.onCloseSnackBar()

  };

  resetform() {
    this.setState({
      name:'',
      date:'',
      description:'',
      durationInDays:'',
      planet:'',

    })
  }

  render() {
    return (
      <DivStyled>
        <Div1>
          <ButtonAppBar
            onClickHome={this.props.goToHomePage}
            onClickApplicationTrip={this.props.goToApplicationForm}
            onClickLogin={this.props.goToLoginPage}
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
                required={true}
                inputProps={{ minlength: "5" }}
              />
              <p>Planeta</p>
              <TextField
                select
                type="text"
                name="planet"
                onChange={this.handleChange}
                value={this.state.planet}
                required={true}
              >
                <MenuItem value="Mercúrio" name="Mercúrio" >Mercúrio</MenuItem>
                <MenuItem value="Vênus" name="Vênus" >Vênus</MenuItem>
                <MenuItem value="Terra" name="Terra" >Terra</MenuItem>
                <MenuItem value="Marte" name="Marte" >Marte</MenuItem>
                <MenuItem value="Júpiter" name="Júpiter" >Júpiter</MenuItem>
                <MenuItem value="Saturno" name="Saturno" >Saturno</MenuItem>
                <MenuItem value="Urano" name="Urano" >Urano</MenuItem>
                <MenuItem value="Netuno" name="Netuno" >Netuno</MenuItem>

              </TextField>
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
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                required={true}
                inputProps={{ minlength: "30" }}
              />
              <p>Duração em dias</p>
              <TextField
                type="number"
                name="durationInDays"
                onChange={this.handleChange}
                required={true}
                value={this.state.durationInDays}
                min="50"
                style={{ marginBottom: '15px' }} >
              </TextField>
              <DivButtons>
              <Button variant="contained" color="primary" style={{margin: '0 10px'}} onClick={this.props.goToTripList}>Voltar</Button>
              <Button variant="contained" color="primary" type='submit' style={{margin: '0 10px'}}>Criar</Button>
              </DivButtons>
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
  open: state.trips.open,
  msg: state.trips.msg,
  variant: state.trips.variant
})

const mapDispatchToProps = dispatch => ({
  createTrip: (trip) => dispatch(createTrip(trip)),
  goToLoginPage: () => dispatch(push(routes.login)),
  goToApplicationForm: () => dispatch(push(routes.applicationForm)),
  goToHomePage: () => dispatch(push(routes.home)),
  goToTripList: () => dispatch(push(routes.list)),  
  onCloseSnackBar: () => dispatch(onCloseSnackBar())
});

export default connect(mapStateToProps, mapDispatchToProps)(TripCreatePage)