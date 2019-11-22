import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";
import { DivStyled, Div1, Div2, CardStyled } from '../../style/theme'
import ButtonAppBar from '../../componentes/appBar'
import { login } from "../../actions/auth";

const ErrorMessage = styled.p`
  color: red;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onClickLogin = () => {
    const { email, password } = this.state
    this.props.doLogin( email, password )
  }

  render() {
    const { email, password } = this.state;
    const { errorMessage } = this.props;
    return (
      <DivStyled>
        <Div1>
        <ButtonAppBar
           onClickHome={this.props.goToHomePage}
           onClickApplicationTrip={this.props.goToApplicationForm}
           onClickLogin={this.props.goToLoginPage}/>
        </Div1>
        <Div2>
          <CardStyled >
      
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
          style={{margin: '20px', }}
        />
        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
          style={{margin: '20px', }}
        />
        <Button variant="contained" color="primary" onClick={this.onClickLogin}>Login</Button>
        {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
      
      </CardStyled>
      </Div2>
      </DivStyled>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.loginError
  };
};

const mapDispatchToProps = dispatch => ({
  goToTripList: () => dispatch(push(routes.list)),
  goToHomePage: () => dispatch(push(routes.home)),
  goToLoginPage: () => dispatch(push(routes.login)),
  goToApplicationForm: () => dispatch(push(routes.applicationForm)),
  doLogin: (email, password) => dispatch(login(email, password))
});

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
