import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import Button from '@material-ui/core/Button';
import { CardContent, Typography, CardActions, CardMedia } from '@material-ui/core'
import img from '../../img/futurex.png'
import { CardStyled } from '../../style/theme'
import CustomizedSnackbars from '../../componentes/snackBar'

const AppWrapper = styled.div`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
`

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  snackBar(){
    console.log('foi')
    return <CustomizedSnackbars/>
  }
  render() {
    return (
      <AppWrapper>
        <CardStyled>
          <CardMedia
            style={{ height: 0, paddingTop: '56.25%' }}
            image={img}
            title="FutureX"
          />
          <CardContent>
            <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '20px' }}>
              Desbrave o espaço
            </Typography>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant="contained" color="primary" onClick={this.props.goToApplicationForm}>Inscricao Viagem</Button>
              <Button variant="contained" color="primary" onClick={this.props.goToLoginPage}>login</Button>
              <Button onClick={this.snackBar}></Button>
            </CardActions>
          </CardContent>
        </CardStyled>
      </AppWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  goToLoginPage: () => dispatch(push(routes.login)),
  goToApplicationForm: () => dispatch(push(routes.applicationForm)),

});

export default connect(null, mapDispatchToProps)(HomePage)