import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";
import { DivStyled, Div1, Div2, CardStyled } from '../../style/theme'
import ButtonAppBar from '../../componentes/appBar'


const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
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

  render() {
    const { email, password } = this.state;

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
        <Button variant="contained" color="primary" onClick={this.props.goToTripList}>Login</Button>
       
      
      </CardStyled>
      </Div2>
      </DivStyled>
    );
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  goToTripList: () => dispatch(push(routes.list)),
  goToHomePage: () => dispatch(push(routes.home)),
  goToLoginPage: () => dispatch(push(routes.login)),
  goToApplicationForm: () => dispatch(push(routes.applicationForm)),
});

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
