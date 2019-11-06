import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { Card, Button } from '@material-ui/core'
import { getTrips } from '../../api'

const AppWrapper = styled.div`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
`
const CardStyled = styled(Card)`
  width: 400px;
  /* height: 600px; */
  display:flex;
  flex-direction:column;
`
const Formstyled = styled.form`
  display:grid;
`

const Inputstyled = styled.input`
  margin:5px 0;

`
class ApplicationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }

  componentDidMount() {
    this.props.getTrips()
  }

  render() {
    return (
      <AppWrapper>
        <CardStyled>
          <p>Application Page</p>
          <Formstyled onSubmit={this.handleOnSubmit} >
            <p>Nome</p>
            <Inputstyled
              type="text"
              name="nome"
              value={this.state.nome}
              onChange={this.handleChange}
              required={true}
              // pattern="[a-zA-Z]{3,}"
              title="preencha algo valido" />
            <p>Idade</p>
            <Inputstyled
              type="number"
              name="idade"
              value={this.state.idade}
              onChange={this.handleChange}
              // required={true}
              // min="18"
               />
            <p>Texto para aplicação</p>
            <textarea
              name="textoAplicacao"
              rows="5"
              cols="33"
              value={this.state.applicationText}
              onChange={this.handleChange}
            />
            <p>Profissao</p>
            <Inputstyled
              type="text"
              name="profissao"
              value={this.state.profession}
              onChange={this.handleChange} />
            <p>Pais</p>
            <select name="pais" onChange={this.handleChange} value={this.state.country} >
              <option value="Brasil" name="Brasil" value="Brasil">Brasil</option>
              <option value="França">França</option>
              <option value="Canadá">Canadá</option>
              <option value="México">México</option>
            </select>
            <p>Viagem</p>
            <select name="viagem" onChange={this.handleChange}>
              {this.props.trips && this.props.trips.map((trip) => (
                <option key={trip.name} name={trip.name} value={trip.name} >
                  {trip.name} - {trip.planet}
                </option>
              ))}
            </select>
            <Button type='submit'>Enviar</Button>
          </Formstyled>
          <Button onClick={this.props.goToLoginPage}>login</Button>
          <Button onClick={this.props.goToApplicationForm}>Inscricao Viagem</Button>
        </CardStyled>
      </AppWrapper>
    )
  }
}

ApplicationForm.propTypes = {

}

const mapStateToProps = (state) => ({
  trips: state.trips.trips
})

const mapDispatchToProps = dispatch => ({
  goToLoginPage: () => dispatch(push(routes.login)),
  goToApplicationForm: () => dispatch(push(routes.applicationForm)),
  getTrips: () => dispatch(getTrips()),

});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm)