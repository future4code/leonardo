import React, {Component} from "react";
import {push} from "connected-react-router";
import {routes} from "../Router";
import {connect} from "react-redux";
import {getFeed} from "../../actions/feed/feed";
import MenuAppBar from '../../components/navBar/navBar'
import {Wrapper} from "../Login/LoginStyled";
import styled from "styled-components";
import {getVideoInformation} from "../../actions/video/video"
import {Card} from "@material-ui/core";
import {StyledBtn} from "../../components/Button/Button";

export const StyledDiv = styled.div`
    margin-top: 8%;
    @media only screen and (max-width: 600px) {
  body {
    margin-top: 10%;
  }
}
`

const StyledVideoCard = styled(Card)`
    margin-bottom: 2%;
`

class feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: ""
        };
    }

    componentDidMount() {
        this.props.getFeed()
        const token = window.localStorage.getItem("token");
        if (!token) {
            this.props.goToSignup();
        }
    }

    render() {
        return (
            <Wrapper>
                <MenuAppBar/>
                <StyledDiv>
                    {this.props.feed && this.props.feed.map((feed) => {
                        return (
                            <StyledVideoCard key={feed.id} onClick={() => {
                                this.props.goToVideoInformation(feed.id)
                            }}>
                                <video width="320" height="240" controls>
                                    <source src={feed.url} type="video/mp4"/>
                                </video>
                                <h2>Título - {feed.title}</h2>
                            </StyledVideoCard>
                        )
                    })
                    }
                </StyledDiv>
                {/*TODO LOAD FEED*/}
                <StyledBtn>
                    Carregar
                </StyledBtn>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        feed: state.feed.feed,
    };
};

const mapDispatchToProps = dispatch => ({
    goToSignup: () => dispatch(push(routes.signup)),
    getFeed: () => dispatch(getFeed()),
    goToVideoInformation: (videoId) => dispatch(getVideoInformation(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(feed);