import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import trips from '../../reducers/trips'
import { getTrips, getTripDetails } from '../../api'




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
      <div>
        <p>List Trip Page</p>
        {trips && this.props.trips.map((trip) => (
						<li key={trip.name} onClick={() => this.onChangeToTripDetails(trip.id)} >
							
							{trip.name}
						</li>
					))}
        <button onClick={this.props.goToHomePage}>Home</button>
        <button onClick={this.props.goToLoginPage}>login</button>
        <button onClick={this.props.goToApplicationForm}>Inscricao Viagem</button>
        <button onClick={this.props.goToTripList}>Lista</button>
        
      </div>
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
    getTripDetails: (id) => dispatch(getTripDetails(id))
    
   
  });

export default connect(mapStateToProps, mapDispatchToProps)(ListTripPage)