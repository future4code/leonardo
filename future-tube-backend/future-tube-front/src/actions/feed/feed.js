import axios from 'axios'

export const getFeed = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const data = {page: 1}
    try {
        const response = await axios.post(
            "https://us-central1-future-tube-leo.cloudfunctions.net/futureTubeLeo/getPaginatedVideos", data,
            {
                headers: {
                    auth: token,
                },
            }
        );
        dispatch(feed(response.data.videos));
    } catch (e) {
        window.alert(e.message)
    }
};

export const feed = feed => {
    return {
        type: "SET_FEED",
        payload: {
            feed
        }
    }
};