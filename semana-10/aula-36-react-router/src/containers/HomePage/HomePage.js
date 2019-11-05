import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { routes } from '../Router'




class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <p>Home Page</p>
        <button onClick={this.props.goToLoginPage}>login</button>
        <button onClick={this.props.goToApplicationForm}>Inscricao Viagem</button>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
    goToLoginPage: () => dispatch(push(routes.login)),
    goToApplicationForm: () => dispatch(push(routes.applicationForm)),
   
  });

export default connect(null, mapDispatchToProps)(HomePage)