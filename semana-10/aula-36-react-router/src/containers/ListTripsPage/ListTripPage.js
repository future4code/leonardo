import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import trips from '../../reducers/trips'
import { getTrips, getTripDetails } from '../../api'
import ButtonAppBar from '../../componentes/appBar'
import { Card, List, ListItem, ListItemText, Button } from '@material-ui/core'
import { DivStyled, Div1, Div2, CardStyled } from '../../style/theme'

class ListTripPage extends React.Component {
  
    componentDidMount(){
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
           bottonTripCreate={<Button color="inherit" onClick={this.props.goToTripCreate}>Criar Viagem</Button>}/>        </Div1>
        <Div2>
          <CardStyled>
        <h2>Viagens Criadas</h2>
        {trips && this.props.trips.map((trip) => (
						// <li key={trip.name} onClick={() => this.onChangeToTripDetails(trip.id)} >
							
						// 	{trip.name}
						// </li>
            <List component="nav">
            <ListItem button key={trip.name} onClick={() => this.onChangeToTripDetails(trip.id)}>
              <ListItemText primary={trip.name} />
            </ListItem>
          </List>
					))}
        </CardStyled>
        </Div2>
      </DivStyled>
    )
  }
}

ListTripPage.propTypes = {

}

const mapStateToProps = (state) => ({
    trips: state.trips.trips
})

const mapDispatchToProps = dispatch => ({
    goToLoginPage: () => dispatch(push(routes.login)),
    goToHomePage: () => dispatch(push(routes.home)),
    goToTripDetailsPage : () => dispatch(push(routes.details)),
    getTrips: () => dispatch(getTrips()),
    getTripDetails: (id) => dispatch(getTripDetails(id)),
    goToTripCreate: () => dispatch(push(routes.create)),
    
   
  });

export default connect(mapStateToProps, mapDispatchToProps)(ListTripPage)