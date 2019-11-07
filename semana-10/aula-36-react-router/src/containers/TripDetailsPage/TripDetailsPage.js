import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { DivStyled, Div1, Div2, CardStyled } from '../../style/theme'
import ButtonAppBar from '../../componentes/appBar'
import { Button } from '@material-ui/core'


class TripDetailsPage extends React.Component {
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
        <h2>Detalhes das Viagens</h2>
            <p>Nome: {this.props.currentTrip.name} </p>
            <p> Planeta: {this.props.currentTrip.planet}</p>
            <p>Tempo estimado: {this.props.currentTrip.durationInDays} dias</p>
            <p>Data de partida: {this.props.currentTrip.date}</p>
            <p>Detalhes da viagem:</p>
            {this.props.currentTrip.description}
            <p>Candidatos</p>
                {this.props.currentTrip.candidates && this.props.currentTrip.candidates.map((trip) => (
						<li key={trip.name} style={{ marginBottom: '15px' }} >
						    {trip.name}
						</li>
					))}
				<Button variant="contained" color="primary" onClick={this.props.goToTripList}>Voltar</Button>
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
    goToTripList: () => dispatch(push(routes.list)),
    goToApplicationForm: () => dispatch(push(routes.applicationForm)),
   
  });

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage)