import React from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {routes} from "../Router";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import {LoginStyled} from "../Login/LoginStyled";
import {Wrapper} from "../Login/LoginStyled";
import {PageTitle} from "../Login/LoginStyled";
import {FormStyled} from "../Login/LoginStyled";
import {StyledBtn} from "../../components/Button/Button";
import {StyledBtnCadastro} from "../Login/LoginStyled";
import {StyledTextField} from "../Login/LoginStyled";
import {doSignup} from '../../actions/auth/login';
import * as firebase from "firebase/app";


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            email: "",
            password: "",
            showPassword: false,
            name: "",
            birthday: "",
            photo: ""
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

    onClickSignup = async (event) => {
        event.preventDefault();
        await this.uploadFile();
        const {email, password, name, birthday, photo} = this.state
        this.props.doSignup(email, password, name, birthday, photo)
    }

    uploadFile = async () => {
        const storageRef = firebase.storage().ref();
        const newFileRef = storageRef.child(this.fileInput.current.files[0].name);
        const uploadResult = await newFileRef
            .put(this.fileInput.current.files[0])
            .catch(e => console.log("ERRO NO UPLOAD", e));
        this.state.photo = await uploadResult.ref.getDownloadURL();
    };

    render() {
        const {email, password, name, birthday} = this.state;
        return (
            <Wrapper>
                <LoginStyled>
                    <PageTitle>Cadastrar</PageTitle>
                    <FormStyled onSubmit={this.onClickSignup}>
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
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="name"
                            type="text"
                            label="name"
                            placeholder="userName"
                            value={name}
                            required={true}
                        />
                        <StyledTextField
                            required
                            variant="outlined"
                            name="birthday"
                            type="date"
                            label="Data de nascimento"
                            value={birthday}
                            onChange={this.handleFieldChange}
                        />
                        {/*//TODO STYLE INPUT*/}
                        <input type={"file"} ref={this.fileInput} accept="image/*"/>
                        <StyledBtn
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={!this.state.password}
                        >
                            Cadastrar
                        </StyledBtn>
                        <StyledBtnCadastro
                            onClick={this.props.goTologin}
                            color="primary"
                        >
                            Já cadastro? Clique aqui.
                        </StyledBtnCadastro>
                    </FormStyled>
                </LoginStyled>
            </Wrapper>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    goTologin: () => dispatch(push(routes.root)),
    doSignup: (email, password, name, birthday, photo) => dispatch(doSignup(email, password, name, birthday, photo))
});

export default connect(null, mapDispatchToProps)(Signup);