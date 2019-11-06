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

export const createTrip = (trip) => async (dispatch, getState) => {
	console.log("frui criado")
	console.log(trip)

	const data = {
		
		name: trip.name,
		planet: trip.planet,
		date: trip.date,
		description: trip.description,
		durationInDays: trip.durationInDays
	
}
	const response = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/leonardo/trips`, data
    );
    
};

export const candidateTrip = (trip) => async (dispatch, getState) => {
	
	const id = trip.viagem;
	
	const data = {
		
			name: trip.name,
			age: trip.age,
			applicationText: trip.applicationText,
			profession: trip.profession,
			country: trip.country
		
	}
	console.log(data)
	console.log(id)
	const response = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/leonardo/trips/${id}/apply`, data
    );
    
};
