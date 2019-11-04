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
      </div>
    )
  }
}

HomePage.propTypes = {

}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    goToLoginPage: () => dispatch(push(routes.home)),
   
  });

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)