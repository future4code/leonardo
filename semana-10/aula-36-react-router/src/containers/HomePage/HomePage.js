import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import Button from '@material-ui/core/Button';
import { Card, CardContent, Typography, CardActions } from '@material-ui/core'

const CardStyled = styled(Card)`
  width: 400px;
  height: 600px;
  display:flex;
  align-items:center;
`

const AppWrapper = styled.div`
display:flex;

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