import React, {Component} from 'react';
import { getVideoInformation} from "../../actions/video/video";
import {connect} from "react-redux";
import {LoginStyled, Wrapper} from "../Login/LoginStyled";
import MenuAppBar from "../../components/navBar/navBar";
import Avatar from "@material-ui/core/Avatar";


class UserVideos extends Component {

    render() {
        return (
            <Wrapper>
                <MenuAppBar/>
                {this.props.userVideos && this.props.userVideos.videos.map((video) => {
                    return (
                        <LoginStyled key={video.id} onClick={() => {this.props.goToVideoInformation(video.id)}}>
                            <video width="320" height="240" controls>
                                <source src={video.url} type="video/mp4"/>
                            </video>
                            <h2>Título - {video.title}</h2>
                            <h2>Descrição - {video.description}</h2>
                            <Avatar alt="" src={video.userPhoto} />
                            <h2>usuário - {video.userName}</h2>
                        </LoginStyled>
                    )
                })
                }
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        userVideos: state.video.userVideos,
    };
};

const mapDispatchToProps = dispatch => ({
    goToVideoInformation: (videoId) => dispatch(getVideoInformation(videoId)),
});

export default connect(mapStateToProps, mapDispatchToProps) (UserVideos);