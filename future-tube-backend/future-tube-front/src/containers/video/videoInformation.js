import React, {Component} from 'react';

import {deleteVideo} from "../../actions/video/video";
import {connect} from "react-redux";
import {LoginStyled, Wrapper} from "../Login/LoginStyled";
import MenuAppBar from "../../components/navBar/navBar";
import {StyledBtn} from "../../components/Button/Button";
import Avatar from '@material-ui/core/Avatar';

class VideoInformation extends Component {

    onClickDelete = async (event) => {
        event.preventDefault();
        if (window.confirm("Tem certeza que deseja exluir o video?")) {
            const {id} = this.props.video
            console.log(id)
            this.props.goToDeleteVideo(id)
        }
    }

    render() {
        return (
            <Wrapper>
                <MenuAppBar/>
                <LoginStyled key={this.props.video.id}>
                    <video width="320" height="240" controls>
                        <source src={this.props.video.url} type="video/mp4"/>
                    </video>
                    <h2>Título - {this.props.video.title}</h2>
                    <h2>Descrição - {this.props.video.description}</h2>
                    <Avatar alt="" src={this.props.video.userPhoto}/>
                    <h2>usuário - {this.props.video.userName}</h2>
                    <StyledBtn onClick={this.onClickDelete}>
                        Apagar Video
                    </StyledBtn>
                </LoginStyled>
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        video: state.video.video,
    };
};

const mapDispatchToProps = dispatch => ({
    goToDeleteVideo: (videoId) => dispatch(deleteVideo(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoInformation);