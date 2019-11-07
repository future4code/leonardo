import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import trips from '../../reducers/trips'
import { getTrips, getTripDetails } from '../../api'
import ButtonAppBar from '../../componentes/appBar'
import { List, ListItem, ListItemText, Button } from '@material-ui/core'
import { DivStyled, Div1, Div2, CardStyled } from '../../style/theme'

class ListTripPage extends React.Component {

  componentDidMount() {
    const token = window.localStorage.getItem("token");

    if (!token) {
      this.props.goToLoginPage();
    }
      this.props.getTrips()
    }

onChangeToTripDetails(id){
  this.props.getTripDetails(id)
  this.props.goToTripDetailsPage()

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
          <h2>Viagens Criadas</h2>
          {trips && this.props.trips.map((trip) => (
            <List style={{padding:'0'}} >
              <ListItem
               button 
               key={trip.name} 
               onClick={() => this.onChangeToTripDetails(trip.id)}
               
               >

                <ListItemText primary={trip.name}  />
              </ListItem>
            </List>
          ))}
          <Button variant="contained" color="primary" onClick={this.props.goToTripCreate}>Criar Viagem</Button>
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
  goToHomePage: () => dispatch(push(routes.home)),
  goToTripDetailsPage: () => dispatch(push(routes.details)),
  getTrips: () => dispatch(getTrips()),
  getTripDetails: (id) => dispatch(getTripDetails(id)),
  goToTripCreate: () => dispatch(push(routes.create)),
  goToApplicationForm: () => dispatch(push(routes.applicationForm)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ListTripPage)