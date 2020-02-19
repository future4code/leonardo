import React from "react";
import {ConnectedRouter} from "connected-react-router";
import {Switch, Route} from "react-router-dom";
import Login from "../Login/Login";
import feed from '../feed/feed'
import Signup from "../signup/Signup";
import UploadVideo from "../video/uploadVideo";
import VideoInformation from "../video/videoInformation";
import UserVideos from "../video/userVideos";


export const routes = {
    root: "/",
    signin: "/signin",
    teste: "/teste",
    signup: "/signup",
    feed: "/feed",
    login: "/login",
    uploadVideo: "/uploadVideo",
    videoInformation: "/videoInformation",
    userVideos: "/userVideos"

};

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={Login}/>
                <Route exact path={routes.login} component={Login}/>
                <Route exact path={routes.feed} component={feed}/>
                <Route exact path={routes.signup} component={Signup}/>
                <Route exact path={routes.uploadVideo} component={UploadVideo}/>
                <Route exact path={routes.videoInformation} component={VideoInformation}/>
                <Route exact path={routes.userVideos} component={UserVideos}/>
            </Switch>
        </ConnectedRouter>
    );
}

export default Router;