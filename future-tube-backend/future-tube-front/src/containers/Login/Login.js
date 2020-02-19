import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {routes} from "../Router";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import {LoginStyled} from "./LoginStyled";
import {Wrapper} from "./LoginStyled";
import {PageTitle} from "./LoginStyled";
import {FormStyled} from "./LoginStyled";
import {StyledBtn} from "../../components/Button/Button";
import {StyledBtnCadastro} from "./LoginStyled";
import {StyledTextField} from "./LoginStyled";
import {doLogin} from '../../actions/auth/login'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            showPassword: false
        };
    }

    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({showPassword: !state.showPassword}));
    };

    onClickLogin = async (event) => {
        event.preventDefault()
        const {email, password} = this.state
        this.props.doLogin(email, password)
    }

    render() {
        const {email, password} = this.state;
        return (
            <Wrapper>
                <LoginStyled>
                    <PageTitle>Entrar</PageTitle>
                    <FormStyled onSubmit={this.onClickLogin}>
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="email"
                            type="email"
                            label="E-mail"
                            placeholder="email@email.com"
                            value={email}
                            required={true}
                            inputProps={{pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"}}
                        />
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="password"
                            type={this.state.showPassword ? "text" : "password"}
                            label="Senha"
                            placeholder="Mínimo 6 caracteres"
                            minlenght="6"
                            value={password}
                            required={true}
                            InputProps={{
                                minLength: 6,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                        >
                                            {this.state.showPassword ? (
                                                <VisibilityOff/>
                                            ) : (
                                                <Visibility/>
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <StyledBtn
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={!this.state.password}
                        >
                            Entrar
                        </StyledBtn>
                        <StyledBtnCadastro
                            onClick={this.props.goToCadastrar}
                            color="primary"
                        >
                            Não possui cadastro? Clique aqui.
                        </StyledBtnCadastro>
                    </FormStyled>
                </LoginStyled>
            </Wrapper>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    goToCadastrar: () => dispatch(push(routes.signup)),
    doLogin: (email, password) => dispatch(doLogin(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);