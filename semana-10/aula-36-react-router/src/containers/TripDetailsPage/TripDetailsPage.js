import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import trips from '../../reducers/trips'
import { DivStyled, Div1, Div2, CardStyled } from '../../style/theme'
import ButtonAppBar from '../../componentes/appBar'




class TripDetailsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    console.log(this.props.currentTrip)
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
        <h2>Detalhes das Viagens</h2>
            <p>Nome: {this.props.currentTrip.name} </p>
            <p> Planeta: {this.props.currentTrip.planet}</p>
            <p>Tempo estimado: {this.props.currentTrip.durationInDays} dias</p>
            <p>Data de partida: {this.props.currentTrip.date}</p>
            <p>Detalhes da viagem:</p>
            {this.props.currentTrip.description}
            <p>Candidatos</p>
                {this.props.currentTrip.candidates && this.props.currentTrip.candidates.map((trip) => (
						<li key={trip.name} >
						    {trip.name}
						</li>
					))}
				
        </CardStyled>
        </Div2>
      </DivStyled>
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