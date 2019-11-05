import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { push } from 'connected-react-router'
import { routes } from '../Router'




class ApplicationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <p>Application Page</p>
        <button onClick={this.props.goToLoginPage}>login</button>
        <button onClick={this.props.goToApplicationForm}>Inscricao Viagem</button>
      </div>
    )
  }
}

ApplicationForm.propTypes = {

}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    goToLoginPage: () => dispatch(push(routes.login)),
    goToApplicationForm: () => dispatch(push(routes.applicationForm)),
   
  });

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm)