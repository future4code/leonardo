import React from 'react';
import {FormStyled, LoginStyled, PageTitle, StyledTextField, Wrapper} from "../Login/LoginStyled";
import {StyledBtn} from "../../components/Button/Button";
import * as firebase from "firebase";
import {push} from "connected-react-router";
import {routes} from "../Router";
import {doUpload} from "../../actions/video/video";
import {connect} from "react-redux";
import MenuAppBar from "../../components/navBar/navBar";

class UploadVideo extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            title: "",
            description: "",
            url: ""
        };
    }

    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onClickUploadVideo = async (event) => {
        event.preventDefault();
        await this.uploadFile();
        const { title, description, url  } = this.state
        this.props.doUpload( title, description, url)
    }

    uploadFile = async () => {
        const storageRef = firebase.storage().ref();
        const newFileRef = storageRef.child(this.fileInput.current.files[0].name);
        const uploadResult = await newFileRef
            .put(this.fileInput.current.files[0])
            .catch(e => console.log("ERRO NO UPLOAD", e));
        this.state.url = await uploadResult.ref.getDownloadURL();
    };

    render() {
        const {title, description} =this.state
        return (
            <Wrapper>
                <MenuAppBar/>
                <LoginStyled>
                    <PageTitle>Upload Video</PageTitle>
                    <FormStyled onSubmit={this.onClickUploadVideo}>
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="title"
                            type="text"
                            label="Titulo"
                            placeholder="titulo do video"
                            value={title}
                            required={true}
                        />
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="description"
                            type="text"
                            label="Descrição"
                            placeholder="Descrição"
                            value={description}
                            required={true}
                        />
                        {/*//TODO STYLE INPUT*/}
                        <input type={"file"} ref={this.fileInput} accept="video/*"   />
                        <StyledBtn
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Enviar
                        </StyledBtn>
                    </FormStyled>
                </LoginStyled>
            </Wrapper>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    goTologin: () => dispatch(push(routes.root)),
    doUpload:(title, description, url) => dispatch(doUpload( title, description, url))
});

export default connect(null, mapDispatchToProps)(UploadVideo);