import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { DivStyled, Div1, Div2, CardStyled } from '../../style/theme'
import ButtonAppBar from '../../componentes/appBar'
import { Button, Paper, ListItem, ListItemText, IconButton, ListItemSecondaryAction, List } from '@material-ui/core'
import styled from 'styled-components'
import Approve from '@material-ui/icons/Done';
import Reprove from '@material-ui/icons/Clear';
import { onApproveCandidate, onReproveCandidate } from '../../api/index'
import AlertDialog from '../../componentes/alertDiolog'


const DivCandidates = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
`

class TripDetailsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openAlert:false
    }
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token");
    if (!token) {
      this.props.goToLoginPage();
    }
  }

  handleApprove(id){
    const tripId = this.props.currentTrip.id
    const candidate = id
    this.props.onApproveCandidate(tripId, candidate)
  }

  handleReprove(id){
    const tripId = this.props.currentTrip.id
    const candidate = id
    this.props.onReproveCandidate(tripId, candidate)
  }

  componentDidUpdate(prevProps){
    if(this.props.currentTrip !== prevProps.currentTrip){
      this.setState({
        currentTrip: this.props.currentTrip
      })
    }
  }
  
  handleCloseAlert() { 
    this.setState({ openAlert: false });
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
            <h2>Detalhes das Viagens</h2>
            <DivCandidates>
            <p>Nome: {this.props.currentTrip.name} </p>
            <p> Planeta: {this.props.currentTrip.planet}</p>
            <p>Tempo estimado: {this.props.currentTrip.durationInDays} dias</p>
            <p>Data de partida: {this.props.currentTrip.date}</p>
            </DivCandidates>
            <p>Detalhes da viagem:</p>
            {this.props.currentTrip.description}
            <DivCandidates>
              <div>
                <h3>Candidatos</h3>
                {this.props.currentTrip.candidates && this.props.currentTrip.candidates.map((trip) => (
                  <List style={{padding:'0'}}>
                    <ListItem key={trip.name} button >
                    
                    <IconButton>
                          <Reprove onClick={() => this.handleReprove(trip.id)}/>
                          
                        </IconButton>
                      <ListItemText primary={trip.name} />
                      
                        <IconButton>
                          <Approve onClick={() => this.handleApprove(trip.id)}/>
                          
                        </IconButton>
                        
                      
                    </ListItem >
                  </List>
                ))}
              </div>
              <div>
                <h3>Aprovados</h3>
                {this.props.currentTrip.approved && this.props.currentTrip.approved.map((trip) => (
                  <List style={{padding:'0'}}>
                  <ListItem key={trip.name} button  >
                    <ListItemText primary={trip.name} />
                    </ListItem >
                  </List>
                ))}
              </div>
            </DivCandidates>
            <Button variant="contained" color="primary" onClick={this.props.goToTripList}>Voltar</Button>
          </CardStyled>

        </Div2>
        {<AlertDialog
              isOpen={this.state.openAlert}
              handleClose={() => this.handleCloseAlert()}
              onRemoveTrip={() => this.removeTripSnackBar()}
              msg={`Deseja reprovar o candidato  ?`}
            />}
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
  onApproveCandidate: (tripId, candidate) => dispatch(onApproveCandidate(tripId, candidate)),
  onReproveCandidate: (tripId, candidate) => dispatch(onReproveCandidate(tripId, candidate))
});

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage)