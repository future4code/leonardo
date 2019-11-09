import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import trips from '../../reducers/trips'
import { getTrips, getTripDetails, removeTrip } from '../../api'
import ButtonAppBar from '../../componentes/appBar'
import { List, ListItem, ListItemText, Button, IconButton, ListItemSecondaryAction, Snackbar } from '@material-ui/core'
import { DivStyled, Div1, Div2, CardStyled } from '../../style/theme'
import Reprove from '@material-ui/icons/Clear';
import AlertDialog from '../../componentes/alertDiolog'
import { MySnackbarContentWrapper3 } from '../../componentes/snackbar3'
import {onCloseSnackBar} from '../../api/index'

class ListTripPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openAlert: false
    }
  }
  componentDidMount() {
    const token = window.localStorage.getItem("token");

    if (!token) {
      this.props.goToLoginPage();
    }
    this.props.getTrips()
  }

  onChangeToTripDetails(id) {
    this.props.getTripDetails(id)
    this.props.goToTripDetailsPage()

  }

  componentDidUpdate(prevProps) {
    if (this.props.trips !== prevProps.trips ) {
      this.setState({
        trips :this.props.trips,
      })
    }
  }
  onRemoveTripButton(tripId, tripName) {
    this.setState({
      openAlert: true, tripId: tripId, tripName: tripName
    });
    console.log('cliquei no remove trip')
    console.log('estado tripId', this.state.tripId)
    
    
  }

  handleClose = () => {
    console.log('foi no fechar o snack')
    this.props.onCloseSnackBar()

  };

  handleCloseAlert() {
    
    this.setState({ openAlert: false });
  }

  removeTripSnackBar(){
    const tripName = this.state.tripName
    const tripId = this.state.tripId
    this.handleCloseAlert()
    this.props.removeTrip(tripId,tripName )
    
  }

  render() {
    console.log(this.state)
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
            <h2>Viagens Criadas</h2>
            {this.props.trips && this.props.trips.map((trip) => (
              <List style={{ padding: '0' }} >
                <ListItem
                  button
                  key={trip.name}
                  onClick={() => this.onChangeToTripDetails(trip.id)}

                >

                  <ListItemText primary={trip.name} />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => this.onRemoveTripButton(trip.id, trip.name)}>
                      <Reprove />

                    </IconButton>
                  </ListItemSecondaryAction>

                </ListItem>
              </List>
            ))}
            {<AlertDialog
              isOpen={this.state.openAlert}
              handleClose={() => this.handleCloseAlert()}
              onRemoveTrip={() => this.removeTripSnackBar()}
              msg={`Deseja excluir a viagem:  ${this.state.tripName}?`}
            />}
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
            <Button variant="contained" color="primary" onClick={this.props.goToTripCreate}>Criar Viagem</Button>
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
  goToHomePage: () => dispatch(push(routes.home)),
  goToTripDetailsPage: () => dispatch(push(routes.details)),
  getTrips: () => dispatch(getTrips()),
  getTripDetails: (id) => dispatch(getTripDetails(id)),
  goToTripCreate: () => dispatch(push(routes.create)),
  goToApplicationForm: () => dispatch(push(routes.applicationForm)),
  removeTrip: (tripId, tripName) => dispatch(removeTrip(tripId, tripName)),
  onCloseSnackBar: () => dispatch(onCloseSnackBar())

});

export default connect(mapStateToProps, mapDispatchToProps)(ListTripPage)