import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import Button from '@material-ui/core/Button';
import { Card, CardContent, Typography, CardActions, CardMedia } from '@material-ui/core'
import img from '../../img/futurex.png'

const CardStyled = styled(Card)`
  width: 400px; 
`

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

  render() {
    return (
      <AppWrapper>
        <CardStyled>
        <CardMedia
          style={{height: 0, paddingTop: '56.25%'}}
          image={img}
          title="FutureX"
        />
          <CardContent>
          
            <Typography variant="h5">
              Home Page
            </Typography>
            <CardActions>
            <Button variant="contained" color="primary" onClick={this.props.goToLoginPage}>login</Button>
            <Button variant="contained" color="primary" onClick={this.props.goToApplicationForm}>Inscricao Viagem</Button>
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