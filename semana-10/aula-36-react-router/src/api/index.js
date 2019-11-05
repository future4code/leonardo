import axios from 'axios'



export const getTrips = () => async (dispatch, getState) => {
    const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/futureX/leonardo/trips"
    );

    dispatch(trips(response.data.trips));
};

export const trips = trips => {
	return {
	type: "SET_TRIPS",
	payload: {
		trips
	}
}
};

export const getTripDetails = (id) => async (dispatch, getState) => {
    const response = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/leonardo/trip/${id}`
    );
    dispatch(trip(response.data.trip));
};

export const trip = trip => {
	return {
	type: "SET_TRIP",
	payload: {
		trip
	}
}
};
