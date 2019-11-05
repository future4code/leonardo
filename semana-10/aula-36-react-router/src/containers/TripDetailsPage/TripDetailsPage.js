import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import trips from '../../reducers/trips'




class TripDetailsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  render() {
    console.log(this.props.currentTrip)
    return (
      <div>
        <p>List Trip details Page</p>
            {<li>
                {this.props.currentTrip.name}
            </li>}
                {/* {this.props.currentTrip && this.props.currentTrip.candidates.map((trip) => (
						<li key={trip.name} >
						    {trip.name}
						</li>
					))} */}
				
				
        <button onClick={this.props.goToHomePage}>Home</button>
        <button onClick={this.props.goToLoginPage}>login</button>
      </div>
    )
  }
}

TripDetailsPage.propTypes = {

}

const mapStateToProps = (state) => ({
    currentTrip: state.trips.trip
})

const mapDispatchToProps = dispatch => ({
    goToLoginPage: () => dispatch(push(routes.login)),
    goToHomePage: () => dispatch(push(routes.home)),
   
  });

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage)