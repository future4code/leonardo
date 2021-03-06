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
	const token = window.localStorage.getItem("token");
	const response = await axios.get(
		`https://us-central1-missao-newton.cloudfunctions.net/futureX/leonardo/trip/${id}`,
		{
			headers: {
				auth: token
			}
		}
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
	const token = window.localStorage.getItem("token");
	const data = {
		name: trip.name,
		planet: trip.planet,
		date: trip.date,
		description: trip.description,
		durationInDays: trip.durationInDays
	}
	try {
		await axios.post(
			`https://us-central1-missao-newton.cloudfunctions.net/futureX/leonardo/trips`, data,
			{
				headers: {
					auth: token
				}
			}
		);
		const msg = 'Criado com sucesso'
		const variant = 'success'
		dispatch(snackBarOpen(msg, variant))
	} catch (e) {
		const msg = `Ocorreu um erro : ${e.message}`
		const variant = 'error'
		dispatch(snackBarOpen(msg, variant))
	}
};

export const candidateTrip = (candidate) => async (dispatch, getState) => {
	const id = candidate.trip;
	const data = {
		name: candidate.name,
		age: candidate.age,
		applicationText: candidate.applicationText,
		profession: candidate.profession,
		country: candidate.country
	}
	try {
		await axios.post(
			`https://us-central1-missao-newton.cloudfunctions.net/futureX/leonardo/trips/${id}/apply`, data,

		);
		console.log('passou candidateTRip')
		const msg = 'Solicitação realizada com sucesso'
		const variant = 'success'
		dispatch(snackBarOpen(msg, variant))
	} catch (e) {
		const msg = `Ocorreu um erro : ${e.message}`
		const variant = 'error'
		dispatch(snackBarOpen(msg, variant))
	}
};

export const snackBarSucess = ( ) => {
	console.log('passou snackbarsucess')
	return {
		type: "SET_SNACKBAR_OPEN"
		
	}
};

export const snackBarOpen = (msg, variant ) => {
	console.log('passou snackbarsucess')
	return {
		type: "SET_SNACKBAR_OPEN2",
		payload: {
			msg,
			variant
		}
	}
};

export const onCloseSnackBar = () => {
	console.log('foi no onclose')
	return {
		type: "SET_SNACKBAR_CLOSE"
	}
}

export const onApproveCandidate = (tripId, candidate) => async (dispatch, getState) => {
	const token = window.localStorage.getItem("token");
	const data = { approve: true }
	await axios.put(
		`https://us-central1-missao-newton.cloudfunctions.net/futureX/leonardo/trips/${tripId}/candidates/${candidate}/decide`, data,
		{
			headers: {
				auth: token
			}
		})
	const state = getState()
	dispatch(trip(state.trips.trip));


}

export const onReproveCandidate = (tripId, candidate) => async (dispatch, getState) => {
	const token = window.localStorage.getItem("token");
	const data = { approve: false }
	await axios.put(
		`https://us-central1-missao-newton.cloudfunctions.net/futureX/leonardo/trips/${tripId}/candidates/${candidate}/decide`, data,
		{
			headers: {
				auth: token
			}
		})

}

export const removeTrip = (tripId, tripName) => async (dispatch, getState) => {
	console.log('entrou api')
	console.log(tripId, tripName)
	try {
		await axios.delete(
			`https://us-central1-missao-newton.cloudfunctions.net/futureX/leonardo/trips/${tripId}`)
		const msg = `Viagem ${tripName} excluida com sucesso`
		const variant = 'success'
		dispatch(snackBarOpen(msg, variant))
	} catch (e) {
		const msg = `Ocorreu um erro : ${e.message}`
		const variant = 'error'
		dispatch(snackBarOpen(msg, variant))
	}
};
	