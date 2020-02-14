import axios from "axios";
import {push} from "connected-react-router";
import {routes} from "../../containers/Router/index";

export const doUpload = (title, description, url) => async dispatch => {
    const token = window.localStorage.getItem("token");
    const data = {
        title,
        description,
        url
    }
    try {
        await axios.post(
            "https://us-central1-future-tube-leo.cloudfunctions.net/futureTubeLeo/uploadVideo", data,
            {
                headers: {
                    auth: token,
                },
            }
        );
        dispatch(push(routes.feed));
    } catch (e) {
        window.alert(e.message)
    }
}

export const getVideoInformation = (videoId) => async dispatch => {
    const token = window.localStorage.getItem("token");
    const data = {
        videoId
    }
    try {
        const response = await axios.post(
            "https://us-central1-future-tube-leo.cloudfunctions.net/futureTubeLeo/getVideoInformation", data,
            {
                headers: {
                    auth: token,
                },
            }
        );
        console.log(response)
        dispatch(VideoInformation(response.data));
        dispatch(push(routes.videoInformation));
    } catch (e) {
        window.alert(e.message)
    }
}

export const deleteVideo = (videoId) => async dispatch => {
    const token = window.localStorage.getItem("token");
    const data = {
        videoId
    }
    try {
        await axios.delete(
            "https://us-central1-future-tube-leo.cloudfunctions.net/futureTubeLeo/deleteVideo", {
                data,

                headers: {
                    auth: token,
                }
            }
        )
        dispatch(push(routes.feed));
    } catch (e) {
        window.alert(e.message)
    }
}

export const getUserVideos = () => async dispatch => {
    const token = window.localStorage.getItem("token");
    const data = {userId: ""}
    console.log(token)
    try {
        const response = await axios.post(
            "https://us-central1-future-tube-leo.cloudfunctions.net/futureTubeLeo/getVideosFromAUser", data,
            {
                headers: {
                    auth: token,
                },
            }
        );
        dispatch(videoFromUser(response.data));
        dispatch(push(routes.userVideos));
    } catch (e) {
        window.alert(e.message)
    }
}

export const VideoInformation = video => {
    return {
        type: "SET_INFORMATION",
        payload: {
            video
        }
    }
};

export const videoFromUser = video => {
    return {
        type: "SET_USER_VIDEOS",
        payload: {
            video
        }
    }
};
